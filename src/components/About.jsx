import CONTENT from '../content'
import Figure from './Figure'
import GCard from './GCard'
import Icon from './Icon'
import Section from './Section'

const VALUE_ICONS = [
  'M9 2a7 7 0 100 14A7 7 0 009 2zM9 6v4l2 2',
  'M3 9h12M11 5l4 4-4 4',
  'M2 5h14v10H2zM6 5V4a3 3 0 016 0v1',
]

export default function About() {
  const { intro, values, team, location } = CONTENT.about

  return (
    <div className="page">
      <div className="section" style={{ textAlign: 'center' }}>
        <div className="section-header">
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: '14px' }}>{intro.title}</h2>
          <p className="section-sub">{intro.sub}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'flex-end', marginBottom: '40px' }}>
          <Figure color="slate" height={64} headSize={22} />
          <Figure color="blue"  height={80} headSize={22} />
          <Figure color="amber" height={96} headSize={26} />
          <Figure color="blue"  height={80} headSize={22} />
          <Figure color="amber" height={60} headSize={20} />
        </div>
        <div className="grid-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {values.map((v, i) => (
            <GCard key={v.title} icon={<Icon d={VALUE_ICONS[i % VALUE_ICONS.length]} />} title={v.title} desc={v.desc} />
          ))}
        </div>
      </div>

      <Section label={team.sectionLabel} title={team.sectionTitle} sub={team.sectionSub}>
        <div className="grid-3">
          {team.members.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar" style={{ background: m.color }}>{m.initials}</div>
              <div>
                <h3>{m.name}</h3>
                <span className="role">{m.role}</span>
              </div>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label={location.sectionLabel} title={location.sectionTitle} sub={location.sectionSub}>
        <div className="map-placeholder">
          <div className="map-grid" />
          <div className="map-pin">
            <div className="map-pin-dot">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C6.24 2 4 4.24 4 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 119 5a1.5 1.5 0 010 3.5z" fill="white" />
              </svg>
            </div>
            <div className="map-address">{location.address}</div>
          </div>
        </div>
        <div className="grid-3" style={{ marginTop: '16px' }}>
          {location.cards.map(c => (
            <GCard key={c.title} title={c.title} desc={c.desc} />
          ))}
        </div>
      </Section>
    </div>
  )
}
