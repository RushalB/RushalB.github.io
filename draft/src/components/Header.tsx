import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  name?: string;
}

export default function Header({ name = "Rushal Butala" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header content after scrolling past hero (approx 200px)
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="nav-brand">
          {name}
        </Link>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#work">Work</Link></li>
          <li><Link to="/#contact">About me</Link></li>
          <li><u><Link to="/#contact">Resume</Link></u></li>
        </ul>
      </nav>
    </header>
  );
}
