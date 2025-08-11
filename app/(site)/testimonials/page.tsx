import { Metadata } from 'next'
import TestimonialsSnippet from '@/components/TestimonialsSnippet'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Testimonials - Eden & Hearth | Customer Reviews & Feedback',
  description: 'Read what our customers say about our kitchen installations and landscaping services across Greater Manchester and the North West.',
}

export default function TestimonialsPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read genuine feedback from customers across Greater Manchester and the North West who have experienced our kitchen and landscaping services.
          </p>
        </div>

        <TestimonialsSnippet />

        {/* Statistics */}
        <div className="mt-20 bg-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Customer Satisfaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-lg font-semibold text-ink mb-2">Projects Completed</div>
              <div className="text-gray-600">Kitchens and gardens transformed across the North West</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5★</div>
              <div className="text-lg font-semibold text-ink mb-2">Average Rating</div>
              <div className="text-gray-600">Consistently high ratings for quality and service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <div className="text-lg font-semibold text-ink mb-2">Month Guarantee</div>
              <div className="text-gray-600">Comprehensive workmanship warranty included</div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Why Customers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Reliable Timelines</h3>
              <p className="text-gray-600">
                We stick to our commitments and complete projects on schedule, with clear communication throughout.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                Premium materials from trusted suppliers ensure your investment stands the test of time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Tidy Workmanship</h3>
              <p className="text-gray-600">
                We protect your home during work, clean up daily, and maintain professional standards throughout.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Clear Communication</h3>
              <p className="text-gray-600">
                Regular updates, transparent pricing, and honest advice throughout your project.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Fully Insured</h3>
              <p className="text-gray-600">
                Comprehensive insurance and trade certifications for complete peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Greater Manchester area, local suppliers, and building regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-brand to-accent text-paper rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the same quality service and attention to detail that our customers consistently praise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Request Free Quote
              </Link>
              <Link href="/portfolio" className="btn btn-ghost border-paper text-paper hover:bg-paper/10">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
