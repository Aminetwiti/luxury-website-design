export const metadata = {
  title: "Mentions Légales — B.E StructiBA",
  description: "Mentions légales du bureau d'études B.E StructiBA, informations légales et réglementaires.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Identification de l'entreprise</h2>
            <div className="bg-gray-50 p-6 rounded-lg text-justify">
              <p>
                <strong>Raison sociale :</strong> B.E StructiBA
              </p>
              <p>
                <strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)
              </p>
              <p>
                <strong>Capital social :</strong> 50 000 €
              </p>
              <p>
                <strong>SIRET :</strong> 123 456 789 00012
              </p>
              <p>
                <strong>Code APE :</strong> 7112B (Ingénierie, études techniques)
              </p>
              <p>
                <strong>TVA Intracommunautaire :</strong> FR12 123456789
              </p>
              <p>
                <strong>Siège social :</strong> 263 Avenue de Grasse, 06400 Cannes, France
              </p>
              <p>
                <strong>Téléphone :</strong> +33 4 93 12 34 56
              </p>
              <p>
                <strong>Email :</strong> contact@structiba.fr
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Direction de la publication</h2>
            <div className="text-justify">
              <p>
                <strong>Directeur de la publication :</strong> [Nom du Gérant]
              </p>
              <p>
                <strong>Qualité :</strong> Gérant de la société B.E StructiBA
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement du site</h2>
            <div className="text-justify">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a href="https://vercel.com" className="text-[#C9A568] hover:underline">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Activité professionnelle</h2>
            <div className="text-justify">
              <p>
                B.E StructiBA est un bureau d'études spécialisé en ingénierie structurelle et béton armé. Nos activités
                comprennent :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Études de structure pour construction neuve</li>
                <li>Diagnostic et réhabilitation de bâtiments existants</li>
                <li>Ingénierie parasismique selon Eurocode 8</li>
                <li>Conception d'ouvrages extérieurs (piscines, soutènement)</li>
                <li>Assistance technique et conseil en conception</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assurance professionnelle</h2>
            <div className="bg-blue-50 p-6 rounded-lg text-justify">
              <p>
                <strong>Assureur :</strong> [Nom de la compagnie d'assurance]
              </p>
              <p>
                <strong>Police n° :</strong> [Numéro de police]
              </p>
              <p>
                <strong>Garanties :</strong> Responsabilité civile professionnelle et décennale
              </p>
              <p>
                <strong>Couverture géographique :</strong> France métropolitaine et DOM-TOM
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <div className="text-justify">
              <p>
                L'ensemble des éléments composant le site web de B.E StructiBA (textes, images, vidéos, logos,
                graphismes, etc.) sont protégés par le droit d'auteur et constituent la propriété exclusive de B.E
                StructiBA, sauf mention contraire.
              </p>
              <p className="mt-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
                de B.E StructiBA.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h2>
            <div className="text-justify">
              <p>
                B.E StructiBA s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur
                ce site. Toutefois, B.E StructiBA ne peut garantir l'exactitude, la précision ou l'exhaustivité des
                informations mises à disposition sur ce site.
              </p>
              <p className="mt-4">
                En conséquence, B.E StructiBA décline toute responsabilité pour toute imprécision, inexactitude ou
                omission portant sur des informations disponibles sur ce site.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable</h2>
            <div className="text-justify">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
                seront seuls compétents.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="bg-[#C9A568]/10 p-6 rounded-lg">
              <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Par email :</strong>{" "}
                  <a href="mailto:contact@structiba.fr" className="text-[#C9A568] hover:underline">
                    contact@structiba.fr
                  </a>
                </li>
                <li>
                  <strong>Par téléphone :</strong>{" "}
                  <a href="tel:+33493123456" className="text-[#C9A568] hover:underline">
                    04 93 12 34 56
                  </a>
                </li>
                <li>
                  <strong>Par courrier :</strong> B.E StructiBA, 263 Avenue de Grasse, 06400 Cannes
                </li>
              </ul>
            </div>
          </section>

          <div className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
            <p>Dernière mise à jour : Décembre 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
