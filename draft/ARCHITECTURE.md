# Component Architecture

## Component Hierarchy

```
App (Router)
├── Portfolio Page
│   ├── Header
│   ├── Hero
│   ├── Work Section
│   │   └── ProjectCard (multiple)
│   └── Footer
│
└── CaseStudy Page
    ├── Intro Section
    ├── Section (multiple)
    │   ├── Problem Statement
    │   ├── Research
    │   ├── Ideation & Design
    │   ├── Outcome & Impact
    │   └── Reflection
    └── Footer
```

## Component Dependencies

### Portfolio Page
```tsx
Portfolio.tsx
  ├── imports Header
  ├── imports Hero
  ├── imports ProjectCard
  ├── imports Footer
  └── imports projects data
```

### CaseStudy Page
```tsx
CaseStudy.tsx
  ├── imports Section
  └── imports Footer
```

## Data Flow

```
src/data/projects.ts
        ↓
    Portfolio.tsx
        ↓
    ProjectCard.tsx (receives props)
        ↓
    Renders project information
```

## Component Reusability Matrix

| Component | Used In | Reusable | Customizable |
|-----------|---------|----------|--------------|
| Header | Portfolio | ✅ Yes | name prop |
| Footer | Portfolio, CaseStudy | ✅ Yes | text prop |
| Hero | Portfolio | ✅ Yes | title, subtitle props |
| ProjectCard | Portfolio | ✅ Yes | 8 props |
| Section | CaseStudy | ✅ Yes | children, className |

## Styling Architecture

```
Global Styles (App.css)
    ├── Reset styles
    ├── Font family
    └── Base layout

Component Styles
    ├── Header.css
    ├── Footer.css
    ├── Hero.css
    ├── ProjectCard.css
    └── Section.css

Page Styles
    ├── Portfolio.css
    └── CaseStudy.css
```

## Routing Structure

```
/ (root)
    → Portfolio Page
        ├── #hero (Hero section)
        ├── #work (Projects section)
        └── #contact (Contact section)

/case-study
    → CaseStudy Page
        ├── Intro section
        ├── Problem Statement
        ├── Research
        ├── Design Process
        ├── Outcomes
        └── Reflection
```

## File Organization

```
src/
├── components/          # Reusable UI components
│   ├── [Component].tsx  # Component logic
│   ├── [Component].css  # Component styles
│   └── index.ts         # Barrel exports
│
├── pages/              # Page-level components
│   ├── [Page].tsx      # Page logic
│   └── [Page].css      # Page styles
│
├── data/               # Data files
│   └── projects.ts     # Project data
│
├── assets/             # Static assets
│   └── images/         # Images
│
├── App.tsx             # Main app + routing
├── App.css             # Global styles
└── main.tsx            # Entry point
```

## Component Props Interface

### Header
```typescript
interface HeaderProps {
  name?: string;  // Optional, defaults to "Rushal Butala"
}
```

### Footer
```typescript
interface FooterProps {
  text?: string;  // Optional, defaults to copyright text
}
```

### Hero
```typescript
interface HeroProps {
  title: string;    // Required
  subtitle: string; // Required
}
```

### ProjectCard
```typescript
interface ProjectCardProps {
  title: string;           // Required
  role: string;            // Required
  dateStart: string;       // Required
  dateEnd: string;         // Required
  labels: string[];        // Required
  backgroundImage: string; // Required
  ctaText?: string;        // Optional
  link?: string;           // Optional
}
```

### Section
```typescript
interface SectionProps {
  children: React.ReactNode; // Required
  className?: string;        // Optional
}
```

## Import Patterns

### Individual Imports
```tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
```

### Barrel Imports (Recommended)
```tsx
import { Header, Footer, Hero, ProjectCard } from '../components';
```

### Type Imports
```tsx
import type { ProjectCardProps } from '../components';
```

## State Management

Currently: **Props-based** (no global state)

```
Data (projects.ts)
    ↓
Props (Portfolio.tsx)
    ↓
Component (ProjectCard.tsx)
    ↓
Render
```

Future: Can add Context API or Redux if needed

## Build Process

```
Development:
npm run dev
    ↓
Vite Dev Server
    ↓
Hot Module Replacement
    ↓
http://localhost:5173

Production:
npm run build
    ↓
TypeScript Compilation
    ↓
Vite Build
    ↓
Optimized Bundle (dist/)
```

## Key Design Decisions

1. **Component-Based Architecture**
   - Each UI element is a reusable component
   - Single Responsibility Principle

2. **Props Over State**
   - Components receive data via props
   - No complex state management needed

3. **Modular CSS**
   - Each component has its own CSS file
   - Scoped styling with class names

4. **TypeScript**
   - Type safety for all props
   - Better developer experience

5. **Data Separation**
   - Project data in separate file
   - Easy to update without touching components

6. **Barrel Exports**
   - Clean imports via index.ts
   - Better code organization
