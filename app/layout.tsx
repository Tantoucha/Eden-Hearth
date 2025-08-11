import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getRequiredEnv } from '@/lib/env'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eden-hearth.co.uk'),
  title: 'Eden & Hearth - Kitchens & Landscaping | Greater Manchester & North West',
  description: 'Professional kitchen installation and landscaping services across Greater Manchester and the North West. Project-managed with clear schedules and pricing.',
  keywords: 'kitchens, landscaping, Greater Manchester, North West, kitchen installation, garden design, project management',
  authors: [{ name: 'Eden & Hearth' }],
  openGraph: {
    title: 'Eden & Hearth - Kitchens & Landscaping, Built Well',
    description: 'Design, installation and project management across Greater Manchester and the North West.',
    type: 'website',
    images: ['/logo.svg'],
  },
  robots: 'index, follow',
}

// Validate environment variables in development
if (process.env.NODE_ENV === 'development') {
  getRequiredEnv()
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Eden & Hearth',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eden-hearth.co.uk',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://eden-hearth.co.uk'}/logo.svg`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://eden-hearth.co.uk'}/images/kitchen-1920.jpg`,
  telephone: '+44-0000-000000',
  email: 'hello@eden-hearth.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Greater Manchester',
    addressRegion: 'England',
    addressCountry: 'GB'
  },
  areaServed: ['Greater Manchester', 'Cheshire', 'North West England'],
  description: 'Professional kitchen installation and landscaping services across Greater Manchester and the North West. Project-managed with clear schedules and pricing.',
  priceRange: '£££',
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-16:00'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {process.env.PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
