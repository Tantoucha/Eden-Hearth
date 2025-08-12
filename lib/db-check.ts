import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | null = null
let connectionChecked = false
let connectionWarned = false

/**
 * Initialize Prisma client and perform lightweight connection check
 * Safe for production - never throws, only logs warnings
 */
export async function initDb(): Promise<PrismaClient | null> {
  if (prisma && connectionChecked) {
    return prisma
  }

  try {
    if (!process.env.DATABASE_URL) {
      if (process.env.VERCEL && !connectionWarned) {
        console.warn('[db] DATABASE_URL not found in Vercel environment')
        connectionWarned = true
      }
      return null
    }

    if (!prisma) {
      prisma = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
      })
    }

    if (!connectionChecked) {
      // Lightweight connection test
      await prisma.$queryRaw`SELECT 1`
      connectionChecked = true
      
      if (process.env.VERCEL) {
        console.log('[db] ✅ Connected to Supabase PostgreSQL')
      }
    }

    return prisma
  } catch (error) {
    if (process.env.VERCEL && !connectionWarned) {
      console.warn('[db] connection failed, check DATABASE_URL or run migrations')
      console.warn('[db] Error:', error instanceof Error ? error.message : 'Unknown error')
      connectionWarned = true
    }
    
    // Don't break the app - return null and let features gracefully degrade
    return null
  }
}

/**
 * Get Prisma client instance (may return null if connection failed)
 * Use this in your API routes and components
 */
export async function getDb(): Promise<PrismaClient | null> {
  return await initDb()
}

/**
 * Cleanup function for graceful shutdown
 */
export async function disconnectDb(): Promise<void> {
  if (prisma) {
    await prisma.$disconnect()
    prisma = null
    connectionChecked = false
  }
}
