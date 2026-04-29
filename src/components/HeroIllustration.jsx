export default function HeroIllustration() {
  return (
    <svg width="320" height="140" viewBox="0 0 320 140" fill="none" aria-hidden="true">

      {/* ── Code editor (left) ── */}
      <rect x="0" y="0" width="132" height="140" rx="14" fill="var(--fg-primary)" />
      {/* Window chrome dots */}
      <circle cx="20" cy="19" r="5" fill="#FF5F57" opacity="0.80" />
      <circle cx="37" cy="19" r="5" fill="#FEBC2E" opacity="0.80" />
      <circle cx="54" cy="19" r="5" fill="#28C840" opacity="0.80" />
      <line x1="0" y1="34" x2="132" y2="34" stroke="white" strokeWidth="0.6" opacity="0.08" />
      {/* Line numbers */}
      <rect x="12" y="44"  width="10" height="5" rx="2" fill="white" opacity="0.14" />
      <rect x="12" y="57"  width="10" height="5" rx="2" fill="white" opacity="0.14" />
      <rect x="12" y="70"  width="10" height="5" rx="2" fill="white" opacity="0.14" />
      <rect x="12" y="83"  width="10" height="5" rx="2" fill="white" opacity="0.14" />
      <rect x="12" y="96"  width="10" height="5" rx="2" fill="white" opacity="0.14" />
      <rect x="12" y="109" width="10" height="5" rx="2" fill="white" opacity="0.14" />
      {/* Syntax-colored code lines */}
      <rect x="28" y="44"  width="24" height="5" rx="2.5" fill="var(--accent)" opacity="0.85" />
      <rect x="56" y="44"  width="52" height="5" rx="2.5" fill="white"         opacity="0.22" />
      <rect x="28" y="57"  width="74" height="5" rx="2.5" fill="#F5B942"       opacity="0.72" />
      <rect x="28" y="70"  width="20" height="5" rx="2.5" fill="var(--accent)" opacity="0.85" />
      <rect x="52" y="70"  width="40" height="5" rx="2.5" fill="white"         opacity="0.22" />
      <rect x="28" y="83"  width="60" height="5" rx="2.5" fill="white"         opacity="0.26" />
      <rect x="28" y="96"  width="46" height="5" rx="2.5" fill="#F5B942"       opacity="0.65" />
      <rect x="28" y="109" width="34" height="5" rx="2.5" fill="white"         opacity="0.16" />
      {/* Cursor */}
      <rect x="28" y="122" width="2" height="10" rx="1" fill="var(--accent)" opacity="0.70" />

      {/* ── Connector ── */}
      <path d="M132 70 H160" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.50" />
      <circle cx="146" cy="70" r="4" fill="var(--accent)" />

      {/* ── App UI panel (right) ── */}
      <rect x="160" y="8" width="160" height="124" rx="14" fill="var(--bg-sub)" />
      {/* Header bar — rounded top, flat bottom */}
      <rect x="160" y="8"  width="160" height="30" rx="14" fill="var(--accent)" />
      <rect x="160" y="22" width="160" height="16"         fill="var(--accent)" />
      <rect x="174" y="17" width="40" height="6" rx="3" fill="white" opacity="0.28" />
      <circle cx="304" cy="20" r="5" fill="white" opacity="0.20" />
      {/* Stat cards */}
      <rect x="174" y="50" width="62" height="46" rx="10" fill="var(--bg-card)" />
      <rect x="174" y="58" width="22" height="9"  rx="4"  fill="#F5B942"           opacity="0.70" />
      <rect x="174" y="72" width="48" height="6"  rx="3"  fill="var(--fg-primary)" opacity="0.12" />
      <rect x="174" y="82" width="36" height="6"  rx="3"  fill="var(--fg-primary)" opacity="0.07" />

      <rect x="248" y="50" width="62" height="46" rx="10" fill="var(--bg-card)" />
      <rect x="248" y="58" width="22" height="9"  rx="4"  fill="var(--accent)"     opacity="0.70" />
      <rect x="248" y="72" width="48" height="6"  rx="3"  fill="var(--fg-primary)" opacity="0.12" />
      <rect x="248" y="82" width="36" height="6"  rx="3"  fill="var(--fg-primary)" opacity="0.07" />
      {/* Bar chart */}
      <rect x="174" y="108" width="6" height="12" rx="2" fill="var(--accent)" opacity="0.40" />
      <rect x="184" y="104" width="6" height="16" rx="2" fill="var(--accent)" opacity="0.60" />
      <rect x="194" y="110" width="6" height="10" rx="2" fill="var(--accent)" opacity="0.35" />
      <rect x="204" y="106" width="6" height="14" rx="2" fill="#F5B942"       opacity="0.55" />
      <rect x="214" y="102" width="6" height="18" rx="2" fill="var(--accent)" opacity="0.70" />
      <rect x="224" y="107" width="6" height="13" rx="2" fill="var(--accent)" opacity="0.45" />
      <rect x="234" y="110" width="6" height="10" rx="2" fill="#8B8FA8"       opacity="0.50" />
      <rect x="244" y="105" width="6" height="15" rx="2" fill="var(--accent)" opacity="0.55" />
      <rect x="254" y="103" width="6" height="17" rx="2" fill="#F5B942"       opacity="0.60" />
      <rect x="264" y="107" width="6" height="13" rx="2" fill="var(--accent)" opacity="0.65" />
      <rect x="274" y="109" width="6" height="11" rx="2" fill="var(--accent)" opacity="0.50" />
      <rect x="284" y="105" width="6" height="15" rx="2" fill="var(--accent)" opacity="0.55" />
      <rect x="294" y="103" width="6" height="17" rx="2" fill="#F5B942"       opacity="0.45" />
      <rect x="304" y="106" width="6" height="14" rx="2" fill="var(--accent)" opacity="0.60" />
    </svg>
  )
}
