import CONTENT from '../content'
import LogoMark from './LogoMark'

const PAGE_IDS = ['home', 'about', 'contact']

export default function Footer({ onNav }) {
  return (
    <footer className="site-footer">
      <div className="footer-logo" onClick={() => onNav('home')}>
        <LogoMark size={20} />
        <span className="footer-brand">{CONTENT.brand.name}</span>
      </div>
      <div className="footer-links">
        {CONTENT.nav.links.map((label, i) => (
          <button key={label} onClick={() => onNav(PAGE_IDS[i])}>{label}</button>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Custom Solutions</p>
    </footer>
  )
}
