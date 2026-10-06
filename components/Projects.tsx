import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">
              02 / Selected work
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-5xl tracking-[-0.05em] lg:text-7xl">Things I&apos;ve made.</h2>
          </Reveal>
        </div>
        <Reveal delay={0.16}>
          <span className="hidden shrink-0 pb-2 text-sm text-[#8b8b8b] md:block">04 projects / 2023—26</span>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
