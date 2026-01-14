import Section from '../components/Section';
import CaseStudyLayout from '../components/CaseStudyLayout';
import './Borough.css';
export default function Borough() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'role', label: 'Role & Responsibilities' },
        { id: 'discovery', label: 'Discovery' },
        { id: 'definition', label: 'Definition' },
        { id: 'design', label: 'Design System' },
        { id: 'prototyping', label: 'Prototyping' },
        { id: 'testing', label: 'Testing' },
    ];

    return (
        <CaseStudyLayout
            title="Borough"
            primaryColor="#6B21A8"
            primaryLightColor="rgba(107, 33, 168, 0.15)"
            subtitle={
                <>
                    <p className="intro-subtitle">
                        A civic tech app built from scratch to facilitate government-related communication.
                        Bridging the gap between B2B software and client-side applications for residents and officials.
                    </p>
                    <p className="project-note" style={{ marginTop: '24px', fontSize: '1rem', fontStyle: 'italic' }}>
                        <strong>⚠️ NDA Disclaimer:</strong> This project is under NDA. Specific designs and proprietary information cannot be shown, but this case study outlines my process, deliverables, and impact.
                    </p>
                </>
            }
            sections={sections}
        >
            {/* Overview Section */}
            <Section id="overview">
                <h2>Overview</h2>
                <h4>The Project</h4>
                <p>
                    Borough is a civic tech application designed to streamline communication between local governments and residents. It functions as a hybrid platform, combining robust B2B software for officials with an intuitive client-side app for the community.
                </p>
                <p className="project-note">
                    <strong>Note:</strong> This project is under NDA. While I cannot display specific designs, this case study outlines my process, deliverables, and the impact of my work as the Founding Product Designer.
                </p>
            </Section>

            {/* Role Section */}
            <Section id="role">
                <h2>Role & Responsibilities</h2>
                <div className="project-details-grid">
                    <div className="detail-item">
                        <h4>Role</h4>
                        <p>Founding Product Designer</p>
                    </div>
                    <div className="detail-item">
                        <h4>Scope</h4>
                        <p>End-to-End Design<br />Product Management<br />Design System</p>
                    </div>
                </div>
                <p>
                    As the Founding Product Designer, I owned the entire design lifecycle. My responsibilities extended beyond pixels to include product management tasks such as creating <strong>Lean Canvases</strong> and utilizing the <strong>MoSCoW method</strong> for feature prioritization. I also prepared slide decks for investor meetings, helping to articulate the product vision and value proposition.
                </p>

                {/* Placeholder for Lean Canvas */}
                <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'rgba(107, 33, 168, 0.05)',
                    border: '2px dashed #6B21A8',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6B21A8',
                    margin: '32px 0',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <strong>Lean Canvas / MoSCoW Grid</strong>
                    <span>(Placeholder for diagram or image)</span>
                </div>
            </Section>

            {/* Discovery Section */}
            <Section id="discovery">
                <h2>Discovery</h2>
                <p>
                    To ensure we were solving the right problems, I conducted extensive research:
                </p>
                <ul>
                    <li>Conducted <strong>30+ semi-structured user interviews</strong> with residents, government officials, and volunteers.</li>
                    <li>Built detailed feature maps to visualize the ecosystem and identify gaps in current solutions.</li>
                    <li>Analyzed competitor products to understand market standards and opportunities for innovation.</li>
                </ul>

                {/* Placeholder for Feature Maps */}
                <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'rgba(107, 33, 168, 0.05)',
                    border: '2px dashed #6B21A8',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6B21A8',
                    margin: '32px 0',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <strong>Feature Maps / Ecosystem Visualization</strong>
                    <span>(Placeholder for diagram or image)</span>
                </div>
            </Section>

            {/* Definition Section */}
            <Section id="definition">
                <h2>Definition</h2>
                <p>
                    Synthesizing the research findings, I created feature-specific personas to guide our design decisions. These included:
                </p>
                <div className="persona-grid">
                    <div className="persona-card">
                        <div className="persona-header">
                            <div className="persona-info">
                                <h4>Residents</h4>
                                <p>Seeking easy access to information and services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="persona-card">
                        <div className="persona-header">
                            <div className="persona-info">
                                <h4>Officials</h4>
                                <p>Need efficient tools to manage requests and communicate.</p>
                            </div>
                        </div>
                    </div>
                    <div className="persona-card">
                        <div className="persona-header">
                            <div className="persona-info">
                                <h4>Town Champions</h4>
                                <p>Community leaders bridging the gap.</p>
                            </div>
                        </div>
                    </div>
                    <div className="persona-card">
                        <div className="persona-header">
                            <div className="persona-info">
                                <h4>Admins</h4>
                                <p>Require full control and oversight of the platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Design System Section */}
            <Section id="design">
                <h2>Design System</h2>
                <p>
                    I built a comprehensive design system from the ground up to ensure consistency and scalability. This included:
                </p>
                <ul>
                    <li><strong>Design Tokens:</strong> For colors, typography, and spacing.</li>
                    <li><strong>Typography Scales:</strong> Ensuring readability across devices.</li>
                    <li><strong>Component Libraries:</strong> Reusable UI elements for rapid development.</li>
                    <li><strong>Accessibility:</strong> Maintained strict adherence to accessibility standards, focusing on color contrast and touch targets.</li>
                </ul>
            </Section>

            {/* Prototyping Section */}
            <Section id="prototyping">
                <h2>Prototyping</h2>
                <p>
                    I defined the end-to-end design workflow, moving from low-fidelity wireframes to pixel-perfect high-fidelity prototypes in Figma.
                </p>
                <p>
                    Using <strong>Smart Animate</strong>, I created interactive prototypes to validate motion, transitions, and micro-interactions. This allowed stakeholders to experience the "feel" of the app before development began.
                </p>
            </Section>

            {/* Testing Section */}
            <Section id="testing">
                <h2>Testing & Validation</h2>
                <p>
                    We didn't just build; we validated. I ran usability testing for each major feature, iteratively refining the UI based on the findings.
                </p>
                <p>
                    The project culminated in building the entire app end-to-end, reaching an <strong>Alpha testing phase</strong> where users responded positively to the solution.
                </p>

                <h3>Key Outcomes & Metrics</h3>
                <div className="project-details-grid">
                    <div className="detail-item">
                        <h4>Metric 1</h4>
                        <p>[Placeholder: e.g., 40% reduction in response time]</p>
                    </div>
                    <div className="detail-item">
                        <h4>Metric 2</h4>
                        <p>[Placeholder: e.g., 90% user satisfaction score]</p>
                    </div>
                    <div className="detail-item">
                        <h4>Outcome</h4>
                        <p>[Placeholder: e.g., Successfully onboarded 3 pilot towns]</p>
                    </div>
                </div>

                <h3>Testimonials</h3>
                <div className="quotes-container">
                    <div className="quote-block">
                        <p>"[Placeholder Quote: e.g., 'This app completely changed how we handle resident requests.']"</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '8px', fontStyle: 'normal' }}>- Town Official</p>
                    </div>
                    <div className="quote-block">
                        <p>"[Placeholder Quote: e.g., 'Finally, a way to know what's happening in my town.']"</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '8px', fontStyle: 'normal' }}>- Resident</p>
                    </div>
                </div>
            </Section>
        </CaseStudyLayout>
    );
}
