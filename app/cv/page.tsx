import { CVToolbar } from '@/components/CVToolbar'
import { projects, skills, socials } from '@/lib/data'

export const metadata = {
  title: 'CV — Mlungisi Mahlangu',
  description: 'Curriculum vitae of Mlungisi Mahlangu, full-stack developer.',
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">
      <CVToolbar />

      <article className="mx-auto max-w-[820px] px-6 py-14 print:max-w-none print:px-0 print:py-0">
        <header className="border-b-2 border-[#0a0a0a] pb-8">
          <h1 className="font-serif text-5xl tracking-[-0.05em]">Mlungisi Mahlangu</h1>
          <p className="mt-3 text-base text-[#626262]">Full-stack developer · Final-year BSc Computer Science, University of the Witwatersrand</p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#626262]">
            <span>{socials.email}</span>
            <span>{socials.phone}</span>
            <span>{socials.location}</span>
            <span>{socials.github.replace('https://', '')}</span>
          </p>
        </header>

        <section className="mt-9">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">Profile</h2>
          <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">
            Final-year Computer Science student with a full-stack focus and a track record of shipping complete,
            deployed products — from database design through to production front-ends. Comfortable owning features end
            to end, working in teams, and writing clear, maintainable code. Open to roles, freelance, and collaborations.
          </p>
        </section>

        <section className="mt-9">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">Selected projects</h2>
          <div className="mt-4 space-y-6">
            {projects.map((p) => (
              <div key={p.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl tracking-[-0.03em]">{p.title}</h3>
                  <span className="text-xs text-[#8b8b8b]">{p.category}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-[#3b5bff]">{p.role}</p>
                <p className="mt-1.5 text-sm leading-6 text-[#3a3a3a]">{p.description}</p>
                <p className="mt-1.5 text-xs text-[#626262]">{p.tags.join(' · ')}</p>
                <p className="mt-1 text-xs text-[#3b5bff]">{p.href.replace('https://', '')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">Skills</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3 print:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-[#8b8b8b]">{group}</h3>
                <ul className="mt-2 space-y-1 text-sm text-[#3a3a3a]">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">Education</h2>
          <div className="mt-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl tracking-[-0.03em]">BSc Computer Science</h3>
              <span className="text-xs text-[#8b8b8b]">Final year, 2026</span>
            </div>
            <p className="mt-1 text-sm text-[#3a3a3a]">University of the Witwatersrand, Johannesburg</p>
          </div>
        </section>
      </article>
    </div>
  )
}
