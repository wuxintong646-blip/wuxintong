export interface Project {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  problem: string
  solution: string
  architecture: string[]
  impact: {
    metric: string
    value: string
    description: string
  }[]
  timeline: string
  role: string
  links?: {
    name: string
    url: string
    note?: string
  }[]
  prototypes?: {
    title: string
    image: string
  }[]
  videoPlaceholder?: boolean
  iframeDemo?: {
    title: string
    src: string
  }
  productDemo?: {
    title: string
    src: string
  }
}

export const projects: Project[] = [
  {
    id: "geo-standard-product",
    title: "GEO 标品 - AI 准确度监控模块",
    description: "核心产品筹备，监测和评估品牌信息在主流 AI 大模型中的露出准确率",
    category: "AI Monitoring",
    tags: ["RPA", "AI Testing", "Data Visualization", "Product Management"],
    image: "/kb-prototype.png",
    problem: "针对生成式引擎优化（GEO）业务需求，公司需研发一款标准化数据看板产品，用于监测和评估品牌信息在主流 AI 大模型（如豆包、DeepSeek、Kimi 等）中的露出准确率，并辅助用户定位 AI 认知短板，从而优化企业专属知识库。",
    solution: "在该项目的 0 到 1 阶段，本人跨界承担了\"数据测试与业务流跑通\"及\"产品经理\"的双重角色，核心工作分为三个阶段：\n\n1）业务流可行性验证（RPA 自动化与 AI 打标测试）\n使用影刀 RPA 搭建自动化脚本，模拟用户向各网页版 AI 发送预设监测问题，并自动提取回答文本。设计 AI 打标 Prompt，基于上传的品牌知识库制定严密的校验逻辑。\n\n2）产品交互与视觉原型设计\n根据前期跑通的测试数据流和业务诉求，历经多版迭代，独立绘制了高保真产品原型，包括知识库管理模块和 AI 准确度看板模块。\n\n3）需求规格说明书（PRD）撰写\n基于终版原型，撰写了严密、具有高可开发性的 PRD 文档，包含核心功能逻辑定义、图表与交互规范、详尽的异常流设计。",
    architecture: [
      "顶部概览指标卡：展示最新监测任务进度、周期及覆盖的 AI 平台",
      "品牌信息露出准确度达标情况（热力图）：对比展示各家大模型信息准确度的达标情况",
      "问题与答案联动视图（左右分栏）：左侧问题列表，右侧答案详情",
      "不准确/准确答案信源分析（条形图/表格）：针对打标为\"不准确\"的问答进行归因溯源",
      "无法判断的答案与知识库优化：提取打标为\"无法判断\"的答案，系统自动提炼优化建议"
    ],
    impact: [
      { metric: "项目状态", value: "已上线", description: "前期可行性验证已通过，原型设计与 PRD 已定稿，已经正式接入数据开发上线了第一版" },
      { metric: "核心价值", value: "商业闭环", description: "形成\"监控 - 发现盲区 - 优化知识库 - 提升 AI 回答准确度\"的完整闭环" },
      { metric: "技术创新", value: "RPA+AI", description: "结合影刀 RPA 自动化与 AI 打标测试，验证大模型对比打标的可行性与准确度" },
      { metric: "产品质量", value: "高可开发性", description: "PRD 规划中充分考虑了极端异常场景，为后续研发的高效接入奠定了扎实基础" }
    ],
    timeline: "2026.02 - 至今",
    role: "产品负责人（兼数据测试）",
    links: [
      { name: "准确度看板", url: "https://v0-project-gilt-mu.vercel.app/", note: "需要 VPN 才能访问" },
      { name: "知识库管理", url: "https://v0-project-7m-seven.vercel.app/", note: "需要 VPN 才能访问" },
      { name: "需求文档飞书链接", url: "https://acne5axgnlx1.feishu.cn/wiki/M5UbwvfBtiaaFZkjQc0cywYqn0d?from=from_copylink" }
    ],
    videoPlaceholder: true
  },
  {
    id: "vivo-data-analysis",
    title: "vivo 自动化数据分析引擎",
    description: "自动化底层基建专项，解决数据分析师人工拉取数据和小红书反爬导致的数据失真问题",
    category: "Data Analytics",
    tags: ["数据自动化", "反爬策略", "声量拟合", "ETL 提效"],
    image: "/analysis-workflow.png",
    problem: "针对内部数据分析师重度依赖人工拉取数据（耗时且易错），以及小红书平台强反爬策略导致品牌声量数据严重失真等痛点，需推进自动化底层基建专项，大幅削减分析师重复性 ETL 取数工作，实现报表输出显著提效。",
    solution: "1. 自动化底表建设与提效：搭建 4 大自动化底表（全网 UV/声量大盘、红/抖拆解表），固定 T-50 至 T+50 核心营销观测窗口。将数据颗粒度精细下钻至平台圈层（OGC/KOS/KOL/UGC）与爆文层级（百/千/万赞），负责生成原型并根据后续原型调整并撰写产品需求文档。\n\n2. 小红书反爬声量拟合模型（核心亮点）：针对小红书数据抓取受限导致水位断崖下跌的难题，协助拉数确定年度增长系数，设计了\"动态基准拟合算法（推算系数工具）\"。\n\n建模逻辑：提取\"emo、yyds、种草\"等 不受季节性影响的常规大众词作为大盘水位基准线。通过公式 （当年抓取量 * 年度增长系数） / （当日常规词抓取量 / 基年基准均值） 计算出动态补偿系数，成功校准并还原了失真的真实品牌声量。",
    architecture: [
      "4 大自动化底表：全网 UV/声量大盘、红/抖拆解表",
      "T-50 至 T+50 核心营销观测窗口",
      "多层级数据颗粒度：平台圈层（OGC/KOS/KOL/UGC）",
      "爆文层级分类：百/千/万赞层级",
      "动态基准拟合算法：常规大众词水位基准线"
    ],
    impact: [
      { metric: "项目状态", value: "已上线", description: "数说雷达页面已投入使用" },
      { metric: "提效成果", value: "自动化底表", description: "削减分析师重复性 ETL 取数工作，报表输出显著提效" },
      { metric: "技术创新", value: "声量拟合模型", description: "动态基准拟合算法成功校准并还原失真的真实品牌声量" },
      { metric: "数据质量", value: "高还原度", description: "通过常规大众词水位基准线实现精准的声量补偿" }
    ],
    timeline: "2026.01 - 2026.03",
    role: "产品负责人",
    iframeDemo: {
      title: "vivo 声量底表原型",
      src: "/vivo0304.html"
    }
  },
  {
    id: "seeding-recommender-agent",
    title: "种草达人推荐智能体 - 账号分析商业价值模块",
    description: "标准化账号分析流程设计与 AI 分析 Prompt 框架，实现从原始数据到专业报告的自动化闭环",
    category: "AI Agent",
    tags: ["Agent 架构", "Dify", "Prompt 工程", "数据分析"],
    image: "/社媒智能体.png",
    problem: "核心任务：设计一套标准化的账号分析流程，包括核心评价指标（字段）定义及 AI 分析 Prompt 框架。且为验证设计方案的落地可行性，利用 Dify 搭建了 Task B（商业价值评估）的功能原型，通过实际工作流跑通了从\"原始数据\"到\"专业报告\"的自动化闭环。",
    solution: "阶段一：全流程方案设计 (Paper Design)\n设计了一套涵盖 A、B、C 三大维度的账号全生命周期分析框架：\n- Task A：风险评估（政治、道德、法律、商业风险）\n- Task B：商业价值评估（核心评估点，涉及市场站位、粉丝质量、成长归因等）\n- Task C：内容特征挖掘（人设定位分析、爆文分析等）\n目前已完成全流程字段定义及 Task B 的深度分析逻辑梳理。\n\n阶段二：Task B 原型逻辑实现 (Dify)\n为了测试 Prompt 的极限和数据的处理逻辑，在 Dify 中将 Task B 工业化：\n- 三段式架构验证：前台意图层（参数提取器）、中台预处理（Python 脚本转化中文事实清单）、后台逻辑路由\n- 评价模型落地：在提示词中嵌入\"行业均值对比\"、\"动态阈值判定\"等专业经验，减少 AI 幻觉，提供具备博弈参考价值的专业建议",
    architecture: [
      "前台意图层：参数提取器解决用户输入不规范问题",
      "中台预处理：Python 脚本将杂乱 JSON 转化为 LLM 易理解的中文事实清单",
      "后台逻辑路由：针对不同分析请求进行智能路由分发",
      "评价模型：行业均值对比、动态阈值判定等专业经验嵌入"
    ],
    impact: [
      { metric: "项目状态", value: "实盘联调", description: "流程大纲与评价指标体系已完成设计，Task B 核心逻辑开发与 Agent 架构搭建已完成" },
      { metric: "技术创新", value: "三段式架构", description: "前台意图层 + 中台预处理 + 后台逻辑路由的完整架构" },
      { metric: "数据质量", value: "零幻觉", description: "通过中文事实清单预处理，彻底解决 AI 乱编数据的痛点" },
      { metric: "专业度", value: "行业标准", description: "嵌入行业均值对比、动态阈值判定等专业经验" }
    ],
    timeline: "2026.01 - 至今",
    role: "产品负责人",
    links: [
      { name: "Dify 智能体原型", url: "https://udify.app/chat/DjNJ035mWgVKWDT3", note: "需要 VPN" }
    ],
    prototypes: [
      { title: "智能体页面", image: "/智能体页面.png" },
      { title: "账号分析流程表", image: "/账号分析流程表.png" }
    ]
  },
  {
    id: "vivo-brand-monitoring",
    title: "vivo 品牌全网舆情与本竞品监测看板",
    description: "搭建全网本竞品可视化数据看板，支持公关与媒介团队在新机发布周期的舆情监控与敏捷决策",
    category: "Data Visualization",
    tags: ["舆情监测", "竞品分析", "数据看板", "PRD"],
    image: "/analysis-workflow.png",
    problem: "为支持 vivo 公关与媒介团队在新机发布周期的舆情监控与敏捷决策，需搭建全网本竞品（涵盖 vivo、OPPO、小米、苹果、华为等）可视化数据看板。",
    solution: "1. 需求梳理与原型规划：深入调研公关大盘与媒介微观视角的业务差异，将看板拆分为\"媒介热度、媒介口碑、公关大盘\"三大核心模块。绘制交互原型，并输出包含详细底层字段定义的完整 PRD。\n\n2. 交互设计与逻辑抽象：定义多维图表（堆叠图、多折线）的展示规范及本竞品对齐排序逻辑；设计并优化复杂筛选链路（如：筛选项二三级联动、优质原帖联动）。\n\n3. 数据质检与 UAT 验收：统筹上线前的 UAT（用户验收测试）。排查并维护极端边界情况（空值/0 值显示规范）；深入底层核对数据准确性，跨部门协同研发定位并解决了\"UV 数据与总声量口径不齐\"的底层逻辑异常。",
    architecture: [
      "媒介热度模块：全网热度趋势、平台分布、爆文分析",
      "媒介口碑模块：口碑评价、情感分析、用户反馈",
      "公关大盘模块：宏观水位、品牌对比、舆情预警",
      "多维图表：堆叠图、多折线图、本竞品对齐排序"
    ],
    impact: [
      { metric: "项目状态", value: "已上线", description: "二期成功上线，满足业务侧核心看数需求" },
      { metric: "覆盖品牌", value: "5+", description: "涵盖 vivo、OPPO、小米、苹果、华为等主流品牌" },
      { metric: "迭代优化", value: "20 项+", description: "推进 20 余项体验优化，包括图表下钻、导出规范等" },
      { metric: "数据质量", value: "口径统一", description: "解决 UV 数据与总声量口径不齐的底层逻辑异常" }
    ],
    timeline: "2026.01 - 2026.03",
    role: "产品负责人",
    productDemo: {
      title: "产品页面演示",
      src: "/vivochanping.gif"
    }
  },
  {
    id: "kol-prompt-optimization",
    title: "达人画像标签打标提示词优化工程",
    description: "基于 GPT-4o 结构化提取标签的 Prompt 策略优化，提升 KOL 达人推荐与账号评估精准度",
    category: "Prompt Engineering",
    tags: ["Prompt 优化", "GPT-4o", "标签体系", "数据清洗"],
    problem: "为提升 KOL 达人推荐与账号评估的精准度，针对抖音、小红书双平台十万量级短视频数据，需优化基于 GPT-4o 结构化提取标签（内容形式、内容主题、达人人设）的 Prompt 策略。",
    solution: "1. Prompt 策略优化：针对仅有文本输入（ASR/OCR/标题）难以判断视频视觉形式的痛点，设计抗干扰机制和少样本学习。通过\"语义主导原则\"过滤口播广告与 BGM 歌词噪声去优化 prompt，成功解决\"伪关键词\"导致的误判问题。\n\n2. 标签体系清洗：主导标签体系的数据覆盖度分析，通过抽样检测发现并剔除 10%+ 的\"无数据/低频\"冗余一级标签，与产品经理协作精简标签库，提升了下游检索效率。",
    architecture: [
      "语义主导原则：过滤口播广告与 BGM 歌词噪声",
      "抗干扰机制：减少伪关键词导致的误判",
      "少样本学习：提升模型对视觉形式的判断能力",
      "分层抽样验证：建立并推行分层抽样验证体系"
    ],
    impact: [
      { metric: "抖音内容主题", value: "+14%", description: "整体准确率提升 14%"  },
      { metric: "抖音内容形式", value: "+10%", description: "整体准确率提升 10%" },
      { metric: "小红书内容形式", value: "+12%", description: "整体准确率提升 12%" },
      { metric: "标签精简", value: "10%+", description: "剔除无数据/低频冗余一级标签" }
    ],
    timeline: "2025.12 - 2026.12",
    role: "Prompt 优化工程",
    iframeDemo: {
      title: "提示词优化报告",
      src: "/promptConclution.html"
    }
  },
  {
    id: "brand-entity-cleaning",
    title: "基于 LLM 的品牌实体库清洗与归一对齐",
    description: "解决品牌名称杂乱导致的检索遗漏问题，产出品牌标准归一码表，提升下游向量化检索准确率",
    category: "Data Cleaning",
    tags: ["LLM", "数据清洗", "实体归一化", "品牌识别"],
    problem: "为支持下游\"品牌声量监测\"与\"商单舆情分析\"业务，解决社区帖文中品牌名称杂乱（如中英混写、绰号、拼写错误）导致的检索遗漏问题。",
    solution: "从 5 万条原始品牌库中，基于 ROI 截取发帖量 TOP 的 2 万条核心商单品牌数据。制定严谨的实体归一化，明确\"官方中文优先\"、\"系列归主品牌\"、\"独立子品牌隔离（如小米汽车不合入小米）\"等核心业务规则。\n\nLLM 提效与打标：设计结构化 Prompt，利用大模型完成 2 万条品牌数据的批量清洗、去噪（剔除旗舰店/代购等后缀），并精准划分至 3C、美妆个护、汽车、母婴等 6 大核心行业。",
    architecture: [
      "数据筛选：基于 ROI 截取发帖量 TOP 2 万条核心商单品牌",
      "实体归一化规则：官方中文优先、系列归主品牌、独立子品牌隔离",
      "LLM 批量清洗：结构化 Prompt 设计，完成去噪与行业分类",
      "行业分类：3C、美妆个护、汽车、母婴等 6 大核心行业"
    ],
    impact: [
      { metric: "数据规模", value: "2 万+", description: "从 5 万条原始数据中筛选出 2 万条核心商单品牌" },
      { metric: "行业覆盖", value: "6 大", description: "精准划分至 3C、美妆个护、汽车、母婴等 6 大核心行业" },
      { metric: "交付成果", value: "已交付", description: "产出《品牌标准归一码表》，已用于多个下游任务" },
      { metric: "业务价值", value: "召回率提升", description: "显著提升下游向量化检索准确率与舆情监测召回率" }
    ],
    timeline: "2026.01 - 2026.01",
    role: "产品负责人",
    prototypes: [
      { title: "品牌归一码表示例", image: "/品牌归一码表示例.png" }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}
