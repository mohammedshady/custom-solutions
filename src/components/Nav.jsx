import CONTENT from '../content'
import LogoMark from './LogoMark'

const PAGE_IDS = ['home', 'about', 'contact']

export default function Nav({ page, onNav }) {
  return (
    <nav>
      <div className="logo" onClick={() => onNav('home')}>
        <LogoMark size={28} />
        <span className="logo-text">{CONTENT.brand.name}</span>
      </div>
      <ul className="nav-links">
        {CONTENT.nav.links.map((label, i) => (
          <li key={label}>
            <button
              className={page === PAGE_IDS[i] ? 'active' : ''}
              onClick={() => onNav(PAGE_IDS[i])}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-cta">
        <button className="btn-primary" onClick={() => onNav('contact')}>
          {CONTENT.nav.cta}
        </button>
      </div>
    </nav>
  )
}
