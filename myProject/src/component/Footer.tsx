import './Footer.css'

export function Footer() {
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