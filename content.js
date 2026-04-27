// ─────────────────────────────────────────────
//  CUSTOM SOLUTIONS — Site Content
//  Edit this file to update all website text.
// ─────────────────────────────────────────────

var SITE_CONTENT = {

  /* ── Brand ── */
  brand: {
    name: "Custom Solutions",
    tagline: "Startup · 2024",
  },

  /* ── Navigation ── */
  nav: {
    links: ["Home", "About us", "Contact"],
    cta: "Get in touch",
  },

  /* ══════════════════════════════════════════
     HOME PAGE
  ══════════════════════════════════════════ */
  home: {

    hero: {
      badge: "Startup · 2024",
      headline: ["Solutions built", "custom for you"],
      headlineAccent: "custom",   // word to color in accent blue
      sub: "We design and engineer tailored software, firmware, and hardware for ambitious teams ready to move fast and build right.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Learn more",
      pills: ["Embedded Systems", "Cloud Software", "Hardware Design", "Consulting"],
    },

    projects: {
      sectionLabel: "Our Work",
      sectionTitle: "Projects",
      sectionSub: "A selection of software and hardware solutions we've built for our clients.",
      items: [
        {
          title: "FleetOS",
          desc: "Embedded firmware platform for real-time fleet diagnostics and remote configuration of industrial IoT hardware.",
          tag: "Hardware · Firmware",
        },
        {
          title: "DataBridge",
          desc: "Cloud-native ETL pipeline connecting legacy industrial sensors to modern data lakes at enterprise scale.",
          tag: "Software · Cloud",
        },
        {
          title: "SecureMesh",
          desc: "Zero-trust network overlay for distributed edge devices, with hardware security module integration.",
          tag: "Hardware · Security",
        },
        {
          title: "PulseView",
          desc: "Real-time monitoring dashboard for embedded system telemetry with sub-millisecond alert latency.",
          tag: "Software · Monitoring",
        },
        {
          title: "CoreLink SDK",
          desc: "Cross-platform SDK enabling rapid hardware prototyping with a unified API across five chip families.",
          tag: "SDK · Embedded",
        },
        {
          title: "SyncLab",
          desc: "Automated QA and simulation environment for validating hardware-software integrations before deployment.",
          tag: "Testing · DevOps",
        },
      ],
    },

    services: {
      sectionLabel: "What We Do",
      sectionTitle: "Services we offer",
      sectionSub: "End-to-end capabilities across software, firmware, and hardware — all under one roof.",
      items: [
        {
          title: "Custom Software Development",
          desc: "Bespoke applications built from the ground up — web, mobile, desktop, or embedded — tailored to your exact workflow.",
        },
        {
          title: "Hardware Design & Prototyping",
          desc: "PCB design, enclosure engineering, and rapid prototyping from concept to production-ready hardware.",
        },
        {
          title: "Embedded Systems",
          desc: "Firmware, RTOS integration, and driver development for microcontrollers, FPGAs, and SoC platforms.",
        },
        {
          title: "System Integration",
          desc: "Connecting legacy infrastructure to modern platforms — APIs, middleware, IoT bridges, and cloud connectors.",
        },
        {
          title: "Technical Consulting",
          desc: "Architecture reviews, tech stack selection, and engineering roadmap planning for teams at any stage.",
        },
        {
          title: "Ongoing Support & Maintenance",
          desc: "Dedicated SLA-backed support, monitoring, and iterative improvements to keep your systems performing.",
        },
      ],
    },

    faq: {
      sectionLabel: "FAQ",
      sectionTitle: "Frequently asked",
      sectionSub: "Answers to the questions we hear most often.",
      items: [
        {
          q: "What industries do you work with?",
          a: "We work across industrial automation, logistics, medtech, defense, and enterprise software — anywhere complex technical problems need precise, reliable solutions.",
        },
        {
          q: "How long does a typical project take?",
          a: "Scope varies widely, but most engagements run 3–6 months from kickoff to production. We establish a clear timeline during the discovery phase.",
        },
        {
          q: "Do you work on fixed-price or time-and-materials contracts?",
          a: "Both. We typically recommend fixed-price for well-scoped projects and T&M for exploratory or rapidly evolving work. We'll help you choose the right model.",
        },
        {
          q: "Can you take on ongoing retainer work?",
          a: "Yes — many clients stay with us long-term for maintenance, feature additions, and strategic consulting after the initial build is complete.",
        },
        {
          q: "Do you handle hardware manufacturing?",
          a: "We design and prototype in-house, then coordinate with our trusted manufacturing partners for volume production runs.",
        },
      ],
    },
  },

  /* ══════════════════════════════════════════
     ABOUT PAGE
  ══════════════════════════════════════════ */
  about: {

    intro: {
      title: "About us",
      sub: "We're a small, focused team that builds software, firmware, and hardware that fits — not off-the-shelf, but precisely yours.",
    },

    values: [
      {
        title: "Tailored approach",
        desc: "Every engagement starts with listening. We learn your problems deeply before proposing solutions.",
      },
      {
        title: "Fast iteration",
        desc: "We ship early and often, refining with your feedback until the product truly fits.",
      },
      {
        title: "End-to-end",
        desc: "From discovery to production — we own the full journey alongside you.",
      },
    ],

    team: {
      sectionLabel: "Our Team",
      sectionTitle: "The people behind it",
      sectionSub: "A tight-knit group of engineers and builders who care deeply about craft.",
      members: [
        {
          name: "Alex Carter",
          role: "CEO & Co-founder",
          bio: "Systems architect with 12 years building embedded and enterprise platforms across defense and logistics.",
          initials: "AC",
          color: "#5B8DEF",
        },
        {
          name: "Morgan Lee",
          role: "CTO & Co-founder",
          bio: "Hardware engineer and FPGA specialist. Led three product launches from silicon to mass production.",
          initials: "ML",
          color: "#F5B942",
        },
        {
          name: "Jordan Kim",
          role: "Head of Software",
          bio: "Full-stack and cloud-native expert. Loves elegant APIs and hates unnecessary complexity.",
          initials: "JK",
          color: "#8B8FA8",
        },
        {
          name: "Riley Nguyen",
          role: "Lead Hardware Engineer",
          bio: "PCB designer and prototyping lead. From schematic to working board in record time.",
          initials: "RN",
          color: "#5B8DEF",
        },
        {
          name: "Sam Okafor",
          role: "Senior Firmware Engineer",
          bio: "Bare-metal and RTOS guru. Brings embedded systems to life reliably and efficiently.",
          initials: "SO",
          color: "#F5B942",
        },
        {
          name: "Casey Walsh",
          role: "Product & Ops",
          bio: "Keeps projects on track, clients informed, and the team focused on what matters most.",
          initials: "CW",
          color: "#8B8FA8",
        },
      ],
    },

    location: {
      sectionLabel: "Where We Are",
      sectionTitle: "Our location",
      sectionSub: "Based in Austin, TX — working with clients globally.",
      address: "123 Innovation Drive, Austin, TX 78701",
      cards: [
        {
          title: "Office hours",
          desc: "Monday – Friday, 9am – 6pm CST. Remote-first culture with in-person workshops available.",
        },
        {
          title: "Global clients",
          desc: "We work with teams across North America, Europe, and the Asia-Pacific region.",
        },
        {
          title: "On-site visits",
          desc: "For hardware projects, we can travel to your facility for integration and testing support.",
        },
      ],
    },
  },

  /* ══════════════════════════════════════════
     CONTACT PAGE
  ══════════════════════════════════════════ */
  contact: {
    title: "Contact",
    sub: "Have a project in mind? Drop us a note and we'll get back to you within one business day.",
    fields: {
      name: { label: "Name", placeholder: "Your name" },
      email: { label: "Email", placeholder: "you@company.com" },
      message: { label: "Message", placeholder: "Tell us about your project…" },
    },
    submitLabel: "Send message →",
    successMessage: "Thanks! We'll be in touch shortly.",
  },

};
