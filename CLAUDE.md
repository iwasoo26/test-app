# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Overview

A minimal Next.js App Router project (currently just the `create-next-app` starter page). It uses Next.js 16.3.1, React 19.2, TypeScript, and Tailwind CSS v4.

Per `AGENTS.md` (imported above), this Next.js version has breaking changes relative to training data — before writing code, check `node_modules/next/dist/docs/` (relative to the repo root, since this is a single-package repo) for the current APIs and conventions, and don't remove the `nextjs-agent-rules` block in `AGENTS.md`; `next dev` re-adds it.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript rules)

There is no test suite or test runner configured in this repository.

## Architecture

- App Router lives entirely in `app/`: `app/layout.tsx` is the root layout (loads Geist fonts via `next/font/google`, sets `<html lang="ja">`), `app/page.tsx` is the home page, `app/globals.css` defines Tailwind v4 theme tokens (`@theme inline`) with light/dark `--background`/`--foreground` variables via `prefers-color-scheme`.
- Path alias `@/*` maps to the repo root (`tsconfig.json`), e.g. `@/app/...`.
- Styling is Tailwind CSS v4 via the `@tailwindcss/postcss` PostCSS plugin (`postcss.config.mjs`); there's no `tailwind.config.*` — theme customization happens in `app/globals.css`.
- Static assets (SVGs, favicon) are served from `public/`.
