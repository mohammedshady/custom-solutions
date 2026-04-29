// Edit this file to update all website text — no need to touch any component.

const CONTENT = {

  brand: {
    name: 'Custom Solutions',
  },

  nav: {
    links: ['Home', 'About us', 'Contact'],
    cta: 'Get in touch',
  },

  home: {
    hero: {
      badge: 'Startup · 2024',
      headline: ['Solutions built', 'custom for you'],
      headlineAccent: 'custom',
      sub: 'We design and engineer tailored software, firmware, and hardware for ambitious teams ready to move fast and build right.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Learn more',
      pills: ['Embedded Systems', 'Cloud Software', 'Hardware Design', 'Consulting'],
    },

    projects: {
      sectionLabel: 'Our Work',
      sectionTitle: 'Projects',
      sectionSub: "A selection of software and hardware solutions we've built for our clients.",
      items: [
        { title: 'STjaba',    desc: 'Pinpoints emergencies in real time and routes the nearest responders automatically — because every second matters.', tag: 'Software · Geo' },
        { title: 'OmniSafe', desc: 'Monitors site conditions live and triggers coordinated evacuations the moment a threat is detected — keeping workers safe.', tag: 'Safety · IoT' },
        { title: 'Your project', desc: "Got something in mind? We'd love to hear it. Whether it's a rough idea or a detailed brief, we'll help you figure out the best path forward.", tag: 'Let\'s talk →' },
      ],
    },

    services: {
      sectionLabel: 'What We Do',
      sectionTitle: 'Services we offer',
      sectionSub: 'From custom apps to device integrations — complete software solutions built to fit your business.',
      items: [
        { title: 'Web & Mobile Apps',        desc: 'Full-stack applications built for web and mobile — fast, scalable, and shaped around how your team and customers actually work.' },
        { title: 'IoT & Device Integration', desc: 'Connect sensors, controllers, and off-the-shelf hardware to custom software platforms, real-time dashboards, and cloud backends.' },
        { title: 'Cloud & Backend',          desc: 'Scalable APIs, databases, and cloud infrastructure on AWS, Azure, or GCP — deployed with automated CI/CD pipelines.' },
        { title: 'System Integration',       desc: 'Bridge your existing tools, platforms, and data sources through clean APIs, workflow automations, and middleware.' },
        { title: 'Data & Analytics',         desc: 'Custom dashboards, reporting tools, and data pipelines that turn raw operational data into clear decisions.' },
        { title: 'Support & Maintenance',    desc: 'Ongoing monitoring, updates, and SLA-backed support to keep your systems reliable long after launch.' },
      ],
    },

    faq: {
      sectionLabel: 'FAQ',
      sectionTitle: 'Frequently asked',
      sectionSub: 'Answers to the questions we hear most often.',
      items: [
        { q: 'What industries do you work with?',                           a: 'Primarily oil & gas, petrochemical, manufacturing, and logistics — sectors with complex operations that benefit most from custom software and smart integrations. We also work with enterprises across other industries in Saudi Arabia and the region.' },
        { q: 'Can you integrate with our existing systems and hardware?',   a: 'Yes — that is core to what we do. We build software that connects to your existing devices, sensors, and platforms without requiring you to replace what already works.' },
        { q: 'Do you work with clients outside Saudi Arabia?',              a: 'Absolutely. While we are based in Al Jubail, we work with clients across the Gulf, the wider Middle East, and internationally. Most of our collaboration happens remotely.' },
        { q: 'How long does a typical project take?',                       a: 'Most projects go from kickoff to delivery in 6–16 weeks depending on scope. We agree on a realistic timeline upfront and keep you updated throughout.' },
        { q: 'Do you work on fixed-price or time-and-materials contracts?', a: "Both. Fixed-price works well for defined scopes; time-and-materials fits projects that evolve as we go. We'll recommend what makes sense for your situation." },
        { q: 'Do you offer support after the project is delivered?',        a: 'Yes. We offer ongoing maintenance, monitoring, and feature updates. Many clients stay with us long-term — we prefer it that way.' },
      ],
    },
  },

  about: {
    intro: {
      title: 'About us',
      sub: "We're a small, focused team that builds software, firmware, and hardware that fits — not off-the-shelf, but precisely yours.",
    },

    values: [
      { title: 'Tailored approach', desc: 'Every engagement starts with listening. We learn your problems deeply before proposing solutions.' },
      { title: 'Fast iteration',    desc: 'We ship early and often, refining with your feedback until the product truly fits.' },
      { title: 'End-to-end',        desc: 'From discovery to production — we own the full journey alongside you.' },
    ],

    team: {
      sectionLabel: 'Our Team',
      sectionTitle: 'The people behind it',
      sectionSub: 'A tight-knit group of engineers and builders who care deeply about craft.',
      members: [
        { name: 'Abdulmohsen Al-Marri', role: 'CEO & Co-founder', bio: 'Drives company vision, client relationships, and strategy.', initials: 'AM', color: '#5B8DEF' },
        { name: 'Abdullah Ayman',   role: 'Technical Lead', bio: 'Owns the architecture and drives technical decisions from kickoff to delivery.', initials: 'AA', color: '#F5B942' },
        { name: 'Mohammed Elsayed', role: 'Developer',      bio: 'Builds full-stack software with a focus on clean, reliable solutions.',               initials: 'ME', color: '#8B8FA8' },
      ],
    },

    location: {
      sectionLabel: 'Where We Are',
      sectionTitle: 'Our location',
      sectionSub: 'Based in Al Jubail, Saudi Arabia — working with clients globally.',
      cards: [
        { title: 'Office hours',   desc: 'Sunday – Thursday, 9am – 6pm AST. Remote-first culture with in-person workshops available.' },
        { title: 'Global clients', desc: 'We work with teams across the Middle East, Europe, and the Asia-Pacific region.' },
        { title: 'On-site visits', desc: 'For hardware projects, we can travel to your facility for integration and testing support.' },
      ],
    },
  },

  contact: {
    title: 'Contact',
    sub: "Have a project in mind? Drop us a note and we'll get back to you within one business day.",
    fields: {
      name:    { label: 'Name',    placeholder: 'Your name' },
      email:   { label: 'Email',   placeholder: 'you@company.com' },
      message: { label: 'Message', placeholder: 'Tell us about your project…' },
    },
    submitLabel:    'Send message →',
    successMessage: "Thanks! We'll be in touch shortly.",
  },
}

export default CONTENT
