import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Hero } from '@/components/site/hero'
import { Journal } from '@/components/site/journal'
import { Philosophy } from '@/components/site/philosophy'
import { Process } from '@/components/site/process'
import { Projects } from '@/components/site/projects'
import { Services } from '@/components/site/services'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Philosophy />
        <Process />
        <Journal />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
