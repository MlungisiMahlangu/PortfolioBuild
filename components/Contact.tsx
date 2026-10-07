'use client'

import { ArrowUpRight, Check, Copy, Download, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Magnetic } from '@/components/Magnetic'
import { MaskLine, Reveal } from '@/components/Reveal'
import { GitHubIcon } from '@/components/SocialIcons'
import { socials } from '@/lib/data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const rows = [
    { icon: Mail, label: socials.email, href: `mailto:${socials.email}`, copy: true },
    { icon: Phone, label: socials.phone, href: `tel:${socials.phoneHref}` },
    { icon: GitHubIcon, label: 'GitHub', href: socials.github },
  ]

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-[1240px] px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3b5bff]">05 / Start a conversation</p>
          </Reveal>
          <h2 className="font-serif text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.88] tracking-[-0.06em]">
            <MaskLine>Let&apos;s make it</MaskLine>
            <MaskLine delay={0.12}>
              <em className="text-[#3b5bff]">real.</em>
            </MaskLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-7 text-[#626262]">
              Hiring, freelancing, collaborating, or simply curious about what I&apos;ve built — I&apos;m always open
              to a good conversation. If you have an idea, a problem to solve, or an opportunity worth discussing, send
              me a message. I&apos;ll get back to you.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${socials.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3b5bff]"
                >
                  Start a conversation <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-4 text-sm font-medium transition-colors hover:border-[#3b5bff] hover:text-[#3b5bff]"
                >
                  <Download size={15} /> View my CV
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-1 text-sm">
          {rows.map((row, i) => (
            <Reveal key={row.label} delay={0.06 * i}>
              <div className="group relative flex items-center border-b border-black/10">
                <a
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex flex-1 items-center gap-4 py-4 transition-colors hover:text-[#3b5bff]"
                >
                  <row.icon size={17} className="shrink-0 text-[#8b8b8b] transition-colors group-hover:text-[#3b5bff]" />
                  <span className="truncate">{row.label}</span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                {row.copy && (
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="ml-2 rounded-full p-2 text-[#8b8b8b] transition-colors hover:bg-black/[0.05] hover:text-[#3b5bff]"
                  >
                    {copied ? <Check size={15} className="text-[#3b5bff]" /> : <Copy size={15} />}
                  </button>
                )}
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#8b8b8b]">
              <MapPin size={14} /> {socials.location}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
