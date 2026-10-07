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
  title: 'Mlungisi Mahlangu — Full-stack developer',
  description:
    'Portfolio of Mlungisi Mahlangu, a final-year Computer Science student at Wits designing and shipping full-stack products across web and mobile.',
  keywords: ['Mlungisi Mahlangu', 'full-stack developer', 'React', 'Node.js', 'portfolio', 'Johannesburg'],
  authors: [{ name: 'Mlungisi Mahlangu' }],
  openGraph: {
    title: 'Mlungisi Mahlangu — Full-stack developer',
    description: 'Final-year CS student at Wits designing and shipping full-stack products across web and mobile.',
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
