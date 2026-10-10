
import { useState } from 'react'
import './index.css'

type Project = {
  title: string
  description: string
  tags: string[]
  number: string
  github: string
  demo: string
}

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'HTML & CSS',
  'Node.js',
  'Git & GitHub',
  'REST APIs',
  'Responsive Design',
]

const projects: Project[] = [
  {
    number: '01',
    title: 'Project Alpha',
    description:
      'A responsive web application designed to simplify a real-world workflow with a clean, accessible interface.',
    tags: ['React', 'TypeScript', 'CSS'],
    github: 'https://github.com/YOUR_USERNAME/project-alpha',
    demo: 'https://YOUR_USERNAME.github.io/project-alpha/',
  },
  {
    number: '02',
    title: 'Project Beta',
    description:
      'An interactive dashboard that transforms useful data into clear visualizations and actionable insights.',
    tags: ['TypeScript', 'API', 'UI Design'],
    github: 'https://github.com/YOUR_USERNAME/project-beta',
    demo: 'https://YOUR_USERNAME.github.io/project-beta/',
  },
  {
    number: '03',
    title: 'Project Gamma',
    description:
      'A lightweight tool built to solve a practical problem, with an emphasis on performance and usability.',
    tags: ['React', 'JavaScript', 'Vite'],
    github: 'https://github.com/YOUR_USERNAME/project-gamma',
    demo: '',
  },
]

function ArrowIcon() {
  return <span aria-hidden="true"></span>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">Y.</span>
        <span>YOUR NAME</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Let's talk <ArrowIcon />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </div>

        <p className="eyebrow">HELLO, WORLD. I'M</p>

        <h1>
          Your Name<span className="accent">.</span>
          <br />
          <span className="muted-heading">I build things</span>
          <br />
          for the web.
        </h1>

        <p className="hero-description">
          I'm a developer passionate about turning ideas into useful,
          intuitive digital experiences. I enjoy solving problems,
          learning new technologies, and building things that matter.
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
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME/"
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
              <span className="code-purple">const</span>{' developer = {\n'}
              {'  '}name: <span className="code-green">'Your Name'</span>,
              {'\n'}
              {'  '}role: <span className="code-green">'Developer'</span>,
              {'\n'}
              {'  '}passion: <span className="code-green">'Building'</span>,
              {'\n'}
              {'  '}learning: <span className="code-green">'Always'</span>,
              {'\n'}
              {'  '}available: <span className="code-orange">true</span>,
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

      <a className="scroll-cue" href="#about">
        <span /> SCROLL TO EXPLORE
      </a>
    </section>
  )
}

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2>{title}</h2>
    </div>
  )
}

function About() {
  return (
    <section className="section content-section" id="about">
      <SectionHeading
        number="01"
        label="ABOUT ME"
        title="A little about myself."
      />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I believe great software starts with curiosity and a willingness
            to keep improving. I'm interested in building digital products
            that are both technically sound and enjoyable to use.
          </p>
          <p>
            My approach combines thoughtful problem-solving, clean code,
            attention to detail, and continuous learning. I like taking
            an idea from the first sketch to a working product.
          </p>
          <a className="text-link" href="#contact">
            More about my journey <ArrowIcon />
          </a>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-symbol"></span>
            <h3>Curious by nature</h3>
            <p>Always exploring new ideas and technologies.</p>
          </div>
          <div className="stat-card">
            <span className="stat-symbol">⌘</span>
            <h3>Quality focused</h3>
            <p>Readable code, accessible design, and useful outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section content-section" id="skills">
      <SectionHeading
        number="02"
        label="TOOLKIT"
        title="Technologies I work with."
      />

      <p className="section-intro">
        The tools I use to turn ideas into working software, with plenty
        more to learn along the way.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span className="skill-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{skill}</span>
            <span className="skill-arrow"></span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section content-section" id="projects">
      <SectionHeading
        number="03"
        label="SELECTED WORK"
        title="Things I've built."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-icon"><ArrowIcon /></span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                Source code <ArrowIcon />
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live demo <ArrowIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">04 / WHAT'S NEXT?</p>
        <h2>
          Have an idea?
          <br />
          <span className="accent">Let's build it.</span>
        </h2>
        <p>
          I'm always happy to connect, talk about interesting projects,
          and explore new opportunities.
        </p>
        <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
          Say hello <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#home">
        <span className="brand-mark">Y.</span>
        <span>YOUR NAME</span>
      </a>
      <p>Designed & built with React and TypeScript.</p>
      <a href="#home" className="back-to-top">Back to top ↑</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}