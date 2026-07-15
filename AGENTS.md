# AGENTS.md

## Repo overview

GeniusGarage — a pnpm monorepo (Turborepo) with two Next.js apps and shared packages.

- **`apps/web`** — Marketing site (Next.js 16.0.9, port 3000)
- **`apps/snippet-manager`** — Snippet manager app (Next.js 16.2.10, port 3001)
- **`packages/ui`** — Shared React components (Button, Card, CodeBlock, SnippetCard)
- **`packages/eslint-config`** — Shared ESLint config (next/core-web-vitals + prettier)
- **`packages/typescript-config`** — Shared tsconfig (base.json, nextjs.json)

## Commands

```bash
pnpm install          # Install all dependencies
pnpm dev              # Start all apps (turbo dev) — web on :3000, snippet-manager on :3001
pnpm build            # Build all apps
pnpm lint             # Lint all apps
```

Run a single app from the repo root:

```bash
pnpm --filter @geniusgarage/web dev
pnpm --filter @geniusgarage/snippet-manager dev
```

No test suite exists. No CI workflows are configured.

## Key constraints

- **Node >= 20.9.0** (enforced in root package.json `engines`)
- **pnpm 9.1.0** (set via `packageManager` field — do not use npm/yarn)
- **React 19** is used across both apps
- The `web` app uses `transpilePackages: ['@geniusgarage/ui']` in next.config.js — if you add another shared package, it likely needs the same
- The `snippet-manager` app has its own AGENTS.md with a Next.js-specific warning about API changes — honor it when editing that app

## Adding shared packages

- Add to `packages/` and reference in app `package.json` as `"@geniusgarage/<name>": "workspace:^"`
- The shared eslint config exports a flat config object (ESM) — import it in `eslint.config.mjs`
- TypeScript configs: apps extend from `@geniusgarage/typescript-config`

## Deployment

Both apps deploy to Vercel independently. The root `vercel.json` is a schema stub with no config. Each app may have its own `vercel.json` for overrides.

- Marketing Site: https://production-monorepos-starter-web-nine.vercel.app
- Snippet Manager: https://production-monorepos-starter-snippe-xi.vercel.app
