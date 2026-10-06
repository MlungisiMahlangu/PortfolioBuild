import { Reveal } from '@/components/Reveal'

const facts = [
  { label: 'Degree', value: 'BSc Computer Science, Wits' },
  { label: 'Focus', value: 'Full-stack web development' },
  { label: 'Seeking', value: 'Internship / junior role' },
  { label: 'Based in', value: 'Johannesburg, South Africa' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-black/[0.07] bg-white/60">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 lg:grid-cols-[0.32fr_1fr] lg:px-10 lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">01 / About me</p>
        </Reveal>
        <div>
          <Reveal>
            <p className="max-w-3xl text-balance font-serif text-[clamp(1.9rem,4vw,4.1rem)] leading-[1.05] tracking-[-0.045em]">
              I like turning complex problems into simple,{' '}
              <em className="text-[#3b5bff]">useful experiences.</em>
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-9 max-w-xl text-base leading-7 text-[#626262]">
              Currently finishing my BSc in Computer Science at the University of the Witwatersrand, I&apos;m drawn to
              the space between a great idea and a product people genuinely enjoy using. I care about the details —
              clean architecture, honest interfaces, and the small interactions that make software feel considered.
              I&apos;m looking for an internship or junior developer role where I can keep learning and contribute
              meaningfully.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-black/10 pt-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b8b8b]">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-5 text-[#0a0a0a]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
