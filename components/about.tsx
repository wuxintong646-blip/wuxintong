import { Sparkles, Target, Users, Zap } from "lucide-react"

const skills = [
  {
    icon: Sparkles,
    title: "AI 算法与原理",
    description: "深度理解 Transformer、BERT 等主流大模型底层架构及 MCP 协议原理；熟练掌握传统机器学习（LightGBM、SVM、随机森林）及深度学习框架（PyTorch）"
  },
  {
    icon: Target,
    title: "AI 工作流与自动化",
    description: "熟悉 Dify 智能体架构（Chatflow、Agent、条件分支）和React框架原理；熟练使用影刀 RPA 搭建自动化数据链路；具备通过 Python 调用模型 API 进行本地大规模数据批量处理与打标的实战经验"
  },
  {
    icon: Users,
    title: "产品设计与开发工具",
    description: "使用 Figma AI 及 v0 结合trae进行过高效产品原型设计；使用 Axure 绘制过复杂交互逻辑与产品线框图"
  },
  {
    icon: Zap,
    title: "数据工程与语言",
    description: "精通 Python 数据分析栈（Pandas、Numpy、Scikit-learn）；熟练编写 SQL 进行复杂数据提取；英语六级"
  }
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            关于我
          </h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">
              暨南大学应用统计学硕士在读（2025.09-至今），本科毕业于河北工业大学应用统计学专业（GPA: 3.40，专业前 30%）。主修课程包括数据分析、统计学原理、应用回归分析、机器学习、深度学习与大数据分析、数据库原理等。
            </p>
            <p className="leading-relaxed text-muted-foreground">
              中共预备党员，现居广州市天河区。具备扎实的统计学与数据分析基础，结合 AI 技术与产品思维，致力于推动 AI 产品在企业级应用中的落地。
            </p>
            <p className="leading-relaxed text-muted-foreground">
              在 AI 产品领域拥有丰富的实战经验，参与了多个从 0 到 1 的核心项目，涵盖舆情监测、数据自动化、Agent 架构、品牌实体库清洗等领域。
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <skill.icon className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">{skill.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
