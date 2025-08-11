/**
 * Runtime environment variable validation
 * Validates required environment variables and provides safe access
 */

const requiredEnvVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  CONTACT_TO: process.env.CONTACT_TO,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
} as const

type RequiredEnvVar = keyof typeof requiredEnvVars

export function getRequiredEnv(): typeof requiredEnvVars {
  // Only validate in development to avoid production noise
  if (process.env.NODE_ENV === 'development') {
    const missing: RequiredEnvVar[] = []
    
    for (const [key, value] of Object.entries(requiredEnvVars)) {
      if (!value) {
        missing.push(key as RequiredEnvVar)
      }
    }
    
    if (missing.length > 0) {
      console.warn(
        `⚠️  Missing environment variables: ${missing.join(', ')}\n` +
        `   Copy .env.local.example to .env.local and add your values.`
      )
    }
  }
  
  return requiredEnvVars
}

export function getSiteUrl(): string {
  return requiredEnvVars.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export function getContactEmail(): string {
  return requiredEnvVars.CONTACT_TO || 'contact@example.com'
}
