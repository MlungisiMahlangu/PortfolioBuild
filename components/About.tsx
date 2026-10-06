import { Reveal } from '@/components/Reveal'
import { stats } from '@/lib/data'

const facts = [
  { label: 'Degree', value: 'BSc Computer Science, Wits' },
  { label: 'Focus', value: 'Full-stack · web & mobile' },
  { label: 'Open to', value: 'Roles, freelance & collaborations' },
  { label: 'Based in', value: 'Johannesburg, South Africa' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-black/[0.07] bg-white/60">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-20 lg:grid-cols-[0.32fr_1fr] lg:px-10 lg:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">01 / About</p>
        </Reveal>
        <div>
          <Reveal>
            <p className="max-w-3xl text-balance font-serif text-[clamp(1.9rem,4vw,4.1rem)] leading-[1.05] tracking-[-0.045em]">
              I build for the person on the{' '}
              <em className="text-[#3b5bff]">other side of the screen.</em>
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-9 max-w-xl text-base leading-7 text-[#626262]">
              I&apos;m finishing my BSc in Computer Science at the University of the Witwatersrand, but most of what I
              know came from shipping — breaking things at 2am, reading why, and rebuilding them better. That loop of
              curiosity, craft and repeat is simply how I work.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#626262]">
              My happy place is the gap between a rough idea and a product someone genuinely enjoys: clean
              architecture under the hood, honest interfaces on top, and enough care in the small interactions that
              the whole thing feels considered. Web platform, mobile app, or an idea that doesn&apos;t have a shape
              yet — I&apos;m interested.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
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
          <Reveal delay={0.3}>
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-none tracking-[-0.05em] text-[#0a0a0a]">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b8b8b]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
