
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
  'C#',
  'React',
  'HTML & CSS',
  'Node.js',
  'Git & GitHub',
  'REST APIs',
  'SQL',
  'Firebase',
  'Java',
  'Microsoft Azure',
  'Microsoft Entra ID',
  'Microsoft Office Products',
]

const projects: Project[] = [
  {
    number: '01',
    title: 'Harmony Vaulters',
    description:
      'Rose-Hulman project for introduction into web development. Basic use if noSQL database via FireBase, html, javascript, multi-platform log-in, and css. Developed for a horse vaulting team as a home page as well as to organize/view practices.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    github: '',
    demo: 'https://harmony-vaulters-csse280.web.app/home.html',
  },
  {
    number: '02',
    title: 'Project Beta',
    description:
      'To be removed - RHIT group project for developing a local application for dog adoption using java and SQL.',
    tags: ['Java', 'SQL', 'UI Design'],
    github: 'https://github.com/DarkNic/CSSE333PairedPaws',
    demo: '',
  },
  {
    number: '03',
    title: 'XSoft - Financials',
    description:
      'Work in progress which is my employment project.',
    tags: ['React', 'C#', 'Vite'],
    github: '',
    demo: 'https://www.xsoftinc.com/Page/Show/31',
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
        <span>Nick B</span>
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
          Nick<span className="accent">.</span>
          <br />
          <span className="muted-heading">I build things</span>
          <br />
          for the web.
        </h1>

        <p className="hero-description">
          I'm a developer passionate about turning ideas into useful,
          intuitive digital experiences. I enjoy solving problems,
          learning new technologies, and expanding my skill set.
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
              <span className="code-purple">const</span>{' developer = {\n'}
              {'  '}name: <span className="code-green">'Nick Bohner'</span>,
              {'\n'}
              {'  '}role: <span className="code-green">'Developer'</span>,
              {'\n'}
              {'  '}passion: <span className="code-green">'Building'</span>,
              {'\n'}
              {'  '}learning: <span className="code-green">'Always'</span>,
              {'\n'}
              {'  '}available: <span className="code-orange">false</span>,
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
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source code <ArrowIcon />
                </a>
              )}
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
        <a className="button button-primary" href="https://www.linkedin.com/in/nicolasbohner">
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
        <span>Nick B</span>
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