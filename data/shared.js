export const PROFILE = {
  name: 'Andrey Aguirre Obregón',
  email: 'aguirreandrey@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrey-aguirre-970a30134',
  linkedinText: 'linkedin.com/in/andrey-aguirre-970a30134',
  github: 'https://github.com/andreyagui',
  githubText: 'github.com/andreyagui',
  website: 'andreyagui.github.io',
  photo: 'assets/images/profile.jpg',
};

export const CV_FILES = {
  es: 'assets/cv/andrey-aguirre-cv-es.pdf',
  en: 'assets/cv/andrey-aguirre-cv-en.pdf',
};

const LOGOS = 'assets/images/logos';
const SHOTS = 'assets/images/projects';

export const PROJECTS = {
  rentify: {
    id: 'rentify', name: 'Rentify', url: 'https://www.rentifycr.com',
    image: `${SHOTS}/rentify.jpg`, logo: `${LOGOS}/rentify.png`,
    tags: ['.NET 8', 'React', 'TypeScript', 'Supabase', 'Vercel'],
  },
  nexora: {
    id: 'nexora', name: 'Nexora Agents', url: 'https://www.nexoragents.com',
    image: `${SHOTS}/nexora.jpg`, logo: `${LOGOS}/nexora.png`,
    tags: ['Next.js', 'Python', 'Supabase', 'Gemini', 'Docker'],
  },
  kardex: {
    id: 'kardex', name: 'Kardex ID', url: 'https://www.kardexapp.com/es',
    image: `${SHOTS}/kardex.jpg`, logo: `${LOGOS}/kardex.png`,
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
  },
  duopay: {
    id: 'duopay', name: 'DuoPay', url: null, image: null, logo: `${LOGOS}/duopay.png`,
    tags: ['React', 'React Native', 'Supabase', 'Tailwind CSS'],
  },
  andara: {
    id: 'andara', name: 'Andara Dashboard', url: null, image: null, logo: `${LOGOS}/andara.png`,
    tags: ['React', 'TypeScript', 'Supabase', 'Vercel'],
  },
  exchange: {
    id: 'exchange', name: 'Exchange Chronicle', url: null, image: null,
    logo: `${LOGOS}/exchange-chronicle.svg`, tags: ['React', 'TypeScript', 'Recharts'],
  },
  trading: { id: 'trading', tags: ['Python', 'Freqtrade', 'Pine Script', 'Telegram'] },
  roman: { id: 'roman', name: 'Roman Agent', tags: ['OpenClaw', 'Node.js', 'Railway'] },
  sparrow: { id: 'sparrow', name: 'Sparrow', tags: ['React', 'Node.js'] },
  leones: { id: 'leones', name: 'Club de Leones CR', tags: ['Android'] },
  hecbox: {
    id: 'hecbox', name: 'HEC Box', url: 'https://www.hecboxcr.com',
    image: `${SHOTS}/hecbox.jpg`, logo: null,
    tags: ['Web', 'Tracking', 'E-commerce'],
  },
};
