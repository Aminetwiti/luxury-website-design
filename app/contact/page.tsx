import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact — Parlons de votre projet",
  description:
    "Contactez B.E StructiBA pour votre projet de construction, réhabilitation ou développement durable. Devis gratuit et conseil personnalisé.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Contact_Fond_TextureBetonLisse.png"
            alt="Texture béton lissé"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Parlons de votre projet
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Que ce soit pour une construction neuve, une réhabilitation ou un projet durable, notre équipe est là pour
              vous accompagner de A à Z.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="size-5" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-5" />
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5" />
                <span>3 régions d'intervention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Décrivez-nous votre projet
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Nos coordonnées
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="size-6 text-[#C9A568] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Siège social</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        123 Avenue des Champs-Élysées
                        <br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="size-6 text-[#C9A568] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Téléphone</p>
                      <p className="text-gray-600 text-sm">+33 1 42 86 83 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="size-6 text-[#C9A568] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-gray-600 text-sm">contact@bestructiba.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="size-6 text-[#C9A568] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Horaires</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lun - Ven : 8h00 - 18h00
                        <br />
                        Sam : 9h00 - 12h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zones d'intervention */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Zones d'intervention
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-[#C9A568]" />
                    <div>
                      <p className="font-semibold">Région PACA</p>
                      <p className="text-gray-600 text-sm">Nice, Cannes, Antibes, Marseille</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-[#C9A568]" />
                    <div>
                      <p className="font-semibold">Paris & Île-de-France</p>
                      <p className="text-gray-600 text-sm">Paris, Neuilly, Boulogne, Vincennes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-[#C9A568]" />
                    <div>
                      <p className="font-semibold">Antilles</p>
                      <p className="text-gray-600 text-sm">Martinique, Guadeloupe, Saint-Martin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="bg-[#C9A568] rounded-2xl shadow-sm p-8 text-white">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Notre engagement
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span>Réponse garantie sous 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span>Devis détaillé et transparent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span>Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span>Suivi de projet en temps réel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-bold text-center mb-12"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "Quel est le délai pour obtenir un devis ?",
                  a: "Nous nous engageons à vous fournir un devis détaillé sous 48h après réception de votre demande complète.",
                },
                {
                  q: "Intervenez-vous sur tous types de projets ?",
                  a: "Nous intervenons sur la construction neuve, la réhabilitation et les projets durables, du résidentiel au tertiaire.",
                },
                {
                  q: "Proposez-vous un suivi de chantier ?",
                  a: "Oui, nous assurons un suivi complet avec rapports réguliers et plateforme de suivi en ligne.",
                },
                {
                  q: "Quelles sont vos certifications ?",
                  a: "Nous sommes certifiés ISO 9001, HQE et agréés par le CSTB pour garantir la qualité de nos interventions.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3 text-lg">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
