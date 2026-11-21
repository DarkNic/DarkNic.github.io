import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../Pages/Home';
import ThemeToggle from "./../component/ThemeToggle";
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();
  const closeMenu = (target: string) => {
    setMenuOpen(false)
    navigate('/' + target);
  };

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
        <ThemeToggle/>
        <a href="#about" onClick={() => closeMenu('#about')}>About</a>
        <a href="#skills" onClick={() => closeMenu('#skills')}>Skills</a>
        <a href="#projects" onClick={() => closeMenu('#projects')}>Projects</a>
        <a className="nav-contact" href="#contact" onClick={() => closeMenu('#contact')}>
          Let's talk <ArrowIcon />
        </a>
      </nav>
    </header>
  )
}