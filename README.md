# Syntaxly — Code Learning Platform

A full-stack, monorepo-based learning platform for teaching programming interactively — inspired by Duolingo, powered by Turbo, Next.js, and Nest.js.

---

## 🚀 Tech Stack

This monorepo includes:

### 🧠 **Apps**

- `web`: Next.js frontend using Tailwind CSS and Shadcn UI
- `api`: Nest.js backend API server
- `docs`: Optional documentation site (Next.js)

### 🧱 **Packages**

- `ui`: Shared component library using Tailwind + Shadcn
- `prisma`: Centralized Prisma schema, client, and seed/migrate scripts
- `eslint-config`: Shared ESLint configuration
- `typescript-config`: Shared `tsconfig.json` base for apps and packages

---

## 🏗️ Getting Started

### 1. Install dependencies:

```bash
pnpm install
```

### 2. Start Postgres with Docker:

```bash
docker-compose up -d
```

### 3. Run all dev servers:

```bash
pnpm dev
```

This starts:

- `web` on http://localhost:3000
- `api` on http://localhost:4200

### 4. Migrate & seed database

```bash
pnpm --filter @syntaxly/prisma migrate
pnpm --filter @syntaxly/prisma seed
```

---

## 📦 Prisma Setup

Located in: `packages/prisma`

- Contains `schema.prisma`
- Runs migrations and generates the Prisma client
- Can be shared across apps

Uses PostgreSQL via Docker (`localhost:5432`) with default creds:

- user: `postgres`
- password: `postgres`
- database: `codelearn`

---

## ✨ Development Features

- ✅ Full-stack TypeScript support
- ✅ Shared design system with Shadcn & Tailwind
- ✅ Turbo for blazing fast builds/dev
- ✅ Centralized Prisma schema with `@repo/prisma`
- ✅ PostgreSQL managed by Docker

---

## 🔧 Additional Tools

- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)
- [Prisma ORM](https://www.prisma.io/)
- [Docker](https://www.docker.com/) for local database

---

## 📚 In Progress

- 🧩 Curriculum structure: Language > Topic > Lesson > Task
- 🧪 Lesson progress + XP system
- 🧠 Smart interactive tasks (MCQ, fill-in, code challenge)
- 🔐 Auth & profile tracking
- 📈 Admin dashboard (coming soon)

---

Built with ❤️ by the Syntaxly team.
