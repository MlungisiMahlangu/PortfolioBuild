import { CVToolbar } from '@/components/CVToolbar'
import { languages, projects, skills, socials, softSkills, venture } from '@/lib/data'

const cvLink = 'text-[#3b5bff] underline underline-offset-2 print:whitespace-nowrap'
const sectionTitle = 'text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]'

const coursework = [
  'Mathematics',
  'Software Design Project',
  'Operating Systems & System Programming',
  'Software Design',
  'Parallel Computing',
  'Machine Learning',
  'Computer Graphics & Visualisation',
  'Advanced Analysis of Algorithms',
  'Formal Languages & Automata',
]

export const metadata = {
  title: 'CV · Mlungisi Mahlangu',
  description: 'Curriculum vitae of Mlungisi Mahlangu, graduate software developer.',
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">
      <CVToolbar />

      <article className="mx-auto max-w-[820px] px-6 py-14 print:max-w-none print:px-0 print:py-0">
        <header className="border-b-2 border-[#0a0a0a] pb-6">
          <h1 className="font-serif text-5xl tracking-[-0.05em] print:text-4xl">Mlungisi Mahlangu</h1>
          <p className="mt-2 text-base font-medium">Graduate Software Developer · Full-Stack Development</p>
          <p className="mt-1 text-sm text-[#626262]">
            Final-year BSc Computer Science student, University of the Witwatersrand, Johannesburg
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#626262]">
            <a href={`mailto:${socials.email}`} className={cvLink}>
              {socials.email}
            </a>
            <a href={`tel:${socials.phoneHref}`} className={cvLink}>
              {socials.phone}
            </a>
            <span>{socials.location}</span>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className={cvLink}>
              {socials.github.replace('https://', '')}
            </a>
            <a href={socials.site} target="_blank" rel="noopener noreferrer" className={cvLink}>
              {socials.site.replace('https://', '')}
            </a>
          </p>
        </header>

        <section className="mt-4">
          <h2 className={sectionTitle}>Profile</h2>
          <p className="mt-3 text-sm leading-[1.45] text-[#3a3a3a]">
            Final-year Computer Science student at the University of the Witwatersrand with practical experience
            building and deploying web applications. I work across frontend and backend, and in 2026 I started{' '}
            {venture.name} as an independent initiative. I am seeking graduate, junior and internship roles in
            software development. Live demos and this CV are at{' '}
            <a href={socials.site} target="_blank" rel="noopener noreferrer" className={cvLink}>
              {socials.site.replace('https://', '')}
            </a>
            .
          </p>
        </section>

        <section className="mt-4 print:break-inside-avoid">
          <h2 className={sectionTitle}>Education</h2>
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl tracking-[-0.03em]">BSc Computer Science</h3>
                <span className="shrink-0 whitespace-nowrap text-xs text-[#8b8b8b]">January 2024 – Present</span>
              </div>
              <p className="mt-1 text-sm text-[#3a3a3a]">
                University of the Witwatersrand, Johannesburg · Expected completion 2026
              </p>
              <p className="mt-1.5 text-xs leading-5 text-[#626262]">
                Relevant coursework: {coursework.join(' · ')}
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl tracking-[-0.03em]">National Senior Certificate</h3>
                <span className="shrink-0 whitespace-nowrap text-xs text-[#8b8b8b]">January 2018 – December 2023</span>
              </div>
              <p className="mt-1 text-sm text-[#3a3a3a]">Hlomani Secondary School · passed with distinctions</p>
            </div>
          </div>
        </section>

        <section className="mt-4 print:break-inside-avoid">
          <h2 className={sectionTitle}>Independent initiative / Experience</h2>
          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl tracking-[-0.03em]">
                {venture.name} · {venture.role}
              </h3>
              <span className="shrink-0 whitespace-nowrap text-xs text-[#8b8b8b]">{venture.period}</span>
            </div>
            <p className="mt-1 text-sm text-[#3a3a3a]">
              {venture.location} ·{' '}
              <a href={venture.url} target="_blank" rel="noopener noreferrer" className={cvLink}>
                {venture.displayUrl}
              </a>
            </p>
            <p className="mt-1.5 text-sm leading-[1.45] text-[#3a3a3a]">{venture.cvSummary}</p>
            <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-sm leading-[1.45] text-[#3a3a3a]">
              {venture.cvBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <h2 className={sectionTitle}>Selected projects</h2>
          <div className="mt-3 space-y-3">
            {projects.map((p) => (
              <div key={p.title} className="print:break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl tracking-[-0.03em]">{p.title}</h3>
                  <span className="text-xs text-[#8b8b8b]">{p.category}</span>
                </div>
                <p className="mt-1 text-sm leading-[1.45] text-[#3a3a3a]">{p.cvSummary}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-[1.45] text-[#3a3a3a]">
                  {p.cvBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-1 flex flex-wrap gap-x-4 text-xs">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={cvLink}>
                    {p.href.replace('https://', '')}
                  </a>
                  {p.githubRepo && (
                    <a href={p.githubRepo} target="_blank" rel="noopener noreferrer" className={cvLink}>
                      {p.githubRepo.replace('https://', '')}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h2 className={sectionTitle}>Technical skills</h2>
          <dl className="mt-3 space-y-1.5 text-sm">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3 print:flex-row">
                <dt className="w-[160px] shrink-0 font-medium text-[#0a0a0a]">{group}</dt>
                <dd className="text-[#3a3a3a]">{items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-4">
          <h2 className={sectionTitle}>Languages and additional skills</h2>
          <p className="mt-3 text-sm text-[#3a3a3a]">
            <span className="font-medium text-[#0a0a0a]">Languages:</span> {languages.join(', ')}
          </p>
          <p className="mt-1.5 text-sm leading-6 text-[#3a3a3a]">
            <span className="font-medium text-[#0a0a0a]">Soft skills:</span> {softSkills.join(' · ')}
          </p>
        </section>
      </article>
    </div>
  )
}
