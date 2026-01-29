import Section from '../components/Section';
import CaseStudyLayout from '../components/CaseStudyLayout';
import './CaretakerApp.css';

export default function CaretakerApp() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'details', label: 'Project Details' },
        { id: 'design-system', label: 'Design System' },
        { id: 'ui-redesign', label: 'UI Redesign' },
        { id: 'user-flow', label: 'User Flow' },
        { id: 'final-design', label: 'Final Design' },
        { id: 'future', label: 'Future Steps' },
    ];

    return (
        <CaseStudyLayout
            title="Sit By Care"
            primaryColor="#7D43A9"
            primaryLightColor="rgba(125, 67, 169, 0.15)"
            subtitle={
                <p className="intro-subtitle">
                    A platform solving the problem of finding good caretakers online.
                    This project focuses on a complete visual overhaul and the creation of a comprehensive design system to improve the user experience.
                    <br /><br /><strong>(This is an ongoing project)</strong>
                </p>
            }
            sections={sections}
        >
            {/* Overview Section */}
            <Section id="overview">
                <h2>Overview</h2>
                <h4>Challenge</h4>
                <p>
                    The company is solving the problem of finding good caretakers online. The existing platform had a cluttered, template-based user interface that needed a significant design overhaul to improve usability and trust.
                </p>
                <h4>Solution</h4>
                <p>
                    I am leading the design efforts to give the entire app a full design rehaul. My focus is on creating a modern, cohesive design system and refining the user flow based on solid UX principles.
                </p>
                <p className="project-note">This project is currently under construction.</p>
            </Section>

            {/* Project Details Grid */}
            <Section id="details">
                <div className="project-details-grid">
                    <div className="detail-item">
                        <h4>Role</h4>
                        <p>Main Designer</p>
                    </div>
                    <div className="detail-item">
                        <h4>Focus</h4>
                        <p>
                            Visual Design<br />
                            Design System<br />
                            UX Refinement
                        </p>
                    </div>
                    <div className="detail-item">
                        <h4>Status</h4>
                        <p>In Progress</p>
                    </div>
                </div>
            </Section>

            {/* Design System Section */}
            <Section id="design-system">
                <h2>Design System</h2>
                <p>
                    One of the primary goals of this project is to establish a full design system. The previous interface relied on old, cluttered templates. I am building a library of reusable components, typography scales, and color palettes to ensure consistency and scalability across the application.
                </p>

                {/* Placeholder for design system image */}
                <img
                    src={`${import.meta.env.BASE_URL}caretaker-preview.png`}
                    alt="Caretaker App Design System Preview"
                    className="img"
                    style={{ borderRadius: '12px', width: '100%', marginTop: '0px', border: '1px solid var(--gray-lighter)' }}
                />
            </Section>

            {/* UI Redesign Section */}
            <Section id="ui-redesign">
                <h2>UI Redesign</h2>
                <p>
                    The project involves a complete visual overhaul. I am redesigning the cluttered old interface to be clean, modern, and user-friendly. This visual refresh is crucial for building trust with users looking for caretakers.
                </p>
            </Section>

            {/* User Flow Section */}
            <Section id="user-flow">
                <h2>User Flow</h2>
                <p>
                    While the client had an initial idea of the flow, my job is to flesh it out with all UX principles in mind. I am refining the user journey to ensure it is intuitive and efficient for both caretakers and those seeking care.
                </p>
            </Section>

            {/* Final Design Section */}
            <Section id="final-design">
                <h2>Final Design</h2>
                <p>
                    As this is an ongoing project, the final designs are still being iterated upon. However, the core visual style and component library have been established to guide the development.
                </p>
            </Section>

            {/* Future Steps Section */}
            <Section id="future">
                <h2>Future Steps</h2>
                <p>
                    Although research and discovery were not part of the initial phase, a comprehensive testing pipeline is in place. We will be conducting various tests to validate the new design and ensure it meets user needs effectively.
                </p>
            </Section>
        </CaseStudyLayout>
    );
}
