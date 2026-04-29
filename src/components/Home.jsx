import { useState } from 'react'
import CONTENT from '../content'
import GCard from './GCard'
import HeroIllustration from './HeroIllustration'
import Icon from './Icon'
import Section from './Section'

const PROJECT_ICONS = [
  'M9 2L15 5v8l-6 3-6-3V5L9 2z',
  'M3 9h12M9 3v12',
  'M9 2l6 3v5c0 4-6 7-6 7S3 14 3 10V5L9 2z',
  'M2 9h3l2-5 4 10 2-5h3',
  'M4 4h10v10H4zM7 7h4v4H7z',
  'M3 3l12 12M15 3L3 15',
]

const SERVICE_ICONS = [
  'M3 3h12v12H3zM7 3v12M3 7h12',
  'M9 2L2 7v9h14V7L9 2z',
  'M5 5h8v8H5zM2 2l14 14M16 2L2 16',
  'M3 9h12M9 3l6 6-6 6',
  'M9 2v14M3 8l6-6 6 6',
  'M9 16A7 7 0 109 2a7 7 0 000 14zM9 6v4l2 2',
]

function Headline({ lines, accent }) {
  return (
    <h1>
      {lines.map((line, i) => {
        const parts = line.split(accent)
        return (
          <span key={i}>
            {parts.map((part, j) => (
              <span key={j}>
                {part}
                {j < parts.length - 1 && <em>{accent}</em>}
              </span>
            ))}
            {i < lines.length - 1 && <br />}
          </span>
        )
      })}
    </h1>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="faq-item">
      <button className={`faq-q${open ? ' open' : ''}`} onClick={onToggle}>
        {q}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`faq-a${open ? ' open' : ''}`}>{a}</div>
    </div>
  )
}

export default function Home({ onNav }) {
  const [openFaq, setOpenFaq] = useState(null)
  const { hero, projects, services, faq } = CONTENT.home

  return (
    <div className="page">
      <div className="hero">
        <div className="home-badge">
          <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor" /></svg>
          {hero.badge}
        </div>
        <Headline lines={hero.headline} accent={hero.headlineAccent} />
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-actions">
          <button className="btn-lg" onClick={() => onNav('contact')}>{hero.ctaPrimary}</button>
          <button className="btn-outline" onClick={() => onNav('about')}>{hero.ctaSecondary}</button>
        </div>
        <div className="hero-figures">
          <HeroIllustration />
        </div>
        <div className="home-pills">
          {hero.pills.map(p => <span className="pill" key={p}>{p}</span>)}
        </div>
      </div>

      <Section label={projects.sectionLabel} title={projects.sectionTitle} sub={projects.sectionSub}>
        <div className="grid-3">
          {projects.items.map((p, i) => (
            <GCard key={p.title} icon={<Icon d={PROJECT_ICONS[i % PROJECT_ICONS.length]} />} title={p.title} desc={p.desc} tag={p.tag} />
          ))}
        </div>
      </Section>

      <Section label={services.sectionLabel} title={services.sectionTitle} sub={services.sectionSub}>
        <div className="grid-3">
          {services.items.map((s, i) => (
            <GCard key={s.title} icon={<Icon d={SERVICE_ICONS[i % SERVICE_ICONS.length]} />} title={s.title} desc={s.desc} />
          ))}
        </div>
      </Section>

      <Section label={faq.sectionLabel} title={faq.sectionTitle} sub={faq.sectionSub}>
        <div className="faq-list">
          {faq.items.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </Section>
    </div>
  )
}
