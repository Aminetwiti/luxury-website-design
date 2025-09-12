import Image from "next/image"

export const metadata = {
  title: "Politique de Confidentialité — B.E StructiBA",
  description: "Politique de confidentialité et protection des données personnelles de B.E StructiBA, conforme RGPD.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/Privacy_Data_Protection.jpg"
            alt="Protection des données personnelles"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Politique de Confidentialité</h1>
            <p className="text-xl text-gray-300">Protection des données personnelles conforme RGPD</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-justify">
                <strong>
                  B.E StructiBA s'engage à protéger la confidentialité et la sécurité des données personnelles de ses
                  clients, prospects et visiteurs de son site web, conformément au Règlement Général sur la Protection
                  des Données (RGPD) et à la loi Informatique et Libertés.
                </strong>
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg text-justify">
                <p>
                  <strong>Responsable :</strong> B.E StructiBA
                </p>
                <p>
                  <strong>Adresse :</strong> 263 Avenue de Grasse, 06400 Cannes, France
                </p>
                <p>
                  <strong>Email :</strong> contact@structiba.fr
                </p>
                <p>
                  <strong>Téléphone :</strong> 04 93 12 34 56
                </p>
                <p>
                  <strong>Délégué à la Protection des Données :</strong> contact@structiba.fr
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
              <div className="text-justify">
                <p>Nous collectons les données personnelles suivantes :</p>

                <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Données d'identification</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Raison sociale (pour les professionnels)</li>
                  <li>Fonction/poste occupé</li>
                  <li>Adresse postale</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse email</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Données de navigation</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Données de géolocalisation approximative</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3">2.3 Données de projet</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Description du projet</li>
                  <li>Localisation du projet</li>
                  <li>Budget prévisionnel</li>
                  <li>Délais souhaités</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
              <div className="text-justify">
                <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Gestion commerciale</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Traitement des demandes de devis</li>
                      <li>• Suivi de la relation client</li>
                      <li>• Facturation et comptabilité</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Communication</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Réponse aux demandes d'information</li>
                      <li>• Envoi de newsletters (avec consentement)</li>
                      <li>• Information sur nos services</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Obligations légales</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Conservation des documents comptables</li>
                      <li>• Respect des obligations fiscales</li>
                      <li>• Archivage légal des contrats</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Amélioration des services</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Analyse de la fréquentation du site</li>
                      <li>• Amélioration de l'expérience utilisateur</li>
                      <li>• Statistiques anonymisées</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
              <div className="text-justify">
                <p>Le traitement de vos données personnelles repose sur :</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>L'exécution du contrat :</strong> pour la réalisation des prestations d'ingénierie
                  </li>
                  <li>
                    <strong>L'intérêt légitime :</strong> pour la prospection commerciale et l'amélioration de nos
                    services
                  </li>
                  <li>
                    <strong>Le consentement :</strong> pour l'envoi de newsletters et communications marketing
                  </li>
                  <li>
                    <strong>L'obligation légale :</strong> pour la conservation des documents comptables et fiscaux
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
              <div className="text-justify">
                <p>Vos données personnelles peuvent être communiquées à :</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Personnel autorisé :</strong> ingénieurs, assistants, direction
                  </li>
                  <li>
                    <strong>Prestataires techniques :</strong> hébergeur web, service de messagerie
                  </li>
                  <li>
                    <strong>Partenaires :</strong> sous-traitants techniques (avec accord contractuel de
                    confidentialité)
                  </li>
                  <li>
                    <strong>Autorités :</strong> uniquement en cas d'obligation légale ou judiciaire
                  </li>
                </ul>
                <p className="mt-4">Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Données clients</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Contrats : 10 ans (responsabilité décennale)</li>
                      <li>• Factures : 10 ans (obligation comptable)</li>
                      <li>• Correspondances : 5 ans</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Données prospects</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Devis non signés : 3 ans</li>
                      <li>• Contacts commerciaux : 3 ans</li>
                      <li>• Données de navigation : 13 mois</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
              <div className="text-justify">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit d'accès</h3>
                    <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                  </div>

                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit de rectification</h3>
                    <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                  </div>

                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit à l'effacement</h3>
                    <p className="text-sm">Demander la suppression de vos données</p>
                  </div>

                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit d'opposition</h3>
                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                  </div>

                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit à la portabilité</h3>
                    <p className="text-sm">Récupérer vos données dans un format structuré</p>
                  </div>

                  <div className="border border-[#C9A568] p-4 rounded-lg">
                    <h3 className="font-semibold text-[#C9A568] mb-2">Droit de limitation</h3>
                    <p className="text-sm">Limiter le traitement de vos données</p>
                  </div>
                </div>

                <p className="mt-6">
                  Pour exercer ces droits, contactez-nous à :{" "}
                  <a href="mailto:contact@structiba.fr" className="text-[#C9A568] hover:underline">
                    contact@structiba.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
              <div className="text-justify">
                <p>
                  B.E StructiBA met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                  données :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Chiffrement :</strong> transmission sécurisée par protocole HTTPS
                  </li>
                  <li>
                    <strong>Accès restreint :</strong> limitation de l'accès aux seules personnes autorisées
                  </li>
                  <li>
                    <strong>Sauvegarde :</strong> copies de sécurité régulières et sécurisées
                  </li>
                  <li>
                    <strong>Formation :</strong> sensibilisation du personnel à la protection des données
                  </li>
                  <li>
                    <strong>Audit :</strong> contrôles réguliers des mesures de sécurité
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies et technologies similaires</h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-justify">Notre site utilise des cookies pour :</p>
                <ul className="list-disc pl-6 mt-4 space-y-1">
                  <li>Assurer le bon fonctionnement du site (cookies techniques)</li>
                  <li>Analyser la fréquentation (cookies analytiques)</li>
                  <li>Améliorer votre expérience de navigation</li>
                </ul>
                <p className="mt-4 text-justify">
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du
                  site pourraient être limitées.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Transferts de données</h2>
              <div className="text-justify">
                <p>
                  Vos données personnelles sont hébergées en France et dans l'Union Européenne. En cas de transfert vers
                  un pays tiers, nous nous assurons que des garanties appropriées sont mises en place conformément au
                  RGPD.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Réclamations</h2>
              <div className="text-justify">
                <p>
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous
                  avez le droit d'introduire une réclamation auprès de la CNIL :
                </p>
                <div className="mt-4 bg-red-50 p-4 rounded-lg">
                  <p>
                    <strong>CNIL</strong>
                  </p>
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 PARIS CEDEX 07</p>
                  <p>Téléphone : 01 53 73 22 22</p>
                  <p>
                    Site web :{" "}
                    <a href="https://www.cnil.fr" className="text-[#C9A568] hover:underline">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications de la politique</h2>
              <div className="text-justify">
                <p>
                  B.E StructiBA se réserve le droit de modifier la présente politique de confidentialité à tout moment.
                  Toute modification sera portée à votre connaissance par publication sur cette page avec indication de
                  la date de mise à jour.
                </p>
              </div>
            </section>

            <div className="bg-[#C9A568]/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact - Protection des données</h3>
              <p className="text-justify">
                Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits :
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@structiba.fr" className="text-[#C9A568] hover:underline">
                    contact@structiba.fr
                  </a>
                </li>
                <li>
                  <strong>Courrier :</strong> B.E StructiBA - DPO, 263 Avenue de Grasse, 06400 Cannes
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a href="tel:+33493123456" className="text-[#C9A568] hover:underline">
                    04 93 12 34 56
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-200">
              <p>Dernière mise à jour : 1er décembre 2024</p>
              <p className="mt-2">
                Cette politique de confidentialité est conforme au RGPD (Règlement UE 2016/679) et à la loi Informatique
                et Libertés modifiée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
