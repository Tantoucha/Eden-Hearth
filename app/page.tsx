import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects"
import TestimonialsSnippet from "@/components/TestimonialsSnippet"
import FAQsSnippet from "@/components/FAQsSnippet"
import TrustStrip from "@/components/TrustStrip"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <TrustStrip />
      <FeaturedProjects />
      <TestimonialsSnippet />
      <FAQsSnippet />
    </div>
  )
}
