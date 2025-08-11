import { SiteShell } from "@/components/site-shell"
import Hero from "@/components/hero"
import { ServiceTrio } from "@/components/service-trio"
import { ProjectsGrid } from "@/components/projects-grid"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { MapZones } from "@/components/map-zones"

export default function HomePage() {
  return (
    <SiteShell>
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Nos Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une expertise technique au service de vos projets les plus ambitieux
              </p>
            </div>
            <ServiceTrio />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Nos Réalisations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez nos projets d'exception à travers trois régions
              </p>
            </div>
            <ProjectsGrid />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Témoignages
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La confiance de nos clients, notre plus belle récompense
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Nos Zones d'Intervention
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Paris, PACA et Antilles : trois régions, une même exigence
              </p>
            </div>
            <MapZones />
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
