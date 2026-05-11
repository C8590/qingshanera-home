# qingshanera-home

青山时代 QingShan Era 的静态统一入口首页，用于展示学习、AI 工具与个人项目入口。项目不包含后端、数据库或登录系统，适合部署到 Cloudflare Pages。

## 技术栈

- Vite
- React
- Tailwind CSS
- Cloudflare Pages 静态部署

## 本地开发

```bash
npm install
npm run dev
```

## 构建验证

```bash
npm run build
```

构建产物会输出到 `dist` 目录。

## Cloudflare Pages 部署

推荐通过 GitHub 或 GitLab 仓库连接 Cloudflare Pages，让 Cloudflare 在每次 push 后自动构建和部署。

Cloudflare Pages 后台配置：

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

部署步骤：

1. 将本项目提交到 GitHub 或 GitLab 仓库。
2. 在 Cloudflare Dashboard 中进入 Workers & Pages。
3. 创建 Pages 项目，选择连接 Git 仓库。
4. 选择本仓库和 `main` 分支。
5. 按上面的配置填写构建参数。
6. 保存后触发首次部署。之后每次 push 到 `main` 都会自动构建部署。

如果当前环境已经安装 Wrangler，并且已经配置好 Cloudflare API Token，也可以在完成 `npm run build` 后使用 Direct Upload：

```bash
npx wrangler pages deploy dist --project-name qingshanera-home
```

Direct Upload 只是可选方式，不应替代 Git 仓库自动部署流程。

## DNS 与自定义域名

Cloudflare Pages 项目创建后，会得到一个 `*.pages.dev` 地址。

在 Cloudflare Pages 项目中添加 Custom Domain：

```text
www.qingshanera.com
```

如果 `qingshanera.com` 的 DNS 已经托管在 Cloudflare，通常在 Pages 里添加自定义域名即可，Cloudflare 会自动处理需要的 DNS 记录。

如果 DNS 不在 Cloudflare，需要在当前 DNS 服务商处把 `www` 配置为 CNAME，指向 Cloudflare Pages 给出的 `*.pages.dev` 域名。

## 产品入口

- QingChat: <https://chat.qingshanera.com>
- 学习助手: <https://study.qingshanera.com>
- API 聚合层: <https://api.qingshanera.com>
- Hermes: <https://hermes.qingshanera.com>
- 项目实验室: <https://www.qingshanera.com/lab>
- 文档中心: <https://docs.qingshanera.com>
- 状态页: <https://status.qingshanera.com>
