import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Technique - B.E StructiBA",
  description: "Page SEO technique pour le référencement des mots-clés spécialisés en ingénierie structure",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Expertise Technique en Ingénierie Structure
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ textAlign: "justify" }}>
            B.E StructiBA, bureau d'études structure spécialisé dans les calculs de résistance des matériaux, la
            pathologie du bâtiment et le renforcement structurel. Notre expertise couvre l'ensemble des projets de
            construction neuve, réhabilitation et diagnostic technique dans la région PACA.
          </p>
        </header>

        {/* Mots-clés Techniques Généraux */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Expertise Technique en Calculs Structurels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Calculs et Dimensionnement</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Nos ingénieurs structure maîtrisent les calculs de résistance des matériaux selon les Eurocodes. Nous
                réalisons le dimensionnement des éléments porteurs, l'analyse des contraintes et déformations, ainsi que
                la vérification de la stabilité globale des ouvrages. Notre expertise inclut les calculs aux états
                limites ultimes et de service, l'analyse dynamique et sismique, ainsi que les études de flambement et
                déversement.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  calculs structure béton armé
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  dimensionnement charpente métallique
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  résistance des matériaux
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Eurocodes</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  analyse contraintes déformations
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Pathologie et Diagnostic</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Spécialistes en pathologie du bâtiment, nous réalisons des diagnostics structure approfondis pour
                identifier les désordres structurels, fissures, tassements différentiels et problèmes de fondations. Nos
                expertises techniques incluent l'auscultation des ouvrages, les essais non destructifs, et l'évaluation
                de la capacité portante résiduelle des structures dégradées.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">pathologie bâtiment</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">diagnostic structure</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">expertise fissures</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  tassements différentiels
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  auscultation ouvrages
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques de Renforcement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Techniques de Renforcement Structurel</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Renforcement par Matériaux Composites</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Mise en œuvre de renforts par fibres de carbone, tissus de carbone collés, lamelles carbone et fibres de
                verre pour l'augmentation de la capacité portante des éléments béton armé et maçonnerie.
              </p>
              <div className="space-y-1 text-sm">
                <div className="text-gray-700">• Renforcement fibres carbone</div>
                <div className="text-gray-700">• Tissus carbone collés</div>
                <div className="text-gray-700">• Lamelles carbone précontraintes</div>
                <div className="text-gray-700">• Fibres de verre structurelles</div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Reprise en Sous-Œuvre</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Techniques de reprise en sous-œuvre par micropieux, longrines de répartition, plots béton et
                renforcement de fondations existantes pour la création d'ouvertures et extensions.
              </p>
              <div className="space-y-1 text-sm">
                <div className="text-gray-700">• Reprise sous-œuvre micropieux</div>
                <div className="text-gray-700">• Longrines de répartition</div>
                <div className="text-gray-700">• Plots béton armé</div>
                <div className="text-gray-700">• Renforcement fondations</div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Précontrainte et Tirants</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Mise en tension de tirants précontraints, barres de précontrainte extérieure, câbles de précontrainte et
                systèmes de post-tension pour le renforcement et la réparation des structures.
              </p>
              <div className="space-y-1 text-sm">
                <div className="text-gray-700">• Tirants précontraints</div>
                <div className="text-gray-700">• Précontrainte extérieure</div>
                <div className="text-gray-700">• Câbles post-tension</div>
                <div className="text-gray-700">• Barres précontraintes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de Projets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Types de Projets et Ouvrages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Construction Neuve</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Études structure complètes pour villas contemporaines, maisons individuelles, immeubles collectifs,
                bâtiments industriels et ouvrages d'art. Nos prestations couvrent les phases AVP, PRO et EXE avec
                coordination BIM et respect des normes RE2020.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-700">• Villas contemporaines</div>
                <div className="text-gray-700">• Maisons individuelles</div>
                <div className="text-gray-700">• Immeubles collectifs</div>
                <div className="text-gray-700">• Bâtiments industriels</div>
                <div className="text-gray-700">• Ouvrages d'art</div>
                <div className="text-gray-700">• Études AVP PRO EXE</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Réhabilitation et Extension</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Projets de réhabilitation lourde, extensions de bâtiments existants, surélévations, création
                d'ouvertures dans murs porteurs, modification de structures porteuses et mise aux normes sismiques.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-700">• Réhabilitation lourde</div>
                <div className="text-gray-700">• Extensions bâtiments</div>
                <div className="text-gray-700">• Surélévations</div>
                <div className="text-gray-700">• Ouvertures murs porteurs</div>
                <div className="text-gray-700">• Modification structures</div>
                <div className="text-gray-700">• Mise aux normes sismiques</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ouvrages Spéciaux */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Ouvrages Spéciaux et Équipements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Piscines et Bassins</h3>
              <p className="text-gray-600 mb-3" style={{ textAlign: "justify" }}>
                Dimensionnement de piscines béton armé, piscines à débordement, bassins enterrés, locaux techniques et
                équipements de filtration.
              </p>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• Piscines béton armé</div>
                <div>• Piscines débordement</div>
                <div>• Bassins enterrés</div>
                <div>• Locaux techniques</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Escaliers et Mezzanines</h3>
              <p className="text-gray-600 mb-3" style={{ textAlign: "justify" }}>
                Conception d'escaliers suspendus, escaliers hélicoïdaux, mezzanines métalliques, passerelles et
                structures légères.
              </p>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• Escaliers suspendus</div>
                <div>• Escaliers hélicoïdaux</div>
                <div>• Mezzanines métalliques</div>
                <div>• Passerelles</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Terrasses et Balcons</h3>
              <p className="text-gray-600 mb-3" style={{ textAlign: "justify" }}>
                Études de terrasses suspendues, balcons en porte-à-faux, terrasses accessibles, étanchéité et isolation.
              </p>
              <div className="space-y-1 text-sm text-gray-700">
                <div>• Terrasses suspendues</div>
                <div>• Balcons porte-à-faux</div>
                <div>• Terrasses accessibles</div>
                <div>• Étanchéité isolation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones Géographiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Zones d'Intervention PACA</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Alpes-Maritimes (06)</h3>
              <p className="text-blue-800 mb-3" style={{ textAlign: "justify" }}>
                Bureau d'études structure Alpes-Maritimes : Nice, Cannes, Antibes, Grasse, Mandelieu-la-Napoule,
                Cagnes-sur-Mer, Saint-Laurent-du-Var, Menton, Monaco.
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm text-blue-700">
                <div>• Nice</div>
                <div>• Cannes</div>
                <div>• Antibes</div>
                <div>• Grasse</div>
                <div>• Mandelieu</div>
                <div>• Cagnes-sur-Mer</div>
                <div>• Saint-Laurent</div>
                <div>• Menton</div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-green-900">Var (83)</h3>
              <p className="text-green-800 mb-3" style={{ textAlign: "justify" }}>
                Ingénieur structure Var : Toulon, Hyères, Fréjus, Saint-Raphaël, Draguignan, Brignoles, La
                Seyne-sur-Mer, Six-Fours-les-Plages.
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm text-green-700">
                <div>• Toulon</div>
                <div>• Hyères</div>
                <div>• Fréjus</div>
                <div>• Saint-Raphaël</div>
                <div>• Draguignan</div>
                <div>• Brignoles</div>
                <div>• La Seyne</div>
                <div>• Six-Fours</div>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-900">Bouches-du-Rhône (13)</h3>
              <p className="text-orange-800 mb-3" style={{ textAlign: "justify" }}>
                Calculs structure Bouches-du-Rhône : Marseille, Aix-en-Provence, Arles, Salon-de-Provence, Martigues,
                Aubagne, Istres, Marignane.
              </p>
              <div className="grid grid-cols-2 gap-1 text-sm text-orange-700">
                <div>• Marseille</div>
                <div>• Aix-en-Provence</div>
                <div>• Arles</div>
                <div>• Salon-de-Provence</div>
                <div>• Martigues</div>
                <div>• Aubagne</div>
                <div>• Istres</div>
                <div>• Marignane</div>
              </div>
            </div>
          </div>
        </section>

        {/* Normes et Réglementations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Normes et Réglementations Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Eurocodes et DTU</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Application rigoureuse des Eurocodes structuraux (EC0 à EC9), DTU (Documents Techniques Unifiés), NF
                DTU, règles BAEL, BPEL, CM66, et normes parasismiques PS92/EC8 pour la conception et le calcul des
                structures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Eurocode 0</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Eurocode 1</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Eurocode 2</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Eurocode 3</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">DTU 13.12</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">BAEL 91</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PS92 EC8</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Certifications et Labels</h3>
              <p className="text-gray-600 mb-4" style={{ textAlign: "justify" }}>
                Respect des exigences RE2020, RT2012, labels BBC, HQE, BREEAM, certifications Qualibat, qualification
                OPQIBI, et conformité aux règles de l'art du bâtiment pour tous nos projets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">RE2020</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">RT2012</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">BBC</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">HQE</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">BREEAM</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Qualibat</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">OPQIBI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Logiciels et Outils */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Logiciels de Calcul et Modélisation</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 mb-6" style={{ textAlign: "justify" }}>
              Notre bureau d'études utilise les logiciels de calcul structure les plus performants pour la modélisation
              3D, l'analyse par éléments finis, les calculs dynamiques et la vérification réglementaire des structures
              béton armé, charpente métallique et bois.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <div className="font-semibold text-gray-800">Robot Structural</div>
                  <div className="text-sm text-gray-600">Autodesk</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <div className="font-semibold text-gray-800">RFEM</div>
                  <div className="text-sm text-gray-600">Dlubal Software</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <div className="font-semibold text-gray-800">SCIA Engineer</div>
                  <div className="text-sm text-gray-600">Nemetschek</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <div className="font-semibold text-gray-800">Advance Design</div>
                  <div className="text-sm text-gray-600">GRAITEC</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                modélisation 3D structure
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">éléments finis FEM</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">calculs dynamiques</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                vérification Eurocodes
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">BIM coordination</span>
            </div>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="text-center pt-12 border-t">
          <p className="text-gray-500 text-sm">
            B.E StructiBA - Bureau d'Études Structure PACA - Ingénierie et Calculs Structurels - Région
            Provence-Alpes-Côte d'Azur
          </p>
        </footer>
      </div>
    </div>
  )
}
