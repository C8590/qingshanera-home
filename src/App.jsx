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
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="青山时代首页">
            <img
              className="size-10 shrink-0"
              src="/qingshan-era-logo.svg"
              alt="青山时代 Logo"
            />
            <span className="text-base font-semibold tracking-normal text-slate-950">
              青山时代
            </span>
          </a>
          <a
            className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-cyan-200 hover:text-cyan-700 sm:inline-flex"
            href="https://status.qingshanera.com"
          >
            服务状态
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-1 items-center">
        <section className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-4 inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 lg:mx-0">
              QingShan Era · Learning · AI
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
              青山时代
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              一个面向学习、AI 工具与个人项目的统一入口。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-700"
                href="https://chat.qingshanera.com"
              >
                进入 QingChat
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-700"
                href="https://status.qingshanera.com"
              >
                查看状态页
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-x-5 top-8 h-56 rounded-[2rem] bg-cyan-100/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/70">
              <div className="border-b border-slate-200 bg-white px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      className="size-11 shrink-0"
                      src="/qingshan-era-logo.svg"
                      alt=""
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-950">
                        青山时代入口
                      </p>
                      <p className="truncate text-xs text-slate-500">www.qingshanera.com</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Online
                  </span>
                </div>
              </div>
              <div className="grid gap-3 p-5">
                {entrances.map((item) => (
                  <a
                    className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-cyan-200 hover:text-cyan-700"
                    href={item.href}
                    key={item.name}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="truncate text-sm font-medium text-slate-700">
                      {item.name}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-cyan-700">
                      {item.tag}
                    </span>
                  </a>
                ))}
              </div>
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
