import Section from '../components/Section';
import CaseStudyLayout from '../components/CaseStudyLayout';
import './Borough.css';
import { Users, Layout, Shield, Code2, Database, BrainCircuit, Rocket, LineChart } from 'lucide-react';

export default function Borough() {
    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'role', label: 'Hybrid Role' },
        { id: 'design', label: 'Design Strategy' },
        { id: 'engineering', label: 'Engineering Root' },
        { id: 'ops', label: 'Ops & Leadership' },
        { id: 'impact', label: 'Impact' },
    ];

    return (
        <CaseStudyLayout
            title="Borough"
            primaryColor="#6B21A8"
            primaryLightColor="rgba(107, 33, 168, 0.15)"
            subtitle={
                <>
                    <p className="intro-subtitle">
                        Building a dual-platform government-citizen ecosystem.
                        As a hybrid Founding Engineer & Product Designer, I bridged the gap between technical architecture and user experience.
                    </p>
                    <div className="nda-badge">
                        <Shield size={16} />
                        <span>Confidential (NDA) — Process & Delivery Focus</span>
                    </div>
                </>
            }
            sections={sections}
        >
            {/* Overview Section */}
            <Section id="overview">
                <h2>Overview</h2>
                <div className="overview-container">
                    <h4>The Scope</h4>
                    <p>
                        Borough is a B2B2C communication platform designed to modernize how towns interact with their constituents. The ecosystem consists of a **web portal for government departments** and a **mobile app for residents and local businesses**, all integrated through a unified backend.
                    </p>
                    <p>
                        Joining as a founding member, I was responsible for the end-to-end delivery of the product, from initial design concepts to a production-ready alpha hosted on GCP.
                    </p>
                </div>
            </Section>

            {/* Role & Strategy Section */}
            <Section id="role">
                <h2>The Hybrid Role</h2>
                <div className="role-highlights">
                    <div className="highlight-item">
                        <div className="icon-box"><Code2 /></div>
                        <div>
                            <h4>Founding Engineer</h4>
                            <p>Architected the React frontend, built REST APIs with FastAPI, and managed GCP deployment pipelines.</p>
                        </div>
                    </div>
                    <div className="highlight-item">
                        <div className="icon-box"><Layout /></div>
                        <div>
                            <h4>Product Designer</h4>
                            <p>Owned the end-to-end UX, from persona definition to high-fidelity Figma prototypes and design systems.</p>
                        </div>
                    </div>
                    <div className="highlight-item">
                        <div className="icon-box"><Rocket /></div>
                        <div>
                            <h4>Operations</h4>
                            <p>Led sprints, managed prioritization (MoSCoW), and prepared materials for seed-stage investors.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Design Strategy Section */}
            <Section id="design">
                <h2>Design Strategy & UX</h2>
                <div className="discovery-section">
                    <h3 className="section-sub-h">Discovery & Strategy</h3>
                    <p>
                        I work closely with stakeholders to align business goals with user needs. My approach grounded our MVP strategy in real-world constraints.
                    </p>
                    <div className="b-grid-3">
                        <div className="b-card minimal">
                            <h5>Stakeholder Alignment</h5>
                            <p>Defined clear goals by balancing operational constraints with user needs, directly informing the MVP scope.</p>
                        </div>
                        <div className="b-card minimal">
                            <h5>Ground-level Research</h5>
                            <p>Conducted interviews with residents and local businesses to identify navigation pain points and workflow opportunities.</p>
                        </div>
                        <div className="b-card minimal highlight">
                            <h5>Key Insights → MVP</h5>
                            <p>Synthesized findings into lean canvases and journey maps, prioritizing high-value features for the initial release.</p>
                        </div>
                    </div>
                </div>

                <div className="system-design-section">
                    <h3 className="section-sub-h">System-first Design</h3>
                    <div className="b-split-layout">
                        <div className="text-content">
                            <p>
                                I developed a scalable design system from day one, ensuring consistency across web and mobile. Tokenized colors, typography, and components streamlined accessibility (WCAG 2.1) and developer handoff.
                            </p>
                            <div className="stat-pill-row">
                                <span className="stat-pill"><strong>Efficiency:</strong> Reusable Components</span>
                                <span className="stat-pill"><strong>Scale:</strong> Tokenized Design</span>
                            </div>
                        </div>
                        <div className="abstract-visual system-visual">
                            <div className="layer-stack">
                                <div className="layer l1"><span>Tokens</span></div>
                                <div className="layer l2"><span>Components</span></div>
                                <div className="layer l3"><span>Patterns</span></div>
                                <div className="layer l4"><span>Screens</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature-arch-section">
                    <h3 className="section-sub-h">Feature Architecture & Roles</h3>
                    <div className="b-grid-2">
                        <div className="b-card">
                            <Layout className="card-icon" />
                            <div>
                                <h5>Role-aware Interfaces</h5>
                                <p>Designed dynamic interfaces that adapt to user roles (Resident, Official, Admin), spanning a single unified platform.</p>
                            </div>
                        </div>
                        <div className="b-card">
                            <Rocket className="card-icon" />
                            <div>
                                <h5>Parallel Workflows</h5>
                                <p>Maintained velocity by finalizing designs for one module while engineering built the previous one, converting bottlenecks into pipelines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Engineering Section */}
            <Section id="engineering">
                <h2>Engineering Foundations</h2>

                <div className="bridge-section">
                    <div className="bridge-header">
                        <h3 className="section-sub-h">Design-to-Engineering Bridge</h3>
                        <p>Bridging the gap between creative intent and database reality.</p>
                    </div>
                    <div className="bridge-visual">
                        <div className="bridge-node design">
                            <Layout size={20} />
                            <span>Interface</span>
                        </div>
                        <div className="bridge-connector">
                            <span className="bridge-label">Schema Alignment</span>
                            <div className="line"></div>
                        </div>
                        <div className="bridge-node code">
                            <Database size={20} />
                            <span>Data Model</span>
                        </div>
                    </div>
                    <p className="bridge-desc">
                        Collaborated on database schema design <em>before</em> frontend dev to ensure UI flows matched data structures, preventing costly rework.
                    </p>
                </div>

                <div className="infra-section">
                    <h3 className="section-sub-h">Infrastructure & Scale</h3>
                    <div className="b-grid-2">
                        <div className="tech-card">
                            <div className="tech-header">
                                <Database size={20} />
                                <h5>Cloud Decisions</h5>
                            </div>
                            <p>Architected a cost-effective GCP environment (FastAPI + Python) that supported rapid iteration while minimizing operational overhead for the seed stage.</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-header">
                                <Code2 size={20} />
                                <h5>Phase Planning</h5>
                            </div>
                            <p>Organized MVP deliverables into strict phases with clear dependencies, ensuring our small team hit every deadline.</p>
                        </div>
                    </div>
                </div>

                <div className="ai-section">
                    <h3 className="section-sub-h">Advanced Systems (AI)</h3>
                    <div className="rag-card">
                        <div className="rag-content">
                            <div className="rag-header">
                                <BrainCircuit className="rag-icon" />
                                <div>
                                    <h5>    RAG Chatbot</h5>
                                </div>
                            </div>
                            <p>
                                Implemented a retrieval-augmented generation (RAG) assistant to help residents navigate services. Built robust fallback mechanisms for low-confidence queries to ensure reliability.
                            </p>
                        </div>
                        <div className="rag-meta">
                            <strong>Strategy:</strong> Low-cost LLM adoption with vector embeddings to keep infrastructure lean.
                        </div>
                    </div>
                </div>
            </Section>

            {/* Ops & Leadership Section */}
            <Section id="ops">
                <h2>Strategic Responsibilities</h2>
                <p>
                    Beyond code and pixels, I drove the operational rhythm of the product.
                </p>
                <div className="b-grid-3">
                    <div className="ops-card">
                        <h5>Feature Prioritization</h5>
                        <p>Led "ruthless prioritization" for the MVP, balancing clear user ROI with technical feasibility.</p>
                    </div>
                    <div className="ops-card">
                        <h5>Roadmaps & Deadlines</h5>
                        <p>Managed the technical roadmap, setting realistic deadlines that aligned with investor feedback.</p>
                    </div>
                    <div className="ops-card subtle">
                        <h5>Pricing Strategy</h5>
                        <p>Collaborated on pricing models to align with market expectations and client budgets.</p>
                    </div>
                </div>
            </Section>

            {/* Impact Section */}
            <Section id="impact">
                <h2>Impact</h2>
                <div className="outcomes-grid">
                    <div className="outcome-item">
                        <Rocket />
                        <span>Delivered a fully functional Alpha ready for onboarding and regional pilot programs.</span>
                    </div>
                    <div className="outcome-item">
                        <LineChart />
                        <span>Prototype testing secured strong interest from early-stage investors, prompting sales-focused hiring.</span>
                    </div>
                    <div className="outcome-item">
                        <Users />
                        <span>Established the core technical velocity and product vision within a tight-knit 4-person team.</span>
                    </div>
                </div>
            </Section>
        </CaseStudyLayout>
    );
}


