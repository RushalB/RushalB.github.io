import './Statistics.css';

export default function Statistics() {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'User Interviews' },
    { number: '10+', label: 'Usability Tests' }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
