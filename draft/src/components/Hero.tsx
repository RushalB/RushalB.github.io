import portraitImage from '../assets/hero-portrait.jpg';
import './Hero.css';
import './Hero-additions.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background-elements">
        {/* Large circles - 20 total */}
        <div className="geo-circle size-64 pos-1-4-1-4"></div>
        <div className="geo-circle size-48 pos-3-4-1-3"></div>
        <div className="geo-circle size-32 pos-1-2-2-3"></div>
        <div className="geo-circle size-64 pos-1-6-5-6"></div>
        <div className="geo-circle size-48 pos-5-6-1-6"></div>
        <div className="geo-circle size-64 pos-1-8-1-4"></div>
        <div className="geo-circle size-48 pos-7-8-2-3"></div>
        <div className="geo-circle size-32 pos-3-8-1-2"></div>
        <div className="geo-circle size-64 pos-5-8-3-4"></div>
        <div className="geo-circle size-48 pos-1-4-7-8"></div>
        <div className="geo-circle size-32 pos-2-3-1-8"></div>
        <div className="geo-circle size-64 pos-1-3-5-8"></div>
        <div className="geo-circle size-48 pos-3-4-3-8"></div>
        <div className="geo-circle size-32 pos-1-6-2-3"></div>
        <div className="geo-circle size-64 pos-5-6-5-8"></div>
        <div className="geo-circle size-48 pos-1-2-1-8"></div>
        <div className="geo-circle size-32 pos-7-8-7-8"></div>
        <div className="geo-circle size-64 pos-3-8-3-8"></div>
        <div className="geo-circle size-48 pos-5-8-1-6"></div>
        <div className="geo-circle size-32 pos-1-8-5-6"></div>

        {/* Medium circles - 30 total */}
        <div className="geo-circle size-24 pos-1-3-3-4"></div>
        <div className="geo-circle size-20 pos-2-3-1-4"></div>
        <div className="geo-circle size-24 pos-1-8-1-8"></div>
        <div className="geo-circle size-20 pos-7-8-3-4"></div>
        <div className="geo-circle size-24 pos-1-2-1-6"></div>
        <div className="geo-circle size-20 pos-3-8-5-6"></div>
        <div className="geo-circle size-24 pos-5-8-1-4"></div>
        <div className="geo-circle size-20 pos-1-4-3-8"></div>
        <div className="geo-circle size-24 pos-3-4-5-8"></div>
        <div className="geo-circle size-20 pos-1-6-7-8"></div>
        <div className="geo-circle size-24 pos-5-6-3-8"></div>
        <div className="geo-circle size-20 pos-1-8-2-3"></div>
        <div className="geo-circle size-24 pos-7-8-1-6"></div>
        <div className="geo-circle size-20 pos-3-8-3-4"></div>
        <div className="geo-circle size-24 pos-5-8-5-6"></div>
        <div className="geo-circle size-20 pos-2-3-3-8"></div>
        <div className="geo-circle size-24 pos-1-4-5-8"></div>
        <div className="geo-circle size-20 pos-3-4-1-8"></div>
        <div className="geo-circle size-24 pos-1-2-7-8"></div>
        <div className="geo-circle size-20 pos-5-6-1-4"></div>
        <div className="geo-circle size-24 pos-1-6-5-8"></div>
        <div className="geo-circle size-20 pos-7-8-5-6"></div>
        <div className="geo-circle size-24 pos-3-8-1-6"></div>
        <div className="geo-circle size-20 pos-5-8-2-3"></div>
        <div className="geo-circle size-24 pos-1-3-1-8"></div>
        <div className="geo-circle size-20 pos-2-3-7-8"></div>
        <div className="geo-circle size-24 pos-1-8-3-4"></div>
        <div className="geo-circle size-20 pos-7-8-1-4"></div>
        <div className="geo-circle size-24 pos-1-2-3-8"></div>
        <div className="geo-circle size-20 pos-3-4-7-8"></div>

        {/* Small dots - 50 total */}
        <div className="geo-dot pos-1-4-2-3"></div>
        <div className="geo-dot pos-3-4-3-4"></div>
        <div className="geo-dot pos-1-3-1-2"></div>
        <div className="geo-dot pos-1-8-2-3"></div>
        <div className="geo-dot pos-5-6-1-4"></div>
        <div className="geo-dot pos-2-3-5-6"></div>
        <div className="geo-dot pos-1-6-1-3"></div>
        <div className="geo-dot pos-7-8-7-8"></div>
        <div className="geo-dot pos-3-8-1-4"></div>
        <div className="geo-dot pos-5-8-5-6"></div>
        <div className="geo-dot pos-1-4-1-8"></div>
        <div className="geo-dot pos-3-4-3-8"></div>
        <div className="geo-dot pos-1-2-5-8"></div>
        <div className="geo-dot pos-2-3-1-8"></div>
        <div className="geo-dot pos-1-6-7-8"></div>
        <div className="geo-dot pos-5-6-3-8"></div>
        <div className="geo-dot pos-1-8-1-4"></div>
        <div className="geo-dot pos-7-8-5-6"></div>
        <div className="geo-dot pos-3-8-2-3"></div>
        <div className="geo-dot pos-5-8-1-8"></div>
        <div className="geo-dot pos-1-3-5-8"></div>
        <div className="geo-dot pos-2-3-3-8"></div>
        <div className="geo-dot pos-1-4-7-8"></div>
        <div className="geo-dot pos-3-4-1-6"></div>
        <div className="geo-dot pos-1-2-3-4"></div>
        <div className="geo-dot pos-5-6-1-8"></div>
        <div className="geo-dot pos-1-6-5-6"></div>
        <div className="geo-dot pos-7-8-1-3"></div>
        <div className="geo-dot pos-3-8-7-8"></div>
        <div className="geo-dot pos-5-8-1-6"></div>
        <div className="geo-dot pos-1-8-5-8"></div>
        <div className="geo-dot pos-2-3-1-6"></div>
        <div className="geo-dot pos-1-4-3-4"></div>
        <div className="geo-dot pos-3-4-5-6"></div>
        <div className="geo-dot pos-1-2-1-4"></div>
        <div className="geo-dot pos-5-6-7-8"></div>
        <div className="geo-dot pos-1-6-1-4"></div>
        <div className="geo-dot pos-7-8-2-3"></div>
        <div className="geo-dot pos-3-8-5-6"></div>
        <div className="geo-dot pos-5-8-3-8"></div>
        <div className="geo-dot pos-1-3-7-8"></div>
        <div className="geo-dot pos-2-3-3-4"></div>
        <div className="geo-dot pos-1-8-1-6"></div>
        <div className="geo-dot pos-7-8-5-8"></div>
        <div className="geo-dot pos-1-4-5-6"></div>
        <div className="geo-dot pos-3-4-1-4"></div>
        <div className="geo-dot pos-1-2-7-8"></div>
        <div className="geo-dot pos-5-6-3-4"></div>
        <div className="geo-dot pos-1-6-3-8"></div>
        <div className="geo-dot pos-2-3-7-8"></div>

        {/* Rectangles and squares - 40 total */}
        <div className="geo-rect size-24 rot-12 pos-1-2-1-4"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-2-3-2-3"></div>
        <div className="geo-rect size-20 rot-45 pos-1-4-3-4"></div>
        <div className="geo-rect size-18 rot-12 pos-1-8-5-6"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-5-6-2-3"></div>
        <div className="geo-rect size-14 rot-45 pos-3-4-1-6"></div>
        <div className="geo-rect size-24 rot-12 pos-1-6-1-4"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-7-8-3-4"></div>
        <div className="geo-rect size-20 rot-45 pos-3-8-5-6"></div>
        <div className="geo-rect size-18 rot-12 pos-5-8-1-8"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-1-4-7-8"></div>
        <div className="geo-rect size-14 rot-45 pos-2-3-3-8"></div>
        <div className="geo-rect size-24 rot-12 pos-1-3-5-8"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-3-4-1-4"></div>
        <div className="geo-rect size-20 rot-45 pos-1-2-5-6"></div>
        <div className="geo-rect size-18 rot-12 pos-5-6-3-8"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-1-8-2-3"></div>
        <div className="geo-rect size-14 rot-45 pos-7-8-1-6"></div>
        <div className="geo-rect size-24 rot-12 pos-3-8-7-8"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-5-8-1-4"></div>
        <div className="geo-rect size-20 rot-45 pos-1-6-3-4"></div>
        <div className="geo-rect size-18 rot-12 pos-2-3-1-8"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-1-4-5-8"></div>
        <div className="geo-rect size-14 rot-45 pos-3-4-2-3"></div>
        <div className="geo-rect size-24 rot-12 pos-1-2-1-6"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-5-6-7-8"></div>
        <div className="geo-rect size-20 rot-45 pos-1-8-3-8"></div>
        <div className="geo-rect size-18 rot-12 pos-7-8-5-6"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-3-8-1-6"></div>
        <div className="geo-rect size-14 rot-45 pos-5-8-3-4"></div>
        <div className="geo-rect size-24 rot-12 pos-1-3-1-4"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-2-3-5-8"></div>
        <div className="geo-rect size-20 rot-45 pos-1-4-1-8"></div>
        <div className="geo-rect size-18 rot-12 pos-3-4-7-8"></div>
        <div className="geo-rect size-22 rot-neg-6 pos-1-2-3-8"></div>
        <div className="geo-rect size-14 rot-45 pos-5-6-1-6"></div>
        <div className="geo-rect size-24 rot-12 pos-1-6-5-6"></div>
        <div className="geo-rect size-16 rot-neg-6 pos-7-8-1-4"></div>
        <div className="geo-rect size-20 rot-45 pos-3-8-3-4"></div>
        <div className="geo-rect size-18 rot-12 pos-5-8-5-8"></div>

        {/* Lines - 60 total */}
        <div className="geo-line horiz len-40 pos-1-3-1-4"></div>
        <div className="geo-line vert len-32 pos-3-4-1-2"></div>
        <div className="geo-line diag rot-45 len-36 pos-1-2-3-4"></div>
        <div className="geo-line horiz len-28 pos-1-6-2-3"></div>
        <div className="geo-line vert len-36 pos-1-4-5-6"></div>
        <div className="geo-line horiz len-32 pos-5-6-1-4"></div>
        <div className="geo-line diag rot-45 len-24 pos-1-8-1-8"></div>
        <div className="geo-line horiz len-40 pos-7-8-3-4"></div>
        <div className="geo-line vert len-28 pos-3-8-5-6"></div>
        <div className="geo-line diag rot-45 len-32 pos-5-8-1-6"></div>
        <div className="geo-line horiz len-36 pos-1-4-7-8"></div>
        <div className="geo-line vert len-24 pos-2-3-3-8"></div>
        <div className="geo-line horiz len-28 pos-1-3-5-8"></div>
        <div className="geo-line diag rot-45 len-40 pos-3-4-1-4"></div>
        <div className="geo-line vert len-32 pos-1-2-1-8"></div>
        <div className="geo-line horiz len-24 pos-5-6-7-8"></div>
        <div className="geo-line diag rot-45 len-36 pos-1-6-3-8"></div>
        <div className="geo-line vert len-28 pos-7-8-2-3"></div>
        <div className="geo-line horiz len-32 pos-3-8-5-6"></div>
        <div className="geo-line diag rot-45 len-24 pos-5-8-1-4"></div>
        <div className="geo-line vert len-40 pos-1-8-3-4"></div>
        <div className="geo-line horiz len-28 pos-2-3-1-8"></div>
        <div className="geo-line diag rot-45 len-32 pos-1-4-5-8"></div>
        <div className="geo-line vert len-36 pos-3-4-2-3"></div>
        <div className="geo-line horiz len-24 pos-1-2-1-6"></div>
        <div className="geo-line diag rot-45 len-28 pos-5-6-3-8"></div>
        <div className="geo-line vert len-32 pos-1-6-5-6"></div>
        <div className="geo-line horiz len-40 pos-7-8-1-6"></div>
        <div className="geo-line diag rot-45 len-24 pos-3-8-7-8"></div>
        <div className="geo-line vert len-36 pos-5-8-1-8"></div>
        <div className="geo-line horiz len-28 pos-1-3-3-4"></div>
        <div className="geo-line diag rot-45 len-32 pos-2-3-5-8"></div>
        <div className="geo-line vert len-24 pos-1-4-1-4"></div>
        <div className="geo-line horiz len-36 pos-3-4-7-8"></div>
        <div className="geo-line diag rot-45 len-40 pos-1-2-3-8"></div>
        <div className="geo-line vert len-28 pos-5-6-1-6"></div>
        <div className="geo-line horiz len-32 pos-1-8-5-8"></div>
        <div className="geo-line diag rot-45 len-24 pos-7-8-3-8"></div>
        <div className="geo-line vert len-36 pos-3-8-1-6"></div>
        <div className="geo-line horiz len-28 pos-5-8-2-3"></div>
        <div className="geo-line diag rot-45 len-32 pos-1-6-1-4"></div>
        <div className="geo-line vert len-40 pos-2-3-7-8"></div>
        <div className="geo-line horiz len-24 pos-1-4-3-8"></div>
        <div className="geo-line diag rot-45 len-36 pos-3-4-5-8"></div>
        <div className="geo-line vert len-28 pos-1-2-1-4"></div>
        <div className="geo-line horiz len-32 pos-5-6-5-8"></div>
        <div className="geo-line diag rot-45 len-24 pos-1-8-7-8"></div>
        <div className="geo-line vert len-36 pos-7-8-1-4"></div>
        <div className="geo-line horiz len-40 pos-3-8-3-4"></div>
        <div className="geo-line diag rot-45 len-28 pos-5-8-5-6"></div>
        <div className="geo-line vert len-32 pos-1-3-1-8"></div>
        <div className="geo-line horiz len-24 pos-2-3-3-8"></div>
        <div className="geo-line diag rot-45 len-36 pos-1-4-7-8"></div>
        <div className="geo-line vert len-28 pos-3-4-1-6"></div>
        <div className="geo-line horiz len-32 pos-1-2-5-6"></div>
        <div className="geo-line diag rot-45 len-40 pos-5-6-3-8"></div>
        <div className="geo-line vert len-24 pos-1-6-2-3"></div>
        <div className="geo-line horiz len-36 pos-7-8-5-8"></div>
        <div className="geo-line diag rot-45 len-28 pos-3-8-1-4"></div>
        <div className="geo-line vert len-32 pos-5-8-7-8"></div>

        {/* Arcs - 30 total */}
        <div className="geo-arc size-32 pos-2-3-1-3"></div>
        <div className="geo-arc size-28 pos-1-4-1-2"></div>
        <div className="geo-arc size-32 pos-1-8-3-4"></div>
        <div className="geo-arc size-28 pos-7-8-1-6"></div>
        <div className="geo-arc size-32 pos-3-8-5-6"></div>
        <div className="geo-arc size-28 pos-5-8-1-4"></div>
        <div className="geo-arc size-32 pos-1-6-7-8"></div>
        <div className="geo-arc size-28 pos-2-3-3-8"></div>
        <div className="geo-arc size-32 pos-1-4-5-8"></div>
        <div className="geo-arc size-28 pos-3-4-2-3"></div>
        <div className="geo-arc size-32 pos-1-2-1-6"></div>
        <div className="geo-arc size-28 pos-5-6-7-8"></div>
        <div className="geo-arc size-32 pos-1-8-3-8"></div>
        <div className="geo-arc size-28 pos-7-8-5-6"></div>
        <div className="geo-arc size-32 pos-3-8-1-6"></div>
        <div className="geo-arc size-28 pos-5-8-3-4"></div>
        <div className="geo-arc size-32 pos-1-3-1-4"></div>
        <div className="geo-arc size-28 pos-2-3-5-8"></div>
        <div className="geo-arc size-32 pos-1-4-1-8"></div>
        <div className="geo-arc size-28 pos-3-4-7-8"></div>
        <div className="geo-arc size-32 pos-1-2-3-8"></div>
        <div className="geo-arc size-28 pos-5-6-1-6"></div>
        <div className="geo-arc size-32 pos-1-6-5-6"></div>
        <div className="geo-arc size-28 pos-7-8-1-4"></div>
        <div className="geo-arc size-32 pos-3-8-3-4"></div>
        <div className="geo-arc size-28 pos-5-8-5-8"></div>
        <div className="geo-arc size-32 pos-1-8-1-6"></div>
        <div className="geo-arc size-28 pos-2-3-7-8"></div>
        <div className="geo-arc size-32 pos-1-4-3-4"></div>
        <div className="geo-arc size-28 pos-3-4-5-6"></div>

        {/* Pluses - 40 total */}
        <div className="geo-plus pos-1-2-1-2">+</div>
        <div className="geo-plus pos-3-4-1-4">+</div>
        <div className="geo-plus pos-1-3-2-3">+</div>
        <div className="geo-plus pos-1-6-3-4">+</div>
        <div className="geo-plus pos-5-6-1-2">+</div>
        <div className="geo-plus pos-1-8-5-6">+</div>
        <div className="geo-plus pos-7-8-1-3">+</div>
        <div className="geo-plus pos-3-8-3-4">+</div>
        <div className="geo-plus pos-5-8-1-6">+</div>
        <div className="geo-plus pos-1-4-5-8">+</div>
        <div className="geo-plus pos-2-3-1-8">+</div>
        <div className="geo-plus pos-1-2-7-8">+</div>
        <div className="geo-plus pos-3-4-3-8">+</div>
        <div className="geo-plus pos-1-6-1-4">+</div>
        <div className="geo-plus pos-5-6-5-8">+</div>
        <div className="geo-plus pos-1-8-2-3">+</div>
        <div className="geo-plus pos-7-8-7-8">+</div>
        <div className="geo-plus pos-3-8-1-4">+</div>
        <div className="geo-plus pos-5-8-5-6">+</div>
        <div className="geo-plus pos-1-3-1-8">+</div>
        <div className="geo-plus pos-2-3-3-4">+</div>
        <div className="geo-plus pos-1-4-1-6">+</div>
        <div className="geo-plus pos-3-4-7-8">+</div>
        <div className="geo-plus pos-1-2-3-8">+</div>
        <div className="geo-plus pos-5-6-1-4">+</div>
        <div className="geo-plus pos-1-6-5-6">+</div>
        <div className="geo-plus pos-7-8-3-8">+</div>
        <div className="geo-plus pos-3-8-5-6">+</div>
        <div className="geo-plus pos-5-8-1-8">+</div>
        <div className="geo-plus pos-1-8-3-4">+</div>
        <div className="geo-plus pos-2-3-5-8">+</div>
        <div className="geo-plus pos-1-4-7-8">+</div>
        <div className="geo-plus pos-3-4-1-8">+</div>
        <div className="geo-plus pos-1-2-5-6">+</div>
        <div className="geo-plus pos-5-6-3-8">+</div>
        <div className="geo-plus pos-1-6-1-2">+</div>
        <div className="geo-plus pos-7-8-5-6">+</div>
        <div className="geo-plus pos-3-8-7-8">+</div>
        <div className="geo-plus pos-5-8-3-4">+</div>
        <div className="geo-plus pos-1-3-5-8">+</div>
      </div>

      <div className="hero-container">
        <div className="hero-layout">
          <div className="hero-image-side">
            <div className="hero-image-container">
              <img
                src={portraitImage}
                alt="Rushal Portrait"
                className="hero-main-image"
              />
            </div>
          </div>

          <div className="hero-text-side">
            <h1 className="hero-name-large">RUSHAL BUTALA</h1>
            <div className="hero-tags">
              <span className="tag tag-dark">Product Designer</span>
              <span className="tag tag-light">UX/UI Specialist</span>
              <span className="tag tag-light">Software Engineer</span>
            </div>
            <p className="hero-description">
              Creating thoughtful digital experiences through user research and innovative design solutions.
              Passionate about solving complex problems with simple, elegant interfaces.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-dark">View Projects</a>
              <a href="#contact" className="btn btn-outline">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
