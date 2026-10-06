import { marqueeItems } from '@/lib/data'

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee-paused overflow-hidden border-y border-black/[0.07] bg-white/60 py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 text-[13px] font-medium text-[#8b8b8b]">
            {item}
            <span className="h-1 w-1 rounded-full bg-[#3b5bff]/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
