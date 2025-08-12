import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Eden & Hearth',
  description: 'Terms and conditions for Eden & Hearth kitchen installations and landscaping services.',
  robots: 'noindex, nofollow',
}

export default function TermsPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-ink mb-8">Terms & Conditions</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              These Terms and Conditions ("Terms") govern your use of Eden & Hearth's website and services. 
              By engaging our services or using our website, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 mb-4">
              Eden & Hearth is a trading name operated from Manchester, UK, specialising in kitchen installations 
              and landscaping services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              We provide:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Kitchen design, supply, and installation services</li>
              <li>• Landscaping and garden design services</li>
              <li>• Project management and coordination</li>
              <li>• Related building and installation works</li>
            </ul>
            <p className="text-gray-600 mb-4">
              All services are provided subject to availability and may be modified based on site conditions 
              and technical requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">3. Quotations and Pricing</h2>
            <p className="text-gray-600 mb-4">
              All quotations are:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Valid for 30 days from the date of issue unless otherwise stated</li>
              <li>• Subject to site survey and may be adjusted based on actual conditions</li>
              <li>• Exclusive of VAT unless explicitly stated otherwise</li>
              <li>• Based on standard working hours (Monday-Friday, 8:00 AM - 5:00 PM)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Additional costs may apply for:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Work outside standard hours</li>
              <li>• Changes to specifications after work commences</li>
              <li>• Unforeseen structural or technical issues</li>
              <li>• Additional materials or services requested</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise agreed in writing:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• A deposit may be required upon acceptance of quotation</li>
              <li>• Progress payments are due at agreed project milestones</li>
              <li>• Final payment is due within 7 days of project completion</li>
              <li>• Late payment charges may apply at 2% per month</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We reserve the right to suspend work if payments are overdue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">5. Project Timeline</h2>
            <p className="text-gray-600 mb-4">
              We aim to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Provide realistic timelines based on project scope</li>
              <li>• Communicate any delays promptly</li>
              <li>• Complete work to agreed schedules where possible</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Timelines may be extended due to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Weather conditions (for outdoor work)</li>
              <li>• Material delivery delays</li>
              <li>• Unforeseen technical issues</li>
              <li>• Changes requested by client</li>
              <li>• Circumstances beyond our reasonable control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">6. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Clients agree to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Provide safe and reasonable access to work areas</li>
              <li>• Ensure utilities (electricity, water) are available as required</li>
              <li>• Remove personal items from work areas</li>
              <li>• Obtain any necessary permissions or approvals</li>
              <li>• Make payments according to agreed terms</li>
              <li>• Communicate any concerns or requirements promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">7. Warranties and Guarantees</h2>
            <p className="text-gray-600 mb-4">
              We provide:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• 12-month guarantee on workmanship</li>
              <li>• Manufacturer warranties on supplied products (terms vary)</li>
              <li>• Prompt response to warranty issues</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Warranties exclude:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Normal wear and tear</li>
              <li>• Damage from misuse or accidents</li>
              <li>• Work performed by others</li>
              <li>• Issues arising from client-supplied materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Our liability is limited to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• The value of the contract for the specific project</li>
              <li>• Direct damages only (excluding consequential losses)</li>
              <li>• Rectification of defective work during warranty period</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We maintain comprehensive public liability insurance as additional protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">9. Health and Safety</h2>
            <p className="text-gray-600 mb-4">
              We are committed to:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Maintaining safe working practices</li>
              <li>• Complying with all relevant health and safety regulations</li>
              <li>• Using appropriate protective equipment</li>
              <li>• Keeping work areas tidy and secure</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Clients must ensure they do not interfere with safety measures and report any concerns immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">10. Cancellation and Changes</h2>
            <p className="text-gray-600 mb-4">
              Cancellation terms:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Written notice required for all cancellations</li>
              <li>• Cancellation charges may apply for ordered materials</li>
              <li>• Reasonable notice required to avoid additional costs</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Changes to agreed specifications:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Must be agreed in writing</li>
              <li>• May affect timeline and pricing</li>
              <li>• Additional costs payable before work proceeds</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">11. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All designs, plans, and proposals remain our intellectual property unless transferred under 
              a separate written agreement. Clients may not reproduce or distribute our work without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">12. Data Protection</h2>
            <p className="text-gray-600 mb-4">
              We process personal data in accordance with UK data protection laws. Please refer to our 
              <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for full details 
              on how we handle your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              We aim to resolve any disputes through direct discussion. If this is not possible:
            </p>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• We may use mediation services</li>
              <li>• Disputes are subject to English law</li>
              <li>• Courts of England and Wales have jurisdiction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">14. Force Majeure</h2>
            <p className="text-gray-600 mb-4">
              We are not liable for delays or failure to perform due to circumstances beyond our reasonable control, 
              including but not limited to natural disasters, government restrictions, supply chain disruptions, 
              or other unforeseeable events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">15. General Provisions</h2>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• These Terms may be updated from time to time</li>
              <li>• If any provision is found invalid, others remain in effect</li>
              <li>• These Terms constitute the entire agreement unless modified in writing</li>
              <li>• English law governs these Terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">16. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms or our services:
            </p>
            <div className="bg-white rounded-lg p-6 border border-accent/20">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> help@eden-hearth.co.uk
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +44 (0) 1234 567890
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong> <a href="/contact" className="text-accent hover:underline">Contact Form</a>
              </p>
            </div>
          </section>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-8">
            <p className="text-accent font-semibold">
              By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
