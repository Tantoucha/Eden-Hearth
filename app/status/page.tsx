import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Status - Eden & Hearth',
  robots: 'noindex, nofollow',
}

export default function StatusPage() {
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA || 'unknown'
  const buildTime = new Date().toISOString()

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-ink mb-8">System Status</h1>
        
        <div className="space-y-4 text-left mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Build Time:</span>
            <span className="font-mono text-sm text-ink">{buildTime}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Commit SHA:</span>
            <span className="font-mono text-sm text-ink">
              {commitSha === 'unknown' ? 'Local Build' : commitSha.substring(0, 8)}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Status:</span>
            <span className="text-green-600 font-semibold">✅ Online</span>
          </div>
        </div>

        <Link 
          href="/" 
          className="btn btn-primary w-full"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
