import Image from 'next/image'

export default function Founders() {
  const founders = [
    {
      name: 'Abdul Tantouch',
      title: 'Co-Founder & Operations Director',
      image: '/abdul-tantouch.jpg',
      bio: 'Leads project management and client satisfaction across all operations. Coordinates trades, keeps schedules on track and quality consistent. Known for clear communication and tidy sites throughout Greater Manchester.',
    },
    {
      name: 'Ibrahim Berkawi',
      title: 'Co-Founder & Kitchen Installations Director',
      image: '/ibrahim-berkawi.jpg',
      bio: 'Specialises in kitchen design and installation with 15 years experience. Handles surveys, technical planning and handover. Focuses on functionality and craftsmanship in every kitchen project.',
    },
    {
      name: 'Hamdi Hassan',
      title: 'Co-Founder & Landscape Director',
      image: '/hamdi-hassan.jpg',
      bio: 'Manages landscaping projects from design to completion with 12 years experience. Coordinates drainage, paving and planting works. Brings practical solutions to outdoor spaces across the North West.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink mb-4">Meet the Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The experienced team behind Eden & Hearth, dedicated to delivering quality kitchens and landscaping.
          </p>
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
    </section>
  )
}
