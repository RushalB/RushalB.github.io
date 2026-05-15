# CLAUDE.md — Rushal Butala's Portfolio

## Repository Overview

Personal portfolio and UX/product design case study site for Rushal Butala. The live site at `rushalb.github.io` currently redirects to an external Framer site, while the `draft/` directory contains a fully-built React app that is the active development target.

## Repository Structure

```
RushalB.github.io/
├── index.html            # Root redirect page → Framer site (legacy entry point)
├── .nojekyll             # Disables Jekyll processing on GitHub Pages
├── bloomy.txt            # Miscellaneous text file
├── draft/                # Active React portfolio app (primary development target)
│   ├── src/
│   │   ├── App.tsx           # Root component; defines all routes
│   │   ├── App.css           # Global CSS variables + base styles
│   │   ├── index.css         # Vite scaffold defaults (mostly unused)
│   │   ├── main.tsx          # React DOM entry point
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Full-page route components
│   │   ├── data/             # Centralized data files
│   │   └── assets/           # Images imported into components
│   ├── public/               # Static assets served as-is (images for case studies)
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── eslint.config.js
└── older_version/        # Archived HTML/CSS versions (v3); do not modify
```

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI framework |
| TypeScript | ~5.9 | Type safety |
| Vite | 7 | Build tool + dev server |
| react-router-dom | 7 | Client-side routing |
| framer-motion | 12 | Animations |
| lucide-react | 0.554 | Icons |
| gh-pages | 6 | Deployment to GitHub Pages |

## Development Commands

All commands run from inside `draft/`:

```bash
cd draft
npm install          # Install dependencies
npm run dev          # Start dev server → http://localhost:5173
npm run build        # TypeScript compile + Vite bundle → dist/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run deploy       # Build + push dist/ to GitHub Pages via gh-pages
```

## Routing

Routes are defined in `draft/src/App.tsx`. All routes are wrapped in `<Layout>` (Header + Footer):

| Path | Component | File |
|------|-----------|------|
| `/` | Portfolio | `src/pages/Portfolio.tsx` |
| `/reap-rewards` | ReapRewards | `src/pages/ReapRewards.tsx` |
| `/faabl` | Faabl | `src/pages/Faabl.tsx` |
| `/caretaker-app` | CaretakerApp | `src/pages/CaretakerApp.tsx` |
| `/borough` | Borough | `src/pages/Borough.tsx` |

To add a new page: create `src/pages/NewPage.tsx` + `NewPage.css`, then add a `<Route>` in `App.tsx`.

## Component Architecture

```
Layout (Header + Footer wrapper)
└── Page (Portfolio / case study pages)
    ├── Hero                  — Portfolio hero with animated background elements
    ├── ProjectCard           — Clickable card linking to a case study
    └── CaseStudyLayout       — Sidebar nav + scrollspy layout for case studies
        └── Section           — Content section with optional id for scrollspy
```

### Key Components

**`Layout`** (`src/components/Layout.tsx`) — wraps every page with `Header` and `Footer`. No props needed; used once in `App.tsx`.

**`Header`** (`src/components/Header.tsx`) — sticky nav that gains an `is-scrolled` class after 150px scroll. Accepts optional `name` prop (defaults to `"Rushal Butala"`).

**`Hero`** (`src/components/Hero.tsx`) — decorative background with geo shapes (circles, lines, arcs, plus signs). Has no props; content is hardcoded.

**`ProjectCard`** (`src/components/ProjectCard.tsx`) — card with background image and hover effect. Navigates via `react-router-dom` `<Link>`.

```typescript
interface ProjectCardProps {
  title: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  labels: string[];
  backgroundImage: string;  // imported asset or URL
  ctaText?: string;         // defaults to "View case study"
  link?: string;            // defaults to "#"
}
```

**`CaseStudyLayout`** (`src/components/CaseStudyLayout.tsx`) — two-column layout with a sticky sidebar that tracks the active section via scroll position. Accepts `primaryColor` and `primaryLightColor` CSS variables for per-case-study theming.

```typescript
interface CaseStudyLayoutProps {
  title: string;
  subtitle: React.ReactNode;
  sections: { id: string; label: string }[];
  children: React.ReactNode;
  primaryColor?: string;        // hex color for accent (default: '#559EEE')
  primaryLightColor?: string;   // rgba for light accent background
  heroImage?: string;
}
```

**`Section`** (`src/components/Section.tsx`) — thin wrapper div; pass `id` to make it a scrollspy target.

## Data Management

Project cards on the Portfolio page are driven by `src/data/projects.ts`. Add or reorder projects by editing that file — no component changes needed.

```typescript
// src/data/projects.ts
export const projects: ProjectCardProps[] = [
  {
    title: "Reap Rewards",
    role: "UI Design",
    dateStart: "Aug 25",
    dateEnd: "Dec 25",
    labels: ["Mobile App", "FinTech", "UI/UX"],
    backgroundImage: projectImage,   // imported at top of file
    link: "/reap-rewards"
  },
  // ...
];
```

## Styling Conventions

- **Primary font**: Space Grotesk (declared in `App.css`, loaded externally)
- **Background color**: `#fdfbf7` (warm off-white)
- **Global CSS variables** are declared in `App.css` `:root`:
  - `--white`, `--black`, `--blue` (`#559EEE`), `--blue-light`, various grays
- **Body padding**: `10vw` on desktop, `24px` on mobile (≤ 768px)
- Each component has a co-located `.css` file. Do not add component-specific styles to `App.css`.
- Case studies override accent color via CSS custom properties on the `CaseStudyLayout` wrapper.
- Responsive breakpoints: desktop `> 768px`, tablet `481–768px`, mobile `≤ 480px`.

### CSS File Ownership

| File | Scope |
|------|-------|
| `App.css` | Global variables, reset, body layout, grainy texture overlay |
| `index.css` | Vite scaffold defaults — largely superseded by `App.css` |
| `components/[Name].css` | Component-scoped styles |
| `pages/[Name].css` | Page-specific styles |

## Adding a New Case Study

1. Add an image to `src/assets/` (or `public/` for images referenced in JSX `src` strings).
2. Add an entry to `src/data/projects.ts` with the new route path.
3. Create `src/pages/NewCase.tsx` using `CaseStudyLayout` — copy `ReapRewards.tsx` as a template.
4. Create `src/pages/NewCase.css` for any page-specific overrides.
5. Add `<Route path="/new-case" element={<NewCase />} />` in `src/App.tsx`.

## Imports

Use direct component imports (not barrel imports) since the barrel `src/components/index.ts` only exports a subset of components:

```tsx
// Preferred — direct imports
import Hero from '../components/Hero';
import CaseStudyLayout from '../components/CaseStudyLayout';

// Barrel import (only covers Header, Footer, Hero, ProjectCard, Section)
import { Header, Footer } from '../components';
```

## Deployment

The `draft/` app deploys to GitHub Pages via the `gh-pages` package:

```bash
cd draft && npm run deploy
```

This runs `tsc -b && vite build` then pushes `dist/` to the `gh-pages` branch. The `vite.config.ts` sets `base: '/'`.

The root `index.html` (outside `draft/`) is a separate redirect page and is NOT built by Vite.

## Git Conventions

- Main branch: `master`
- Feature branches follow the pattern `claude/<description>-<id>` or descriptive names
- Commits use conventional prefixes: `feat:`, `fix:`, `chore:`

## Files to Leave Alone

- `older_version/` — archived versions, no active development
- `index.html` (root) — legacy redirect; only touch if changing the external portfolio URL
- `.nojekyll` — required for GitHub Pages to serve the app correctly
