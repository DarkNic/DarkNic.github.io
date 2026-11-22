import {ArrowIcon} from './../Pages/Home'
import './Hero.css';

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" />
          OPEN TO NEW CHALLENGES
        </div>
        <div className="triangle-image">
          <img src="/Self.jpg" alt="Main portrait" />
        </div>

        <p className="eyebrow">HELLO! I'M</p>

        <h1>
          
          <span className="text-clarity">Nick</span>
          <span className="accent">.</span>
          <br />
          <span className="muted-heading text-clarity">I build things</span>
          <br />
          <span className="text-clarity">because I can.</span>
        </h1>

        <p className="hero-description text-clarity">
          I'm a developer passionate about turning ideas into useful
          experiences. I enjoy solving problems,
          learning new technologies, and expanding my skill set. I am forever learning just how little I know.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowIcon />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/DarkNic"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolasbohner"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Developer introduction">
        <div className="visual-glow" />
        <div className="code-card">
          <div className="code-card-top">
            <div className="window-dots">
              <i /><i /><i />
            </div>
            <span>developer.ts</span>
          </div>
          <pre>
            <code>
              <span className="code-purple">const</span>{' caffeinatedIndividual = {\n'}
              {'  '}name: <span className="code-green">'Nick Bohner'</span>,
              {'\n'}
              {'  '}role: <span className="code-green">'Developer'</span>,
              {'\n'}
              {'  '}passion: <span className="code-green">'Building and Personal Growth'</span>,
              {'\n'}
              {'  '}learning: <span className="code-green">'Always'</span>,
              {'\n'}
              {'  '}available: <span className="code-orange">false</span>, <span className="code-comment">// But always open to new ideas</span>,
              {'\n'}              
              {'  '}timeDrain: [<span className="code-green">MineCraft</span>, <span className="code-green">Motorcycle</span>],
              {'\n'}
              {'}\n\n'}
              <span className="code-comment">
                // Turning ideas into reality.
              </span>
            </code>
          </pre>
        </div>
        <div className="floating-chip chip-one"> Problem solver</div>
        <div className="floating-chip chip-two">⌘ Always learning</div>
      </div>
    </section>
  )
}