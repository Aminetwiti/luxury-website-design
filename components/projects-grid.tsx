"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Square } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"

interface ProjectsGridProps {
  showAll?: boolean
  limit?: number
  className?: string
}

export default function ProjectsGrid({ showAll = false, limit = 2, className = "" }: ProjectsGridProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, limit)

  if (displayedProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun projet à afficher pour le moment.</p>
      </div>
    )
  }

  return (
    <div
      className={`grid grid-cols-1 ${displayedProjects.length === 2 ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-8 ${className}`}
    >
      {displayedProjects.map((project) => (
        <Card
          key={project.id}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badge catégorie */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-[#C9A568] text-white border-0">{project.category}</Badge>
            </div>

            {/* Overlay au hover */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4" />
                      <span>{project.surface}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C9A568] transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{project.location}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify line-clamp-3">
              {project.description}
            </p>

            {showAll && (
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>{project.budget}</span>
                </div>
                
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
