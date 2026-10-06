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
              Most of what I know, I learned by{' '}
              <em className="text-[#3b5bff]">building it.</em>
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-9 max-w-xl text-base leading-7 text-[#626262]">
              I&apos;m Mlungisi — final-year Computer Science student at Wits University, and someone who&apos;d
              rather ship something small and real than theorize about something big and hypothetical. Every project
              on this page started the same way: an idea I couldn&apos;t stop thinking about, a blank folder, and a
              decision to just start.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#626262]">
              I&apos;ve built a full-stack car rental platform from the database up, a web app that helps riders
              check a driver&apos;s safety record before getting in the car, and a handful of other things in
              between. Each one teaching me something the last one didn&apos;t. I care about software that feels
              considered — fast and clear. The difference between a project and a product is whether someone else
              can pick it up and just use it. I aim for the second one.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 max-w-xl text-base font-medium italic text-[#3b5bff]">
              The learning never really stops. Neither does the building.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
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
          <Reveal delay={0.36}>
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
