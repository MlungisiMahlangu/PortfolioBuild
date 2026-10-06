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
  'Web & Mobile': ['HTML', 'CSS', 'React', 'Android (Java)'],
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
  'Android (Java)',
  'Git & GitHub',
  'SQL',
  'Responsive Design',
]

export const stats = [
  { value: '04', label: 'Projects shipped' },
  { value: '04', label: 'Live in production' },
  { value: '02', label: 'Full-stack builds' },
  { value: '01', label: 'Team product' },
]

export const waysToWork = [
  {
    number: '01',
    title: 'Join a team',
    body: 'Internships, graduate and junior roles. I slot into existing codebases quickly and ship features end to end.',
  },
  {
    number: '02',
    title: 'Freelance & contract',
    body: 'Need a site, storefront, or MVP built properly? I take on select client work from concept to deployment.',
  },
  {
    number: '03',
    title: 'Collaborate',
    body: 'Hackathons, side projects, startup ideas. I enjoy building alongside other people who care about the craft.',
  },
  {
    number: '04',
    title: 'Open source',
    body: 'Happy to contribute, review, or pair on public repos — some of the best learning happens in the open.',
  },
]

export const socials = {
  email: 'shaunmlungisi4@gmail.com',
  phone: '+27 64 953 1145',
  phoneHref: '+27649531145',
  github: 'https://github.com/MlungisiMahlangu',
  linkedin: 'https://www.linkedin.com/in/mlungisi-mahlangu',
  location: 'Johannesburg, South Africa',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Selected work', href: '#work' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Work with me', href: '#work-with-me' },
  { label: 'Contact', href: '#contact' },
]
