import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--lux-border)] mt-16 bg-white"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 py-10">
        <h2 id="footer-heading" className="sr-only">
          Informations de contact et liens du site
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo et description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="size-5 rounded-full bg-[var(--lux-gold)]" aria-hidden="true" role="img" />
              <span className="text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                Atelier Structure
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ingénierie structurale & construction durable haut de gamme.
            </p>

            {/* Informations de contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-4" aria-hidden="true" />
                <a
                  href="tel:+33142123456"
                  className="hover:text-[var(--lux-gold)] focus-visible"
                  aria-label="Téléphoner au 01 42 12 34 56"
                >
                  01 42 12 34 56
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4" aria-hidden="true" />
                <a
                  href="mailto:contact@atelier-structure.fr"
                  className="hover:text-[var(--lux-gold)] focus-visible"
                  aria-label="Envoyer un email à contact@atelier-structure.fr"
                >
                  contact@atelier-structure.fr
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="size-4 mt-0.5" aria-hidden="true" />
                <address className="not-italic">
                  123 Avenue des Champs-Élysées
                  <br />
                  75008 Paris, France
                </address>
              </div>
            </div>
          </div>

          {/* Navigation du site */}
          <nav aria-labelledby="sitemap-heading">
            <h3 id="sitemap-heading" className="text-sm font-semibold mb-3">
              Plan du site
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rehabilitation" className="hover:text-[var(--lux-gold)] focus-visible">
                  Réhabilitation
                </Link>
              </li>
              <li>
                <Link href="/construction-neuve" className="hover:text-[var(--lux-gold)] focus-visible">
                  Construction neuve
                </Link>
              </li>
              <li>
                <Link href="/developpement-durable" className="hover:text-[var(--lux-gold)] focus-visible">
                  Développement durable
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-[var(--lux-gold)] focus-visible">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-[var(--lux-gold)] focus-visible">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[var(--lux-gold)] focus-visible">
                  À propos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Liens légaux */}
          <nav aria-labelledby="legal-heading">
            <h3 id="legal-heading" className="text-sm font-semibold mb-3">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="hover:text-[var(--lux-gold)] focus-visible">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-[var(--lux-gold)] focus-visible">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="hover:text-[var(--lux-gold)] focus-visible">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/accessibilite" className="hover:text-[var(--lux-gold)] focus-visible">
                  Accessibilité
                </Link>
              </li>
            </ul>
          </nav>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Suivez-nous</h3>
            <div className="flex items-center gap-4" role="list">
              <Link
                href="https://instagram.com/atelier-structure"
                aria-label="Suivre Atelier Structure sur Instagram"
                className="hover:text-[var(--lux-gold)] focus-visible"
                role="listitem"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://linkedin.com/company/atelier-structure"
                aria-label="Suivre Atelier Structure sur LinkedIn"
                className="hover:text-[var(--lux-gold)] focus-visible"
                role="listitem"
              >
                <Linkedin className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://facebook.com/atelier-structure"
                aria-label="Suivre Atelier Structure sur Facebook"
                className="hover:text-[var(--lux-gold)] focus-visible"
                role="listitem"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Certifications */}
            <div className="mt-4">
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Certifications</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>ISO 9001</span>
                <span>•</span>
                <span>HQE</span>
                <span>•</span>
                <span>CSTB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--lux-border)]">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Structure. Tous droits réservés.</p>
          <p>Conçu pour l'excellence technique et esthétique.</p>
        </div>
      </div>
    </footer>
  )
}
