export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              一起聊聊？
            </h2>
            <p className="mb-8 text-muted-foreground">
              欢迎随时联系我~
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground">
              <div>邮箱：2635813902@qq.com</div>
              <div>电话：15007343069</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
