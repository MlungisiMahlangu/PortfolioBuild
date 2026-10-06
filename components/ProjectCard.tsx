'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import { GitHubIcon } from '@/components/SocialIcons'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-black/[0.08] bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-black/[0.14] hover:shadow-2xl hover:shadow-black/[0.07]"
    >
      {/* Browser-chrome screenshot frame */}
      <div className="relative overflow-hidden border-b border-black/[0.06]" style={{ background: project.accent }}>
        <div className="flex items-center gap-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span
            className={`ml-2 flex-1 truncate rounded-md px-3 py-1 text-[10px] tracking-wide ${
              project.dark ? 'bg-white/10 text-white/60' : 'bg-black/[0.06] text-black/45'
            }`}
          >
            {project.href.replace(/^https?:\/\//, '')}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} interface screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b8b8b]">
              {project.number} / {project.category}
            </p>
            <h3 className="font-serif text-3xl tracking-[-0.04em]">{project.title}</h3>
            <p className="mt-1.5 text-xs text-[#3b5bff]">{project.role}</p>
          </div>
          <a
            aria-label={`Visit ${project.title} live site`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-1 rounded-full border border-black/15 p-2.5 transition-all duration-300 hover:border-[#3b5bff] hover:bg-[#3b5bff] hover:text-white"
          >
            <ArrowUpRight size={17} />
          </a>
        </div>

        <p className="mt-4 max-w-lg text-sm leading-6 text-[#626262]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f2f2f0] px-3 py-1.5 text-[11px] text-[#626262] transition-colors group-hover:bg-[#eef1ff] group-hover:text-[#3b5bff]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-7">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3b5bff]"
          >
            Live demo
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#626262] transition-colors hover:text-[#3b5bff]"
            >
              <GitHubIcon size={14} />
              Code
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
