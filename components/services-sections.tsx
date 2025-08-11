"use client"

import Image from "next/image"
import TooltipTerm from "./tooltip-term"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const services = [
  {
    id: "rehabilitation",
    title: "Réhabilitation",
    img: "/images/Rehabilitation_Hero_StructureElegante.png",
    desc:
      "Ouvertures de trémie, murs porteurs, renforts acier/bois/béton, reprises en sous‑œuvre, phasage sécurisé. Calculs de " +
      "RDM précis, méthodes éprouvées, respect patrimonial.",
    details: [
      { term: "Trémie", info: "Ouverture dans un plancher pour accueillir escalier/ascenseur." },
      { term: "Reprise en sous‑œuvre", info: "Renforcement des fondations existantes." },
      { term: "RDM", info: "Résistance des matériaux : dimensionnement des éléments." },
    ],
    quotes: [
      {
        name: "Atelier L.",
        quote: "Interventions millimétrées, tolérances maîtrisées, rendu patrimonial impeccable.",
      },
    ],
  },
  {
    id: "ouverture-tremie",
    title: "Ouverture trémie",
    img: "/images/Rehabilitation_Avant_MurPorteur.png",
    desc:
      "Création d’ouvertures en planchers béton/bois avec étaiement, renforts métalliques (HEA/HEB) et protocoles de sécurité. " +
      "Plan d’exécution clair, nuisances maîtrisées.",
    details: [
      { term: "Étaiement", info: "Soutènement temporaire pour sécuriser la structure." },
      { term: "HEA/HEB", info: "Profilés acier pour reprendre les charges." },
    ],
    quotes: [{ name: "S. Delacroix", quote: "Ouverture sans surprise, finitions nettes et délais tenus." }],
  },
  {
    id: "murs-porteurs",
    title: "Murs porteurs",
    img: "/images/Rehabilitation_Apres_EspaceRaffine.png",
    desc:
      "Ouvertures et renforts de murs porteurs. Linteaux, poutres et platines d’ancrage dimensionnés, contrôles et PV de réception. " +
      "Intégration architecturale discrète.",
    details: [
      { term: "Linteau", info: "Élément horizontal qui reprend les charges au-dessus d’une ouverture." },
      { term: "Platines", info: "Pièces acier d’assemblage et de fixation." },
    ],
    quotes: [{ name: "C. Moreau", quote: "Renforts invisibles, structure saine, rendu haut de gamme." }],
  },
  {
    id: "renforcement",
    title: "Renforcement",
    img: "/images/Realisations_LoftAtelier_Indus.png",
    desc:
      "Planchers, poteaux, voiles : renforts par matériaux mixtes, connecteurs et résines, contrôle des flèches et vibrations. " +
      "Suivi qualité et DOE complet.",
    details: [
      { term: "Connecteurs", info: "Liaisons mécaniques entre matériaux." },
      { term: "DOE", info: "Dossier des Ouvrages Exécutés remis en fin de chantier." },
    ],
    quotes: [{ name: "Atelier L.", quote: "Renforts efficaces, confort d’usage immédiatement perceptible." }],
  },
  {
    id: "soutenement",
    title: "Soutènement",
    img: "/images/Realisations_Penthouse_Nuit.png",
    desc:
      "Soutènements provisoires et définitifs, confortements, ancrages, micropieux. Études géotechniques et méthode d’exécution " +
      "sécurisée adaptées au site.",
    details: [
      { term: "Micropieu", info: "Fondation profonde de petit diamètre pour renforcer le sol." },
      { term: "Confortement", info: "Stabilisation temporaire d’un ouvrage." },
    ],
    quotes: [{ name: "Bureau d’Études", quote: "Méthodologie claire, risques maîtrisés, site sécurisé." }],
  },
  {
    id: "diagnostic",
    title: "Diagnostic",
    img: "/images/APropos_Equipe_StudioArchitectural.png",
    desc:
      "Diagnostics structurels, relevés 3D, sondages, auscultations. Rapports et notes de calcul, préconisations hiérarchisées, " +
      "planification précise des interventions.",
    details: [
      { term: "Relevés 3D", info: "Capture précise de l’existant (scanner/photogrammétrie)." },
      { term: "Auscultation", info: "Mesures et contrôles non destructifs." },
    ],
    quotes: [{ name: "Promoteur", quote: "Vision claire, décisions rapides, coûts maîtrisés." }],
  },
  {
    id: "construction-neuve",
    title: "Construction neuve",
    img: "/images/ConstructionNeuve_Hero_VillaIconique.png",
    desc:
      "De l’AVP à la livraison : structures efficientes, interfaces coordonnées, détails constructifs optimisés. " +
      "Tolérances maîtrisées, finitions irréprochables.",
    details: [
      { term: "AVP", info: "Avant‑Projet : études et faisabilité." },
      { term: "EXE", info: "Phase d’exécution : mise en œuvre et détails." },
    ],
    quotes: [{ name: "Architecte associé", quote: "Dialogue fluide, exécution au niveau attendu." }],
  },
  {
    id: "developpement-durable",
    title: "Développement durable",
    img: "/images/Durable_Hero_MateriauxNobles.png",
    desc:
      "Chanvre, structure bois, bétons bas carbone. Choix fondés sur données comparées : performance, coût global, durabilité. " +
      "Esthétique pérenne, empreinte maîtrisée.",
    details: [
      { term: "Béton chanvre", info: "Confort hygrothermique et inertie douce." },
      { term: "Bas carbone", info: "Formulation à liant réduit, émissions contenues." },
    ],
    quotes: [{ name: "AMO Durable", quote: "Pertinence technique, bénéfices tangibles et mesurables." }],
  },
]

export default function ServicesSections() {
  return (
    <div className="space-y-12">
      {services.map((s) => (
        <section key={s.id} id={s.id} className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--lux-border)] bg-white">
            <Image src={s.img || "/placeholder.svg"} alt={s.title} fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {s.title}
            </h3>
            <p className="text-muted-foreground">{s.desc}</p>
            <div className="flex flex-wrap gap-3">
              {s.details.map((d, i) => (
                <Popover key={i}>
                  <PopoverTrigger asChild>
                    <button className="px-3 py-1 rounded-full border border-[var(--lux-border)] hover:border-[var(--lux-gold)]">
                      {d.term}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-sm">
                    <p className="text-sm">{d.info}</p>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
            <div className="rounded-xl border border-[var(--lux-border)] bg-white p-4">
              <p className="text-sm">
                <TooltipTerm term="Terme technique">
                  Les termes techniques sont expliqués au besoin, sans alourdir la lecture.
                </TooltipTerm>
              </p>
            </div>
            {s.quotes?.length ? (
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-[var(--lux-text)]">Ils en parlent</p>
                <ul className="mt-2 space-y-1">
                  {s.quotes.map((q, i) => (
                    <li key={i}>
                      “{q.quote}” — {q.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <Button className="rounded-full bg-[var(--lux-gold)] text-[var(--lux-text)] hover:opacity-90">
              Demandez un devis personnalisé
            </Button>
          </div>
        </section>
      ))}
    </div>
  )
}
