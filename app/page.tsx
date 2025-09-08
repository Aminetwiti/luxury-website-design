import { SiteShell } from "@/components/site-shell"
import { Hero } from "@/components/hero"
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
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
              >
                Nos Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#1C1C1C" }}>
                Une expertise technique au service de vos projets les plus ambitieux
              </p>
            </div>
            <ServiceTrio />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20" style={{ backgroundColor: "#F8F8F5" }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
              >
                Nos Réalisations
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#1C1C1C" }}>
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
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
              >
                Témoignages
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#1C1C1C" }}>
                La confiance de nos clients, notre plus belle récompense
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Map Section */}
        <MapZones />
      </main>
    </SiteShell>
  )
}
