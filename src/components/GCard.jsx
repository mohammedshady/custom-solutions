export default function GCard({ icon, title, desc, tag }) {
  return (
    <div className="g-card">
      {icon && <div className="g-card-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{desc}</p>
      {tag && <span className="g-card-tag">{tag}</span>}
    </div>
  )
}
