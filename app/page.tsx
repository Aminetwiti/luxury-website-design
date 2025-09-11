import Hero from "@/components/hero"
import ServiceTrio from "@/components/service-trio"
import ProjectsGrid from "@/components/projects-grid"
import TestimonialsSlider from "@/components/testimonials-slider"
import MapZones from "@/components/map-zones"

export const metadata = {
  title: "B.E StructiBA — Bureau d'Études Structure et Béton Armé",
  description:
    "Bureau d'études spécialisé en structure et béton armé, intervenant en construction neuve et réhabilitation, de la conception à l'exécution. Cannes, PACA.",
}

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
