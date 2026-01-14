# Component Usage Examples

This file provides practical examples of how to use each reusable component in your React portfolio.

## Table of Contents
- [Header](#header)
- [Footer](#footer)
- [Hero](#hero)
- [ProjectCard](#projectcard)
- [Section](#section)
- [Complete Page Example](#complete-page-example)

---

## Header

### Basic Usage
```tsx
import { Header } from '../components';

function MyPage() {
  return <Header />;
}
```

### Custom Name
```tsx
<Header name="Jane Doe" />
```

### With Different Navigation
If you need to customize navigation links, you can modify the `Header.tsx` component directly or create a variant.

---

## Footer

### Basic Usage
```tsx
import { Footer } from '../components';

function MyPage() {
  return <Footer />;
}
```

### Custom Text
```tsx
<Footer text="© 2025 Jane Doe. Built with React & TypeScript" />
```

---

## Hero

### Basic Usage
```tsx
import { Hero } from '../components';

function HomePage() {
  return (
    <Hero 
      title="Welcome to My Portfolio"
      subtitle="I'm a designer and developer creating beautiful digital experiences"
    />
  );
}
```

### Different Variations
```tsx
// Short and punchy
<Hero 
  title="Hi, I'm Jane 👋"
  subtitle="Product Designer based in San Francisco"
/>

// Detailed
<Hero 
  title="Crafting Digital Experiences"
  subtitle="I help startups and enterprises build products that users love. Specializing in UX research, interface design, and front-end development."
/>
```

---

## ProjectCard

### Basic Usage
```tsx
import { ProjectCard } from '../components';
import projectImage from '../assets/project.png';

function ProjectsPage() {
  return (
    <ProjectCard
      title="E-commerce Redesign"
      role="Lead Designer"
      dateStart="Jan 25"
      dateEnd="Mar 25"
      labels={["UI/UX", "E-commerce", "Mobile"]}
      backgroundImage={projectImage}
      link="/projects/ecommerce"
    />
  );
}
```

### With Custom CTA
```tsx
<ProjectCard
  title="Mobile Banking App"
  role="Product Designer"
  dateStart="Apr 25"
  dateEnd="Jun 25"
  labels={["FinTech", "iOS", "Android"]}
  backgroundImage={bankingImage}
  ctaText="Read full story"
  link="/projects/banking"
/>
```

### Multiple Cards in a Grid
```tsx
import { ProjectCard } from '../components';
import type { ProjectCardProps } from '../components';

const projects: ProjectCardProps[] = [
  {
    title: "Project 1",
    role: "Designer",
    dateStart: "Jan 25",
    dateEnd: "Feb 25",
    labels: ["Web", "Mobile"],
    backgroundImage: img1,
    link: "/project-1"
  },
  {
    title: "Project 2",
    role: "Developer",
    dateStart: "Mar 25",
    dateEnd: "Apr 25",
    labels: ["React", "TypeScript"],
    backgroundImage: img2,
    link: "/project-2"
  }
];

function Portfolio() {
  return (
    <div className="cards-row">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
```

### External Link
```tsx
<ProjectCard
  title="Open Source Project"
  role="Contributor"
  dateStart="Jan 25"
  dateEnd="Ongoing"
  labels={["Open Source", "React", "TypeScript"]}
  backgroundImage={ossImage}
  link="https://github.com/username/project"
/>
```

---

## Section

### Basic Usage
```tsx
import { Section } from '../components';

function CaseStudy() {
  return (
    <Section>
      <h2>Problem Statement</h2>
      <p>Users were struggling with...</p>
    </Section>
  );
}
```

### With Custom Class
```tsx
<Section className="highlighted-section">
  <h2>Key Findings</h2>
  <ul>
    <li>Finding 1</li>
    <li>Finding 2</li>
  </ul>
</Section>
```

### Multiple Sections
```tsx
function CaseStudy() {
  return (
    <>
      <Section>
        <h2>Overview</h2>
        <p>Project overview content...</p>
      </Section>

      <Section>
        <h2>Research</h2>
        <h3>User Interviews</h3>
        <p>We conducted 20 interviews...</p>
      </Section>

      <Section>
        <h2>Design Process</h2>
        <img src={designImg} alt="Design process" className="img" />
      </Section>

      <Section>
        <h2>Results</h2>
        <ul>
          <li>40% increase in user engagement</li>
          <li>25% reduction in support tickets</li>
        </ul>
      </Section>
    </>
  );
}
```

---

## Complete Page Example

### Custom Portfolio Page
```tsx
import { Header, Hero, ProjectCard, Footer } from '../components';
import type { ProjectCardProps } from '../components';
import './CustomPortfolio.css';

// Import your images
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

const myProjects: ProjectCardProps[] = [
  {
    title: "SaaS Dashboard",
    role: "UI/UX Designer",
    dateStart: "Jan 25",
    dateEnd: "Mar 25",
    labels: ["SaaS", "Dashboard", "Analytics", "B2B"],
    backgroundImage: project1Img,
    link: "/case-study/saas-dashboard"
  },
  {
    title: "Fitness Mobile App",
    role: "Product Designer",
    dateStart: "Apr 25",
    dateEnd: "Jun 25",
    labels: ["Mobile", "Health", "iOS", "Android"],
    backgroundImage: project2Img,
    link: "/case-study/fitness-app"
  },
  {
    title: "E-learning Platform",
    role: "Lead Designer",
    dateStart: "Jul 25",
    dateEnd: "Sep 25",
    labels: ["EdTech", "Web", "Responsive"],
    backgroundImage: project3Img,
    link: "/case-study/elearning"
  }
];

export default function CustomPortfolio() {
  return (
    <div className="custom-portfolio">
      <Header name="Your Name" />
      
      <main>
        <Hero 
          title="Design that makes a difference"
          subtitle="I create user-centered digital experiences that solve real problems and delight users."
        />

        <section id="work" className="work-section">
          <h2>Selected Work</h2>
          <div className="cards-row">
            {myProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>Your bio here...</p>
        </section>
      </main>

      <Footer text="© 2025 Your Name. Let's build something amazing together." />
    </div>
  );
}
```

### Custom Case Study Page
```tsx
import { Section, Footer } from '../components';
import './CustomCaseStudy.css';

export default function CustomCaseStudy() {
  return (
    <div className="custom-case-study">
      <section className="intro-section">
        <h1>Project Name</h1>
        <p>Brief project description that hooks the reader...</p>
      </section>

      <Section>
        <h2>The Challenge</h2>
        <p>Describe the problem you were solving...</p>
      </Section>

      <Section>
        <h2>My Role</h2>
        <ul>
          <li>User Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Visual Design</li>
          <li>Usability Testing</li>
        </ul>
      </Section>

      <Section>
        <h2>Research & Discovery</h2>
        <h3>User Interviews</h3>
        <p>We spoke with 15 users to understand...</p>
        
        <h3>Competitive Analysis</h3>
        <p>Analysis of 5 competitors revealed...</p>
      </Section>

      <Section>
        <h2>Design Process</h2>
        <img src="/path/to/wireframes.png" alt="Wireframes" className="img" />
        <p>Starting with low-fidelity wireframes...</p>
        
        <img src="/path/to/mockups.png" alt="High-fidelity mockups" className="img" />
        <p>Refined into high-fidelity designs...</p>
      </Section>

      <Section>
        <h2>Key Features</h2>
        <h3>Feature 1: Smart Dashboard</h3>
        <p>Description of feature 1...</p>
        <img src="/path/to/feature1.png" alt="Feature 1" className="img" />

        <h3>Feature 2: Mobile-First Design</h3>
        <p>Description of feature 2...</p>
        <img src="/path/to/feature2.png" alt="Feature 2" className="img" />
      </Section>

      <Section>
        <h2>Impact & Results</h2>
        <ul>
          <li>📈 50% increase in user engagement</li>
          <li>⭐ 4.8 star rating on app stores</li>
          <li>🎯 30% improvement in task completion rate</li>
          <li>💬 Positive feedback from 95% of beta users</li>
        </ul>
      </Section>

      <Section>
        <h2>Learnings</h2>
        <p>What I learned from this project...</p>
      </Section>

      <Footer />
    </div>
  );
}
```

---

## Tips for Using Components

### 1. Import from Index
Instead of:
```tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
```

Use:
```tsx
import { Header, Footer, Hero } from '../components';
```

### 2. Type Safety
Always use TypeScript types for better development experience:
```tsx
import type { ProjectCardProps } from '../components';

const project: ProjectCardProps = {
  // TypeScript will help you with autocomplete
};
```

### 3. Externalize Data
Keep your data separate from components:
```tsx
// src/data/projects.ts
export const projects = [...];

// src/pages/Portfolio.tsx
import { projects } from '../data/projects';
```

### 4. Consistent Styling
Use the existing CSS classes and patterns for consistency:
```tsx
<div className="cards-row">
  {/* Your cards */}
</div>
```

### 5. Responsive Images
Always provide alt text and use the `img` class for consistent styling:
```tsx
<img src={imageSrc} alt="Descriptive text" className="img" />
```

---

## Need More Help?

- Check the `README.md` for setup instructions
- See `MIGRATION_GUIDE.md` for conversion details
- Look at existing pages in `src/pages/` for examples
