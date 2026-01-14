import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudyLayout.css';

interface SectionItem {
    id: string;
    label: string;
}

interface CaseStudyLayoutProps {
    title: string;
    subtitle: React.ReactNode;
    sections: SectionItem[];
    children: React.ReactNode;
    primaryColor?: string;
    primaryLightColor?: string;
    heroImage?: string;
}

export default function CaseStudyLayout({
    title,
    subtitle,
    sections,
    children,
    primaryColor = '#559EEE', // Default blue
    primaryLightColor = 'rgba(85, 158, 238, 0.15)', // Default blue light
    heroImage
}: CaseStudyLayoutProps) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const cssVariables = {
        '--primary-color': primaryColor,
        '--primary-light-color': primaryLightColor,
    } as React.CSSProperties;

    return (
        <div style={cssVariables}>
            {/* Hero Section - Outside main layout */}
            <section className="intro-section">
                <div className="intro-content">
                    <h1>{title}</h1>
                    <div className="intro-subtitle">
                        {subtitle}
                    </div>
                </div>
                {heroImage && (
                    <div className="intro-image">
                        <img src={heroImage} alt={`${title} preview`} />
                    </div>
                )}
            </section>

            {/* Main content area with sidebar */}
            <div className="case-study-page">
                {/* Sidebar Navigation */}
                <nav className="case-study-sidebar">
                    <div className="sidebar-content">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={activeSection === section.id ? 'active' : ''}
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Main Content */}
                <div className="case-study-content">
                    {children}
                    <div className="case-study-footer">
                        <Link to="/#work" className="back-link">
                            ← Back to Projects
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
