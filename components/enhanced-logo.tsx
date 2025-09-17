import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "compact" | "icon"
  className?: string
  showSubtitle?: boolean
  size?: "sm" | "md" | "lg"
}

export default function EnhancedLogo({ variant = "full", className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <Link href="/" className={cn("block hover:opacity-80 transition-opacity duration-300", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <Image src="/images/logo-structiba-icon.png" alt="B.E Structiba" fill className="object-contain" priority />
      </div>
    </Link>
  )
}
