import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
              应用统计硕士
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              邬欣彤
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              暨南大学应用统计学硕士在读，专注于 AI 产品与数据智能方向。具备扎实的数据分析基础与大模型技术理解，善于将统计学方法应用于产品决策与用户体验优化。
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              熟练掌握 AI 工作流与自动化（Dify、影刀 RPA、Python），具备 AI 产品落地的实战经验。曾参与 GEO 标品、vivo 自动化数据分析引擎、种草达人推荐智能体等多个核心项目。
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/#projects">
                  查看项目
                  <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-3xl font-bold text-foreground">22</p>
                  <p className="text-sm text-muted-foreground">年龄</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-3xl font-bold text-foreground">硕士</p>
                  <p className="text-sm text-muted-foreground">在读</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-3xl font-bold text-foreground">6+</p>
                  <p className="text-sm text-muted-foreground">核心项目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
