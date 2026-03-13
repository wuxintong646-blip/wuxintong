import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
