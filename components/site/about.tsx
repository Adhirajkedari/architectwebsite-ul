import Image from 'next/image'
import Link from 'next/link'
import { ImageReveal, Reveal } from './reveal'
import { SectionLabel } from './section-label'

const details = [
  { label: 'Disciplines', value: 'Architecture, Interiors, Landscape' },
  { label: 'Approach', value: 'Context-led, material-first' },
  { label: 'Based in', value: '[City, Country]' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <SectionLabel index="01">The Studio</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="about-heading"
              className="mt-10 font-serif text-[clamp(2.5rem,5.2vw,5rem)] leading-[1] font-light tracking-[-0.02em] text-balance text-charcoal"
            >
              Designing Spaces. <em className="text-earth italic">Shaping Experiences.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 max-w-lg space-y-6 text-[15px] leading-relaxed text-charcoal/80">
            <p>
              Our practice begins with a simple belief: architecture should be felt before it is seen. We
              approach every commission as a dialogue between people, place and material — listening closely
              before we draw a single line.
            </p>
            <p>
              Through careful study of site, light and use, we develop spaces that are calm, purposeful and
              precisely resolved. Each project moves from intuitive sketch to rigorous detail, so that the
              finished environment feels inevitable rather than imposed.
            </p>
            <p>
              We work at every scale — from a single room to a complete building and its landscape — with the
              same commitment to clarity, craft and longevity.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/#philosophy"
              className="group mt-12 inline-flex items-center gap-4 text-[12px] tracking-[0.18em] text-charcoal uppercase"
            >
              Discover Our Approach
              <span aria-hidden="true" className="h-px w-10 bg-charcoal transition-all duration-500 group-hover:w-16" />
            </Link>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden bg-line md:-mt-6">
            <Image
              src="/images/studio.png"
              alt="Architectural scale model on an oak table in a daylit studio"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>

          <dl className="mt-8 grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {details.map((d, i) => (
              <Reveal
                key={d.label}
                delay={0.1 * i}
                className="border-b border-line py-5 sm:border-b-0 sm:pr-4"
              >
                <dt className="eyebrow text-muted-foreground">{d.label}</dt>
                <dd className="mt-3 font-serif text-lg text-charcoal">{d.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
