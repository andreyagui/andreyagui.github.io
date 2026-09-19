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
      'I have led technical teams, integrated Costa Rican e-invoicing (XML 4.4) and shipped my own products to production. Today I pair that craft with AI-assisted development and Machine Learning studies.',
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
          'Contracts, absences, medical-control and payroll modules with .NET 8, Angular 19 and SQL Server using Clean Architecture.',
          'Evolved the e-invoicing middleware (XML 4.4 / Cabys) to meet Costa Rican Ministry of Finance rules.',
          'REST integrations with SikuMed that cut manual processing by ~40%; CI/CD pipelines on Azure DevOps.',
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
        role: 'Tech Lead', company: 'SIKU', location: 'Heredia, Costa Rica', period: 'Jan 2019 — Feb 2020',
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
      { ...PROJECTS.kardex, tagline: 'Vehicle history', description: 'Mobile vehicle-history app with passive mileage tracking through background location, built for battery life and privacy.' },
      { ...PROJECTS.duopay, tagline: 'Couples finance', description: 'Shared expenses, budgets and balances for couples, on web and mobile.' },
      { ...PROJECTS.andara, tagline: 'Portfolio management', description: 'My own dashboard to run all my products: projects, stages, tasks and production readiness.' },
      { ...PROJECTS.exchange, tagline: 'Trading journal', description: 'Trade log with a metrics and performance dashboard.' },
    ],
    other: [
      { ...PROJECTS.trading, name: 'Algorithmic trading system', description: 'Built on Freqtrade (open source): my own strategies, results auditing and Telegram alerts.' },
      { ...PROJECTS.roman, description: 'Autonomous agent built on OpenClaw (open source), customized and deployed on Railway.' },
      { ...PROJECTS.sparrow, description: 'Anime fashion e-commerce: catalog, cart and order management.' },
      { ...PROJECTS.durex, description: "Website for Costa Rica's first virtual LGBTQ+ Pride march, in partnership with Durex (covered by La República)." },
      { ...PROJECTS.leones, description: 'Mobile app for the Lions Club of Costa Rica: members, aid requests and activities.' },
    ],
  },
  skills: {
    title: 'Tech stack',
    groups: [
      { name: 'Backend', items: ['.NET 8', 'C#', 'Web API', 'EF Core', 'VB.NET', 'Node.js', 'Python'] },
      { name: 'Frontend', items: ['Angular 19', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5'] },
      { name: 'Mobile', items: ['React Native / Expo', 'Native Android', 'Ionic', 'Flutter'] },
      { name: 'Data', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Supabase'] },
      { name: 'DevOps', items: ['Azure DevOps', 'CI/CD', 'Git', 'Docker', 'IIS', 'Railway', 'Vercel'] },
      { name: 'Architecture', items: ['Clean Architecture', 'REST APIs', 'JWT / OAuth2', 'Multi-tenant'] },
      { name: 'AI', items: ['AI agents', 'Gemini API', 'AI-assisted development', 'Machine Learning'] },
      { name: 'Reporting & tax', items: ['Reporting Services', 'Power BI', 'E-invoicing XML 4.4'] },
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
    text: 'A project or a role in mind? Let\'s talk.',
    email: PROFILE.email,
    linkedin: PROFILE.linkedin,
    linkedinText: PROFILE.linkedinText,
    github: PROFILE.github,
    githubText: PROFILE.githubText,
    website: PROFILE.website,
    cvLabel: 'Download CV (PDF)',
    cvFile: CV_FILES.en,
  },
  footer: { text: 'Handcrafted with HTML, CSS and JavaScript.' },
};
