import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Eden & Hearth',
  description: 'Privacy policy for Eden & Hearth kitchen installations and landscaping services.',
  robots: 'noindex, nofollow',
}

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-ink mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Eden & Hearth ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our website 
              or engage our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-ink mb-3">Information You Provide</h3>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Contact details (name, email address, phone number, postal address)</li>
              <li>• Project requirements and preferences</li>
              <li>• Communication preferences</li>
              <li>• Any other information you choose to provide</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-ink mb-3">Information We Collect Automatically</h3>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Website usage data (pages visited, time spent, referral sources)</li>
              <li>• Device information (browser type, operating system, IP address)</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">How We Use Your Information</h2>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• To respond to enquiries and provide quotes</li>
              <li>• To deliver our kitchen installation and landscaping services</li>
              <li>• To communicate about projects, appointments, and updates</li>
              <li>• To improve our website and services</li>
              <li>• To comply with legal obligations</li>
              <li>• To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4">
              We process your personal data based on:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• <strong>Contract:</strong> To fulfil our contractual obligations for services</li>
              <li>• <strong>Legitimate interests:</strong> To operate our business and improve our services</li>
              <li>• <strong>Consent:</strong> For marketing communications and optional cookies</li>
              <li>• <strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Trusted service providers (email services, website hosting)</li>
              <li>• Suppliers and subcontractors (only as necessary for project delivery)</li>
              <li>• Professional advisors (legal, financial, insurance)</li>
              <li>• Regulatory authorities (where required by law)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organisational measures to protect your personal data, including:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Secure data transmission (SSL encryption)</li>
              <li>• Access controls and authentication</li>
              <li>• Regular security assessments</li>
              <li>• Staff training on data protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only as long as necessary for the purposes outlined in this policy:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Project records: 6 years after completion (for warranty and legal purposes)</li>
              <li>• Marketing communications: Until you opt out</li>
              <li>• Website analytics: 26 months</li>
              <li>• General enquiries: 2 years</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Access your personal data</li>
              <li>• Rectify inaccurate data</li>
              <li>• Erase your data (in certain circumstances)</li>
              <li>• Restrict processing</li>
              <li>• Data portability</li>
              <li>• Object to processing</li>
              <li>• Withdraw consent (where applicable)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies to improve your experience. Essential cookies are necessary for basic functionality, 
              while optional cookies help us analyse usage and improve our services. You can manage cookie preferences 
              through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page with 
              an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> privacy@eden-hearth.co.uk
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +44 (0) 1234 567890
              </p>
              <p className="text-gray-600">
                <strong>Post:</strong> Eden & Hearth, Manchester, UK
              </p>
            </div>
            
            <p className="text-gray-600 mt-6">
              If you're not satisfied with our response, you have the right to complain to the Information Commissioner's Office (ICO) 
              at <a href="https://ico.org.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
