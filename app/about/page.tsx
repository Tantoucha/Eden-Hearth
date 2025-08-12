import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Eden & Hearth | Kitchen & Landscaping Specialists',
  description: 'Learn about Eden & Hearth: dedicated kitchen installation and landscaping specialists serving Greater Manchester and the North West.',
}

export default function AboutPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-4">
            About Eden & Hearth
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated specialists in kitchen installations and landscaping, serving Greater Manchester and the North West with quality craftsmanship.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-ink mb-6">
              Transforming Homes, One Project at a Time
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                At Eden & Hearth, we specialise in creating beautiful, functional spaces that truly enhance how you live. Whether it's a complete kitchen transformation or a garden makeover, our team brings dedication, skill, and attention to detail to every project.
              </p>
              <p>
                We understand that your home is your sanctuary. That's why we work closely with you to understand your vision, lifestyle, and requirements, ensuring every element is carefully planned and expertly executed.
              </p>
              <p>
                From initial consultation through to final installation, we maintain clear communication, reliable timelines, and the highest standards of workmanship.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-brand to-accent flex items-center justify-center">
              <div className="text-center text-paper">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <p className="text-lg font-semibold">Quality Craftsmanship</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Reliable Timelines</h3>
              <p className="text-gray-600">
                We stick to our commitments and deliver projects on schedule, keeping you informed every step of the way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium materials from trusted suppliers, ensuring your investment stands the test of time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 9h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ink mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled team brings years of experience and genuine passion to every kitchen and garden project.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand text-paper rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-ink mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We listen to your ideas, assess your space, and provide honest, practical advice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand text-paper rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-ink mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed project planning with clear timelines, materials list, and transparent pricing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand text-paper rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-ink mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                Expert installation with attention to detail, keeping your home tidy throughout.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand text-paper rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-ink mb-2">Completion</h3>
              <p className="text-gray-600 text-sm">
                Final walkthrough, handover, and ongoing support for your new space.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-8">
            Service Areas
          </h2>
          <div className="bg-gradient-to-br from-brand to-accent text-paper rounded-2xl p-8 text-center">
            <p className="text-xl mb-6">
              We proudly serve Greater Manchester and the North West
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>Manchester</div>
              <div>Stockport</div>
              <div>Altrincham</div>
              <div>Wilmslow</div>
              <div>Macclesfield</div>
              <div>Knutsford</div>
              <div>Cheshire East</div>
              <div>Surrounding Areas</div>
            </div>
            <p className="mt-6 opacity-90">
              Not sure if we cover your area? Get in touch and we'll let you know.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 border-2 border-accent/20">
            <h2 className="text-3xl font-bold text-ink mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're planning a kitchen renovation or garden transformation, we'd love to discuss your ideas and show you how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
