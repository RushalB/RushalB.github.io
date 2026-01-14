import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <div id={id} className={`section ${className}`}>
      {children}
    </div>
  );
}
