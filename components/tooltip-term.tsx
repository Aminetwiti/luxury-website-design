"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import type { ReactNode } from "react"

export default function TooltipTerm({
  term = "RDM",
  children,
}: {
  term?: string
  children?: ReactNode
} = {}) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="inline-flex items-center gap-1 underline decoration-dotted underline-offset-4">
            <span>{term}</span>
            <Info className="size-3.5 text-[var(--lux-gold)]" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="text-xs">
            {children || "Résistance des matériaux : discipline qui étudie la résistance des structures."}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
