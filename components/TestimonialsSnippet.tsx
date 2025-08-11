import testimonialsData from '@/data/testimonials.json'

export default function TestimonialsSnippet() {
  // Show first 3 testimonials
  const featuredTestimonials = testimonialsData.slice(0, 3)

  return (
    <section className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ink mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from recent kitchen and landscaping projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="not-italic">
                <div className="font-semibold text-ink">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.locality}</div>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
