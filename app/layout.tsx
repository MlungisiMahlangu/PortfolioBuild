import { Analytics } from '@vercel/analytics/next'
import { MotionConfig } from 'framer-motion'
import { Fraunces, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ScrollToTop } from '@/components/ScrollToTop'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-build-phi.vercel.app'),
  title: 'Mlungisi Mahlangu · Full-stack developer',
  description:
    'Mlungisi Mahlangu is a final-year Computer Science student at Wits who also runs an independent web development initiative. Open to graduate and junior software developer roles.',
  keywords: [
    'Mlungisi Mahlangu',
    'graduate software developer',
    'junior developer',
    'full-stack developer',
    'React',
    'Next.js',
    'Node.js',
    'Johannesburg',
    'South Africa',
    'WEB-IN Digital Studio',
  ],
  authors: [{ name: 'Mlungisi Mahlangu' }],
  openGraph: {
    title: 'Mlungisi Mahlangu · Full-stack developer',
    description:
      'Final-year CS student at Wits who also runs an independent web development initiative, building full-stack applications across web and mobile. Open to graduate and junior developer roles.',
    type: 'website',
    locale: 'en_ZA',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fafafa',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ScrollToTop />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
