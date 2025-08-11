'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">⚠️</h1>
          <h2 className="text-2xl font-bold text-ink mb-4">Something went wrong</h2>
          <p className="text-gray-600">
            We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={reset}
            className="btn btn-primary"
          >
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Still having issues? <Link href="/contact" className="text-accent hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
