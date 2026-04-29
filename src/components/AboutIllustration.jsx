export default function AboutIllustration() {
  return (
    <svg width="300" height="120" viewBox="0 0 300 120" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="300" height="120" rx="14" fill="var(--bg-sub)" />

      {/* ── Column 1: Backlog (slate) ── */}
      <rect x="12"  y="12" width="86" height="6"  rx="3"   fill="#8B8FA8"           opacity="0.45" />
      <rect x="12"  y="23" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="20"  y="30" width="54" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.18" />
      <rect x="20"  y="39" width="34" height="4"  rx="2"   fill="#8B8FA8"           opacity="0.35" />
      <rect x="12"  y="52" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="20"  y="59" width="62" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.18" />
      <rect x="20"  y="68" width="40" height="4"  rx="2"   fill="#8B8FA8"           opacity="0.30" />
      <rect x="12"  y="81" width="86" height="16" rx="7"   fill="var(--bg-card)"    opacity="0.55" />
      <rect x="20"  y="88" width="46" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.12" />

      {/* ── Column 2: In Progress (amber) ── */}
      <rect x="107" y="12" width="86" height="6"  rx="3"   fill="#F5B942"           opacity="0.60" />
      <rect x="107" y="23" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="115" y="30" width="66" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.20" />
      <rect x="115" y="39" width="28" height="4"  rx="2"   fill="#F5B942"           opacity="0.55" />
      <rect x="107" y="52" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="115" y="59" width="50" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.18" />
      <rect x="115" y="68" width="38" height="4"  rx="2"   fill="#F5B942"           opacity="0.45" />

      {/* ── Column 3: Done (accent blue) ── */}
      <rect x="202" y="12" width="86" height="6"  rx="3"   fill="var(--accent)"     opacity="0.55" />
      <rect x="202" y="23" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="210" y="30" width="58" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.15" />
      <rect x="210" y="39" width="36" height="4"  rx="2"   fill="var(--accent)"     opacity="0.35" />
      <rect x="202" y="52" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="210" y="59" width="46" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.15" />
      <rect x="210" y="68" width="30" height="4"  rx="2"   fill="var(--accent)"     opacity="0.30" />
      <rect x="202" y="81" width="86" height="24" rx="7"   fill="var(--bg-card)" />
      <rect x="210" y="88" width="54" height="5"  rx="2.5" fill="var(--fg-primary)" opacity="0.15" />
      <rect x="210" y="97" width="24" height="4"  rx="2"   fill="var(--accent)"     opacity="0.30" />
    </svg>
  )
}
