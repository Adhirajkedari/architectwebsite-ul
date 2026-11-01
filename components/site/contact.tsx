import { site } from '@/lib/site'
import { ContactForm } from './contact-form'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Contact() {
  const details = [
    { label: 'Email', value: site.email, href: `mailto:${site.email.replace(/[[\]]/g, '')}` },
    { label: 'Telephone', value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, '')}` },
    { label: 'Studio', value: site.address },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-charcoal py-24 text-paper md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="07" tone="light">
            Contact
          </SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="contact-heading"
            className="mt-10 max-w-6xl font-serif text-[clamp(2.75rem,7.5vw,8rem)] leading-[0.95] font-light tracking-[-0.02em] text-balance"
          >
            Let&apos;s Create <em className="text-stone italic">Something Extraordinary.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 border-t border-paper/15 pt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-paper/75">
              Share a few details about your project and the studio will be in touch to arrange an initial
              conversation.
            </p>
            <dl className="mt-12 space-y-8">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="eyebrow text-stone">{d.label}</dt>
                  <dd className="mt-3 font-serif text-2xl font-light">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-stone">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
