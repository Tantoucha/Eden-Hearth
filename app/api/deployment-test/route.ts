import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: "This is the REAL Next.js Eden & Hearth deployment!",
    framework: "Next.js 14.2.31",
    timestamp: new Date().toISOString(),
    deployment: "SUCCESS"
  })
}
