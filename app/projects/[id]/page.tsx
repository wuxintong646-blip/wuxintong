import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, TrendingUp, Layers, AlertCircle, CheckCircle2 } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    return {
      title: "项目未找到",
    }
  }
  
  return {
    title: `${project.title} | Wu xintong`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b border-border px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <Button variant="ghost" asChild className="mb-8 gap-2 -ml-4">
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4" />
                返回项目列表
              </Link>
            </Button>
            
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              {project.title}
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-lg bg-destructive/10 p-2.5">
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  问题背景
                </h2>
                <p className="text-sm text-muted-foreground">Problem Statement</p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-lg leading-relaxed text-foreground">
                {project.problem}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-muted/30 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-lg bg-primary/10 p-2.5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  解决方案
                </h2>
                <p className="text-sm text-muted-foreground">Solution Overview</p>
              </div>
            </div>
            
            <div className="mb-8 rounded-2xl border border-border bg-card p-8">
              <p className="text-lg leading-relaxed text-foreground">
                {project.solution}
              </p>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-lg bg-accent/20 p-2.5">
                <Layers className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  技术架构
                </h3>
                <p className="text-sm text-muted-foreground">Architecture Details</p>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {project.architecture.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-lg bg-accent/20 p-2.5">
                <TrendingUp className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  项目成效
                </h2>
                <p className="text-sm text-muted-foreground">Impact & Results</p>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.impact.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <p className="mb-1 text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mb-2 font-medium text-foreground">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links Section */}
        {project.links && project.links.length > 0 && (
          <section className="bg-muted/30 px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    项目链接
                  </h2>
                  <p className="text-sm text-muted-foreground">Project Links</p>
                </div>
              </div>
              
              <div className="rounded-2xl border border-border bg-card p-8">
                <ul className="space-y-4">
                  {project.links.map((link, index) => (
                    <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="font-medium text-foreground">{link.name}</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        {link.note && (
                          <Badge variant="outline" className="text-xs">
                            {link.note}
                          </Badge>
                        )}
                        <Button asChild size="sm" variant="ghost">
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            访问链接
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Prototypes Section */}
        {project.prototypes && project.prototypes.length > 0 && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-accent/20 p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    原型设计
                  </h2>
                  <p className="text-sm text-muted-foreground">Prototypes</p>
                </div>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {project.prototypes.map((prototype, index) => (
                  <div key={index} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-border">
                      <h3 className="font-medium text-foreground">{prototype.title}</h3>
                    </div>
                    <div className="aspect-video p-4">
                      <img 
                        src={prototype.image} 
                        alt={prototype.title} 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Placeholder Section */}
        {project.videoPlaceholder && (
          <section className="bg-muted/30 px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  RPA 自动化打标演示
                </h2>
                <p className="text-sm text-muted-foreground">RPA Automation Demo</p>
                </div>
              </div>
              
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <img 
                  src="/影刀自动化打标.gif" 
                  alt="RPA 自动化打标演示" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>
        )}

        {/* Product Demo Section */}
        {project.productDemo && (
          <section className="bg-gradient-to-b from-background to-muted/20 px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 p-3 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    {project.productDemo.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Product Demo</p>
                </div>
              </div>
              
              <div className="rounded-2xl border border-border/60 bg-card overflow-hidden shadow-xl shadow-primary/5">
                <div className="p-4 border-b border-border/60 bg-gradient-to-r from-muted/50 to-muted/30">
                  <p className="text-sm font-medium text-muted-foreground">产品页面演示</p>
                </div>
                <div className="p-8 bg-gradient-to-b from-background/50 to-muted/10">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-border/40">
                    <img 
                      src={project.productDemo.src} 
                      alt={project.productDemo.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Iframe Demo Section */}
        {project.iframeDemo && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg bg-accent/20 p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    {project.iframeDemo.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">Prototype Demo</p>
                </div>
              </div>
              
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
                <div className="p-4 border-b border-border bg-muted/30">
                  <p className="text-sm text-muted-foreground">原型文件展示</p>
                </div>
                <iframe 
                  src={project.iframeDemo.src}
                  title={project.iframeDemo.title}
                  className="w-full h-[800px] border-0"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="border-t border-border px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/#projects">
                  <ArrowLeft className="h-4 w-4" />
                  查看更多项目
                </Link>
              </Button>
              <Button asChild className="gap-2">
                <Link href="/#contact">
                  联系我讨论更多
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
