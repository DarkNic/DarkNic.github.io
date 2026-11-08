
import { useEffect, useState } from 'react'
import './index.css'
import { Link, useLocation } from 'react-router-dom'

type Project = {
  title: string
  description: string
  tags: string[]
  number: string
  github: string
  demo: string
  website: string
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
  'Notion',
  'Microsoft Azure',
  'Microsoft Entra ID',
  'Microsoft Office Products',
]

const projects: Project[] = [
  {
    number: '01',
    title: 'XSoft - Financials',
    description:
      'Work in progress which is my employment project.',
    tags: ['Microsoft Azure', 'Much more...'],
    github: '',
    demo: 'https://www.xsoftinc.com/Page/Show/31',
    website: '',
  },{
    number: '02',
    title: 'Harmony Vaulters',
    description:
      'Rose-Hulman project for introduction into web development. Basic use if noSQL database via FireBase, html, javascript, multi-platform log-in, and css. Developed for a horse vaulting team as a home page as well as to organize/view practices.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    github: '',
    demo: 'https://harmony-vaulters-csse280.web.app/home.html',
    website: '/projects/HarmonyVaulters',
  },
  {
    number: '03',
    title: 'WIP - Household AI Notebook',
    description:
      'Gemini AI integration project for house projects.',
    tags: ['Gemini AI'],
    github: '',
    demo: '',
    website: '/projects/ai-notebook',
  },
  {
    number: '04',
    title: 'WIP - Rainy Day',
    description:
      'Worked with a peer developer to create a simple application to track weather affects on health of weather-sensitive individuals. \nFocuses on live multi-user collaboration in addition to NoSQL database management. Finally, the usage of free third-party APIs.',
    tags: ['Firebase'],
    github: '',
    demo: '',
    website: '/projects/collab-multi-user',
  },
    {
    number: '05',
    title: 'WIP - Daily Dose of Potions',
    description:
      'An application for generating daily potion recommendations (quotes), spells (advice), and brews (recipes). \n\nFeaturing REST APIs with rate limiting, JWT Auth, API key generation and revocation.',
    tags: ['REST APIs', 'JWT', 'API Keys', 'Swagger'],
    github: '',
    demo: '',
    website: '/projects/DailyDoseOfPotions',
  },
    {
    number: '06',
    title: 'WIP - At Your Disposal',
    description:
      'Chatbot application for providing assistance and information about...Me! Portfolio based chatbot aimed to provide my information with recruitment teams or curious individuals.',
    tags: ['Chatbot', 'Machine Learning'],
    github: '',
    demo: '',
    website: '/projects/ChatBot',
  },
    {
    number: '07',
    title: 'Notion Manager',
    description:
      'Created a Notion template for managing personal and professional tasks, goals, and resources.',
    tags: ['Notion', 'Resource Management'],
    github: '',
    demo: '',
    website: '/projects/CaffeineRequired',
  },    {
    number: '08',
    title: 'WIP - Touching Grass',
    description:
      'Projects and Experiences which were not behind a screen, but still are meaningful to me. Or, which had a significant impact on my personal or professional growth.',
    tags: ['Discipline', 'Resourcefulness', 'Network engineering'],
    github: '',
    demo: '',
    website: '/projects/OffTheScreen',
  },
]

function ArrowIcon() {
  return <span aria-hidden="true">&#10132;</span>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">NB</span>
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
          OPEN TO NEW CHALLENGES
        </div>
        <div className="triangle-image">
          <img src="/Self.jpg" alt="Main portrait" />
        </div>

        <p className="eyebrow">HELLO! I'M</p>

        <h1>
          Nick<span className="accent">.</span>
          <br />
          <span className="muted-heading">I build things</span>
          <br />
          because I can.
        </h1>

        <p className="hero-description">
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
            I believe great software starts with curiosity, a commitment to continuous improvement, and a willingness to learn from 
            others. When people come together around a shared vision and a clearly defined goal, they can create solutions that make 
            a meaningful impact on the world. I enjoy collaborating with others, sharing knowledge, and growing together as 
            professionals. I’m passionate about building digital products that are not only technically sound but also intuitive, 
            engaging, and enjoyable to use.
          </p>
          <p>
            My approach combines thoughtful problem-solving, clean code, attention to detail, and continuous learning. I dig under the 
            surface to understand the underlying principles and/or dilemmas, and I like taking an idea from the first sketch to a working 
            product.
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
              <Link className="project-icon" to={project.website}><ArrowIcon /></Link>
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
              {project.website && (
                  <Link to={project.website}>
                    View Project →
                  </Link>
                // <a href={project.website} target="_blank" rel="noreferrer">
                //   Website <ArrowIcon />
                // </a>
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
        <span className="brand-mark">NB</span>
        <span>Nick B</span>
      </a>
      <p>Designed & built with React and TypeScript.</p>
      <a href="#home" className="back-to-top">Back to top ↑</a>
    </footer>
  )
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "") {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
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