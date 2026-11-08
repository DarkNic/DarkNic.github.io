
import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function ArrowIcon() {
  return <span aria-hidden="true">&#10132;</span>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">NB</span>
        <span>Nick B</span>
      </Link>

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
        <Link to="/#about" onClick={closeMenu}>About</Link>
        <Link to="/#skills" onClick={closeMenu}>Skills</Link>
        <Link to="/#projects" onClick={closeMenu}>Projects</Link>
        <Link className="nav-contact" to="/#contact" onClick={closeMenu}>
          Let's talk <ArrowIcon />
        </Link>
      </nav>
    </header>
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

export default function PLCHell() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
        Page for PLC Hell Project. 
       PTSD for 304. Potentially compressing videos (lightweight Operating system), or building interpreter/linter from scratch.
      </div>
      <Footer />
    </>
  )
}