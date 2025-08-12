import ProjectGallery from '@/components/ProjectGallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Eden & Hearth | Kitchen & Landscaping Projects',
  description: 'View our completed kitchen installations and landscaping projects across Greater Manchester and the North West.',
}

export default function PortfolioPage() {
  return (
    <div className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our completed kitchen installations and landscaping projects across Greater Manchester and the North West.
          </p>
        </div>
        
        <ProjectGallery />
      </div>
    </div>
  )
}
