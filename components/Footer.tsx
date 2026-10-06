import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { socials } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-black/[0.07]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-7 text-xs text-[#8b8b8b] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span className="font-serif text-lg text-[#0a0a0a]">
          Mlu<span className="text-[#3b5bff]">.</span>
        </span>
        <span>© 2026 Mlungisi Mahlangu. Made with intention.</span>
        <div className="flex items-center gap-5">
          <a href="#top" className="transition-colors hover:text-[#3b5bff]">
            Back to top ↑
          </a>
          <a aria-label="GitHub" href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#3b5bff]">
            <GitHubIcon size={16} />
          </a>
          <a aria-label="LinkedIn" href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#3b5bff]">
            <LinkedInIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
