import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
// import Expertise from '../components/Expertise';
import { projects } from '../data/projects';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="main-content">
        <Hero />
        <section id="work" className="work-section">
          <h2>Featured Projects</h2>
          <div className="cards-row">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
