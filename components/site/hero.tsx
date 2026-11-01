'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { site } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as const

const lines = [
  ['Spaces That', 'Inspire.'],
  ['Architecture', 'That Endures.'],
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal text-paper"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src="/images/hero.png"
            alt="Contemporary luxury residence with cantilevered stone volumes and glowing glass walls reflected in a pool at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/10 to-charcoal/80"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pt-32 pb-10 md:px-10 md:pb-14"
      >
        <motion.p
          className="eyebrow mb-8 text-paper/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {site.tagline}
        </motion.p>

        <h1 className="font-serif text-[clamp(2.75rem,8.2vw,8.5rem)] leading-[0.95] font-light tracking-[-0.02em] text-balance">
          {lines.map(([first, second], i) => (
            <span key={first} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: '110%' }}
                animate={reduce ? { opacity: 1 } : { y: '0%' }}
                transition={{ duration: 1.4, ease, delay: 0.3 + i * 0.15 }}
              >
                {first} <em className="font-light italic text-stone">{second}</em>
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-paper/20 pt-8 md:grid-cols-12 md:items-end">
          <motion.p
            className="max-w-md text-[15px] leading-relaxed text-paper/85 md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.1 }}
          >
            We design thoughtful architectural environments that connect people, materials and spaces through
            timeless design.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:col-span-5 md:col-start-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.25 }}
          >
            <Link
              href="/#projects"
              className="bg-paper px-7 py-4 text-[12px] tracking-[0.18em] text-charcoal uppercase transition-colors duration-500 hover:bg-stone"
            >
              Explore Projects
            </Link>
            <Link
              href="/#about"
              className="group flex items-center gap-3 px-2 py-4 text-[12px] tracking-[0.18em] uppercase"
            >
              Discover Our Studio
              <span
                aria-hidden="true"
                className="h-px w-8 bg-paper transition-all duration-500 group-hover:w-14"
              />
            </Link>
          </motion.div>

          <motion.a
            href="#about"
            className="hidden items-center justify-end gap-3 md:col-span-1 md:col-start-12 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <span className="sr-only">Scroll to about section</span>
            <span aria-hidden="true" className="relative block h-16 w-px overflow-hidden bg-paper/25">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-paper"
                animate={reduce ? undefined : { y: ['-100%', '200%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
            <span aria-hidden="true" className="eyebrow [writing-mode:vertical-rl]">
              Scroll
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
