import { projects } from "@/lib/projects"
import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            精选项目
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            以下是我做过的代表性AI产品项目，每个项目都经历了完整的产品生命周期，从需求分析到上线运营。
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
