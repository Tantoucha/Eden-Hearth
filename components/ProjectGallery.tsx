'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

const categories = ['All', 'Kitchens', 'Landscaping', 'Patios', 'Garden Structures']

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)
  const [lightboxImage, setLightboxImage] = useState<{src: string, alt: string} | null>(null)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(
        projectsData.filter(project => 
          project.categories.includes(selectedCategory)
        )
      )
    }
  }, [selectedCategory])

  const openLightbox = (image: {src: string, alt: string}) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  useEffect(() => {
    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxImage])

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-accent text-ink shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="group">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openLightbox(project.images[0])}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-accent/90 text-ink px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* View more indicator */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    +{project.images.length - 1} more
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  📍 {project.location}
                </p>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {project.summary}
                </p>
                
                <div className="flex justify-between items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-primary text-sm"
                  >
                    View Project
                  </Link>
                  {project.durationWeeks && (
                    <span className="text-xs text-gray-500">
                      {project.durationWeeks} week{project.durationWeeks !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No projects found in this category.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
