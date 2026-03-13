import Link from "next/link"
import { ArrowUpRight, Brain, Database, Sparkles, Target, Layers, Zap } from "lucide-react"
import type { Project } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: Project
}

const categoryIcons: Record<string, any> = {
  "AI Monitoring": Brain,
  "Data Analytics": Database,
  "AI Agent": Sparkles,
  "Data Visualization": Target,
  "Prompt Engineering": Layers,
  "Data Cleaning": Zap
}

const categoryGradients: Record<string, string> = {
  "AI Monitoring": "from-blue-500/20 to-cyan-500/20",
  "Data Analytics": "from-purple-500/20 to-pink-500/20",
  "AI Agent": "from-green-500/20 to-emerald-500/20",
  "Data Visualization": "from-orange-500/20 to-amber-500/20",
  "Prompt Engineering": "from-indigo-500/20 to-violet-500/20",
  "Data Cleaning": "from-teal-500/20 to-cyan-500/20"
}

export function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = categoryIcons[project.category] || Brain
  const gradient = categoryGradients[project.category] || "from-primary/20 to-accent/20"

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-30">
                <IconComponent className="h-32 w-32 text-primary" />
              </div>
              <div className="relative">
                <IconComponent className="h-20 w-20 text-primary/60" />
              </div>
            </div>
          </div>
        )}
        <div className="absolute right-4 top-4 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-foreground" />
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {project.category}
          </Badge>
        </div>
        
        <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
