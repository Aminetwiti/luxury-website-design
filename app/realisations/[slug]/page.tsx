import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { SimpleImageGallery } from "@/components/simple-image-gallery"
import { SimpleProjectCTA } from "@/components/simple-project-cta"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Building, Award } from "lucide-react"
import Link from "next/link"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "rehabilitation":
        return "Réhabilitation"
      case "construction-neuve":
        return "Construction neuve"
      case "durable":
        return "Développement durable"
      default:
        return type
    }
  }

  const getRegionLabel = (region: string) => {
    switch (region) {
      case "paris":
        return "Paris"
      case "paca":
        return "PACA"
      case "antilles":
        return "Antilles"
      default:
        return region
    }
  }

  const galleryImages = project.images.map((src, index) => ({
    src,
    alt: `${project.title} - Image ${index + 1}`,
    title: `${project.title} - Vue ${index + 1}`,
  }))

  return (
    <SiteShell>
      <main className="min-h-screen pt-16">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" size="sm" className="mb-2">
              <Link href="/realisations">
                <ArrowLeft className="size-4 mr-2" />
                Retour aux réalisations
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  {getTypeLabel(project.type)}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {getRegionLabel(project.region)}
                </Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-5" />
                  <span>{new Date(project.date).getFullYear()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="size-5" />
                  <span>{project.surface}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="size-5" />
                  <span>{project.budget}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Galerie du projet
              </h2>
              <SimpleImageGallery images={galleryImages} />
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Technical Details */}
                <div>
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Détails techniques
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Surface</span>
                      <span className="text-gray-600">{project.surface}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Budget</span>
                      <span className="text-gray-600">{project.budget}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Durée</span>
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Type</span>
                      <span className="text-gray-600">{getTypeLabel(project.type)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Région</span>
                      <span className="text-gray-600">{getRegionLabel(project.region)}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Points clés
                  </h3>
                  <div className="space-y-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="size-2 rounded-full bg-[var(--lux-gold)] mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SimpleProjectCTA projectTitle={project.title} projectType={getTypeLabel(project.type)} />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
