import { SectionHeading } from "./SectionHeading"
import { ArrowIcon } from "../Pages/Home"
import './About.css'

export function About() {
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