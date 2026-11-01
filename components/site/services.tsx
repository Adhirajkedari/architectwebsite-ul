import { services } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <SectionLabel index="03">Services</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="services-heading"
                className="mt-10 font-serif text-[clamp(2.5rem,4.6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em] text-balance text-charcoal"
              >
                A complete <em className="text-earth italic">spatial practice.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-charcoal/75">
                From first sketch to final detail, we guide each project across disciplines so the building,
                its interiors and its landscape speak a single language.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-charcoal/20 lg:col-span-7 lg:col-start-6">
          {services.map((service, i) => (
            <li key={service.title} className="border-b border-charcoal/20">
              <Reveal delay={i * 0.04}>
                <div className="group relative grid grid-cols-[3rem_1fr] gap-x-4 py-8 transition-colors duration-500 md:grid-cols-[4rem_1fr_1fr] md:gap-x-8 md:py-10">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-paper transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="relative font-serif text-lg text-muted-foreground md:pl-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="relative font-serif text-2xl font-light tracking-tight text-charcoal transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="relative col-start-2 mt-3 text-[14px] leading-relaxed text-charcoal/70 md:col-start-3 md:mt-1 md:pr-4">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
