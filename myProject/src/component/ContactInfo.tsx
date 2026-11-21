import { ArrowIcon } from "../Pages/Home"
import './ContactInfo.css'

export function ContactInfo() {
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