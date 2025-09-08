import Hero from "@/components/hero"
import ServiceTrio from "@/components/service-trio"
import ProjectsGrid from "@/components/projects-grid"
import TestimonialsSlider from "@/components/testimonials-slider"
import MapZones from "@/components/map-zones"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTrio />
      <ProjectsGrid />
      <TestimonialsSlider />
      <MapZones />
    </>
  )
}
