import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProjectGallery from '@/components/ProjectGallery'

// Import project data
import projectsData from '@/data/projects.json'

type Project = {
  slug: string
  title: string
  location: string
  categories: string[]
  summary: string
  durationWeeks?: number
  images: Array<{src: string, alt: string}>
  beforeAfter?: {
    before: string
    after: string
  }
  testimonial?: {
    quote: string
    author: string
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug) as Project | undefined
  
  if (!project) {
    return {
      title: 'Project Not Found - Eden & Hearth',
    }
  }

  const categoryText = project.categories.join(' & ')
  
  return {
    title: `${project.title} - Eden & Hearth Portfolio`,
    description: `${project.summary} Professional ${categoryText.toLowerCase()} project in ${project.location}.`,
    openGraph: {
      title: `${project.title} - Eden & Hearth`,
      description: project.summary,
      images: project.images.length > 0 ? [project.images[0].src] : [],
    },
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug) as Project | undefined

  if (!project) {
    notFound()
  }

  const categoryLabel = project.categories.join(' & ')
  const durationText = project.durationWeeks ? `${project.durationWeeks} weeks` : 'Various'

  return (
    <div className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-accent">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
            </li>
            <li>/</li>
            <li className="text-ink font-medium">{project.title}</li>
          </ol>
        </nav>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-ink mb-4">{project.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {categoryLabel}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </span>
              </div>
            </div>
            
            <Link 
              href="/portfolio" 
              className="mt-6 lg:mt-0 btn btn-secondary"
            >
              ← Back to Portfolio
            </Link>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl">
            {project.summary}
          </p>
        </div>

        {/* Hero Image */}
        {project.images.length > 0 && (
          <div className="mb-12">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                width={1200}
                height={750}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Gallery */}
            {project.images.length > 1 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-ink mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Before & After */}
            {project.beforeAfter && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-ink mb-6">Before & After</h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-3">Before</h3>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={project.beforeAfter.before}
                          alt={`${project.title} - Before renovation`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink mb-3">After</h3>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={project.beforeAfter.after}
                          alt={`${project.title} - After renovation`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-ink mb-6">Customer Feedback</h2>
                <div className="bg-gradient-to-br from-accent/5 to-brand/5 border-l-4 border-accent rounded-xl p-8">
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <cite className="text-accent font-medium">
                    — {project.testimonial.author}
                  </cite>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Info */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-ink mb-6">Project Information</h3>
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-600">Category</dt>
                  <dd className="text-ink">{categoryLabel}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Location</dt>
                  <dd className="text-ink">{project.location}</dd>
                </div>
                {project.durationWeeks && (
                  <div>
                    <dt className="text-sm font-medium text-gray-600">Duration</dt>
                    <dd className="text-ink">{durationText}</dd>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-brand to-accent text-paper rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Inspired by This Project?
              </h3>
              <p className="mb-6 opacity-90">
                Get in touch to discuss your own {categoryLabel.toLowerCase()} project.
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="btn btn-primary w-full">
                  Request Quote
                </Link>
                <Link href="/portfolio" className="btn btn-ghost border-paper text-paper hover:bg-paper/10 w-full">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-12">
            More Projects Like This
          </h2>
          <ProjectGallery />
          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
