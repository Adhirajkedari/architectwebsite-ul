import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-paper/10 bg-charcoal text-paper">
      <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl font-light">
              <span className="italic">Ar.</span> Dipti Khaire
            </p>
            <p className="mt-3 text-[14px] text-stone">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <p className="eyebrow text-stone">Navigate</p>
            <ul className="mt-6 space-y-3 text-[14px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/80 transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-stone">Contact</p>
            <address className="mt-6 space-y-3 text-[14px] text-paper/80 not-italic">
              <p>{site.address}</p>
              <p>
                <a href={`mailto:${site.email.replace(/[[\]]/g, '')}`} className="hover:text-paper">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="hover:text-paper">
                  {site.phone}
                </a>
              </p>
            </address>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-stone">Follow</p>
            <ul className="mt-6 space-y-3 text-[14px]">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-paper/80 transition-colors hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-24 font-serif text-[clamp(3.5rem,15vw,15rem)] leading-[0.85] font-light tracking-[-0.04em] whitespace-nowrap text-paper/10 select-none"
        >
          Dipti Khaire
        </p>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-paper/10 pt-8 text-[12px] text-stone sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-3 tracking-[0.18em] uppercase transition-colors hover:text-paper"
          >
            Back to Top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 transition-colors group-hover:border-paper">
              <ArrowUp aria-hidden="true" className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5" strokeWidth={1.25} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
