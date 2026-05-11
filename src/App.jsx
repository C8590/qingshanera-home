const products = [
  {
    name: 'QingChat',
    desc: '用于学习、写作、整理想法和 AI 实验的对话入口。',
    href: 'https://chat.qingshanera.com',
    tag: 'AI 对话',
  },
  {
    name: '学习助手',
    desc: '汇总课程、资料、笔记与学习计划的辅助空间。',
    href: 'https://study.qingshanera.com',
    tag: '学习',
  },
  {
    name: 'API 聚合层',
    desc: '统一承载模型接口、调用入口与基础能力的服务层。',
    href: 'https://llm.qingshanera.com',
    tag: 'LLM API',
  },
  {
    name: '文档中心',
    desc: '查看项目说明、部署记录、使用方式和维护笔记。',
    href: 'https://docs.qingshanera.com',
    tag: '文档',
  },
  {
    name: '状态页',
    desc: '查看核心服务的可用性、运行情况与后续维护提示。',
    href: 'https://status.qingshanera.com',
    tag: '状态',
  },
  {
    name: '项目实验室',
    desc: '预留给原型、小工具、公开实验和后续探索项目。',
    href: '/lab',
    tag: '实验',
  },
]

const serviceStatus = [
  { name: 'QingChat', status: '运行中', tone: 'ok' },
  { name: 'API 聚合层', status: '运行中', tone: 'ok' },
  { name: '学习助手', status: '测试中', tone: 'test' },
  { name: '文档中心', status: '运行中', tone: 'ok' },
  { name: '项目实验室', status: '规划中', tone: 'plan' },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
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
          <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a className="transition hover:text-cyan-700" href="#products">
              产品入口
            </a>
            <a className="transition hover:text-cyan-700" href="#status">
              服务状态
            </a>
            <a className="transition hover:text-cyan-700" href="#about">
              项目说明
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="mb-5 inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                QingShan Era · AI Infrastructure · Learning Portal
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                青山时代
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                一个面向学习、AI 工具与个人项目的统一入口。
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                QingShan Era 将常用服务整理到同一个清爽入口，打开首页就能快速抵达。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-700"
                  href="#products"
                >
                  查看产品入口
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-700"
                  href="https://status.qingshanera.com"
                >
                  查看服务状态
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <div className="absolute inset-x-5 top-8 h-60 rounded-[2rem] bg-cyan-100/70 blur-3xl" />
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/60">
                <div className="border-b border-slate-200 bg-white px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        className="size-11 shrink-0"
                        src="/qingshan-era-logo.svg"
                        alt=""
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-950">青山时代入口</p>
                        <p className="text-xs text-slate-500">www.qingshanera.com</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                      Online
                    </span>
                  </div>
                </div>
                <div className="grid gap-3 p-5">
                  {products.slice(0, 5).map((product) => (
                    <a
                      className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition hover:border-cyan-200 hover:text-cyan-700"
                      href={product.href}
                      key={product.name}
                    >
                      <span className="text-sm font-medium text-slate-700">{product.name}</span>
                      <span className="text-xs text-cyan-700">{product.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-700">产品入口</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
                常用服务，一页抵达
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              首页只负责静态展示与跳转，不承载业务逻辑、数据库或登录系统。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                className="group min-w-0 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-100/70"
                href={product.href}
                key={product.name}
                rel={product.href.startsWith('http') ? 'noreferrer' : undefined}
                target={product.href.startsWith('http') ? '_blank' : undefined}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {product.tag}
                  </span>
                  <span className="shrink-0 text-sm text-cyan-600 transition group-hover:translate-x-0.5">
                    访问
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-normal text-slate-950">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{product.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="status" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-medium text-cyan-700">服务状态</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
                当前入口状态
              </h2>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200">
              {serviceStatus.map((service) => (
                <div
                  className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-4 last:border-b-0 sm:px-5"
                  key={service.name}
                >
                  <span className="font-medium text-slate-800">{service.name}</span>
                  <span className={`status-pill status-${service.tone}`}>{service.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-cyan-700">静态首页</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                站点部署在 Cloudflare Pages，仅作为统一入口和项目导航。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-cyan-700">独立服务</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                QingChat、学习助手、LLM 聚合层与文档服务保持独立运行。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-cyan-700">后续预留</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                项目实验室用于承载后续工具原型、AI 基础设施实验与公开项目。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 text-center text-sm leading-7 text-slate-500">
        <p>青山云计算提供服务</p>
        <p>© Qingshan Era Holding Group</p>
      </footer>
    </div>
  )
}

export default App
