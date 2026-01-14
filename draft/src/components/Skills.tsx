import './Skills.css';

export default function Skills() {
  const skills = [
    { icon: '🎨', name: 'Figma' },
    { icon: '📐', name: 'Adobe XD' },
    { icon: '✨', name: 'Sketch' },
    { icon: '📊', name: 'UserTesting' },
    { icon: '🗣️', name: 'Interviews' },
    { icon: '📈', name: 'Analytics' },
    { icon: '🧩', name: 'Wireframing' },
    { icon: '🎯', name: 'Personas' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Tools</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
