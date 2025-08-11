import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    ok: true,
    env: {
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL ? "set" : "missing",
      email: process.env.CONTACT_TO ? "set" : "missing", 
      resend: process.env.RESEND_API_KEY ? "set" : "missing",
      db: process.env.DATABASE_URL ? "set" : "missing"
    },
    time: new Date().toISOString()
  })
}
