'use client'

import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useId, useState } from 'react'
import { budgetRanges, projectTypes, site } from '@/lib/site'
import { cn } from '@/lib/utils'

type Fields = {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const initial: Fields = { name: '', email: '', projectType: '', budget: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (!f.projectType) e.projectType = 'Please select a project type.'
  if (!f.budget) e.budget = 'Please select an approximate budget.'
  if (f.message.trim().length < 20) e.message = 'Please describe your project in at least 20 characters.'
  if (f.message.length > 2000) e.message = 'Please keep your description under 2000 characters.'
  return e
}

const fieldBase =
  'peer w-full border-0 border-b bg-transparent px-0 pt-7 pb-3 text-[16px] text-paper outline-none transition-colors placeholder:text-transparent focus:border-paper'

export function ContactForm() {
  const id = useId()
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'ready'>('idle')

  const update = (key: keyof Fields, value: string) => {
    const next = { ...fields, [key]: value }
    setFields(next)
    if (touched[key]) setErrors(validate(next))
    if (status === 'ready') setStatus('idle')
  }

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(fields))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = validate(fields)
    setErrors(result)
    setTouched({ name: true, email: true, projectType: true, budget: true, message: true })
    if (Object.keys(result).length > 0) {
      const first = Object.keys(result)[0]
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    setStatus('ready')
  }

  const mailto = `mailto:${site.email.replace(/[[\]]/g, '')}?subject=${encodeURIComponent(
    `Project inquiry — ${fields.projectType}`,
  )}&body=${encodeURIComponent(
    `Name: ${fields.name}\nEmail: ${fields.email}\nProject type: ${fields.projectType}\nApproximate budget: ${fields.budget}\n\n${fields.message}`,
  )}`

  const err = (k: keyof Fields) => (touched[k] ? errors[k] : undefined)

  const inputProps = (k: keyof Fields) => ({
    id: `${id}-${k}`,
    name: k,
    value: fields[k],
    'aria-invalid': Boolean(err(k)),
    'aria-describedby': err(k) ? `${id}-${k}-error` : undefined,
    onBlur: () => blur(k),
  })

  const label = (k: keyof Fields, children: string) => (
    <label htmlFor={`${id}-${k}`} className="eyebrow absolute top-0 left-0 text-stone">
      {children}
    </label>
  )

  const errorText = (k: keyof Fields) =>
    err(k) ? (
      <p id={`${id}-${k}-error`} className="mt-2 text-[13px] text-[#E3A391]">
        {err(k)}
      </p>
    ) : null

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-x-10 gap-y-10 md:grid-cols-2">
      <div className="relative">
        {label('name', 'Name')}
        <input
          {...inputProps('name')}
          type="text"
          autoComplete="name"
          placeholder="Your name"
          onChange={(e) => update('name', e.target.value)}
          className={cn(fieldBase, err('name') ? 'border-[#E3A391]' : 'border-paper/25')}
        />
        {errorText('name')}
      </div>

      <div className="relative">
        {label('email', 'Email')}
        <input
          {...inputProps('email')}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          onChange={(e) => update('email', e.target.value)}
          className={cn(fieldBase, err('email') ? 'border-[#E3A391]' : 'border-paper/25')}
        />
        {errorText('email')}
      </div>

      <div className="relative">
        {label('projectType', 'Project Type')}
        <select
          {...inputProps('projectType')}
          onChange={(e) => update('projectType', e.target.value)}
          className={cn(
            fieldBase,
            'cursor-pointer appearance-none pr-8',
            !fields.projectType && 'text-paper/50',
            err('projectType') ? 'border-[#E3A391]' : 'border-paper/25',
          )}
        >
          <option value="" disabled className="bg-charcoal">
            Select a project type
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-charcoal text-paper">
              {t}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" strokeWidth={1.25} className="pointer-events-none absolute top-8 right-0 h-4 w-4 text-stone" />
        {errorText('projectType')}
      </div>

      <div className="relative">
        {label('budget', 'Approximate Budget')}
        <select
          {...inputProps('budget')}
          onChange={(e) => update('budget', e.target.value)}
          className={cn(
            fieldBase,
            'cursor-pointer appearance-none pr-8',
            !fields.budget && 'text-paper/50',
            err('budget') ? 'border-[#E3A391]' : 'border-paper/25',
          )}
        >
          <option value="" disabled className="bg-charcoal">
            Select a range
          </option>
          {budgetRanges.map((b) => (
            <option key={b} value={b} className="bg-charcoal text-paper">
              {b}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" strokeWidth={1.25} className="pointer-events-none absolute top-8 right-0 h-4 w-4 text-stone" />
        {errorText('budget')}
      </div>

      <div className="relative md:col-span-2">
        {label('message', 'Project Description')}
        <textarea
          {...inputProps('message')}
          rows={4}
          placeholder="Tell us about your site, brief and timeline"
          onChange={(e) => update('message', e.target.value)}
          className={cn(fieldBase, 'resize-none', err('message') ? 'border-[#E3A391]' : 'border-paper/25')}
        />
        <div className="flex justify-between gap-4">
          {errorText('message')}
          <span className="mt-2 ml-auto text-[12px] text-stone/80 tabular-nums">{fields.message.length}/2000</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-sm text-[13px] leading-relaxed text-stone">
          All fields are required. Your details are used only to respond to your inquiry.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-4 bg-paper px-8 py-4 text-[12px] tracking-[0.18em] text-charcoal uppercase transition-colors duration-500 hover:bg-stone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
        >
          Submit Inquiry
          <span aria-hidden="true" className="h-px w-6 bg-charcoal transition-all duration-500 group-hover:w-10" />
        </button>
      </div>

      <div aria-live="polite" className="md:col-span-2">
        <AnimatePresence>
          {status === 'ready' && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-paper/25 p-6 md:p-8"
            >
              <p className="font-serif text-2xl font-light">Your inquiry is ready — but it has not been sent.</p>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper/75">
                Online submission is not connected yet. To reach the studio now, send your details by email
                — we&apos;ve prepared the message for you.
              </p>
              <a
                href={mailto}
                className="mt-6 inline-flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase underline-offset-4 hover:underline"
              >
                Send via Email
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
