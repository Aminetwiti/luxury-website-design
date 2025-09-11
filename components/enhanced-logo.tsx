import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "compact" | "icon"
  className?: string
  showSubtitle?: boolean
}

export default function EnhancedLogo({ variant = "full", className, showSubtitle = true }: LogoProps) {
  const LogoIcon = () => (
    <div className="relative">
      {/* Icône Structure - Hexagone avec poutres */}
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#1C1C1C]" aria-hidden="true">
        {/* Hexagone extérieur */}
        <path d="M20 2 L32 10 L32 30 L20 38 L8 30 L8 10 Z" fill="currentColor" stroke="#C9A568" strokeWidth="2" />

        {/* Structure interne - poutres */}
        <g stroke="#C9A568" strokeWidth="2.5" fill="none">
          {/* Poutre horizontale principale */}
          <line x1="12" y1="20" x2="28" y2="20" />
          {/* Poutre verticale principale */}
          <line x1="20" y1="12" x2="20" y2="28" />
          {/* Poutres diagonales de renfort */}
          <line x1="15" y1="15" x2="25" y2="25" />
          <line x1="25" y1="15" x2="15" y2="25" />
        </g>

        {/* Points de connexion structurelle */}
        <g fill="#C9A568">
          <circle cx="20" cy="20" r="2.5" />
          <circle cx="15" cy="15" r="1.5" />
          <circle cx="25" cy="15" r="1.5" />
          <circle cx="15" cy="25" r="1.5" />
          <circle cx="25" cy="25" r="1.5" />
        </g>
      </svg>
    </div>
  )

  if (variant === "icon") {
    return (
      <Link href="/" className={cn("block", className)}>
        <LogoIcon />
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={cn("flex items-center space-x-3 group transition-all duration-300 hover:scale-105", className)}
    >
      <LogoIcon />

      <div className="flex flex-col">
        <div className="flex items-baseline space-x-0">
          <span
            className="text-xl md:text-2xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            B.E Structi
          </span>
          <span
            className="text-xl md:text-2xl font-bold text-[#C9A568]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            BA
          </span>
        </div>

        {showSubtitle && variant === "full" && (
          <span className="text-xs text-gray-600 tracking-wide">Bureau d'Études Structure</span>
        )}
      </div>
    </Link>
  )
}
