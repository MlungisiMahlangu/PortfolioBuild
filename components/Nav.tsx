'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/lib/data'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-black/[0.06] bg-[#fafafa]/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        <a href="#top" className="font-serif text-[22px] leading-none tracking-[-0.04em]">
          Mlu<span className="text-[#3b5bff]">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-[13px] font-medium text-[#626262] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="group relative transition-colors hover:text-[#0a0a0a]" href={link.href}>
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3b5bff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3b5bff] md:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-full p-1 transition-colors hover:text-[#3b5bff] md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/[0.06] bg-[#fafafa]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08 }}
                  className="border-b border-black/[0.05] py-3 font-serif text-2xl tracking-[-0.03em] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-3 text-sm font-medium text-white"
              >
                Let&apos;s talk <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
