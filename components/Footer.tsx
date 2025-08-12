import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Eden & Hearth</h3>
            <p className="mb-4">
              Professional kitchen installation and landscaping services across Greater Manchester and the North West.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+447721142355" className="hover:text-accent transition-colors">
                  +44 7721 142 355
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+447879296048" className="hover:text-accent transition-colors">
                  +44 7879 296 048
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+447802487781" className="hover:text-accent transition-colors">
                  +44 7802 487 781
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@eden-hearth.co.uk" className="hover:text-accent transition-colors">
                  hello@eden-hearth.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas Served</h3>
            <ul className="space-y-2 text-sm">
              <li>Greater Manchester</li>
              <li>Cheshire</li>
              <li>North West England</li>
              <li>Sale & Altrincham</li>
              <li>Didsbury & Chorlton</li>
              <li>Stockport & Wilmslow</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            Serving Greater Manchester and the North West. Fully insured, with a 12-month workmanship guarantee.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
