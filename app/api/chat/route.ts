import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

// Initialize OpenAI
const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null

// Initialize Prisma (optional)
let prisma: PrismaClient | null = null
try {
  if (process.env.DATABASE_URL) {
    prisma = new PrismaClient()
  }
} catch (error) {
  console.warn('Prisma initialization failed, database features disabled:', error)
}

// Initialize Resend (optional)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const SYSTEM_PROMPT = `You are a helpful assistant for Eden & Hearth, a kitchens and landscaping company in Greater Manchester. 
Answer questions clearly and honestly. Suggest the contact form or a call to our phone numbers (+44 7721 142 355, +44 7879 296 048, +44 7802 487 781) if a site visit or quote is needed. 
Avoid hype or unverified claims. Be conversational but professional.`

export async function POST(req: NextRequest) {
  try {
    if (!openai) {
      return NextResponse.json(
        { error: 'Chat service is not configured' },
        { status: 503 }
      )
    }

    const { chatId, message, email, consent } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Store in database if available
    let currentChatId = chatId
    if (prisma) {
      try {
        if (!currentChatId) {
          const chat = await prisma.chat.create({
            data: {
              email: email || null,
              consent: Boolean(consent),
            }
          })
          currentChatId = chat.id
        }

        // Store user message
        await prisma.message.create({
          data: {
            chatId: currentChatId,
            role: 'user',
            content: message,
          }
        })
      } catch (error) {
        console.warn('Database error:', error)
      }
    }

    // Get conversation history if we have a chatId and database
    let messages: any[] = [{ role: 'system', content: SYSTEM_PROMPT }]
    
    if (prisma && currentChatId) {
      try {
        const chatMessages = await prisma.message.findMany({
          where: { chatId: currentChatId },
          orderBy: { createdAt: 'asc' },
          take: 20, // Limit history to avoid token limits
        })
        
        messages = [
          { role: 'system', content: SYSTEM_PROMPT },
          ...chatMessages.map((msg: any) => ({
            role: msg.role,
            content: msg.content,
          }))
        ]
      } catch (error) {
        console.warn('Error fetching message history:', error)
      }
    } else {
      // If no database, just add the current message
      messages.push({ role: 'user', content: message })
    }

    // Create streaming response
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 500,
    })

    let assistantResponse = ''

    const encoder = new TextEncoder()
    const customReadable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content || ''
            if (delta) {
              assistantResponse += delta
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`))
            }
          }
          
          // Store assistant response in database
          if (prisma && currentChatId) {
            try {
              await prisma.message.create({
                data: {
                  chatId: currentChatId,
                  role: 'assistant',
                  content: assistantResponse,
                }
              })
            } catch (error) {
              console.warn('Error storing assistant response:', error)
            }
          }

          // Send final message with chatId
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            done: true, 
            chatId: currentChatId 
          })}\n\n`))
          
          controller.close()
        } catch (error) {
          console.error('Streaming error:', error)
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Stream error' })}\n\n`))
          controller.close()
        }
      }
    })

    return new Response(customReadable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
