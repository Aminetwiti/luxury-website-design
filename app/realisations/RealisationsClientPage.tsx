"use client"
import Breadcrumbs from "@/components/breadcrumbs"
import ProjectsGrid from "@/components/projects-grid"

export default function RealisationsClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-[#C9A568]">Réalisations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-justify">
              Découvrez nos projets d'ingénierie structurelle qui témoignent de notre expertise technique et de notre
              capacité d'innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid showAll={true} showFilters={true} />
    </div>
  )
}
