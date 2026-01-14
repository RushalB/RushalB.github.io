import Section from '../components/Section';
import CaseStudyLayout from '../components/CaseStudyLayout';
import './ReapRewards.css';

export default function CaseStudy() {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Project Details' },
    { id: 'research', label: 'Research Process' },
    { id: 'design', label: 'Design Process' },
    { id: 'evaluation', label: 'Evaluation' },
    { id: 'style-guide', label: 'Style Guide' },
    { id: 'final-designs', label: 'Final Designs' },
  ];

  return (
    <CaseStudyLayout
      title="Reap Rewards"
      subtitle={
        <p className="intro-subtitle">
          Reap is a financial tool designed to help users make the most of their payments and rewards.
          It determines the best payment method for a given point of sale, ensuring maximum savings and benefits.
        </p>
      }
      sections={sections}
    >
      {/* Overview Section */}
      <Section id="overview">
        <h2>Overview</h2>
        <h4>Challenge</h4>
        <p>
          Many users struggle to maximize their financial benefits because they don't
          know <span style={{ fontSize: '1.15rem', fontWeight: "bold", fontStyle: "italic", color: 'var(--primary-color)' }}>which payment method to use, where, and when to get the highest rewards</span>, deals, or cash back.
          This lack of visibility leads to missed savings and reward opportunities.
        </p>
        <h4>Solution</h4>
        <p>
          Reap Rewards (a.k.a. Reap) is a mobile financial optimization tool designed to ensure users make the
          most of every payment and track their rewards across credit cards and loyalty programs.
          {/* <br></br>
        By analyzing purchase history and location, Reap provides tailored recommendations to help users save money through rewards and offers. */}
        </p>
        <p className="project-note">This project was made for an interaction design class.</p>

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
            <p>FinTech & Banking</p>
          </div>
          <div className="detail-item">
            <h4>Tools</h4>
            {/* TODO: Put logos later */}
            <p>
              Figma <br />
              Photoshop <br />
              Excel <br />
              Miro</p>
          </div>
          <div className="detail-item">
            <h4>Role</h4>
            <p>
              UX Designer
            </p>
          </div>
          {/* Template for an extra Item */}
          {/* <div className="detail-item">
            <h4>Team</h4>
            <p>Solo Project</p>
          </div> */}
        </div>
      </Section>

      {/* Research Process */}
      <Section id="research">
        <h2>Research Process</h2>

        <h4>User Interview</h4>
        <p>
          I decided to tackle a problem in the space of personal finance management. To understand people's
          frustration relating to personal finance management I conducted unstructured interviews with people
          of different backgrounds and income status ranging from young people early in their career with
          limited financial resources to older people who had higher incomes and multiple sources of incomes.
        </p>

        <h4>Key Insights</h4>
        <div className="insights-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="insight-card">
            <h4>1. Cognitive Load</h4>
            <p>Users feel overwhelmed by the number of credit cards and loyalty programs they manage, leading to missed opportunities.</p>
          </div>
          <div className="insight-card">
            <h4>2. Lack of Visibility</h4>
            <p>Many users don't know which card offers the best rewards for a specific merchant until after the purchase is made.</p>
          </div>
          <div className="insight-card">
            <h4>3. Redemption Friction</h4>
            <p>The process of redeeming points is often buried deep within bank apps, discouraging users from using their rewards.</p>
          </div>
        </div>

        <div className="quotes-container">
          <img
            src="/interview-quotes.svg"
            alt="User Interview Quotes"
          />
        </div>

        <h3>Personas</h3>
        <p>
          On thoroughly analyzing the interviews I understood that people struggle with rewards tracking and
          I need to make it easier for people to use their rewards. Following that I curated personas based
          on my users' pain points discovered in the interviews. These personas helped me gain a deeper
          understanding of user preferences and behaviors.
        </p>

        <div className="reap-persona-grid">
          <div className="persona-visual">
            <img src="/Tech Bro (1).png" alt="Nathan Sanders Illustration" />
          </div>
          <div className="persona-visual">
            <img src="/Tech Bro.png" alt="James Allen Illustration" />
          </div>
        </div>
      </Section>

      {/* Design Process */}
      <Section id="design">
        <h2>Design Process</h2>

        <h3>Site Map</h3>
        <p>
          On determining the key pages needed for my mockup, I tore a big sheet of paper and started drawing
          out how the screen would look. There were a lot of iterations drawn for each screen. I also pasted
          them on a white board and connected the flow of the screens.
        </p>
        <img
          src="/site-map.png"
          alt="Site Map"
          className="img blend-multiply"
        />

        <h3>User Flow using Paper Prototype</h3>
        <p>
          Once I was satisfied with the paper prototype I moved to Figma and created a digital prototype.
          My mid-fi version only contained enough features to explain the idea. No bells and whistles were
          added at this point. This version is intentionally black and white so that during testing the
          tester focuses on the features and not the aesthetics.
        </p>
        <img
          src="/user-flow.png"
          alt="User Flow"
          className="img blend-multiply"
        />

        <h3>Iteration v1</h3>
        <p className="iteration-tagline">
          Get Started → Reap more Rewards
        </p>
        <p>
          Unlock personalized tips to supercharge your credit card rewards. Shop your way to more cash in your pocket!
        </p>

        <img
          src="/wireframes.png"
          alt="Wireframes Iteration v1"
          className="img blend-multiply"
          style={{ borderRadius: '0px', marginTop: '32px' }}
        />
      </Section>



      {/*  Evaluation */}
      <Section id="evaluation">
        <h2>Heuristic Evaluation</h2>
        <p>
          I conducted an evaluation based on these heuristics to determine how the design performed against
          established usability principles.
        </p>

        <div className="heuristics-list">
          {/* 1. Flexibility and Efficiency */}
          <div className="heuristic-item">
            <h3>Heuristic: Flexibility and Efficiency of use</h3>
            <div className="heuristic-grid">
              <div className="heuristic-column">
                <h4>Violation for Frame 2</h4>
                <p>Previous design is very rigid meaning it has only one way to add a credit card. Users might experience fatigue filling in that information.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Violation:+Rigid+Input" alt="Violation: Rigid Input" className="heuristic-img" />
              </div>
              <div className="heuristic-column">
                <h4>Design Change</h4>
                <p>I added a "Scan your card", so that users do not have to type all the information and get a much faster experience. The user is then directly redirected to the confirm card page where he can make edits if necessary.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Change:+Scan+Card" alt="Change: Scan Card" className="heuristic-img" />
              </div>
            </div>
          </div>

          {/* 2. Visibility of System Status */}
          <div className="heuristic-item">
            <h3>Heuristic: Visibility of System Status</h3>
            <div className="heuristic-grid">
              <div className="heuristic-column">
                <h4>Violation for Frame 2,3,4</h4>
                <p>Previous design did not provide feedback for the user on which step of the process they were. Users should always know about the status of the process they are completing.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Violation:+No+Status" alt="Violation: No Status" className="heuristic-img" />
              </div>
              <div className="heuristic-column">
                <h4>Design Change</h4>
                <p>I added <em>Step 1/4....Step 2/4.....Step 3/4....Step 4/4</em> so that the user is aware of how many steps are remaining.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Change:+Step+Indicator" alt="Change: Step Indicator" className="heuristic-img" />
              </div>
            </div>
          </div>

          {/* 3. User Control and Freedom */}
          <div className="heuristic-item">
            <h3>Heuristic: User Control and Freedom</h3>
            <div className="heuristic-grid">
              <div className="heuristic-column">
                <h4>Violation for Frames 2,3 and 4</h4>
                <p>Previous design did not provide a way for the user to exit the process of adding a new credit card when they wanted. It sort of forced the user to continue until the task was done.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Violation:+No+Exit" alt="Violation: No Exit" className="heuristic-img" />
              </div>
              <div className="heuristic-column">
                <h4>Design Change</h4>
                <p>I added a <strong>cancel</strong> button on every stage so that the user can exit any time they want to. This makes them feel in charge and on control of what they are doing.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Change:+Cancel+Button" alt="Change: Cancel Button" className="heuristic-img" />
              </div>
            </div>
          </div>

          {/* 4. Help and documentation */}
          <div className="heuristic-item">
            <h3>Heuristic: Help and documentation</h3>
            <div className="heuristic-grid">
              <div className="heuristic-column">
                <h4>Violation for all frames</h4>
                <p>Previous design did not provide a way for the user to get help if they were stuck on some part of the app or wanted some information about how a certain process work, or what happens to their data. The user should always know about all these things and they should not be buried deep in the app but rather be accessible.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Violation:+No+Help" alt="Violation: No Help" className="heuristic-img" />
              </div>
              <div className="heuristic-column">
                <h4>Design Change</h4>
                <p>I added an extra help tab in the bottom navigation that redirects to a help page where user can find all necessary information and contact the app owners if necessary.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Change:+Help+Tab" alt="Change: Help Tab" className="heuristic-img" />
              </div>
            </div>
          </div>

          {/* 5. Consistency and Standards */}
          <div className="heuristic-item">
            <h3>Heuristic: Consistency and Standards</h3>
            <div className="heuristic-grid">
              <div className="heuristic-column">
                <h4>Violation for all frames</h4>
                <p>Previous design used a hamburger menu for content navigation. This type of menu is not generally used in mobile applications. It is also very inconvenient to open the side menu all the time to move around in the app.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Violation:+Hamburger" alt="Violation: Hamburger Menu" className="heuristic-img" />
              </div>
              <div className="heuristic-column">
                <h4>Design Change</h4>
                <p>I added a bottom navigation bar for moving around the app. This is used across the board in almost all apps. Having this type of navigation invokes a sense of familiarity for the user and they automatically know what the buttons or tabs on there do.</p>
                <img src="https://via.placeholder.com/300x500/e0e0e0/333333?text=Change:+Bottom+Nav" alt="Change: Bottom Nav" className="heuristic-img" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Style Guide */}
      <Section id="style-guide">
        <h2>Style Guide and Design System</h2>

        <h3>Typography</h3>
        <div className="typography-samples">
          <div className="type-sample type-14">Reap 14pt</div>
          <div className="type-sample type-30">Reap 30pt</div>
          <div className="type-sample type-40">Reap 40pt</div>
        </div>
        <div className="typography-weights">
          <div className="type-weight">Reap Regular</div>
          <div className="type-weight type-light">Reap Light</div>
          <div className="type-weight type-bold">Reap Bold</div>
        </div>

        <h3>Color Palette</h3>
        <div className="color-palette">
          <div className="color-swatch">
            <div className="swatch" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <p><strong>Primary</strong><br />HEX: #559EEE</p>
          </div>
          <div className="color-swatch">
            <div className="swatch" style={{ backgroundColor: '#2EEADE' }}></div>
            <p><strong>Accent</strong><br />HEX: #2EEADE</p>
          </div>
          <div className="color-swatch">
            <div className="swatch" style={{ backgroundColor: '#F4F7FB' }}></div>
            <p><strong>Background</strong><br />HEX: #F4F7FB</p>
          </div>
          <div className="color-swatch">
            <div className="swatch" style={{ backgroundColor: '#1E1E1E' }}></div>
            <p><strong>Text</strong><br />HEX: #1E1E1E</p>
          </div>
          <div className="color-swatch">
            <div className="swatch" style={{ backgroundColor: '#5B5B5B' }}></div>
            <p><strong>Grey</strong><br />HEX: #5B5B5B</p>
          </div>
        </div>
      </Section>

      {/* Final Designs / Key Features */}
      <Section id="final-designs">
        <h2>Final Designs</h2>
        <p>
          The final high-fidelity designs focus on clarity, ease of use, and maximizing financial benefits.
          Here are the key features that define the Reap Rewards experience.
        </p>

        <div className="features-scroll-container">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://via.placeholder.com/375x812/559EEE/ffffff?text=Home+Screen" alt="Home Screen Dashboard" />
            </div>
            <div className="feature-content">
              <h4>Smart Dashboard</h4>
              <p>A centralized hub showing your total rewards, recent savings, and personalized recommendations at a glance.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://via.placeholder.com/375x812/559EEE/ffffff?text=Card+Scanner" alt="Card Scanner Feature" />
            </div>
            <div className="feature-content">
              <h4>Instant Card Scan</h4>
              <p>Effortlessly add new cards by scanning them. No manual entry required, reducing friction and errors.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://via.placeholder.com/375x812/559EEE/ffffff?text=Reward+Tracker" alt="Reward Tracker" />
            </div>
            <div className="feature-content">
              <h4>Reward Tracker</h4>
              <p>Visualize your progress towards specific goals. See exactly how close you are to your next redemption.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="https://via.placeholder.com/375x812/559EEE/ffffff?text=Merchant+Map" alt="Merchant Map" />
            </div>
            <div className="feature-content">
              <h4>Merchant Map</h4>
              <p>Discover nearby merchants offering the highest cash back rates for your specific card portfolio.</p>
            </div>
          </div>
        </div>
      </Section>
    </CaseStudyLayout >
  );
}
