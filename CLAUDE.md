# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repo (`nobleblackcar`) now hosts **ACHO — Autism Clinical Health Organization**, a marketing/informational website for a BCBA-led ABA therapy practice (founder: Suman Mohammad Asra, M.A., LBA, BCBA). It is a Next.js 15 app built with TypeScript and Tailwind CSS v4 (App Router, React 19).

Design direction: information architecture inspired by corticacare.com (services, approach, about, resources/FAQ, contact) with the premium, interactive feel of jeskojets.com — a warm-but-premium hybrid theme (deep teal foundations + warm coral/gold accents on cream), immersive dark hero, and scroll-reveal animations.

### Site map (multi-page)
- `/` — home (hero, trust strip, services preview, approach steps, values/stats, founder, testimonials)
- `/services`, `/approach`, `/about`, `/resources` (FAQ), `/contact` (form)

### Where things live
- `src/config/site.ts` — site name, contact info, nav (contains `// PLACEHOLDER` values to replace before launch)
- `src/constants/content.ts` — all editorial content (services, approach steps, values, stats, testimonials, FAQs, resources)
- `src/components/ui/` — primitives: `Reveal` (IntersectionObserver scroll-reveal with a health-probe failsafe), `Button`, `Section`/`SectionHeading`, `Icon`, `Logo`, `ServiceCard`
- `src/components/layout/` — `Header` (scroll-aware; light text over dark hero, dark once scrolled onto cream) and `Footer`
- `src/components/sections/` — page section blocks (Hero, ServicesPreview, ApproachPreview, ValuesSection, FounderPreview, Testimonials, PageHeader, FaqAccordion, ContactForm)

### Known gotchas
- There are TWO `nobleblackcar` directories on this machine: this project at `/Users/samiramohammad/Projects/nobleblackcar` and an unrelated "NYC Black Car" project at `/Users/samiramohammad/nobleblackcar`. `.claude/launch.json` originally pointed the dev server at the wrong one — the `ACHO Dev (Turbopack)` config (port 3001) targets THIS project.
- The contact form (`ContactForm.tsx`) is front-end only — wire it to an email/form backend before launch.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (uses Turbopack)
npm run dev
# Access at http://localhost:3000

# Build for production (uses Turbopack)
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Testing Individual Files
This project currently uses ESLint for code quality. To lint specific files:
```bash
npx eslint path/to/file.tsx
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.5 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist (sans & mono) via next/font
- **Build Tool**: Turbopack (for both dev and production builds)

### Project Structure

```
src/
├── app/              # Next.js App Router - pages and layouts
│   ├── layout.tsx    # Root layout with fonts and metadata
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles with Tailwind directives
├── components/       # Reusable React components
│   ├── ui/          # Basic UI components (buttons, inputs, etc.)
│   └── layout/      # Layout components (header, footer, sidebar)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared libraries
├── types/           # TypeScript type definitions
├── config/          # Application configuration
└── constants/       # Constants and enums
```

### Import Aliases
The project uses `@/*` path alias for cleaner imports:
```typescript
import { Component } from '@/components/ui/Component'
import { useCustomHook } from '@/hooks/useCustomHook'
```

### Code Organization Patterns

**App Router Pages**: All routes are file-based in `src/app/`. Each route can have:
- `page.tsx` - The page component
- `layout.tsx` - Shared layout for nested routes
- `loading.tsx` - Loading UI
- `error.tsx` - Error handling UI

**Components**: Place reusable components in `src/components/`. Organize by:
- `ui/` for basic building blocks
- `layout/` for structural components
- Feature-specific subdirectories as needed

**Type Definitions**: Shared TypeScript types go in `src/types/`. Component-specific types can be defined in the component file or a co-located `.types.ts` file.

## Key Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode and path aliases
- `next.config.ts` - Next.js configuration (currently minimal)
- `tailwind.config.ts` - Tailwind CSS v4 configuration
- `eslint.config.mjs` - ESLint configuration for Next.js

## Development Notes

### Turbopack
This project uses Turbopack (Next.js's Rust-based bundler) for both development and production builds. This provides faster build times and hot module reloading.

### App Router vs Pages Router
This project uses the App Router (not the legacy Pages Router). Key differences:
- Server Components by default (add `'use client'` for client components)
- Layouts are defined with `layout.tsx` files
- Loading and error states via `loading.tsx` and `error.tsx`
- Route handlers in `route.ts` files instead of API routes

### Styling Approach
Tailwind CSS v4 is configured via PostCSS. Use Tailwind utility classes directly in components. The project uses CSS variables for theming (see `globals.css`).
