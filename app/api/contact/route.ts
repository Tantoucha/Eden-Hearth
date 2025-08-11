import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  postcode: z.string().optional(),
  service: z.enum(['Kitchens', 'Landscaping', 'Both', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'Consent is required'),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = contactSchema.parse(body)
    
    // TODO: Save to database when DATABASE_URL is configured
    // const prisma = new PrismaClient()
    // await prisma.lead.create({
    //   data: validatedData
    // })
    
    // TODO: Send email when RESEND_API_KEY is configured
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Eden & Hearth <noreply@eden-hearth.co.uk>',
    //   to: ['hello@eden-hearth.co.uk'],
    //   subject: `New enquiry from ${validatedData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${validatedData.service}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `
    // })
    
    console.log('Contact form submission:', validatedData)
    
    return NextResponse.json({ 
      ok: true, 
      message: 'Thank you for your enquiry. We\'ll be in touch soon!' 
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
