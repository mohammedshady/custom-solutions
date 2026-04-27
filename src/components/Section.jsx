export default function Section({ label, title, sub, children, style }) {
  return (
    <div className="section" style={style}>
      <div className="section-header">
        {label && <span className="section-label">{label}</span>}
        <h2>{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
      {children}
    </div>
  )
}
