'use client'

import { motion, useReducedMotion } from 'motion/react'
import { processSteps } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Process() {
  const reduce = useReducedMotion()
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-paper py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="05">Process</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="process-heading"
                className="mt-10 font-serif text-[clamp(2.5rem,5.2vw,5rem)] leading-[1] font-light tracking-[-0.02em] text-balance text-charcoal"
              >
                From first idea <em className="text-earth italic">to final detail.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
            <p className="text-[14px] leading-relaxed text-charcoal/75">
              A clear, collaborative sequence that keeps every decision transparent and every stage grounded in
              your brief.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-20 grid gap-0 md:mt-28 md:grid-cols-4">
          <motion.span
            aria-hidden="true"
            className="absolute top-0 left-0 hidden h-px w-full origin-left bg-charcoal md:block"
            initial={{ scaleX: reduce ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
          {processSteps.map((step, i) => (
            <li key={step.number} className="border-t border-line md:border-t-0 md:pr-8">
              <Reveal delay={0.2 + i * 0.15} className="relative pt-8 pb-12 md:pt-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-[5px] left-0 hidden h-[9px] w-[9px] rounded-full border border-charcoal bg-paper md:block"
                />
                <span className="font-serif text-[clamp(4rem,7vw,7rem)] leading-none font-light text-stone">
                  {step.number}
                </span>
                <h3 className="mt-6 font-serif text-3xl font-light tracking-tight text-charcoal">{step.title}</h3>
                <p className="mt-4 max-w-[16rem] text-[14px] leading-relaxed text-charcoal/75">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
