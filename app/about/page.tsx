import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Eden & Hearth | Kitchen & Landscaping Experts',
  description: 'Meet the Eden & Hearth team. Specialists in kitchen installations and landscaping with a focus on quality, care, and client satisfaction.',
}

export default function AboutPage() {
  const founders = [
    {
      name: 'Abdul Tantouch',
      title: 'Operations Director',
      image: '/abdul-tantouch.jpg',
      bio: 'Abdul oversees the smooth running of every project from start to finish. With over ten years of experience in the construction industry, including a strong background in research and project management, he ensures that work is completed on time, on budget, and to the highest standard. Clients value his calm, organised approach and the way he keeps every detail under control.',
    },
    {
      name: 'Ibrahim',
      title: 'Kitchen & Interior Specialist',
      image: '/ibrahim-berkawi.jpg',
      bio: 'Ibrahim has extensive experience in kitchen installations and home improvement projects across the RMI sector. He is known for his precision, craftsmanship, and ability to make the most of any space. From contemporary layouts to traditional designs, Ibrahim brings ideas to life with a focus on both function and finish.',
    },
    {
      name: 'Hamdi',
      title: 'Landscaping & Outdoor Projects Lead',
      image: '/hamdi-hassan.jpg',
      bio: 'Hamdi has worked on a wide variety of landscaping and general construction projects. He specialises in creating outdoor spaces that look beautiful and work perfectly for everyday use. Whether it\'s a new patio, a complete garden redesign, or practical hard landscaping, Hamdi\'s work is built to last and tailored to each client\'s needs.',
    },
  ]

  return (
    <div className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-ink mb-4">
            About Us
          </h1>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At Eden & Hearth, we believe a home should reflect the people who live in it. It should feel comfortable, work beautifully, and make you proud every time you walk through the door.
            </p>
            <p>
              We are a small, dedicated team with years of experience in different areas of construction and home improvement. Each of us brings specialist skills, but we share the same values: attention to detail, honesty, and a genuine respect for our clients.
            </p>
            <p>
              From our base in Greater Manchester, we design, build, and transform kitchens and outdoor spaces for homeowners across the North West. We plan carefully, communicate clearly, and deliver results that last. Whether it's a complete kitchen installation or a landscaped garden, our aim is to create spaces that improve daily life and stand the test of time.
            </p>
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Meet the Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, ${founder.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink mb-1">{founder.name}</h3>
                  <p className="text-accent font-medium mb-4">{founder.title}</p>
                  <p className="text-gray-700 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ink text-center mb-8">
            Service Areas
          </h2>
          <div className="bg-gradient-to-br from-brand to-accent text-paper rounded-2xl p-8 text-center">
            <p className="text-xl mb-6">
              We proudly serve Greater Manchester and the North West
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>Manchester</div>
              <div>Stockport</div>
              <div>Altrincham</div>
              <div>Wilmslow</div>
              <div>Macclesfield</div>
              <div>Knutsford</div>
              <div>Cheshire East</div>
              <div>Surrounding Areas</div>
            </div>
            <p className="mt-6 opacity-90">
              Not sure if we cover your area? Get in touch and we'll let you know.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 border-2 border-accent/20">
            <h2 className="text-3xl font-bold text-ink mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're planning a kitchen renovation or garden transformation, we'd love to discuss your ideas and show you how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Request Your Free Quote
              </Link>
              <Link href="/portfolio" className="btn btn-secondary">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}