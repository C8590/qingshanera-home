import { useEffect, useRef, useState } from 'react'

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
    title: '让想法自然成形',
    desc: '聊天、写作、学习与规划，都从一次清晰对话开始。',
  },
  {
    name: '学习助手',
    title: '把学习安排得更清楚',
    desc: '资料、笔记、计划与复盘集中管理，让每一步都有章法。',
  },
  {
    name: 'Qing API',
    title: '把 AI 能力接入你的应用',
    desc: '稳定连接模型能力，统一管理调用体验，让开发更专注于产品本身。',
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)
  const slide = productSlides[activeSlide]

  useEffect(() => {
    if (isTouching) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % productSlides.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [isTouching])

  const showPreviousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? productSlides.length - 1 : current - 1,
    )
  }

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % productSlides.length)
  }

  const handleTouchStart = (event) => {
    setIsTouching(true)
    touchStartX.current = event.touches[0].clientX
    touchDeltaX.current = 0
  }

  const handleTouchMove = (event) => {
    touchDeltaX.current = event.touches[0].clientX - touchStartX.current
  }

  const handleTouchEnd = () => {
    if (touchDeltaX.current > 44) {
      showPreviousSlide()
    }

    if (touchDeltaX.current < -44) {
      showNextSlide()
    }

    touchDeltaX.current = 0
    setIsTouching(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,#ecfeff_0%,#f8fafc_42%,#eef2f7_100%)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,#0e7490_0%,#0f172a_34%,#020617_100%)] dark:text-slate-100">
      <header className="sticky top-0 z-30 bg-white/25 backdrop-blur-2xl dark:bg-slate-950/15">
        <nav className="mx-auto flex max-w-md items-center justify-between gap-3 px-5 py-1.5 sm:max-w-2xl sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2"
            aria-label="青山时代首页"
          >
            <img
              className="size-8 shrink-0 rounded-lg"
              src="/qingshan-era-logo.svg"
              alt="青山时代 Logo"
            />
            <span className="truncate text-sm font-semibold tracking-normal text-slate-950 dark:text-white">
              青山时代
            </span>
          </a>

          <div className="min-w-0 shrink text-right">
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">
              www.qingshanera.com
            </p>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-1 justify-center px-5 py-6 sm:px-6 sm:py-9">
        <section className="relative w-full max-w-md">
          <div className="absolute inset-x-0 top-12 h-72 rounded-[2.5rem] bg-cyan-100/70 blur-3xl transition-colors duration-700 dark:bg-cyan-400/10" />

          <section
            aria-label="产品介绍轮播"
            className="relative mb-5 min-h-[268px] overflow-hidden rounded-[1.35rem] border border-white/65 bg-white/58 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors duration-700 sm:min-h-[292px] dark:border-white/10 dark:bg-white/[0.075] dark:shadow-[0_24px_80px_rgba(0,0,0,0.26)]"
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
          >
            <div
              className="slide-panel flex h-full min-h-[220px] flex-col justify-between"
              key={slide.name}
            >
              <div>
                <p className="text-xs font-medium text-cyan-700 dark:text-cyan-200">
                  {slide.name}
                </p>
                <h1 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-4xl dark:text-white">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-sm text-base leading-7 text-slate-600 dark:text-slate-300">
                  {slide.desc}
                </p>
              </div>

              <div className="mt-7 flex gap-2" aria-hidden="true">
                {productSlides.map((item, index) => (
                  <span
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeSlide
                        ? 'w-9 bg-cyan-600 dark:bg-cyan-300'
                        : 'w-3 bg-slate-300/70 dark:bg-white/18'
                    }`}
                    key={item.name}
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/60 bg-white/30 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.07)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.055] dark:shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
            <div className="grid gap-3">
              {entrances.map((item) => (
                <a
                  className="glass-link flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/75 bg-white/64 px-4 py-3.5 shadow-[0_8px_26px_rgba(15,23,42,0.045)] backdrop-blur-2xl transition-[background-color,box-shadow,transform,opacity] duration-300 ease-out hover:bg-white/78 active:scale-[0.992] active:bg-white/82 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/45 dark:border-white/10 dark:bg-white/[0.08] dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)] dark:hover:bg-white/[0.115] dark:active:bg-white/[0.14] dark:focus-visible:ring-white/18"
                  href={item.href}
                  key={item.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="truncate text-base font-medium text-slate-700 dark:text-slate-100">
                    {item.name}
                  </span>
                  <span className="shrink-0 rounded-full bg-white/58 px-3 py-1 text-sm font-medium text-cyan-700 ring-1 ring-white/70 backdrop-blur-xl dark:bg-white/[0.075] dark:text-cyan-200 dark:ring-white/10">
                    {item.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/25 px-5 py-1.5 text-center text-[11px] leading-4 text-slate-500 backdrop-blur-2xl dark:bg-slate-950/15 dark:text-slate-400">
        <div className="mx-auto max-w-md sm:max-w-2xl">
          <p>青山云计算提供服务</p>
          <p>© Qingshan Era Holding Group</p>
        </div>
      </footer>
    </div>
  )
}

export default App
