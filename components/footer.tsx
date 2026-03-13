import { Brain } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Brain className="h-4 w-4" />
          <span className="text-sm">Wu xintong</span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        
        <nav className="flex items-center gap-6">
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
      </div>
    </footer>
  )
}
