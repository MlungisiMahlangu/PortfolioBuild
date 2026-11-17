import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Nav } from '@/components/Nav'
import { Projects } from '@/components/Projects'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Skills } from '@/components/Skills'
import { WorkWithMe } from '@/components/WorkWithMe'

export default function Home() {
  return (
    <div className="grain min-h-screen overflow-x-clip bg-[#fafafa] text-[#0a0a0a]">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <WorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
