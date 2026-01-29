import Section from '../components/Section';
import CaseStudyLayout from '../components/CaseStudyLayout';
import './Faabl.css';

export default function Faabl() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Project Details' },
    { id: 'research', label: 'Research & Discovery' },
    { id: 'ideation', label: 'Ideation' },
    { id: 'personas', label: 'Personas' },
    { id: 'testing', label: 'User Testing' },
    { id: 'solution', label: 'The Solution' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'final-design', label: 'Final Design' },
  ];

  return (
    <CaseStudyLayout
      title="Faabl"
      primaryColor="#A67146"
      primaryLightColor="rgba(166, 113, 70, 0.15)"
      subtitle={
        <p className="intro-subtitle">
          Faabl is an interactive storytelling tent that allows children to embark on imaginative adventures with their AI-powered companion, Fabio. Fabio creates personalized stories based on each child's preferences, making every storytelling experience unique and engaging.
        </p>
      }
      sections={sections}
    >
      {/* Overview Section */}
      <Section id="overview">
        <h2>Overview</h2>
        <h4>Challenge</h4>
        <p>
          The design challenge focused on creating a solution to <span style={{ fontSize: '1.15rem', fontWeight: "bold", fontStyle: "italic", color: 'var(--primary-color)' }}>improve life during a power outage</span>, with a particular emphasis on renters' needs.
        </p>
        <h4>Solution</h4>
        <p>
          Faabl is an interactive storytelling tent that allows children to embark on imaginative adventures with their AI-powered companion, Fabio. Fabio creates personalized stories based on each child's preferences, making every storytelling experience unique and engaging.
        </p>
        <p className="project-note">This product was developed as part of a course at the Ross School of Business.</p>
      </Section>

      {/* Project Details Grid */}
      <Section id="details">
        <div className="project-details-grid">
          <div className="detail-item">
            <h4>Duration</h4>
            <p>Sep '24 - Dec '24<br />(5 months)</p>
          </div>
          <div className="detail-item">
            <h4>Industry</h4>
            <p>Toys and Entertainment</p>
          </div>
          <div className="detail-item">
            <h4>Tools</h4>
            <p>
              Figma <br />
              Photoshop <br />
              Excel <br />
              Miro <br />
              Python
            </p>
          </div>
          <div className="detail-item">
            <h4>Role</h4>
            <p>
              Product Manager <br />
              Designer <br />
              Business Analyst
            </p>
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research">
        <h2>Research & Discovery</h2>

        <h3>Initial Hypothesis</h3>
        <p>
          Before conducting research, we initially assumed that the biggest challenges people face during power outages would be staying warm, keeping electronics powered, and ensuring safety.
        </p>

        <h3>Research Findings</h3>
        <p>
          To gain deeper insights into power outage experiences, we conducted <b>52</b> user interviews and ethnographic studies. Our research revealed the following key findings:
        </p>
        {/* Placeholder for findings if user provides them later, or we can use the pivot info here */}
        <p>
          Through conversations with more people, we discovered that kids—who typically have the shortest attention spans in the household—need constant entertainment, especially during a power outage. We also found that power outages can be unsettling for children, making them feel scared and in need of continuous reassurance. This, in turn, disrupts parents’ ability to manage essential tasks, as they must also attend to their children’s needs during prolonged outages.
        </p>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>1. Changing Nature of Power Outage</h4>
            <p>Modern power outages differ significantly from those in the past.</p>
          </div>
          <div className="insight-card">
            <h4>2. Strong sense of Boredom</h4>
            <p>Many individuals find power outages dull and unengaging.</p>
          </div>
          <div className="insight-card">
            <h4>3. Lack of Entertainment</h4>
            <p>People struggle to find ways to stay entertained during outages.</p>
          </div>
          <div className="insight-card">
            <h4>4. Desire and Need for Warmth</h4>
            <p>Many express a strong desire to stay warm during power outages.</p>
          </div>
        </div>
      </Section>

      {/* Ideation Section */}
      <Section id="ideation">
        <h2>Ideation</h2>
        <h4>Initial Question</h4>
        <p className="challenge-statement">
          <span style={{ fontSize: '1.15rem', fontWeight: "semi-bold", fontStyle: "italic", color: 'var(--black)' }}>How might we transform temperature regulation into a novel experience for renters in the US?</span>
        </p>
        <p>
          Based on our initial findings, we posed this question and conducted a Rapid Ideation Sprint to generate innovative solutions.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}rapid-sprint.png`}
          alt="Rapid Ideation Sprint Board"
          className="img"
          style={{ borderRadius: '12px', border: '1px solid var(--gray-lighter)' }}
        />
        <h4>The Pivot</h4>
        <p>
          With the new insights about children's needs during outages, our team decided to focus on creating an entertainment product for kids.
        </p>
        <p className="challenge-statement">
          <span style={{ fontSize: '1.15rem', fontWeight: "semi-bold", fontStyle: "italic", color: 'var(--primary-color)', textDecoration: 'underline' }}>How might we provide parents with a solution keeping their children entertained while dealing with challenges that emerge during a power outages?</span>
        </p>
        <p>
          Out of all our ideas we voted the most interesting and feasible ones. We chose 5 best ones and created physical prototypes and concept cards to test out these ideas.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}faabl-concept-cards.png`}
          alt="Faabl Concept Cards"
          className="img"
          style={{ borderRadius: '12px', border: '1px solid var(--gray-lighter)', marginTop: '24px' }}
        />
      </Section>

      {/* Personas Section */}
      <Section id="personas">
        <h2>Personas</h2>
        <p>
          Based on our research, we created two key personas: Lydia (the parent) and Rosie (the child) to represent our primary users.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '32px' }}>
          <img
            src={`${import.meta.env.BASE_URL}faabl-persona-lydia.png`}
            alt="Persona: Lydia Miller - Busy Mom"
            className="img"
            style={{ borderRadius: '12px', border: '1px solid var(--gray-lighter)', width: '100%', maxWidth: '900px' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}faabl-persona-rosie.png`}
            alt="Persona: Rosie Miller - Bored Kid"
            className="img"
            style={{ borderRadius: '12px', border: '1px solid var(--gray-lighter)', width: '100%', maxWidth: '900px' }}
          />
        </div>
      </Section>

      {/* Testing Section */}
      <Section id="testing">
        <h2>User Testing</h2>
        <h3>User Enactments and Surveys</h3>
        <p>
          We took our concept cards and prototypes out on the field. To get the ground truth we took these to parks where we spoke to parents and gathered feedback from real users. In this process we also learned new things.
        </p>
        <p>
          We identified a few potential product ideas and created concept cards for them and ran a survey to test these concept cards. Apart from the people we spoke to, we sent out surveys to more people to get a better idea.
        </p>

        <div className="scattered-quotes-container">
          <div className="quote-bubble">
            "Parents don't want toys for specific situations"
          </div>
          <div className="quote-bubble">
            "Kids are easily bored"
          </div>
          <div className="quote-bubble">
            "Can this be played when the lights are out?"
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution">
        <h2>The Solution</h2>
        <p>
          The most popular and feasible idea was the storytelling tent.
        </p>

        <div className="feature-cards-container">
          <div className="feature-card-brown">
            <h4>Immersive</h4>
            <p>Environments that immerse you in this story</p>
          </div>
          <div className="feature-card-brown">
            <h4>AI Powered</h4>
            <p>AI customized story. No more boredom with the same old stories.</p>
          </div>
          <div className="feature-card-brown">
            <h4>Easy Setup</h4>
            <p>Build and set up the tent in less than 2 minutes.</p>
          </div>
        </div>
      </Section>

      {/* Implementation Section */}
      <Section id="implementation">
        <h2>Implementation</h2>

        <h3>Prototyping</h3>
        <p>
          We hit the ground running and experimented by building the prototype. Trying out different materials and techniques to stitch the tent. Various ways to project the image on the tent were tried out.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}faabl-prototyping.png`}
          alt="Faabl Prototyping Process"
          className="img"
          style={{ borderRadius: '12px', marginTop: '24px', marginBottom: '24px' }}
        />
        <p>
          After extensive trial and error, we successfully developed this prototype, refining its design through multiple iterations. We carefully considered user feedback and usability testing to ensure it effectively addresses the needs of children during power outages. Alongside the functional aspects, we also crafted a cohesive brand identity that aligns with the product’s purpose, making it both engaging and reassuring for kids.
        </p>

        <h3>The Business</h3>
        <p>
          We built the prototype from the ground up, carefully tracking all associated costs and developing a structured business model. To ensure feasibility, we reached out to manufacturers to obtain pricing estimates for production. Given that our product consists of multiple components, we strategically optimized costs by identifying areas where expenses could be reduced without compromising quality.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}faabl-business.png`}
          alt="Faabl Business Model"
          className="img"
          style={{ borderRadius: '12px', marginTop: '24px' }}
        />
      </Section>

      {/* Final Design Section */}
      <Section id="final-design">
        <h2>Final Design</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', margin: '32px 0' }}>
          <img
            src={`${import.meta.env.BASE_URL}faabl-final-box.png`}
            alt="Faabl Box Packaging"
            style={{ flex: '1 1 400px', width: '100%', borderRadius: '12px', border: '1px solid var(--gray-lighter)' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}faabl-final-tent.png`}
            alt="Faabl Final Tent Product"
            style={{ flex: '1 1 400px', width: '100%', borderRadius: '12px', border: '1px solid var(--gray-lighter)' }}
          />
        </div>
        <div style={{
          padding: '60px',
          textAlign: 'center',
          background: 'var(--background-light)',
          borderRadius: '16px',
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h3 style={{ marginBottom: '24px', color: 'var(--primary-color)', fontSize: '1.5rem' }}>Experience the full product story</h3>
          <a
            href="https://ipd.umich.edu/product/faabl/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              background: 'var(--primary-color)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 20px rgba(166, 113, 70, 0.4)',
              transition: 'transform 0.2s ease',
              border: '2px solid white'
            }}
          >
            View Final Design →
          </a>
        </div>
      </Section>
    </CaseStudyLayout>
  );
}
