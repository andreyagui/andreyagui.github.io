import { PROFILE, PROJECTS, CV_FILES } from './shared.js';

export const EN = {
  meta: {
    title: 'Andrey Aguirre Obregón — Senior Software Engineer',
    description: 'Senior Software Engineer (.NET, Angular, React) with 9+ years building web, mobile and financial platforms from Costa Rica.',
  },
  nav: {
    links: [
      { id: 'about', label: 'Profile' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Stack' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
    langToggle: 'ES',
    langToggleAria: 'Cambiar a español',
    themeToggleAria: 'Toggle light and dark theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipLink: 'Skip to content',
    homeAria: 'Back to top',
    navAria: 'Main',
  },
  hero: {
    greeting: '> hi, I am',
    name: PROFILE.name,
    role: 'Senior Software Engineer',
    tagline: 'I build web, mobile and SaaS platforms end to end for banking, healthcare, retail and startups.',
    stack: '.NET · Angular · React · SQL Server',
    location: 'Heredia, Costa Rica · Remote / hybrid',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    cvFile: CV_FILES.en,
    photo: PROFILE.photo,
    photoAlt: 'Photo of Andrey Aguirre Obregón',
  },
  about: {
    title: 'Profile',
    paragraphs: [
      'Senior Software Engineer with 9+ years across banking, healthcare, retail and SaaS. I mostly work with .NET 8, Angular 19, React and SQL Server, using Clean Architecture and CI/CD.',
      'Today I build AI agents on Azure AI Foundry / Google Cloud that serve patients and automate clinic operations, and I ship my own products to production: AI marketing agents, rental management and vehicle history. I have been part of technical teams delivering a bank vehicle-tax (marchamo) payment system that doubled projected sales, while keeping a solid hand on critical integrations like e-invoicing. I round it all out with Machine Learning studies.',
    ],
    highlights: [
      { value: '9+', label: 'years of experience' },
      { value: '5', label: 'companies' },
      { value: '2', label: 'own SaaS products live' },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Senior Software Engineer', company: 'Grupo Malengo', location: 'Heredia, Costa Rica', period: 'Mar 2024 — Present',
        bullets: [
          'Lead development of AlturaRH, SikuApps and the Admin module: internal HR and clinical-management products.',
          'Omnichannel CRM and Inbox powered by AI agents on Azure AI Foundry: patient conversations handled, triaged and resolved autonomously, 24/7.',
          'Automation engine that gives doctors their time back: from simple reminders and tasks to multi-step clinical and administrative workflows, hands-free.',
          'WhatsApp broadcast system built into the Inbox and CRM: segmented campaigns, centralized replies and full per-patient traceability.',
          'Internal Customer Success platform for client management and continuity: account health, early risk alerts and end-to-end lifecycle tracking.',
          'HR and payroll modules, e-invoicing middleware (XML 4.4) and REST integrations with SikuMed (~40% less manual processing) with .NET 8, Angular 19 and SQL Server.',
        ],
      },
      {
        role: 'Senior Software Engineer', company: '3Pillar Global', location: 'San José, Costa Rica', period: 'Feb 2020 — Mar 2024',
        bullets: [
          'Vehicle-tax (marchamo) payment system for Banco Promerica: doubled projected sales volume in its first year.',
          'Native Android inventory control for a retail app in Canada.',
          'Credit-line optimization for a high-volume financial institution.',
          'Distributed teams across the US, Canada and LATAM using Scrum.',
        ],
      },
      {
        role: 'Software Engineer', company: 'SIKU', location: 'Heredia, Costa Rica', period: 'Jan 2019 — Feb 2020',
        bullets: [
          'Medical-records software for healthcare professionals nationwide.',
          'Trello-style board for medical teams with C#, Web API, SQL Server and Angular.',
          'FoodNotes (web + Android nutrition app), from architecture to production.',
        ],
      },
      {
        role: 'Software Engineer', company: 'Central Bank of Costa Rica (via Crux Consultores)', location: 'San José, Costa Rica', period: 'Apr 2018 — Jan 2019',
        bullets: [
          'Financial supervision and compliance tools with .NET Framework and SQL Server.',
          'Technical coordination between compliance, reporting and development to meet regulatory deadlines.',
        ],
      },
      {
        role: 'Tech Lead', company: 'Exdesa', location: 'Heredia, Costa Rica', period: 'Jan 2017 — Apr 2018',
        bullets: [
          'E-invoicing platform in Angular + Ionic, compliant with Costa Rican regulations.',
          'Real-time routing, ordering and cash-closing systems for field sales teams.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'My own products and selected work.',
    liveBadge: 'Live',
    visitLabel: 'Visit site',
    otherTitle: 'More projects',
    featured: [
      { ...PROJECTS.rentify, tagline: 'PropTech SaaS', description: 'Rental management for property owners in Costa Rica: AI-generated contracts, financial dashboard and multi-tenant architecture.' },
      { ...PROJECTS.nexora, tagline: 'AI marketing agents', description: 'An autonomous marketing department: AI agents that research, create and publish social media content; the client only approves.' },
      { ...PROJECTS.hecbox, tagline: 'Miami → Costa Rica shipping', description: 'Website for HEC Box, a Miami-to-Costa Rica package forwarding service: real-time tracking, consolidated shipments from multiple stores and home delivery.' },
      { ...PROJECTS.kardex, tagline: 'AI vehicle history', description: 'Mobile app that predicts mechanical failures with AI, certifies vehicle history with PDF reports, and tracks fuel and maintenance expenses; includes digital ownership transfer and fleet plans.' },
      { ...PROJECTS.duopay, tagline: 'Couples finance', description: 'Shared expenses, budgets and balances for couples, on web and mobile.' },
      { ...PROJECTS.andara, tagline: 'Portfolio management', description: 'My own dashboard to run all my products: projects, stages, tasks and production readiness.' },
    ],
    other: [
      { ...PROJECTS.trading, name: 'Algorithmic trading system', description: 'My own Smart Money Concepts engine in Python: detects order blocks, fair value gaps, liquidity sweeps and structure breaks with no look-ahead bias. An ML model manages exits, with fixed per-trade risk, circuit breakers and Telegram alerts; trades crypto futures 24/7 from Docker in the cloud.' },
      { ...PROJECTS.roman, description: 'My autonomous personal agent, built on OpenClaw (open source): runs 24/7 in the cloud, understands natural-language instructions and automates everything from everyday tasks to multi-step workflows. Tailored to the way I work and deployed on Railway.' },
      { ...PROJECTS.sparrow, description: 'Anime fashion e-commerce: catalog, cart and order management.' },
      { ...PROJECTS.leones, description: 'Mobile app for the Lions Club of Costa Rica: members, aid requests and activities.' },
      { ...PROJECTS.exchange, description: 'Trading journal: trade log with a metrics and performance dashboard.' },
    ],
  },
  skills: {
    title: 'Tech stack',
    groups: [
      { name: 'Backend', items: [
        { name: '.NET 8', icon: 'dotnet' }, { name: 'C#', icon: null }, { name: 'Web API', icon: null },
        { name: 'EF Core', icon: null }, { name: 'VB.NET', icon: null }, { name: 'Node.js', icon: 'nodedotjs' }, { name: 'Python', icon: 'python' },
      ] },
      { name: 'Frontend', items: [
        { name: 'Angular 19', icon: 'angular' }, { name: 'React', icon: 'react' }, { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'TypeScript', icon: 'typescript' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }, { name: 'HTML5', icon: 'html5' },
      ] },
      { name: 'Mobile', items: [
        { name: 'React Native / Expo', icon: 'expo' }, { name: 'Native Android', icon: 'android' },
        { name: 'Ionic', icon: 'ionic' }, { name: 'Flutter', icon: 'flutter' },
      ] },
      { name: 'Data', items: [
        { name: 'SQL Server', icon: null }, { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' }, { name: 'Supabase', icon: 'supabase' },
      ] },
      { name: 'DevOps', items: [
        { name: 'Azure DevOps', icon: null }, { name: 'CI/CD', icon: null }, { name: 'Git', icon: 'git' },
        { name: 'Docker', icon: 'docker' }, { name: 'IIS', icon: null }, { name: 'Railway', icon: 'railway' }, { name: 'Vercel', icon: 'vercel' },
      ] },
      { name: 'Architecture', items: [
        { name: 'Clean Architecture', icon: null }, { name: 'REST APIs', icon: null },
        { name: 'JWT / OAuth2', icon: 'jsonwebtokens' }, { name: 'Multi-tenant', icon: null },
      ] },
      { name: 'AI', items: [
        { name: 'AI agents', icon: null }, { name: 'Gemini API', icon: 'googlegemini' }, { name: 'Azure AI Foundry', icon: null },
        { name: 'AI-assisted development', icon: null }, { name: 'Machine Learning', icon: null },
      ] },
      { name: 'Reporting & tax', items: [
        { name: 'Reporting Services', icon: null }, { name: 'Power BI', icon: null }, { name: 'E-invoicing XML 4.4', icon: null },
      ] },
    ],
  },
  education: {
    title: 'Education',
    items: [
      { title: "Bachelor's in Systems Engineering", institution: 'University of Costa Rica', status: 'Completed' },
      { title: 'Machine Learning Technician', institution: 'Cenfotec', status: 'In progress · 6 of 8 modules' },
      { title: 'AI-assisted programming optimization', institution: 'Udemy', status: 'Completed' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Upper-intermediate (B2)' },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'A project or a role in mind? Let’s talk.',
    email: PROFILE.email,
    linkedin: PROFILE.linkedin,
    linkedinText: PROFILE.linkedinText,
    github: PROFILE.github,
    githubText: PROFILE.githubText,
    website: PROFILE.website,
    cvLabel: 'Download CV (PDF)',
    cvFile: CV_FILES.en,
  },
};
