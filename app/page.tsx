import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import PromoVideo from '@/components/PromoVideo'
import FeaturedProjects from '@/components/FeaturedProjects'
import TestimonialsSnippet from '@/components/TestimonialsSnippet'
import FAQsSnippet from '@/components/FAQsSnippet'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PromoVideo />
      <FeaturedProjects />
      <FAQsSnippet />
      <TestimonialsSnippet />
      
      {/* Call to Action */}
      <section className="py-16 bg-brand text-paper">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free, no-obligation quote for your kitchen or landscaping project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/portfolio" className="btn btn-ghost border-paper text-paper hover:bg-paper/10">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
