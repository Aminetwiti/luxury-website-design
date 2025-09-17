"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  className?: string
}

export default function EnhancedLogo({ size = "lg", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
    xl: "h-20 w-auto",
    xxl: "h-24 w-auto",
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src="/images/logo-structiba-icon.png"
          alt="B.E Structiba"
          width={96}
          height={96}
          className={`${sizeClasses[size]} object-contain transition-all duration-300 hover:scale-105`}
          priority
        />
      </div>
    </Link>
  )
}
