# Migration Guide: HTML to React

This guide explains how your original HTML files were converted to React components.

## Overview

Your portfolio has been converted from static HTML files to a modern React application with:
- ✅ Reusable components
- ✅ TypeScript for type safety
- ✅ Client-side routing
- ✅ Modular CSS
- ✅ Easy maintainability

## File Mapping

### Original → React Components

| Original HTML | React Component | Location |
|--------------|-----------------|----------|
| `portfolio.html` | `Portfolio.tsx` | `src/pages/Portfolio.tsx` |
| `case-study.html` | `CaseStudy.tsx` | `src/pages/CaseStudy.tsx` |
| Header section | `Header.tsx` | `src/components/Header.tsx` |
| Footer section | `Footer.tsx` | `src/components/Footer.tsx` |
| Hero section | `Hero.tsx` | `src/components/Hero.tsx` |
| Project cards | `ProjectCard.tsx` | `src/components/ProjectCard.tsx` |
| Case study sections | `Section.tsx` | `src/components/Section.tsx` |

## Key Improvements

### 1. Reusable Components

**Before (HTML):**
```html
<!-- Repeated for each project -->
<a href="#" class="project-link">
  <div class="project-card">
    <div class="project-card__date">
      <span>Aug 25</span>
      <span>-</span>
      <span>Dec 25</span>
    </div>
    <!-- ... more HTML -->
  </div>
</a>
```

**After (React):**
```tsx
<ProjectCard
  title="Project Name"
  role="UI Design"
  dateStart="Aug 25"
  dateEnd="Dec 25"
  labels={["Label 1", "Label 2"]}
  backgroundImage={image}
  link="/case-study"
/>
```

### 2. Centralized Data Management

**Before:** Project data was hardcoded in HTML

**After:** Project data is in `src/data/projects.ts`:
```tsx
export const projects: ProjectCardProps[] = [
  {
    title: "Reap Rewards",
    role: "UI Design",
    // ... other properties
  }
];
```

### 3. Type Safety

All components have TypeScript interfaces:
```tsx
interface ProjectCardProps {
  title: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  labels: string[];
  backgroundImage: string;
  ctaText?: string;
  link?: string;
}
```

### 4. Modular Styling

**Before:** All CSS in one `<style>` tag

**After:** Each component has its own CSS file:
- `Header.css`
- `Footer.css`
- `ProjectCard.css`
- etc.

## How to Update Content

### Update Portfolio Projects

Edit `src/data/projects.ts`:
```tsx
export const projects: ProjectCardProps[] = [
  {
    title: "Your New Project",
    role: "Full Stack Developer",
    dateStart: "Jan 25",
    dateEnd: "Mar 25",
    labels: ["React", "Node.js", "MongoDB"],
    backgroundImage: yourImage,
    link: "/your-case-study"
  },
  // Add more projects...
];
```

### Update Case Study Content

Edit `src/pages/CaseStudy.tsx`:
```tsx
<Section>
  <h2>Your Section Title</h2>
  <p>Your content here...</p>
</Section>
```

### Update Header/Footer

**Header:**
```tsx
<Header name="Your Name" />
```

**Footer:**
```tsx
<Footer text="© 2025 Your Name. All rights reserved." />
```

## Component Props Reference

### Header
- `name?: string` - Brand name (default: "Rushal Butala")

### Footer
- `text?: string` - Footer text (default: "© 2025 MyPortfolio...")

### Hero
- `title: string` - Main heading (required)
- `subtitle: string` - Subtitle text (required)

### ProjectCard
- `title: string` - Project title (required)
- `role: string` - Your role (required)
- `dateStart: string` - Start date (required)
- `dateEnd: string` - End date (required)
- `labels: string[]` - Array of labels (required)
- `backgroundImage: string` - Image URL or import (required)
- `ctaText?: string` - CTA button text (optional)
- `link?: string` - Navigation link (optional)

### Section
- `children: React.ReactNode` - Content to render (required)
- `className?: string` - Additional CSS classes (optional)

## Adding New Pages

1. Create page component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Link to it from anywhere:
   ```tsx
   <Link to="/your-page">Your Page</Link>
   ```

## Styling Customization

### Global Styles
Edit `src/App.css` for app-wide styles

### Component Styles
Edit individual component CSS files:
- `src/components/Header.css`
- `src/components/ProjectCard.css`
- etc.

### Page Styles
Edit page-specific CSS:
- `src/pages/Portfolio.css`
- `src/pages/CaseStudy.css`

## Benefits of This Structure

1. **Maintainability**: Update once, apply everywhere
2. **Reusability**: Use components across multiple pages
3. **Type Safety**: Catch errors before runtime
4. **Scalability**: Easy to add new features
5. **Developer Experience**: Better tooling and debugging
6. **Performance**: Optimized builds with Vite

## Next Steps

1. Customize the project data in `src/data/projects.ts`
2. Add your own images to `src/assets/`
3. Update the case study content in `src/pages/CaseStudy.tsx`
4. Customize colors and styles in the CSS files
5. Add more pages as needed

## Questions?

Refer to the main `README.md` for detailed component documentation and usage examples.
