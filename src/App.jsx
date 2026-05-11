import heroImg from './assets/hero.png'

const products = [
  {
    name: 'QingChat',
    desc: '面向日常学习、创作和实验的 AI 对话入口。',
    href: 'https://chat.qingshanera.com',
    tag: 'AI Chat',
  },
  {
    name: '学习助手',
    desc: '整理课程、资料、笔记与学习流程的个人辅助空间。',
    href: 'https://study.qingshanera.com',
    tag: 'Study',
  },
  {
    name: 'API 聚合层',
    desc: '统一管理模型与工具接口的轻量服务入口。',
    href: 'https://api.qingshanera.com',
    tag: 'API',
  },
  {
    name: 'Hermes',
    desc: '项目通知、自动化消息与服务连接实验。',
    href: 'https://hermes.qingshanera.com',
    tag: 'Bridge',
  },
  {
    name: '项目实验室',
    desc: '预留给进行中的小工具、原型和公开实验。',
    href: 'https://www.qingshanera.com/lab',
    tag: 'Lab',
  },
  {
    name: '文档中心',
    desc: '记录青山时代相关项目说明、部署笔记与使用文档。',
    href: 'https://docs.qingshanera.com',
    tag: 'Docs',
  },
  {
    name: '状态页',
    desc: '查看核心服务的可用性和运行状态。',
    href: 'https://status.qingshanera.com',
    tag: 'Status',
  },
]

const serviceStatus = [
  { name: 'QingChat', status: '运行中', tone: 'ok' },
  { name: 'API 聚合层', status: '运行中', tone: 'ok' },
  { name: '学习助手', status: '测试中', tone: 'test' },
  { name: 'Hermes', status: '运行中', tone: 'ok' },
  { name: '项目实验室', status: '规划中', tone: 'plan' },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="青山时代首页">
            <span className="grid size-9 place-items-center rounded-lg bg-cyan-500 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20">
              QS
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-900">
              QingShan Era
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a className="transition hover:text-cyan-700" href="#products">
              产品入口
            </a>
            <a className="transition hover:text-cyan-700" href="#status">
              服务状态
            </a>
            <a className="transition hover:text-cyan-700" href="https://docs.qingshanera.com">
              文档中心
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-5 inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                Learning · AI Tools · Personal Projects
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
                青山时代 QingShan Era
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                一个面向学习、AI 工具与个人项目的统一入口。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-700"
                  href="https://chat.qingshanera.com"
                >
                  进入 QingChat
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-700"
                  href="#products"
                >
                  查看全部入口
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <div className="absolute inset-x-4 top-8 h-64 rounded-[2rem] bg-cyan-100/70 blur-3xl" />
              <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-700">
                      ERA CONSOLE
                    </p>
                    <p className="mt-1 text-sm text-slate-500">统一入口正在运行</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Online
                  </span>
                </div>
                <div className="grid gap-4 pt-5 sm:grid-cols-[0.8fr_1fr]">
                  <div className="flex items-center justify-center rounded-xl bg-white p-5">
                    <img
                      className="h-36 w-36 object-contain"
                      src={heroImg}
                      alt="青山时代轻科技视觉图形"
                    />
                  </div>
                  <div className="space-y-3">
                    {['QingChat', 'API', 'Study', 'Hermes'].map((item) => (
                      <div
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                        key={item}
                      >
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                        <span className="size-2 rounded-full bg-cyan-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-700">产品入口</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-slate-950">
                常用服务，一页抵达
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              这里只做静态展示和跳转，不承载后端、数据库或登录逻辑。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md hover:shadow-cyan-100/70"
                href={product.href}
                key={product.name}
                rel="noreferrer"
                target="_blank"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {product.tag}
                  </span>
                  <span className="text-cyan-600 transition group-hover:translate-x-0.5">
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
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
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
      </main>

      <footer className="bg-slate-50 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 QingShan Era. Built for learning, creation and AI experiments.
      </footer>
    </div>
  )
}

export default App
