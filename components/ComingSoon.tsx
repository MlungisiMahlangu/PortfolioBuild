'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'

export function ComingSoon() {
  const reduce = useReducedMotion()

  return (
    <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10 lg:pb-32">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.6rem] border border-dashed border-black/[0.12] bg-[#f7f7f5] px-8 py-14 text-center sm:px-14 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#3b5bff]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#3b5bff]/[0.04] blur-3xl" />

        <Reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b5bff]">
            What&apos;s next
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
            Academic projects
          </h3>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#626262]">
            Data structures, algorithms, systems programming, and more — the work that shaped how I think about software.
            Curated and coming soon.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-white px-5 py-2.5 text-xs font-medium text-[#8b8b8b]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8b8b8b] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8b8b8b]" />
            </span>
            Coming soon
          </span>
        </Reveal>
      </motion.div>
    </section>
  )
}
