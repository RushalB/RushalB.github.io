import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './HorizontalScroll.css';

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-350vw"]);
  
  // State to toggle skip button visibility
  const [showSkip, setShowSkip] = useState(false);
  const isInView = useInView(targetRef, { amount: 0.1 });

  useEffect(() => {
    setShowSkip(isInView);
  }, [isInView]);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={targetRef} className="horizontal-scroll-section">
      <div className="timeline-header">
        <h2>My Journey</h2>
      </div>
      <div className="horizontal-sticky-container">
        <motion.div style={{ x }} className="horizontal-track">
          <div className="horizontal-line">
            {/* Year markers with project cards - one dot per year, multiple branches */}
            {[
              { 
                year: 2000, 
                position: 0, 
                projects: [
                  { title: "Born", description: "The beginning" }
                ]
              },
              { 
                year: 2017, 
                position: 2.5, 
                projects: [
                  { title: "High School", description: "Started my journey" }
                ]
              },
              { 
                year: 2018, 
                position: 12.5, 
                projects: [
                  { title: "Learning", description: "Exploring technology" }
                ]
              },
              { 
                year: 2019, 
                position: 25, 
                projects: [
                  { title: "C-DAC — NLP Pipeline", description: "FastText NLP pipeline with 92% accuracy" }
                ]
              },
              { 
                year: 2020, 
                position: 37.5, 
                projects: [
                  { title: "Started B.S. CS", description: "University of Illinois Urbana-Champaign" }
                ]
              },
              { 
                year: 2021, 
                position: 50, 
                projects: [
                  { title: "Bulletin.io — Transit Dashboard", description: "Real-time dashboard; 50% faster map rendering" },
                  { title: "Crowd Dynamics Lab", description: "Behavioral A/B testing platform for research" }
                ]
              },
              { 
                year: 2022, 
                position: 62.5, 
                projects: [
                  { title: "Graduated UIUC", description: "B.S. Computer Science" },
                  { title: "Itlize Global — Microservices", description: "Migrated monolith → microservices with Docker/K8s" }
                ]
              },
              { 
                year: 2023, 
                position: 75, 
                projects: [
                  { title: "Started M.S. HCI", description: "University of Michigan" },
                  { title: "Reap Rewards — UX Design", description: "Personas, flows, IA diagrams, prototypes" },
                  { title: "Detroit Water Infrastructure", description: "35 interviews; affinity mapping; card sorting" }
                ]
              },
              { 
                year: 2024, 
                position: 87.5, 
                projects: [
                  { title: "Quicken — UX Consulting", description: "10+ UX improvements; doubled task success" },
                  { title: "Bes-tea — UX Design", description: "Diary studies, personas, journey maps" },
                  { title: "Faabl — AI Storytelling Toy", description: "AI hardware prototype + business model" },
                  { title: "Savance — Dashboard", description: "Custom workflow dashboard; accessibility" },
                  { title: "Next Play Games", description: "Design system, A/B tests, pitch visuals" },
                  { title: "Transcribify — iOS App", description: "SwiftUI; 30% faster transcription" },
                  { title: "NASA CLAWS", description: "Real-time comms; AR telemetry syncing" }
                ]
              },
              { 
                year: 2025, 
                position: 100, 
                projects: [
                  { title: "Borough — Founding Engineer", description: "Civic-tech platform + design system" },
                  { title: "SitByCare — Lead UX", description: "Scheduling flows, companion cards, UI" },
                  { title: "Teaching AR/VR", description: "Assistant Lecturer at UMich; 50+ students" }
                ]
              }
            ].map((yearData) => {
              return (
                <div 
                  key={yearData.year}
                  className="year-marker" 
                  style={{ left: `${yearData.position}%` }}
                >
                  <span className="year-label">{yearData.year}</span>
                  <div className="year-dot" />
                  
                  {/* Multiple project branches from single year dot */}
                  {yearData.projects && yearData.projects.map((project, projIndex) => (
                    <div key={projIndex} className="projects-stack" style={{ left: `${projIndex * 50 - ((yearData.projects.length - 1) * 25)}px` }}>
                      <div className="event-branch" />
                      <div 
                        className="event-card"
                        onClick={() => {
                          console.log('Clicked:', project.title);
                        }}
                      >
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </motion.div>
        
        <button 
          className={`skip-button ${showSkip ? 'visible' : ''}`} 
          onClick={scrollToSkills}
        >
          Skip Timeline ↓
        </button>
      </div>
    </section>
  );
}
