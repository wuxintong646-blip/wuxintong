"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Brain } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
          <Brain className="h-5 w-5" />
          <span className="font-semibold tracking-tight">Wu xintong</span>
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
