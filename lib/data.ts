export type Project = {
  number: string
  title: string
  category: string
  description: string
  tags: string[]
  href: string
  image: string
  accent: string
  dark: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'RoadWheels',
    category: 'Full-stack web application',
    description:
      'A complete car rental platform with intuitive booking flows, fleet management, and an admin dashboard. Built end to end with secure JWT authentication and a production-ready data layer.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    href: 'https://roadwheelssa.vercel.app',
    image: '/projects/roadwheels.png',
    accent: '#dce2ff',
    dark: false,
  },
  {
    number: '02',
    title: 'E-SafetyRides',
    category: 'Team project',
    description:
      'A safety-first platform helping e-hailing riders check a driver’s record history before getting in the car. Built collaboratively with a modular Route-Controller-Service architecture across auth, search, reports, and notifications.',
    tags: ['React (Vite)', 'Node.js', 'Express', 'Firebase / Firestore'],
    href: 'https://e-safetyridessa.vercel.app',
    image: '/projects/esafetyrides.png',
    accent: '#16181d',
    dark: true,
  },
  {
    number: '03',
    title: 'CountryScope',
    category: 'Interactive web app',
    description:
      'A focused country explorer powered by the REST Countries API, with real-time filtering, neighbouring-country navigation, and considered loading and error states.',
    tags: ['JavaScript', 'REST API', 'Responsive UI'],
    href: 'https://mlungisimahlangu.github.io/CountryScope',
    image: '/projects/countryscope.png',
    accent: '#e9e3ff',
    dark: false,
  },
  {
    number: '04',
    title: 'Grip On',
    category: 'E-commerce frontend',
    description:
      'A gym-apparel concept storefront focused on clean product presentation and a smooth, responsive browsing experience from landing page to product discovery.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    href: 'https://mlungisimahlangu.github.io/grip-on-website',
    image: '/projects/gripon.png',
    accent: '#f1e8d8',
    dark: false,
  },
]

export const skills = {
  Languages: ['Java', 'Python', 'C++', 'JavaScript'],
  'Web / Frontend': ['HTML', 'CSS', 'React'],
  Tools: ['Git', 'GitHub', 'SQL', 'REST APIs'],
} as const

export const marqueeItems = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Tailwind CSS',
  'TypeScript',
  'REST APIs',
  'JWT Auth',
  'Git & GitHub',
  'SQL',
  'Responsive Design',
]

export const socials = {
  email: 'mlungisi.mahlangu@gmail.com',
  phone: '+27 71 767 3953',
  phoneHref: '+27717673953',
  linkedin: 'https://www.linkedin.com/in/mlungisi-mahlangu',
  github: 'https://github.com/mlungisimahlangu',
  location: 'Johannesburg, South Africa',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Selected work', href: '#work' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Contact', href: '#contact' },
]
