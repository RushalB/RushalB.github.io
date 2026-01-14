import { Link } from 'react-router-dom';
import './ProjectCard.css';

export interface ProjectCardProps {
  title: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  labels: string[];
  backgroundImage: string;
  ctaText?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  role,
  dateStart,
  dateEnd,
  labels,
  backgroundImage,
  ctaText = "View case study",
  link = "#"
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={`project-card project-card--${title.toLowerCase().replace(/\s+/g, '-')}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="project-card__date">
        <span>{dateStart}</span>
        <span> - </span>
        <span>{dateEnd}</span>
      </div>
      <div className="project-card__cta">{ctaText}</div>

      <div className="project-card__info">
        <div className="project-card__top-row">
          <div className="project-card__title">{title}</div>
          <div className="project-card__role">{role}</div>
        </div>

        <div className="project-card__labels-row">
          {labels.map((label, index) => (
            <span key={index} className="project-card__label">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Link to={link} className="project-link">
      {cardContent}
    </Link>
  );
}
