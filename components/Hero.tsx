'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Magnetic } from '@/components/Magnetic'
import { MaskLine } from '@/components/Reveal'

function useJoburgTime() {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Johannesburg',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function Hero() {
  const reduce = useReducedMotion()
  const time = useJoburgTime()

  return (
    <section id="top" className="relative mx-auto grid max-w-[1240px] gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-44">
      <div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b5bff]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-[#3b5bff]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3b5bff]" />
          </span>
          Available for work & collaborations
        </motion.p>

        <h1 className="font-serif text-[clamp(3.6rem,10vw,8.6rem)] leading-[0.86] tracking-[-0.06em]">
          <MaskLine delay={0.05}>Software,</MaskLine>
          <MaskLine delay={0.16}>
            <em className="text-[#3b5bff]">made</em>
          </MaskLine>
          <MaskLine delay={0.27}>to matter.</MaskLine>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-10 max-w-md text-base leading-7 text-[#626262]"
        >
          I&apos;m <strong className="font-medium text-[#0a0a0a]">Mlungisi Mahlangu</strong>, a final-year Computer
          Science student at Wits — designing and shipping full-stack products across web and mobile.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.54 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b5bff] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#3b5bff]/25 transition-colors hover:bg-[#2948ed]"
            >
              View projects <ArrowUpRight size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition-colors hover:border-[#3b5bff] hover:text-[#3b5bff]"
            >
              <Mail size={15} /> Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative flex min-h-[320px] items-end justify-end lg:min-h-[480px]"
      >
        <div className="animate-drift absolute right-2 top-2 h-64 w-64 rounded-full bg-[#e7eaff] blur-3xl lg:h-96 lg:w-96" />
        <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-[#101216] p-7 text-white shadow-2xl shadow-[#3b5bff]/10 ring-1 ring-white/10 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#3b5bff]/25 blur-3xl" />
          <div className="relative mb-16 flex justify-between text-[11px] uppercase tracking-[0.2em] text-white/45">
            <span>Portfolio / 2026</span>
            <span>01—04</span>
          </div>
          <div className="relative mb-12 font-serif text-[2.9rem] leading-[1.02] tracking-[-0.05em]">
            Curiosity
            <br />
            <span className="text-[#8d9cff]">→ craft</span>
          </div>
          <div className="relative flex items-end justify-between border-t border-white/12 pt-5 text-xs text-white/50">
            <span>Johannesburg, ZA</span>
            <span className="font-mono tabular-nums text-[#8d9cff]">{time} SAST</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
