import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-bold text-ink mb-4">Page Not Found</h2>
          <p className="text-gray-600">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            ← Back to Home
          </Link>
          <Link href="/portfolio" className="btn btn-secondary">
            View Our Work
          </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <Link href="/contact" className="text-accent hover:underline">Get in touch</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
