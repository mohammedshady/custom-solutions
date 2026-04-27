const COLORS = {
  slate: { body: '#8B8FA8', head: '#6B6F86' },
  blue:  { body: '#5B8DEF', head: '#4A7BE0' },
  amber: { body: '#F5B942', head: '#E8A82C' },
}

export default function Figure({ color, height, headSize = 22 }) {
  const bodyW = headSize * 1.7
  const c = COLORS[color]
  const w = bodyW + 4
  const h = height + headSize + 6
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <rect x="2" y={headSize - 4} width={bodyW} height={height + 4} rx={bodyW / 2} fill={c.body} />
      <circle cx={w / 2} cy={headSize / 2} r={headSize / 2} fill={c.head} />
      <circle cx={w / 2 - 4} cy={headSize / 2 - 4} r={headSize / 6} fill="white" opacity="0.25" />
    </svg>
  )
}
