'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { principles } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-10%', '10%'])

  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="bg-charcoal text-paper">
      <div ref={ref} className="relative flex min-h-[90svh] items-end overflow-hidden">
        <motion.div className="absolute inset-[-10%_0]" style={{ y }}>
          <Image
            src="/images/philosophy.png"
            alt="A shaft of daylight falling through a narrow skylight onto a raw concrete wall"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-40 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <SectionLabel index="04" tone="light">
              Design Philosophy
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="philosophy-heading"
              className="mt-10 max-w-5xl font-serif text-[clamp(2.25rem,5.4vw,5.75rem)] leading-[1.02] font-light tracking-[-0.02em] text-balance"
            >
              Architecture Is Not Just About Buildings.{' '}
              <em className="text-stone italic">It Is About How We Experience Space.</em>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <ul className="grid border-t border-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="border-b border-paper/15 sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <Reveal delay={(i % 3) * 0.08} className="flex h-full flex-col gap-6 p-6 py-10 md:p-10">
                <span className="eyebrow text-stone">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-3xl font-light tracking-tight">{p.title}</h3>
                <p className="max-w-xs text-[14px] leading-relaxed text-paper/70">{p.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
