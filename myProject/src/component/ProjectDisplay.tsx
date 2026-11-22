import { SectionHeading } from "./SectionHeading";
import { ArrowIcon } from "../Pages/Home";
import { Link } from 'react-router-dom';
import './ProjectDisplay.css';

type Project = {
  title: string
  description: string
  tags: string[]
  number: string
  github: string
  demo: string
  website: string
};

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
];

export function ProjectDisplay() {
  return (
    <section className="section content-section" id="projects">
      <SectionHeading
        number="03"
        label="SELECTED WORK"
        title="Things I'm building."
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
