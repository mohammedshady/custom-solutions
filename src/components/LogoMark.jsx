export default function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="5" fill="oklch(0.52 0.22 260)" />
      <rect x="9" y="9" width="10" height="3" rx="1.5" fill="white" />
      <rect x="9" y="16" width="10" height="3" rx="1.5" fill="white" />
      <rect x="9" y="9" width="3" height="10" rx="1.5" fill="white" />
    </svg>
  )
}
