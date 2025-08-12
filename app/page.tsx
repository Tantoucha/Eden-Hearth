import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects"
import TestimonialsSnippet from "@/components/TestimonialsSnippet"
import FAQsSnippet from "@/components/FAQsSnippet"
import TrustStrip from "@/components/TrustStrip"
import Founders from "@/components/Founders"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <Hero />
      <TrustStrip />
      <Founders />
      <FeaturedProjects />
      <TestimonialsSnippet />
      <FAQsSnippet />
    </div>
  )
}
