'use client'

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Wordmark } from './wordmark'

const ease = [0.22, 1, 0.36, 1] as const

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const transparent = overlay && !scrolled && !open
  const light = transparent

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500',
        transparent
          ? 'border-b border-transparent bg-transparent py-6'
          : 'border-b border-line bg-ivory/90 py-4 backdrop-blur-md',
        open && 'bg-ivory',
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link
          href="/#top"
          aria-label={`${site.name} — home`}
          className={cn('transition-colors duration-500', light ? 'text-paper' : 'text-charcoal')}
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'group relative text-[13px] tracking-wide transition-colors duration-500',
                    light ? 'text-paper/90 hover:text-paper' : 'text-charcoal/80 hover:text-charcoal',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#contact"
          className={cn(
            'hidden border px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-colors duration-500 lg:inline-block',
            light
              ? 'border-paper/50 text-paper hover:bg-paper hover:text-charcoal'
              : 'border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-paper',
          )}
        >
          Start a Project
        </Link>

        <button
          type="button"
          className={cn(
            'relative flex h-10 w-10 items-center justify-center lg:hidden',
            light ? 'text-paper' : 'text-charcoal',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            aria-hidden="true"
            className={cn(
              'absolute h-px w-6 bg-current transition-transform duration-500',
              open ? 'rotate-45' : '-translate-y-1',
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              'absolute h-px w-6 bg-current transition-transform duration-500',
              open ? '-rotate-45' : 'translate-y-1',
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-0 top-full flex h-[calc(100svh-4.5rem)] flex-col justify-between overflow-y-auto bg-ivory px-6 pt-10 pb-10 lg:hidden"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.7, ease }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4 font-serif text-4xl font-light text-charcoal"
                    >
                      {link.label}
                      <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-10 space-y-2 text-sm text-muted-foreground">
              <p>{site.email}</p>
              <p>{site.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
