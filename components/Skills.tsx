import { Reveal } from '@/components/Reveal'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="toolkit" className="scroll-mt-24 bg-[#101216] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-24 lg:grid-cols-[0.6fr_1fr] lg:px-10 lg:py-32">
        <div>
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8d9cff]">03 / The toolkit</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-5xl tracking-[-0.05em] lg:text-7xl">
              Always
              <br />
              <em className="text-[#8d9cff]">learning.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xs text-sm leading-6 text-white/55">
              The languages, frameworks, and tools I reach for — and the ones I&apos;m picking up next.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={0.1 + gi * 0.08}>
              <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-white/40">{group}</h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-b border-white/[0.07] py-2.5 text-base text-white/85 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#8d9cff] opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
