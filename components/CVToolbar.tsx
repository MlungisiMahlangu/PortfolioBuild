'use client'

import { ArrowLeft, Printer } from 'lucide-react'

export function CVToolbar() {
  return (
    <div className="print:hidden sticky top-0 z-10 border-b border-black/[0.07] bg-[#fafafa]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[820px] items-center justify-between px-6 py-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#626262] transition-colors hover:text-[#3b5bff]"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#3b5bff]"
        >
          <Printer size={14} /> Download PDF
        </button>
      </div>
    </div>
  )
}
