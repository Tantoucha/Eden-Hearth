import { Metadata } from 'next'
import FAQsSnippet from '@/components/FAQsSnippet'

export const metadata: Metadata = {
  title: 'FAQs - Eden & Hearth | Kitchen & Landscaping Questions',
  description: 'Frequently asked questions about kitchen installations and landscaping services. Free quotes, insurance, payment terms, and more.',
}

export default function FAQsPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our kitchen installation and landscaping services.
          </p>
        </div>

        <FAQsSnippet />

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-accent/20">
          <h2 className="text-2xl font-bold text-ink mb-6 text-center">
            Still Have Questions?
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We'd be happy to discuss your specific requirements and answer any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="tel:+441234567890" className="btn btn-secondary">
                Call Us Directly
              </a>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-16 bg-gradient-to-br from-brand to-accent text-paper rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Our Simple Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-paper/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6l-2.83-2.83c-.39-.39-1.02-.39-1.41 0L9 10.17l-2.59-2.58c-.39-.39-1.02-.39-1.41 0L2.83 9.76c-.39.39-.39 1.02 0 1.41L9 17.34l11.17-11.17c.39-.39.39-1.02 0-1.41z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Free Quote</h3>
              <p className="text-sm opacity-90">
                We visit your property to discuss your vision and provide a detailed estimate
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-paper/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Planning</h3>
              <p className="text-sm opacity-90">
                Detailed project planning with clear timelines and transparent pricing
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-paper/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Installation</h3>
              <p className="text-sm opacity-90">
                Expert installation with quality materials and tidy workmanship throughout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
