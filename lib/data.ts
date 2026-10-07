export type Project = {
  number: string
  title: string
  category: string
  role: string
  description: string
  tags: string[]
  href: string
  githubRepo?: string
  image: string
  accent: string
  dark: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'RoadWheels',
    category: 'Full-stack web application',
    role: 'Full-stack developer · Solo project',
    description:
      'A complete car rental platform with intuitive booking flows, fleet management, and an admin dashboard. Built end to end with secure JWT authentication and a production-ready data layer.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    href: 'https://roadwheelssa.vercel.app',
    githubRepo: 'https://github.com/MlungisiMahlangu/RoadWheels',
    image: '/projects/roadwheels.png',
    accent: '#dce2ff',
    dark: false,
  },
  {
    number: '02',
    title: 'E-SafetyRides',
    category: 'Team project',
    role: 'Full-stack developer',
    description:
      'A safety-first platform helping e-hailing riders check a driver\u2019s record history before getting in the car. Built collaboratively with a modular Route-Controller-Service architecture across auth, search, reports, and notifications.',
    tags: ['React (Vite)', 'Node.js', 'Express', 'Firebase / Firestore'],
    href: 'https://e-safetyridessa.vercel.app',
    githubRepo: 'https://github.com/Ronzasa/E-SafetyRides',
    image: '/projects/esafetyrides.png',
    accent: '#16181d',
    dark: true,
  },
  {
    number: '03',
    title: 'Grip On',
    category: 'E-commerce frontend',
    role: 'Frontend developer · Solo project',
    description:
      'A gym-apparel concept storefront focused on clean product presentation and a smooth, responsive browsing experience from landing page to product discovery.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    href: 'https://mlungisimahlangu.github.io/grip-on-website',
    githubRepo: 'https://github.com/MlungisiMahlangu/grip-on-website',
    image: '/projects/gripon.png',
    accent: '#f1e8d8',
    dark: false,
  },
  {
    number: '04',
    title: 'CountryScope',
    category: 'Interactive web app',
    role: 'Full-stack developer · Solo project',
    description:
      'A focused country explorer powered by the REST Countries API, with real-time filtering, neighbouring-country navigation, and considered loading and error states.',
    tags: ['JavaScript', 'REST API', 'Responsive UI'],
    href: 'https://mlungisimahlangu.github.io/CountryScope',
    githubRepo: 'https://github.com/MlungisiMahlangu/CountryScope',
    image: '/projects/countryscope.png',
    accent: '#e9e3ff',
    dark: false,
  },
]

export const skills = {
  Languages: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript'],
  'Frontend & Mobile': ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Android (Java)'],
  'Backend & Data': ['Node.js', 'Express', 'MongoDB', 'Firebase / Firestore', 'SQL', 'REST APIs', 'JWT Authentication', 'Clerk'],
  'Tools & Workflow': ['Git', 'GitHub', 'Vercel', 'Responsive Design', 'API Integration'],
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
  'Clerk',
  'Vercel',
  'API Integration',
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
    body: 'Internships, graduate and junior roles. I adapt quickly to existing codebases, learn fast, and enjoy taking features from idea to production.',
  },
  {
    number: '02',
    title: 'Freelance & contract',
    body: 'Need a website, storefront, or MVP? I can help take your idea from the first screen to a deployed product.',
  },
  {
    number: '03',
    title: 'Collaborate',
    body: 'Have a startup idea, hackathon project, or side project? I\u2019m always open to building with people who are curious, ambitious, and care about what they create.',
  },
  {
    number: '04',
    title: 'Open source',
    body: 'I\u2019d love to contribute to interesting public projects, collaborate with other developers, and keep learning in the open.',
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
  { label: 'What I work with', href: '#toolkit' },
  { label: "Let's work together", href: '#work-with-me' },
]
