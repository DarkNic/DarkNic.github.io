import { useState} from 'react';
import { ArrowIcon } from '../Pages/Home';
import ThemeToggle from "./../component/ThemeToggle";
import './Header.css';

export function Header() {
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
        <ThemeToggle/>
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