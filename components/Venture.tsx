import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { venture } from '@/lib/data'

export function Venture() {
  return (
    <section id="initiative" className="scroll-mt-24 border-b border-black/[0.07]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.85fr] lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">
              02 / Independent initiative / Experience
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] lg:text-5xl">
              A studio I <em className="text-[#3b5bff]">started.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#626262]">{venture.intro}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#626262]">{venture.body}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-2">
              {venture.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] text-[#626262]"
                >
                  {service}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href={venture.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#3b5bff] transition-colors hover:text-[#2948ed]"
            >
              Visit {venture.displayUrl}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="overflow-hidden rounded-[1.6rem] border border-black/[0.08] bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] bg-[#f7f7f5] px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8b8b]">
                Side venture
              </span>
              <span className="rounded-full bg-[#3b5bff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3b5bff]">
                {venture.period}
              </span>
            </div>
            <div className="p-6 lg:p-7">
              <h3 className="font-serif text-[1.75rem] leading-tight tracking-[-0.04em]">{venture.name}</h3>
              <p className="mt-1.5 text-xs text-[#3b5bff]">{venture.tagline}</p>
              <dl className="mt-6 divide-y divide-black/[0.07] text-sm">
                {venture.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b8b8b]">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-[#0a0a0a]">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b8b8b]">Built with</p>
              <p className="mt-1.5 text-sm leading-6 text-[#3a3a3a]">{venture.stack.join(' · ')}</p>
              <a
                href={venture.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3b5bff]"
              >
                Visit the site <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
