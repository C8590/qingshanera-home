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
    title: '把想法聊清楚',
    desc: '学习、写作、规划和灵感整理，都可以从一次轻量对话开始。',
    accent: 'from-cyan-100 via-white to-slate-50',
  },
  {
    name: '学习助手',
    title: '把学习过程收拢',
    desc: '资料、笔记、计划和复盘放在同一个入口，减少切换带来的消耗。',
    accent: 'from-sky-100 via-white to-cyan-50',
  },
  {
    name: 'Qing API',
    title: '为 AI 调用留好基础层',
    desc: '统一承载模型接口与工具调用，为后续个人项目和自动化实验提供底座。',
    accent: 'from-teal-100 via-white to-slate-50',
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
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/65 backdrop-blur-xl">
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
            <span className="truncate text-sm font-semibold tracking-normal text-slate-950">
              青山时代
            </span>
          </a>

          <div className="min-w-0 shrink text-right">
            <p className="truncate text-xs text-slate-500">
              www.qingshanera.com
            </p>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-1 justify-center px-5 py-6 sm:px-6 sm:py-9">
        <section className="relative w-full max-w-md">
          <div className="absolute inset-x-0 top-12 h-72 rounded-[2.5rem] bg-cyan-100/70 blur-3xl transition-colors duration-700" />

          <section
            aria-label="产品介绍轮播"
            className={`relative mb-5 min-h-[252px] overflow-hidden rounded-[1.35rem] border border-white/70 bg-gradient-to-br ${slide.accent} p-6 shadow-sm shadow-slate-200/80 backdrop-blur-xl transition-colors duration-700 sm:min-h-[280px]`}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
          >
            <div
              className="slide-panel flex h-full min-h-[204px] flex-col justify-between"
              key={slide.name}
            >
              <div>
                <p className="text-xs font-medium text-cyan-700">{slide.name}</p>
                <h1 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-4xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-sm text-base leading-7 text-slate-600">
                  {slide.desc}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between">
                <div className="flex gap-2" aria-hidden="true">
                  {productSlides.map((item, index) => (
                    <span
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === activeSlide ? 'w-9 bg-cyan-600' : 'w-3 bg-slate-300/80'
                      }`}
                      key={item.name}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400">滑动切换</p>
              </div>
            </div>
          </section>

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

      <footer className="border-t border-white/60 bg-white/65 px-5 py-1.5 text-center text-[11px] leading-4 text-slate-500 backdrop-blur-xl">
        <div className="mx-auto max-w-md sm:max-w-2xl">
          <p>青山云计算提供服务</p>
          <p>© Qingshan Era Holding Group</p>
        </div>
      </footer>
    </div>
  )
}

export default App
