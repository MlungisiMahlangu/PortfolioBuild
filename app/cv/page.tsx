import { CVToolbar } from '@/components/CVToolbar'

const cvFile = '/Mlungisi_Mahlangu_CV_Developer.pdf'

export const metadata = {
  title: 'CV · Mlungisi Mahlangu',
  description: 'Curriculum vitae of Mlungisi Mahlangu, graduate software developer.',
}

export default function CVPage() {
  return (
    <div className="flex h-dvh flex-col bg-[#525659]">
      <CVToolbar />
      <main className="min-h-0 flex-1">
        <object data={`${cvFile}#view=FitH`} type="application/pdf" className="h-full w-full">
          <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-sm text-white/80">This browser can&apos;t display the CV inline.</p>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-[#0a0a0a] transition-colors hover:bg-[#3b5bff] hover:text-white"
            >
              Open the PDF
            </a>
          </div>
        </object>
      </main>
    </div>
  )
}
