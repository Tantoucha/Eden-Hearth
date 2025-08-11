'use client'

import { useEffect, useState } from 'react'

export default function PromoVideo() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-ink mb-4">
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform kitchens and gardens across Greater Manchester and the North West.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          {prefersReducedMotion ? (
            // Show static poster for users who prefer reduced motion
            <div 
              className="w-full aspect-video bg-cover bg-center flex items-center justify-center"
              style={{ 
                backgroundImage: 'url(/images/kitchen-1280.jpg)',
                maxHeight: '70vh'
              }}
            >
              <div className="bg-black/60 text-white px-6 py-3 rounded-full">
                <span className="text-lg font-medium">Eden & Hearth Showcase</span>
              </div>
            </div>
          ) : (
            <video
              src="/video/eden-hearth-promo.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/kitchen-1280.jpg"
              className="w-full object-cover aspect-video"
              style={{ maxHeight: '70vh' }}
            >
              <p className="text-center py-8">
                Your browser doesn't support video playback. 
                <a href="/portfolio" className="text-accent hover:underline ml-1">
                  View our portfolio instead
                </a>
              </p>
            </video>
          )}
          
          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end">
            <div className="p-8">
              <h3 className="text-white text-2xl font-bold mb-2">
                Kitchens & Landscaping, Built Well
              </h3>
              <div className="flex gap-4">
                <a 
                  href="/portfolio" 
                  className="btn btn-primary text-sm"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
