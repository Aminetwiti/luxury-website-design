"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { projects } from "@/lib/projects"

export default function ProjectsGrid() {
  // Afficher uniquement les 2 projets réels
  const displayedProjects = projects.filter(
    (project) => project.id === "villa-provencale-mandelieu" || project.id === "villa-contemporaine",
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-[#C9A568]">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Découvrez quelques-unes de nos réalisations qui illustrent notre expertise en ingénierie structurelle et
            notre capacité à transformer les défis techniques en succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#C9A568] transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-justify">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
