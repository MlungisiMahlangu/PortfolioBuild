import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { socials, waysToWork } from '@/lib/data'

export function WorkWithMe() {
  return (
    <section id="work-with-me" className="scroll-mt-24 border-y border-black/[0.07] bg-white/60">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">
                04 / Let&apos;s work together
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-5xl tracking-[-0.05em] lg:text-7xl">Have something worth building?</h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs pb-2 text-sm leading-6 text-[#626262]">
              Whether you&apos;re hiring, starting a project, or looking for someone to build alongside you, I&apos;m
              always interested in good ideas and meaningful work.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2">
          {waysToWork.map((way, i) => (
            <Reveal key={way.number} delay={0.06 * i} className="h-full">
              <div className="group flex h-full flex-col bg-[#fafafa] p-7 transition-colors duration-300 hover:bg-white lg:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-sm text-[#8b8b8b]">{way.number}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#8b8b8b] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3b5bff] group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-[-0.04em] lg:text-3xl">{way.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#626262]">{way.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${socials.email}`}
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#3b5bff] transition-colors hover:text-[#2948ed]"
          >
            Tell me what you&apos;re building <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
