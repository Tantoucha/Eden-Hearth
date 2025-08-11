import Link from 'next/link'
import Image from 'next/image'
import projectsData from '@/data/projects.json'

export default function FeaturedProjects() {
  // Show first 3 projects as featured
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent kitchen and landscaping transformations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="group">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.categories.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="bg-accent/90 text-ink px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
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
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-primary text-sm"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/portfolio" className="btn btn-ghost">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
