# AGENTS.md

This document describes the architecture of the Jamia Sufiya Cape Town website for AI agents and developers working on this codebase.

## Project Overview

A marketing website for Jamia Sufiya Cape Town, a hifth-focused madrassa in Plumstead, Cape Town. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── images/logo.png     # School crest, used in header, footer, and hero
│   ├── favicon.png         # Crest, resized for favicon use
│   └── __forms.html        # Static skeleton form so Netlify's build bot can detect
│                              the contact form (SSR apps render forms client-side,
│                              which the form-detection step at build time cannot see)
├── src
│   ├── components
│   │   ├── Header.tsx       # Sticky nav bar with a "Pages" dropdown (desktop) and slide-down menu (mobile)
│   │   └── Footer.tsx       # Site footer; also exports `MapEmbed`, the Google Maps iframe used on both
│   │                          the home and contact pages
│   ├── routes
│   │   ├── __root.tsx       # Root layout: wraps every page in Header + Footer, sets default page metadata
│   │   ├── index.tsx        # Home page
│   │   ├── mission-and-vision.tsx
│   │   ├── leadership.tsx   # "Meet the leadership team" page
│   │   └── contact.tsx      # Contact details, enquiry form, map
│   ├── router.tsx           # TanStack Router setup from the generated route tree
│   └── styles.css           # Tailwind import, brand CSS variables (navy/gold), font imports, keyframes
├── netlify.toml              # Build command, publish directory, dev server settings
├── tsconfig.json              # `@/*` path alias for `src/*`
└── vite.config.ts             # Vite plugins: TanStack Start, Netlify, Tailwind
```

## Brand & Design

The palette and type system come directly from the school crest (navy `#101a44` and gold `#e0a83a`), defined as CSS
variables in `src/styles.css` (`--navy-*`, `--gold-*`, `--cream-*`). Headings use the serif display font "Fraunces"
(`.font-display`); body text uses "Manrope". The crest's motto — Love, Struggle, Faith — is used verbatim in the
footer and echoed conceptually in the "Our Pillars" section of the home page.

## Routing

Routes are file-based under `src/routes/`. `__root.tsx` is the shared shell (Header/Footer + `<html>`/`<head>`).
Every other file becomes a page at its filename path (e.g. `mission-and-vision.tsx` → `/mission-and-vision`).
The "Pages" dropdown in `Header.tsx` is the single source of truth for primary navigation — add new top-level
pages to the `PAGES` array there as well as creating the route file.

## Contact Form

The contact form uses Netlify Forms. Because TanStack Start renders the form client-side, Netlify's build-time
form detector can't see it directly — `public/__forms.html` is a hidden static duplicate of the form's fields that
lets Netlify register the `contact` form at build time. The live form in `contact.tsx` submits via `fetch` to
`/__forms.html` (not `/`, which would be intercepted by the SSR handler). If new fields are added to the form,
add matching fields in `public/__forms.html`.

## Google Maps

The map embeds (home page teaser + full contact page) use a plain `google.com/maps?...&output=embed` iframe
keyed off the fixed address string in `Footer.tsx` (`MapEmbed`) — no API key required.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```
