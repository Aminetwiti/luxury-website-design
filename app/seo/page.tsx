import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Technique - B.E StructiBA",
  description: "Page technique SEO pour l'optimisation du référencement",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Optimisation SEO Technique
          </h1>
          <p className="text-gray-600">
            Page dédiée à l'optimisation du référencement naturel - Non indexée par les moteurs de recherche
          </p>
        </div>

        {/* Mots-clés principaux */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mots-clés Principaux - Ingénierie Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Services Techniques</h3>
              <div className="space-y-2 text-sm">
                <p>• Bureau d'études structure béton armé PACA</p>
                <p>• Calculs de structure construction neuve Alpes-Maritimes</p>
                <p>• Réhabilitation structurelle villa provençale</p>
                <p>• Reprise en sous-œuvre murs porteurs</p>
                <p>• Dimensionnement piscine débordement</p>
                <p>• Études AVP EXE structure béton</p>
                <p>• Renforcement structure existante</p>
                <p>• Ouverture trémie mur porteur</p>
                <p>• Extension villa calculs structure</p>
                <p>• Expertise technique bâtiment</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Spécialités Techniques</h3>
              <div className="space-y-2 text-sm">
                <p>• Ingénieur structure béton précontraint</p>
                <p>• Calculs parasismiques zone sismique</p>
                <p>• Dimensionnement fondations spéciales</p>
                <p>• Études géotechniques structure</p>
                <p>• Modélisation 3D structure complexe</p>
                <p>• Coordination BIM ingénierie</p>
                <p>• Conformité Eurocodes structure</p>
                <p>• Pathologie structure diagnostic</p>
                <p>• Renforcement carbone structure</p>
                <p>• Expertise sinistre structure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mots-clés géographiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Zones d'Intervention Géographiques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Alpes-Maritimes (06)</h3>
              <div className="space-y-1 text-sm">
                <p>• Bureau d'études structure Nice</p>
                <p>• Ingénieur béton armé Cannes</p>
                <p>• Calculs structure Antibes</p>
                <p>• Réhabilitation villa Mandelieu</p>
                <p>• Extension maison Grasse</p>
                <p>• Piscine débordement Monaco</p>
                <p>• Structure béton Menton</p>
                <p>• Renforcement villa Cagnes-sur-Mer</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Var (83)</h3>
              <div className="space-y-1 text-sm">
                <p>• Ingénieur structure Toulon</p>
                <p>• Bureau d'études Hyères</p>
                <p>• Calculs béton Saint-Tropez</p>
                <p>• Villa contemporaine Fréjus</p>
                <p>• Extension structure Draguignan</p>
                <p>• Piscine villa Sainte-Maxime</p>
                <p>• Réhabilitation Brignoles</p>
                <p>• Structure parasismique Var</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Bouches-du-Rhône (13)</h3>
              <div className="space-y-1 text-sm">
                <p>• Bureau d'études Marseille</p>
                <p>• Ingénieur structure Aix-en-Provence</p>
                <p>• Calculs béton Cassis</p>
                <p>• Villa bioclimatique La Ciotat</p>
                <p>• Extension maison Aubagne</p>
                <p>• Structure contemporaine Salon</p>
                <p>• Réhabilitation Arles</p>
                <p>• Renforcement Istres</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mots-clés techniques spécialisés */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Expertise Technique Approfondie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Calculs Structurels</h3>
              <div className="space-y-2 text-sm">
                <p>• Descente de charges structure béton</p>
                <p>• Dimensionnement poutre IPN HEB</p>
                <p>• Calculs flambement poteau béton</p>
                <p>• Vérification contrainte admissible</p>
                <p>• Modélisation Robot Structural Analysis</p>
                <p>• Calculs dynamiques structure</p>
                <p>• Analyse modale bâtiment</p>
                <p>• Vérification ELS ELU Eurocodes</p>
                <p>• Dimensionnement armatures béton</p>
                <p>• Calculs de déformation structure</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Pathologies & Renforcement</h3>
              <div className="space-y-2 text-sm">
                <p>• Diagnostic fissures structure béton</p>
                <p>• Renforcement fibres carbone CFRP</p>
                <p>• Injection résine époxy fissures</p>
                <p>• Chemisage poteau béton armé</p>
                <p>• Précontrainte additionnelle structure</p>
                <p>• Tirants précontraints renforcement</p>
                <p>• Micropieux reprise charge</p>
                <p>• Consolidation fondations existantes</p>
                <p>• Traitement corrosion armatures</p>
                <p>• Réparation béton dégradé</p>
              </div>
            </div>
          </div>
        </section>

        {/* Normes et réglementations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Conformité Réglementaire</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Normes Techniques</h3>
              <div className="space-y-2 text-sm">
                <p>• Eurocode 2 béton armé précontraint</p>
                <p>• Eurocode 8 calculs parasismiques</p>
                <p>• DTU 13.12 fondations superficielles</p>
                <p>• DTU 23.1 murs béton banché</p>
                <p>• NF EN 1992 dimensionnement béton</p>
                <p>• Règles BAEL 91 modifiées 99</p>
                <p>• PS92 règles parasismiques</p>
                <p>• Fascicule 62 titre V fondations</p>
                <p>• CCTP lot gros œuvre structure</p>
                <p>• Cahier des charges technique</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Certifications Qualité</h3>
              <div className="space-y-2 text-sm">
                <p>• Certification OPQIBI ingénierie</p>
                <p>• Assurance responsabilité civile professionnelle</p>
                <p>• Garantie décennale bureau d'études</p>
                <p>• Qualification RGE études techniques</p>
                <p>• Agrément contrôle technique construction</p>
                <p>• Habilitation diagnostic structure</p>
                <p>• Certification ISO 9001 qualité</p>
                <p>• Membre ordre ingénieurs structure</p>
                <p>• Formation continue Eurocodes</p>
                <p>• Veille réglementaire technique</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types de projets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Typologie de Projets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Construction Neuve</h3>
              <div className="space-y-1 text-sm">
                <p>• Villa contemporaine structure béton</p>
                <p>• Maison individuelle calculs</p>
                <p>• Immeuble collectif structure</p>
                <p>• Bâtiment tertiaire béton armé</p>
                <p>• Construction bioclimatique</p>
                <p>• Maison passive structure</p>
                <p>• Villa avec piscine intégrée</p>
                <p>• Architecture contemporaine</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Réhabilitation</h3>
              <div className="space-y-1 text-sm">
                <p>• Rénovation villa provençale</p>
                <p>• Extension maison existante</p>
                <p>• Surélévation structure bois</p>
                <p>• Transformation loft industriel</p>
                <p>• Réhabilitation patrimoine</p>
                <p>• Mise aux normes structure</p>
                <p>• Changement destination bâtiment</p>
                <p>• Rénovation énergétique structure</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C9A568]">Ouvrages Spéciaux</h3>
              <div className="space-y-1 text-sm">
                <p>• Piscine débordement calculs</p>
                <p>• Piscine naturelle structure</p>
                <p>• Terrasse suspendue béton</p>
                <p>• Escalier béton design</p>
                <p>• Mur soutènement paysager</p>
                <p>• Pergola structure métallique</p>
                <p>• Aménagement extérieur</p>
                <p>• Ouvrage d'art privé</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer SEO */}
        <section className="text-center py-8 border-t">
          <p className="text-sm text-gray-500 mb-4">
            Cette page technique est dédiée à l'optimisation SEO et n'est pas indexée par les moteurs de recherche.
          </p>
          <p className="text-xs text-gray-400">
            B.E StructiBA - Bureau d'Études Structure - Région PACA - Expertise Technique Béton Armé
          </p>
        </section>
      </div>
    </div>
  )
}
