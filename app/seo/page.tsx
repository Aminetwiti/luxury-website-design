import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Technique - B.E StructiBA",
  description: "Page SEO technique pour le référencement des mots-clés spécialisés en ingénierie structurelle",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Expertise Technique en Ingénierie Structurelle - B.E StructiBA
        </h1>

        {/* Calculs Structurels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Calculs Structurels et Dimensionnement</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              Notre bureau d'études structurelles B.E StructiBA maîtrise l'ensemble des{" "}
              <strong>calculs de résistance des matériaux</strong> selon les{" "}
              <strong>Eurocodes EN 1990 à EN 1999</strong>. Nous réalisons le{" "}
              <strong>dimensionnement béton armé</strong>, les <strong>calculs de descente de charges</strong>, et l'
              <strong>analyse sismique</strong> conformément aux normes PS92 et Eurocode 8.
            </p>
            <p className="mb-4">
              Nos ingénieurs experts utilisent les logiciels de calcul de structure les plus performants :{" "}
              <strong>Robot Structural Analysis</strong>, <strong>RFEM Dlubal</strong>, <strong>SCIA Engineer</strong>,
              et <strong>CBS Pro</strong> pour garantir la précision de nos études structurelles.
            </p>
          </div>
        </section>

        {/* Pathologie et Renforcement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Pathologie du Bâtiment et Renforcement Structurel</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              B.E StructiBA excelle dans le <strong>diagnostic pathologique</strong> et les{" "}
              <strong>techniques de renforcement</strong>. Nous maîtrisons la <strong>reprise en sous-œuvre</strong>, le{" "}
              <strong>renforcement par tirants précontraints</strong>, les <strong>poutres de renforcement</strong>, et
              les <strong>reprises de maçonnerie</strong>.
            </p>
            <p className="mb-4">
              Nos interventions incluent le <strong>traitement des fissures structurelles</strong>, la{" "}
              <strong>consolidation de fondations</strong>, le <strong>renforcement de planchers</strong>, et la{" "}
              <strong>réparation d'ouvrages en béton armé</strong> selon les DTU 23.1 et 21.
            </p>
          </div>
        </section>

        {/* Zones Géographiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Zone d'Intervention PACA</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              Notre bureau d'études intervient sur l'ensemble de la région <strong>Provence-Alpes-Côte d'Azur</strong> :{" "}
              <strong>Alpes-Maritimes (06)</strong>, <strong>Var (83)</strong>, et{" "}
              <strong>Bouches-du-Rhône (13)</strong>.
            </p>
            <p className="mb-4">
              Villes d'intervention : <strong>Nice</strong>, <strong>Cannes</strong>, <strong>Antibes</strong>,{" "}
              <strong>Grasse</strong>, <strong>Mandelieu-la-Napoule</strong>, <strong>Mougins</strong>,{" "}
              <strong>Valbonne</strong>, <strong>Toulon</strong>, <strong>Hyères</strong>, <strong>Saint-Tropez</strong>
              , <strong>Fréjus</strong>, <strong>Saint-Raphaël</strong>, <strong>Marseille</strong>,{" "}
              <strong>Aix-en-Provence</strong>, <strong>Cassis</strong>, <strong>La Ciotat</strong>.
            </p>
          </div>
        </section>

        {/* Types de Projets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Types de Projets et Ouvrages</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              B.E StructiBA réalise les <strong>études de structure</strong> pour tous types d'ouvrages :{" "}
              <strong>villas contemporaines</strong>, <strong>maisons individuelles</strong>,{" "}
              <strong>immeubles collectifs</strong>, <strong>bâtiments industriels</strong>,{" "}
              <strong>ouvrages d'art</strong>, et <strong>constructions parasismiques</strong>.
            </p>
            <p className="mb-4">
              Nos spécialités incluent les <strong>piscines à débordement</strong>, les{" "}
              <strong>murs de soutènement</strong>, les <strong>escaliers suspendus</strong>, les{" "}
              <strong>trémies d'escalier</strong>, les <strong>planchers collaborants</strong>, et les{" "}
              <strong>charpentes métalliques</strong>.
            </p>
          </div>
        </section>

        {/* Normes et Réglementations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Normes et Réglementations Techniques</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              Nos études respectent scrupuleusement les <strong>DTU (Documents Techniques Unifiés)</strong>, les{" "}
              <strong>règles BAEL 91</strong>, les <strong>règles CM66</strong> pour les constructions métalliques, et
              les <strong>règles neige et vent NV65</strong>.
            </p>
            <p className="mb-4">
              Nous appliquons les <strong>règles parasismiques PS92</strong>, l'<strong>Eurocode 8</strong> pour les
              zones sismiques, et respectons les <strong>règlements PLU</strong> et{" "}
              <strong>contraintes ABF (Architectes des Bâtiments de France)</strong>.
            </p>
          </div>
        </section>

        {/* Phases d'Études */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Phases d'Études Structurelles</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              B.E StructiBA accompagne vos projets de l'<strong>esquisse structurelle</strong> jusqu'aux{" "}
              <strong>plans d'exécution EXE</strong>. Nous réalisons les <strong>études AVP (Avant-Projet)</strong>, les{" "}
              <strong>études PRO (Projet)</strong>, et les <strong>études d'exécution</strong> avec{" "}
              <strong>notes de calculs détaillées</strong>.
            </p>
            <p className="mb-4">
              Nos livrables incluent les <strong>plans de coffrage</strong>, les <strong>plans de ferraillage</strong>,
              les <strong>métrés quantitatifs</strong>, et les <strong>cahiers des charges techniques</strong> conformes
              aux <strong>CCTP</strong>.
            </p>
          </div>
        </section>

        {/* Matériaux et Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Matériaux et Techniques Constructives</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              Notre expertise couvre tous les matériaux : <strong>béton armé traditionnel</strong>,{" "}
              <strong>béton précontraint</strong>, <strong>béton haute performance</strong>,{" "}
              <strong>acier de construction</strong>, <strong>bois lamellé-collé</strong>, et{" "}
              <strong>maçonnerie chaînée</strong>.
            </p>
            <p className="mb-4">
              Nous maîtrisons les <strong>techniques mixtes acier-béton</strong>, les{" "}
              <strong>planchers prédalles</strong>, les <strong>voiles en béton banché</strong>, et les{" "}
              <strong>fondations spéciales</strong> (pieux, micropieux, longrines).
            </p>
          </div>
        </section>

        {/* Logiciels et Outils */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Logiciels de Calcul et Outils BIM</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              B.E StructiBA utilise les logiciels de référence : <strong>Autodesk Robot Structural Analysis</strong>,{" "}
              <strong>RFEM 6 Dlubal</strong>, <strong>SCIA Engineer</strong>, <strong>Graitec Advance Design</strong>,
              et <strong>CBS Pro</strong> pour les calculs béton armé.
            </p>
            <p className="mb-4">
              Notre workflow BIM intègre <strong>Autodesk Revit Structure</strong>, <strong>Tekla Structures</strong>,
              et <strong>ArchiCAD</strong> pour une <strong>modélisation 3D paramétrique</strong> et une{" "}
              <strong>coordination multidisciplinaire</strong> optimale.
            </p>
          </div>
        </section>

        {/* Certifications et Qualifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Certifications et Qualifications</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              B.E StructiBA dispose des <strong>qualifications OPQIBI</strong> et respecte les{" "}
              <strong>normes ISO 9001</strong>. Nos ingénieurs sont <strong>certifiés Eurocode</strong> et formés aux{" "}
              <strong>dernières évolutions réglementaires</strong>.
            </p>
            <p className="mb-4">
              Nous sommes <strong>assurés en responsabilité civile professionnelle</strong> et respectons les{" "}
              <strong>obligations décennales</strong> pour tous nos projets d'ingénierie structurelle.
            </p>
          </div>
        </section>

        {/* Mots-clés longue traîne */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Expertise Technique Spécialisée</h2>
          <div className="prose max-w-none text-justify">
            <p className="mb-4">
              <strong>Bureau d'études structure Alpes-Maritimes</strong>, <strong>calculs béton armé Nice</strong>,{" "}
              <strong>ingénieur structure Cannes</strong>, <strong>dimensionnement piscine débordement</strong>,{" "}
              <strong>reprise sous-œuvre Antibes</strong>, <strong>renforcement structure Grasse</strong>,{" "}
              <strong>pathologie bâtiment PACA</strong>, <strong>études sismiques Côte d'Azur</strong>.
            </p>
            <p className="mb-4">
              <strong>Calculs Eurocode 2 béton</strong>, <strong>dimensionnement fondations</strong>,{" "}
              <strong>études de sol géotechnique</strong>, <strong>planchers précontraints</strong>,{" "}
              <strong>charpente métallique</strong>, <strong>murs de soutènement</strong>,{" "}
              <strong>escaliers béton armé</strong>, <strong>trémies structurelles</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
