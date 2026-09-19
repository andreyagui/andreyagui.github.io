import { PROFILE, PROJECTS, CV_FILES } from './shared.js';

export const ES = {
  meta: {
    title: 'Andrey Aguirre Obregón — Ingeniero de Software Senior',
    description: 'Ingeniero de Software Senior (.NET, Angular, React) con 9+ años construyendo plataformas web, móviles y financieras en Costa Rica.',
  },
  nav: {
    links: [
      { id: 'about', label: 'Perfil' },
      { id: 'experience', label: 'Experiencia' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'skills', label: 'Stack' },
      { id: 'education', label: 'Educación' },
      { id: 'contact', label: 'Contacto' },
    ],
    langToggle: 'EN',
    langToggleAria: 'Switch to English',
    themeToggleAria: 'Cambiar entre tema claro y oscuro',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    skipLink: 'Saltar al contenido',
    homeAria: 'Ir al inicio',
    navAria: 'Principal',
  },
  hero: {
    greeting: '> hola, soy',
    name: PROFILE.name,
    role: 'Ingeniero de Software Senior',
    tagline: 'Construyo plataformas web, móviles y SaaS de punta a punta para banca, salud, retail y startups.',
    stack: '.NET · Angular · React · SQL Server',
    location: 'Heredia, Costa Rica · Remoto / híbrido',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    cvFile: CV_FILES.es,
    photo: PROFILE.photo,
    photoAlt: 'Foto de Andrey Aguirre Obregón',
  },
  about: {
    title: 'Perfil',
    paragraphs: [
      'Ingeniero de Software Senior con más de 9 años en los sectores bancario, salud, retail y SaaS. Trabajo principalmente con .NET 8, Angular 19, React y SQL Server, bajo Clean Architecture y CI/CD.',
      'He liderado equipos técnicos, integrado la facturación electrónica costarricense (XML 4.4) y llevado productos propios a producción. Hoy combino ese oficio con desarrollo asistido por IA y estudios en Machine Learning.',
    ],
    highlights: [
      { value: '9+', label: 'años de experiencia' },
      { value: '5', label: 'empresas' },
      { value: '2', label: 'SaaS propios en producción' },
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        role: 'Ingeniero de Software Senior', company: 'Grupo Malengo', location: 'Heredia, Costa Rica', period: 'Mar 2024 — Actualidad',
        bullets: [
          'Lidero el desarrollo de AlturaRH, SikuApps y el módulo Admin: productos internos de RR.HH. y gestión clínica.',
          'Módulos de contratos, ausencias, control médico y nómina con .NET 8, Angular 19 y SQL Server bajo Clean Architecture.',
          'Evolución del middleware de facturación electrónica (XML 4.4 / Cabys) según la normativa del Ministerio de Hacienda.',
          'Integraciones REST con SikuMed que redujeron ~40% el procesamiento manual; pipelines CI/CD en Azure DevOps.',
        ],
      },
      {
        role: 'Ingeniero de Software Senior', company: '3Pillar Global', location: 'San José, Costa Rica', period: 'Feb 2020 — Mar 2024',
        bullets: [
          'Sistema de pago de marchamo para Banco Promerica: duplicó el volumen de ventas proyectado en su primer año.',
          'Control de inventarios en Android nativo para una app de retail en Canadá.',
          'Optimización de líneas de crédito para una institución financiera de alto volumen transaccional.',
          'Equipos distribuidos en EE.UU., Canadá y LATAM bajo Scrum.',
        ],
      },
      {
        role: 'Ingeniero de Software', company: 'SIKU', location: 'Heredia, Costa Rica', period: 'Ene 2019 — Feb 2020',
        bullets: [
          'Software de expedientes médicos para profesionales de salud a nivel nacional.',
          'Tablero tipo Trello para equipos médicos con C#, Web API, SQL Server y Angular.',
          'FoodNotes (web + Android para nutrición), de la arquitectura a producción.',
        ],
      },
      {
        role: 'Ingeniero de Software', company: 'Banco Central de Costa Rica (vía Crux Consultores)', location: 'San José, Costa Rica', period: 'Abr 2018 — Ene 2019',
        bullets: [
          'Herramientas de supervisión y cumplimiento financiero con .NET Framework y SQL Server.',
          'Coordinación técnica entre cumplimiento, reportes y desarrollo para cumplir plazos regulatorios.',
        ],
      },
      {
        role: 'Líder Técnico', company: 'Exdesa', location: 'Heredia, Costa Rica', period: 'Ene 2017 — Abr 2018',
        bullets: [
          'Plataforma de facturación electrónica en Angular + Ionic, en cumplimiento con la normativa costarricense.',
          'Sistemas en tiempo real de rutas, pedidos y cierres de caja para equipos de ventas en campo.',
        ],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Productos propios y trabajo destacado.',
    liveBadge: 'En producción',
    visitLabel: 'Visitar sitio',
    otherTitle: 'Otros proyectos',
    featured: [
      { ...PROJECTS.rentify, tagline: 'PropTech SaaS', description: 'Gestión de alquileres para propietarios en Costa Rica: contratos generados con IA, panel financiero y arquitectura multi-tenant.' },
      { ...PROJECTS.nexora, tagline: 'Agentes de IA para marketing', description: 'Un departamento de marketing autónomo: agentes de IA que investigan, crean y publican contenido en redes sociales; el cliente solo aprueba.' },
      { ...PROJECTS.kardex, tagline: 'Historial vehicular con IA', description: 'App móvil que predice fallas mecánicas con IA, certifica el historial del vehículo con reportes en PDF y controla gastos de combustible y mantenimiento; incluye traspaso digital de propiedad y planes para flotas.' },
      { ...PROJECTS.duopay, tagline: 'Finanzas en pareja', description: 'Gastos, presupuestos y balances compartidos para parejas, en web y app móvil.' },
      { ...PROJECTS.andara, tagline: 'Gestión de portafolio', description: 'Panel propio para gestionar todos mis productos: proyectos, etapas, tareas y preparación para producción.' },
      { ...PROJECTS.exchange, tagline: 'Journal de trading', description: 'Registro de operaciones de trading con dashboard de métricas y rendimiento.' },
    ],
    other: [
      { ...PROJECTS.trading, name: 'Sistema de trading algorítmico', description: 'Construido sobre Freqtrade (open-source): estrategias propias, auditoría de resultados y alertas por Telegram.' },
      { ...PROJECTS.roman, description: 'Agente autónomo construido sobre OpenClaw (open-source), personalizado y desplegado en Railway.' },
      { ...PROJECTS.sparrow, description: 'E-commerce de moda anime: catálogo, carrito y gestión de pedidos.' },
      { ...PROJECTS.durex, description: 'Sitio de la primera marcha virtual LGBTQ+ de Costa Rica, en alianza con Durex (cobertura en La República).' },
      { ...PROJECTS.leones, description: 'App móvil para el Club de Leones de Costa Rica: miembros, solicitudes de ayuda y actividades.' },
      { ...PROJECTS.hecbox, description: 'Sitio de HEC Box, servicio de casillero y envíos entre Miami y Costa Rica: seguimiento de paquetes en tiempo real, consolidación de compras de varias tiendas y entrega a domicilio.' },
    ],
  },
  skills: {
    title: 'Stack técnico',
    groups: [
      { name: 'Backend', items: ['.NET 8', 'C#', 'Web API', 'EF Core', 'VB.NET', 'Node.js', 'Python'] },
      { name: 'Frontend', items: ['Angular 19', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5'] },
      { name: 'Móvil', items: ['React Native / Expo', 'Android nativo', 'Ionic', 'Flutter'] },
      { name: 'Datos', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Supabase'] },
      { name: 'DevOps', items: ['Azure DevOps', 'CI/CD', 'Git', 'Docker', 'IIS', 'Railway', 'Vercel'] },
      { name: 'Arquitectura', items: ['Clean Architecture', 'REST APIs', 'JWT / OAuth2', 'Multi-tenant'] },
      { name: 'IA', items: ['Agentes de IA', 'Gemini API', 'Desarrollo asistido por IA', 'Machine Learning'] },
      { name: 'Reportes y fiscal', items: ['Reporting Services', 'Power BI', 'Facturación electrónica XML 4.4'] },
    ],
  },
  education: {
    title: 'Educación',
    items: [
      { title: 'Bachiller en Ingeniería de Sistemas', institution: 'Universidad de Costa Rica', status: 'Completado' },
      { title: 'Técnico en Machine Learning', institution: 'Cenfotec', status: 'En curso · 6 de 8 módulos' },
      { title: 'Optimización de programación asistida con IA', institution: 'Udemy', status: 'Completado' },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio-avanzado (B2)' },
    ],
  },
  contact: {
    title: 'Contacto',
    text: '¿Un proyecto o una posición en mente? Conversemos.',
    email: PROFILE.email,
    linkedin: PROFILE.linkedin,
    linkedinText: PROFILE.linkedinText,
    github: PROFILE.github,
    githubText: PROFILE.githubText,
    website: PROFILE.website,
    cvLabel: 'Descargar CV (PDF)',
    cvFile: CV_FILES.es,
  },
};
