import Image from "next/image"

export const metadata = {
  title: "Conditions Générales de Vente — B.E StructiBA",
  description: "Conditions générales de vente des prestations d'ingénierie du bureau d'études B.E StructiBA.",
}

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/Terms_Conditions_Engineering.jpg"
            alt="Conditions générales de vente ingénierie"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conditions Générales de Vente</h1>
            <p className="text-xl text-gray-300">Conditions générales de vente des prestations d'ingénierie</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-justify">
                <strong>
                  Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations d'ingénierie
                  réalisées par B.E StructiBA. Elles définissent les droits et obligations des parties dans le cadre de
                  la vente de prestations intellectuelles d'études techniques.
                </strong>
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Champ d'application</h2>
              <div className="text-justify">
                <p>
                  Les présentes CGV s'appliquent à toutes les prestations de services proposées par B.E StructiBA,
                  notamment :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Études de structure pour construction neuve</li>
                  <li>Diagnostic structurel et études de réhabilitation</li>
                  <li>Ingénierie parasismique et études Eurocode 8</li>
                  <li>Conception d'ouvrages extérieurs</li>
                  <li>Assistance technique et conseil en conception</li>
                  <li>Suivi de chantier et contrôle technique</li>
                </ul>
                <p className="mt-4">Toute commande implique l'acceptation sans réserve des présentes CGV.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Devis et commandes</h2>
              <div className="text-justify">
                <p>
                  <strong>2.1 Établissement du devis :</strong> Tout devis est établi gratuitement sur la base des
                  informations fournies par le client. Il est valable 30 jours à compter de sa date d'émission.
                </p>
                <p className="mt-4">
                  <strong>2.2 Acceptation :</strong> La commande n'est définitive qu'après signature du devis par le
                  client et versement de l'acompte prévu.
                </p>
                <p className="mt-4">
                  <strong>2.3 Modifications :</strong> Toute modification du cahier des charges initial fera l'objet
                  d'un avenant au contrat.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Prix et modalités de paiement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-justify">
                  <strong>3.1 Prix :</strong> Les prix sont exprimés en euros HT. La TVA au taux en vigueur s'ajoute au
                  montant HT.
                </p>
                <p className="mt-4 text-justify">
                  <strong>3.2 Modalités de paiement :</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Acompte de 30% à la commande</li>
                  <li>40% à la remise de l'avant-projet</li>
                  <li>Solde de 30% à la livraison des documents finaux</li>
                </ul>
                <p className="mt-4 text-justify">
                  <strong>3.3 Délais de paiement :</strong> Les factures sont payables à 30 jours net à compter de leur
                  date d'émission.
                </p>
                <p className="mt-4 text-justify">
                  <strong>3.4 Retard de paiement :</strong> En cas de retard, des pénalités de 3 fois le taux légal
                  seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Délais d'exécution</h2>
              <div className="text-justify">
                <p>
                  <strong>4.1 Délais indicatifs :</strong> Les délais d'exécution sont donnés à titre indicatif et
                  courent à compter de la réception de l'acompte et de tous les éléments nécessaires à l'étude.
                </p>
                <p className="mt-4">
                  <strong>4.2 Retards :</strong> B.E StructiBA ne saurait être tenu responsable des retards dus à :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>La fourniture tardive ou incomplète des éléments par le client</li>
                  <li>Des modifications du programme en cours d'étude</li>
                  <li>Des cas de force majeure</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Obligations du client</h2>
              <div className="text-justify">
                <p>Le client s'engage à :</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Fournir tous les documents et informations nécessaires à la réalisation de l'étude</li>
                  <li>Permettre l'accès au site pour les visites techniques nécessaires</li>
                  <li>Respecter les échéances de paiement</li>
                  <li>Informer B.E StructiBA de toute modification du projet</li>
                  <li>Faire appel à des entreprises qualifiées pour la réalisation des travaux</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Livraison et réception</h2>
              <div className="text-justify">
                <p>
                  <strong>6.1 Modalités :</strong> Les documents d'étude sont remis au client par voie électronique
                  (PDF) et/ou sur support papier selon les modalités convenues.
                </p>
                <p className="mt-4">
                  <strong>6.2 Vérification :</strong> Le client dispose de 15 jours pour formuler ses observations.
                  Passé ce délai, les documents sont réputés acceptés.
                </p>
                <p className="mt-4">
                  <strong>6.3 Propriété :</strong> Les documents restent la propriété de B.E StructiBA jusqu'au paiement
                  intégral des honoraires.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Responsabilité et assurance</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-justify">
                  <strong>7.1 Assurance :</strong> B.E StructiBA est couvert par une assurance responsabilité civile
                  professionnelle et décennale conforme à la réglementation.
                </p>
                <p className="mt-4 text-justify">
                  <strong>7.2 Limitation :</strong> La responsabilité de B.E StructiBA est limitée au montant des
                  honoraires perçus pour la mission concernée.
                </p>
                <p className="mt-4 text-justify">
                  <strong>7.3 Prescription :</strong> Toute action en responsabilité se prescrit par 10 ans à compter de
                  la réception des travaux (responsabilité décennale) ou 2 ans pour les autres responsabilités.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Propriété intellectuelle</h2>
              <div className="text-justify">
                <p>
                  <strong>8.1 Droits d'auteur :</strong> Les plans, calculs et documents produits restent la propriété
                  intellectuelle de B.E StructiBA.
                </p>
                <p className="mt-4">
                  <strong>8.2 Utilisation :</strong> Le client dispose d'un droit d'usage limité au projet objet du
                  contrat. Toute utilisation pour un autre projet nécessite un accord écrit.
                </p>
                <p className="mt-4">
                  <strong>8.3 Reproduction :</strong> La reproduction des documents à des fins commerciales est
                  interdite sans autorisation expresse.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Confidentialité</h2>
              <div className="text-justify">
                <p>
                  B.E StructiBA s'engage à respecter la confidentialité de toutes les informations communiquées par le
                  client dans le cadre de la mission. Cette obligation perdure au-delà de la fin du contrat.
                </p>
                <p className="mt-4">
                  Réciproquement, le client s'engage à ne pas divulguer les méthodes de calcul et savoir-faire de B.E
                  StructiBA.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 - Résiliation</h2>
              <div className="text-justify">
                <p>
                  <strong>10.1 Résiliation par le client :</strong> Le client peut résilier le contrat à tout moment
                  moyennant un préavis de 15 jours. Les prestations déjà réalisées restent dues.
                </p>
                <p className="mt-4">
                  <strong>10.2 Résiliation par B.E StructiBA :</strong> En cas de manquement grave du client
                  (non-paiement, non-fourniture des éléments nécessaires), B.E StructiBA peut résilier le contrat de
                  plein droit après mise en demeure restée sans effet pendant 15 jours.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 - Force majeure</h2>
              <div className="text-justify">
                <p>
                  Sont considérés comme cas de force majeure tous faits ou circonstances irrésistibles, extérieurs aux
                  parties, imprévisibles et indépendants de la volonté des parties, notamment : catastrophes naturelles,
                  guerres, grèves, épidémies, interruptions de transport ou de télécommunications.
                </p>
                <p className="mt-4">
                  La partie concernée devra informer l'autre partie dans les meilleurs délais de la survenance d'un cas
                  de force majeure.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 12 - Règlement des litiges</h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-justify">
                  <strong>12.1 Médiation :</strong> En cas de litige, les parties s'efforceront de trouver une solution
                  amiable. À défaut, elles pourront recourir à une médiation.
                </p>
                <p className="mt-4 text-justify">
                  <strong>12.2 Juridiction :</strong> À défaut d'accord amiable, les tribunaux de Grasse seront seuls
                  compétents, même en cas de pluralité de défendeurs ou d'appel en garantie.
                </p>
                <p className="mt-4 text-justify">
                  <strong>12.3 Droit applicable :</strong> Le présent contrat est soumis au droit français.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 13 - Dispositions diverses</h2>
              <div className="text-justify">
                <p>
                  <strong>13.1 Nullité partielle :</strong> Si une clause des présentes CGV était déclarée nulle, les
                  autres clauses conserveraient leur validité.
                </p>
                <p className="mt-4">
                  <strong>13.2 Modification :</strong> Toute modification des présentes CGV doit faire l'objet d'un
                  avenant écrit signé par les deux parties.
                </p>
                <p className="mt-4">
                  <strong>13.3 Intégralité :</strong> Les présentes CGV constituent l'intégralité de l'accord entre les
                  parties et annulent tout accord antérieur.
                </p>
              </div>
            </section>

            <div className="bg-[#C9A568]/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact et informations</h3>
              <p className="text-justify">
                Pour toute question relative aux présentes CGV ou pour obtenir des informations complémentaires :
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@structiba.fr" className="text-[#C9A568] hover:underline">
                    contact@structiba.fr
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+33493123456" className="text-[#C9A568] hover:underline">
                    04 93 12 34 56
                  </a>
                </li>
                <li>
                  <strong>Adresse :</strong> 263 Avenue de Grasse, 06400 Cannes
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
              <p>Version en vigueur au 1er décembre 2024</p>
              <p className="mt-2">
                B.E StructiBA se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont
                celles en vigueur à la date de signature du devis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
