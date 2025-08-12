import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

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

export async function POST(req: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 }
      )
    }

    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not available for transcript retrieval' },
        { status: 503 }
      )
    }

    const { chatId } = await req.json()

    if (!chatId) {
      return NextResponse.json(
        { error: 'Chat ID is required' },
        { status: 400 }
      )
    }

    // Fetch chat and messages
    const chat = await prisma.chat.findUnique({
      where: { id: chatId },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' }
        }
      }
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    if (!chat.email) {
      return NextResponse.json(
        { error: 'No email address associated with this chat' },
        { status: 400 }
      )
    }

    // Format transcript
    const transcript = chat.messages
      .map((msg: any) => `${msg.role.toUpperCase()}: ${msg.content}`)
      .join('\n\n')

    const emailSubject = 'Your Eden & Hearth Chat Transcript'
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0F2E1D; font-size: 24px; margin-bottom: 10px;">Eden & Hearth</h1>
          <p style="color: #666; font-size: 16px;">Your Chat Transcript</p>
        </div>
        
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="color: #0F2E1D; font-size: 18px; margin-bottom: 15px;">Conversation</h2>
          <div style="white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;">${transcript}</div>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
          <p style="color: #666; font-size: 14px; margin-bottom: 10px;">
            Need more help? Get in touch with us:
          </p>
          <p style="margin: 5px 0;">
            <strong>Phone:</strong> 
            <a href="tel:+447721142355" style="color: #7CB518;">+44 7721 142 355</a> |
            <a href="tel:+447879296048" style="color: #7CB518;">+44 7879 296 048</a> |
            <a href="tel:+447802487781" style="color: #7CB518;">+44 7802 487 781</a>
          </p>
          <p style="margin: 5px 0;">
            <strong>Email:</strong> 
            <a href="mailto:hello@eden-hearth.co.uk" style="color: #7CB518;">hello@eden-hearth.co.uk</a>
          </p>
          <p style="color: #666; font-size: 12px; margin-top: 15px;">
            Eden & Hearth - Kitchens & Landscaping in Greater Manchester
          </p>
        </div>
      </div>
    `

    // Send emails
    const recipients = [chat.email]
    if (process.env.CONTACT_TO && process.env.CONTACT_TO !== chat.email) {
      recipients.push(process.env.CONTACT_TO)
    }

    await resend.emails.send({
      from: 'Eden & Hearth <noreply@eden-hearth.co.uk>',
      to: recipients,
      subject: emailSubject,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Failed to send transcript' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
