import { SectionHeading } from "./SectionHeading";
import './Skills.css';

const skills = [ //TODO: Move this to file
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
];

export function Skills() {
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