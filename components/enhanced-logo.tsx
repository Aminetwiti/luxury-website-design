import Image from "next/image"
import Link from "next/link"

export default function EnhancedLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        <Image
          src="/images/logo-structiba-final.jpg"
          alt="B.E Structiba - Ingénieur Béton & Structures"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden md:block">
        <div className="text-xl font-bold text-gray-900">B.E Structiba</div>
        <div className="text-sm text-gray-600">Ingénieur Béton & Structures</div>
      </div>
    </Link>
  )
}
