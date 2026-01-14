import './Expertise.css';

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: '🔍',
      title: 'User Research',
      description: 'Conducting in-depth user interviews, surveys, and usability testing to uncover insights that drive design decisions.'
    },
    {
      icon: '✏️',
      title: 'UX/UI Design',
      description: 'Designing intuitive interfaces and experiences that balance user needs with business goals.'
    },
    {
      icon: '📊',
      title: 'Data Analysis',
      description: 'Analyzing qualitative and quantitative data to identify patterns and inform design strategy.'
    },
    {
      icon: '🎨',
      title: 'Prototyping',
      description: 'Creating interactive prototypes to test ideas and validate solutions before development.'
    }
  ];

  return (
    <section id="expertise" className="expertise-section">
      <h2>What I Do</h2>
      <div className="expertise-container">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-icon">{area.icon}</div>
            <div className="expertise-title">{area.title}</div>
            <div className="expertise-desc">{area.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
