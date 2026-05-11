const entrances = [
  {
    name: 'QingChat',
    href: 'https://chat.qingshanera.com',
    tag: 'AI 对话',
  },
  {
    name: '学习助手',
    href: 'https://study.qingshanera.com',
    tag: '学习',
  },
  {
    name: 'Qing API',
    href: 'https://llm.qingshanera.com',
    tag: 'API调用',
  },
  {
    name: '文档中心',
    href: 'https://docs.qingshanera.com',
    tag: '文档',
  },
  {
    name: '状态页',
    href: 'https://status.qingshanera.com',
    tag: '状态',
  },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-md items-center justify-between gap-4 px-5 py-4 sm:max-w-2xl sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label="青山时代首页"
          >
            <img
              className="size-12 shrink-0 rounded-xl"
              src="/qingshan-era-logo.svg"
              alt="青山时代 Logo"
            />
            <span className="truncate text-lg font-semibold tracking-normal text-slate-950">
              青山时代
            </span>
          </a>

          <div className="min-w-0 shrink text-right">
            <p className="truncate text-sm text-slate-500">www.qingshanera.com</p>
            <p className="mt-1 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Online
            </p>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-1 items-start justify-center px-5 py-7 sm:px-6 sm:py-10">
        <section className="relative w-full max-w-md">
          <div className="absolute inset-x-5 top-8 h-56 rounded-[2rem] bg-cyan-100/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/70">
            <div className="grid gap-3">
              {entrances.map((item) => (
                <a
                  className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3.5 transition hover:border-cyan-200 hover:text-cyan-700"
                  href={item.href}
                  key={item.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="truncate text-base font-medium text-slate-700">
                    {item.name}
                  </span>
                  <span className="shrink-0 text-sm font-medium text-cyan-700">
                    {item.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-6 text-center text-sm leading-7 text-slate-500">
        <p>青山云计算提供服务</p>
        <p>© Qingshan Era Holding Group</p>
      </footer>
    </div>
  )
}

export default App
