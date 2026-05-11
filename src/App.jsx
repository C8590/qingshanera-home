import { useState } from 'react'

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

const productSlides = [
  {
    name: 'QingChat',
    title: '把想法聊清楚',
    desc: '面向学习、写作与 AI 实验的轻量对话入口。',
  },
  {
    name: '学习助手',
    title: '资料、笔记、计划放一起',
    desc: '让学习流程更集中，少一点切换，多一点推进。',
  },
  {
    name: 'Qing API',
    title: '统一的 AI 调用入口',
    desc: '为模型能力、接口调用和后续工具实验预留基础层。',
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = productSlides[activeSlide]

  const goPrev = () => {
    setActiveSlide((current) =>
      current === 0 ? productSlides.length - 1 : current - 1,
    )
  }

  const goNext = () => {
    setActiveSlide((current) =>
      current === productSlides.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-md items-center justify-between gap-4 px-5 py-2.5 sm:max-w-2xl sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="青山时代首页"
          >
            <img
              className="size-9 shrink-0 rounded-lg"
              src="/qingshan-era-logo.svg"
              alt="青山时代 Logo"
            />
            <span className="truncate text-base font-semibold tracking-normal text-slate-950">
              青山时代
            </span>
          </a>

          <div className="min-w-0 shrink text-right">
            <p className="truncate text-xs text-slate-500 sm:text-sm">
              www.qingshanera.com
            </p>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-1 justify-center px-5 py-6 sm:px-6 sm:py-9">
        <section className="relative w-full max-w-md">
          <div className="absolute inset-x-5 top-14 h-64 rounded-[2rem] bg-cyan-100/70 blur-3xl" />

          <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/70 bg-white/65 p-5 shadow-sm shadow-slate-200/80 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-medium text-cyan-700">{slide.name}</p>
                <h1 className="mt-2 text-2xl font-semibold leading-snug tracking-normal text-slate-950">
                  {slide.title}
                </h1>
                <p className="mt-3 text-sm leading-6 text-slate-500">{slide.desc}</p>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  aria-label="上一项产品介绍"
                  className="grid size-8 place-items-center rounded-full border border-slate-200 bg-white/80 text-lg leading-none text-slate-600 transition hover:border-cyan-200 hover:text-cyan-700"
                  onClick={goPrev}
                  type="button"
                >
                  ‹
                </button>
                <button
                  aria-label="下一项产品介绍"
                  className="grid size-8 place-items-center rounded-full border border-slate-200 bg-white/80 text-lg leading-none text-slate-600 transition hover:border-cyan-200 hover:text-cyan-700"
                  onClick={goNext}
                  type="button"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              {productSlides.map((item, index) => (
                <button
                  aria-label={`查看${item.name}介绍`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeSlide ? 'w-8 bg-cyan-600' : 'w-3 bg-slate-200'
                  }`}
                  key={item.name}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

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

      <footer className="border-t border-white/60 bg-white/70 px-5 py-2.5 text-center text-xs leading-5 text-slate-500 backdrop-blur-xl">
        <div className="mx-auto max-w-md sm:max-w-2xl">
          <p>青山云计算提供服务</p>
          <p>© Qingshan Era Holding Group</p>
        </div>
      </footer>
    </div>
  )
}

export default App
