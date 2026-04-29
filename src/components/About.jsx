import CONTENT from '../content'
import AboutIllustration from './AboutIllustration'
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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <AboutIllustration />
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
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=49.5081%2C26.8674%2C49.8081%2C27.1674&layer=mapnik&marker=27.0174%2C49.6581"
            title="Al Jubail, Saudi Arabia"
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
