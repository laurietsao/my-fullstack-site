# 优势21点学院

Vite 静态站点：职业21点策略教练服务落地页。支持中/英双语切换，部署在 Cloudflare Workers（静态资源），并通过本仓库的 Git 集成自动构建部署。

## 本地开发

```bash
npm install
npm run dev
```

## 构建与部署

```bash
npm run build
npx wrangler deploy
```

推送到 `main` 分支也会触发 Cloudflare 自动构建部署。
