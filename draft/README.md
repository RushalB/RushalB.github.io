# React Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This project converts the original HTML portfolio into a React application with reusable components.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Footer.css
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Hero.css
│   │   ├── ProjectCard.tsx  # Project card component
│   │   ├── ProjectCard.css
│   │   ├── Section.tsx      # Content section wrapper
│   │   └── Section.css
│   ├── pages/               # Page components
│   │   ├── Portfolio.tsx    # Main portfolio page
│   │   ├── Portfolio.css
│   │   ├── CaseStudy.tsx    # Case study page
│   │   └── CaseStudy.css
│   ├── assets/              # Images and static files
│   ├── App.tsx              # Main app with routing
│   ├── App.css              # Global styles
│   └── main.tsx             # Entry point
├── index.html
└── package.json
```

## 🧩 Reusable Components

### Header Component

Navigation header with brand name and links.

**Props:**
- `name` (optional): Brand name to display (default: "Rushal Butala")

**Usage:**
```tsx
import Header from './components/Header';

<Header name="Your Name" />
```

---

### Footer Component

Simple footer with customizable text.

**Props:**
- `text` (optional): Footer text (default: "© 2025 MyPortfolio. All rights reserved.")

**Usage:**
```tsx
import Footer from './components/Footer';

<Footer text="© 2025 Custom Text" />
```

---

### Hero Component

Hero section with title and subtitle.

**Props:**
- `title` (required): Main heading text
- `subtitle` (required): Subtitle/description text

**Usage:**
```tsx
import Hero from './components/Hero';

<Hero 
  title="Welcome to My Portfolio"
  subtitle="Showcasing my best work and projects"
/>
```

---

### ProjectCard Component

Interactive project card with hover effects.

**Props:**
- `title` (required): Project title
- `role` (required): Your role in the project
- `dateStart` (required): Start date
- `dateEnd` (required): End date
- `labels` (required): Array of label strings
- `backgroundImage` (required): URL or imported image
- `ctaText` (optional): Call-to-action text (default: "View case study")
- `link` (optional): Navigation link (default: "#")

**Usage:**
```tsx
import ProjectCard from './components/ProjectCard';
import projectImage from './assets/project.png';

<ProjectCard
  title="Project Name"
  role="UI/UX Designer"
  dateStart="Jan 25"
  dateEnd="Mar 25"
  labels={["React", "TypeScript", "Design"]}
  backgroundImage={projectImage}
  link="/project-details"
/>
```

---

### Section Component

Content section wrapper for case studies.

**Props:**
- `children` (required): React nodes to render inside
- `className` (optional): Additional CSS classes

**Usage:**
```tsx
import Section from './components/Section';

<Section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</Section>
```

## 🎨 Customization

### Adding New Projects

Edit `src/pages/Portfolio.tsx` and add new project objects to the `projects` array:

```tsx
const projects: ProjectCardProps[] = [
  {
    title: "New Project",
    role: "Full Stack Developer",
    dateStart: "Jan 25",
    dateEnd: "Mar 25",
    labels: ["React", "Node.js", "MongoDB"],
    backgroundImage: yourImage,
    link: "/new-project"
  },
  // ... more projects
];
```

### Styling

Each component has its own CSS file for easy customization:
- Global styles: `src/App.css`
- Component-specific: `src/components/[ComponentName].css`
- Page-specific: `src/pages/[PageName].css`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`:

```tsx
import NewPage from './pages/NewPage';

<Routes>
  <Route path="/" element={<Portfolio />} />
  <Route path="/case-study" element={<CaseStudy />} />
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with responsive design

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🌟 Features

- ✅ Fully reusable components
- ✅ TypeScript for type safety
- ✅ Responsive design
- ✅ Smooth animations and hover effects
- ✅ Client-side routing
- ✅ Modern, clean UI
- ✅ Easy to customize and extend

## 📝 License

© 2025 MyPortfolio. All rights reserved.
