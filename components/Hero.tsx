'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <>
      {/* Hero Section with Blended Media */}
      <div className="media-wrap rounded-2xl overflow-hidden shadow-lg mx-4 mt-4 sm:mx-6 lg:mx-8">
        <section className="relative min-h-[80vh] flex items-center justify-center bg-brand text-paper overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
            {/* Kitchen Image */}
            <div className="relative">
              <picture>
                <source
                  srcSet="/images/kitchen-1920.jpg 1920w, /images/kitchen-1280.jpg 1280w, /images/kitchen-960.jpg 960w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  type="image/jpeg"
                />
                <Image
                  src="/images/kitchen-1280.jpg"
                  alt="UK shaker-style kitchen with quartz worktops and induction hob"
                  fill
                  className="object-cover"
                  priority
                />
              </picture>
            </div>

            {/* Garden Image - Hidden on mobile */}
            <div className="relative hidden lg:block">
              <picture>
                <source
                  srcSet="/images/garden-1920.jpg 1920w, /images/garden-1280.jpg 1280w, /images/garden-960.jpg 960w"
                  sizes="50vw"
                  type="image/jpeg"
                />
                <Image
                  src="/images/garden-1280.jpg"
                  alt="UK landscaped garden with porcelain patio, closeboard fence and neat planting"
                  fill
                  className="object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Blend Seam between images (desktop only) */}
          <div className="media-seam absolute inset-y-0 left-1/2 w-12 transform -translate-x-1/2 hidden lg:block pointer-events-none z-20"
               style={{
                 background: 'linear-gradient(90deg, rgba(15,46,29,0) 0%, rgba(15,46,29,0.12) 50%, rgba(15,46,29,0) 100%)',
                 mixBlendMode: 'multiply'
               }} />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 z-10" />

          {/* Media Join - blend into video */}
          <div className="media-join absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
               style={{
                 background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,46,29,0.18) 60%, rgba(15,46,29,0.30) 100%)'
               }} />

          {/* Content */}
          <div className={`relative z-30 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Kitchens & Landscaping,<br />
              <span className="text-accent">Built Well.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Beautiful kitchens and outdoor spaces, designed and built with care. Serving Greater Manchester and the North West.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="btn btn-primary">
                View Our Projects
              </Link>
              <Link href="/contact" className="btn btn-ghost border-paper text-paper hover:bg-paper/10">
                Request Your Free Quote
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Project-managed
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Clear schedules & pricing
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Respectful on site
              </div>
            </div>
          </div>
        </section>

        {/* Promo Video Section - Seamless continuation */}
        {!prefersReducedMotion && (
          <section className="relative h-[50vh] overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/eden-hearth-promo.mp4"
              poster="/images/kitchen-1280.jpg"
              autoPlay
              muted
              loop
              playsInline
              style={{ maxHeight: '70vh' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </section>
        )}
      </div>
    </>
  )
}
