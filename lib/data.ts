export type Project = {
  number: string
  title: string
  category: string
  role: string
  description: string
  cvSummary: string
  cvBullets: string[]
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
    cvSummary:
      'Car rental platform with date-based booking, customer accounts and an admin fleet dashboard.',
    cvBullets: [
      'Built the Express and Mongoose API for users, cars, bookings and reviews, with JWT authentication, admin-only routes and date-range validation in South African business time.',
      'Added separate customer and admin dashboards, with suspended-account handling and session invalidation.',
    ],
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
    cvSummary: 'Team-built safety platform for checking a driver record before accepting a ride.',
    cvBullets: [
      'Worked with other student developers on a Firebase-backed Express API, organised into auth, search, reports, admin and notifications modules.',
      'Contributed through a shared Git workflow with feature branches and reviewed pull requests into a protected integration branch.',
    ],
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
    category: 'Full-stack e-commerce platform',
    role: 'Full-stack developer · Solo project',
    description:
      'A gym-apparel brand rebuilt from a static concept page into a production commerce platform: Supabase-backed catalogue, cash-on-delivery checkout with server-side pricing and validation, and an admin back office for orders, products and store settings.',
    cvSummary: 'Production online store with server-priced checkout and a full admin back office.',
    cvBullets: [
      'Built the storefront in Next.js with server-rendered catalogue pages, URL-driven filtering and a persisted cart and wishlist.',
      'Designed the Supabase schema, row-level security and RPCs so prices and availability are recalculated on the server, and built the admin back office for orders, products and settings.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase / Postgres', 'Server Actions', 'Auth & RLS'],
    href: 'https://grip-on-website.netlify.app',
    image: '/projects/gripon.png',
    accent: '#121212',
    dark: true,
  },
  {
    number: '04',
    title: 'CountryScope',
    category: 'Interactive web app',
    role: 'Frontend developer · Solo project',
    description:
      'A focused country explorer powered by the REST Countries API, with real-time filtering, neighbouring-country navigation, and considered loading and error states.',
    cvSummary: 'Country explorer over public APIs, with search, neighbour navigation and imagery.',
    cvBullets: [
      'Built the interface in vanilla JavaScript over the REST Countries API, with search, neighbour navigation and explicit loading and error states.',
      'Integrated a second API for landmark photography and kept the layout responsive from mobile widths up.',
    ],
    tags: ['JavaScript', 'REST API', 'Responsive UI'],
    href: 'https://mlungisimahlangu.github.io/CountryScope',
    githubRepo: 'https://github.com/MlungisiMahlangu/CountryScope',
    image: '/projects/countryscope.png',
    accent: '#e9e3ff',
    dark: false,
  },
]

export const venture = {
  name: 'WEB-IN Digital Studio',
  role: 'Founder & Developer',
  period: '2026 – Present',
  location: 'Johannesburg, South Africa',
  url: 'https://www.web-in.co.za',
  displayUrl: 'www.web-in.co.za',
  tagline: 'Independent website design and development initiative',
  intro:
    'WEB-IN is an independent initiative I started in 2026 while studying Computer Science at Wits. I wanted to push past coursework, put my development skills to practical use and see what it takes to build a web business. I designed, built and deployed the site myself, frontend and backend.',
  body:
    'It is early stage: the site is live and the services are defined. The useful part has been the range of it, from hosting, domain and SEO through to pricing and enquiries. My priority is still a graduate or junior role, and I am looking for any opportunity where I can grow, keep learning and contribute.',
  services: [
    'Business websites',
    'Landing pages',
    'E-commerce stores',
    'Website redesigns',
    'Custom web applications',
    'Website care plans',
  ],
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  facts: [
    { label: 'Role', value: 'Founder & Developer' },
    { label: 'Stage', value: 'Early stage' },
  ],
  cvSummary:
    'Independent, pre-client web development initiative started alongside my Computer Science studies.',
  cvBullets: [
    'Designed, built and deployed the WEB-IN website myself, frontend and backend, with Next.js, React, TypeScript and Tailwind CSS on Vercel.',
    'Configured hosting, domain and deployment, and built the SEO layer: per-page metadata, sitemap, robots, JSON-LD and IndexNow.',
    'Defined the service offering and pricing tiers, and handle enquiries and business communication.',
  ],
}

export const skills = {
  Languages: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  'Frontend & Mobile': ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'Android (Java)'],
  'Backend & Data': [
    'Node.js',
    'Express',
    'REST APIs',
    'JWT Authentication',
    'Server Actions',
    'Clerk',
    'PostgreSQL',
    'MongoDB',
    'Firebase / Firestore',
  ],
  'Tools & Practices': [
    'Git',
    'GitHub',
    'Vercel',
    'Netlify',
    'Responsive design',
    'API integration',
    'Data validation',
    'Technical SEO',
  ],
} as const

export const languages = ['English', 'isiZulu', 'isiNdebele']

export const softSkills = [
  'Time management and discipline',
  'Effective communication',
  'Teamwork and collaboration',
  'Quick learning and adaptability',
  'Critical thinking',
]

export const marqueeItems = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Supabase',
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
  'Netlify',
  'API Integration',
]

export const stats = [
  { value: '04', label: 'Projects shipped' },
  { value: '04', label: 'Live in production' },
  { value: '03', label: 'Full-stack builds' },
  { value: '01', label: 'Team product' },
]

export const waysToWork = [
  {
    number: '01',
    title: 'Graduate & junior roles',
    body: 'Graduate programmes, junior developer roles and internships. I adapt quickly to existing codebases, learn fast, and want to contribute inside a real development team.',
  },
  {
    number: '02',
    title: 'Freelance & contract',
    body: 'Need a website, storefront, or MVP? I take on freelance and contract work where it fits around my studies, from the first screen to a deployed product.',
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
  site: 'https://portfolio-build-phi.vercel.app',
  location: 'Johannesburg, South Africa',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Initiative', href: '#initiative' },
  { label: 'Selected work', href: '#work' },
  { label: 'What I work with', href: '#toolkit' },
  { label: "Let's work together", href: '#work-with-me' },
]
