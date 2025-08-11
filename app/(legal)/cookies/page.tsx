import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Eden & Hearth',
  description: 'Cookie policy for Eden & Hearth website explaining how we use cookies and similar technologies.',
  robots: 'noindex, nofollow',
}

export default function CookiesPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-ink mb-8">Cookie Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better browsing experience by remembering your preferences and analysing how you use our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Ensure our website functions properly</li>
              <li>• Remember your preferences and settings</li>
              <li>• Analyse website traffic and user behaviour</li>
              <li>• Improve our services and user experience</li>
              <li>• Provide relevant content and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-ink mb-3">Essential Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
              form submission, and security features. The website cannot function properly without these cookies.
            </p>
            
            <h3 className="text-xl font-semibold text-ink mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies help us understand how visitors interact with our website by collecting anonymous information 
              about page visits, time spent on pages, and navigation patterns. We use this data to improve our website's 
              performance and user experience.
            </p>
            
            <h3 className="text-xl font-semibold text-ink mb-3">Functional Cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies remember your preferences and choices (such as language or region) to provide a more personalised 
              experience. They may be set by us or by third-party providers whose services we use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services that set their own cookies, including:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• <strong>Google Analytics:</strong> To analyse website usage and performance</li>
              <li>• <strong>Content Delivery Networks (CDN):</strong> To improve website loading speeds</li>
              <li>• <strong>Email Service Providers:</strong> To manage contact form submissions</li>
            </ul>
            <p className="text-gray-600 mb-4">
              These third parties have their own cookie policies, which you can review on their respective websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Managing Cookies</h2>
            
            <h3 className="text-xl font-semibold text-ink mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• View cookies stored on your device</li>
              <li>• Delete existing cookies</li>
              <li>• Block cookies from specific websites</li>
              <li>• Block all cookies</li>
              <li>• Receive notifications when cookies are set</li>
            </ul>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> Blocking or deleting cookies may affect website functionality and your user experience.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-ink mb-3">Browser-Specific Instructions</h3>
            <div className="bg-white rounded-lg p-6 border border-accent/20 mb-4">
              <h4 className="font-semibold text-ink mb-3">Chrome</h4>
              <p className="text-gray-600 text-sm mb-2">Settings → Privacy and security → Site settings → Cookies and site data</p>
              
              <h4 className="font-semibold text-ink mb-3 mt-4">Firefox</h4>
              <p className="text-gray-600 text-sm mb-2">Settings → Privacy & Security → Cookies and Site Data</p>
              
              <h4 className="font-semibold text-ink mb-3 mt-4">Safari</h4>
              <p className="text-gray-600 text-sm mb-2">Preferences → Privacy → Manage Website Data</p>
              
              <h4 className="font-semibold text-ink mb-3 mt-4">Edge</h4>
              <p className="text-gray-600 text-sm">Settings → Cookies and site permissions → Cookies and stored data</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Cookie Duration</h2>
            <p className="text-gray-600 mb-4">
              Cookies may be:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• <strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li>• <strong>Persistent cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              Our analytics cookies typically expire after 26 months, while functional cookies may have varying expiration periods 
              based on their purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Your Consent</h2>
            <p className="text-gray-600 mb-4">
              By continuing to use our website, you consent to our use of essential cookies. For optional cookies (analytics and 
              functional), we'll ask for your specific consent through our cookie banner when you first visit the site.
            </p>
            <p className="text-gray-600 mb-4">
              You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this cookie policy from time to time to reflect changes in technology, legislation, or our practices. 
              Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> privacy@eden-hearth.co.uk
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +44 (0) 1234 567890
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong> <a href="/contact" className="text-accent hover:underline">Contact Form</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
