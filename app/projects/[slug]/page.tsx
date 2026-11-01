import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/site/reveal'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { projects } from '@/lib/site'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.description, openGraph: { images: [project.image] } }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const facts = [
    { label: 'Category', value: project.category },
    { label: 'Location', value: project.location },
    { label: 'Status', value: 'Sample concept' },
  ]

  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-ivory pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Link href="/#projects" className="eyebrow text-muted-foreground hover:text-charcoal">
            ← All Projects
          </Link>
          <Reveal>
            <h1 className="mt-10 font-serif text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] font-light tracking-[-0.02em] text-charcoal">
              {project.title}
            </h1>
          </Reveal>
          <dl className="mt-12 grid border-t border-line sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-line py-5 sm:border-b-0">
                <dt className="eyebrow text-muted-foreground">{f.label}</dt>
                <dd className="mt-3 font-serif text-xl text-charcoal">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-line md:mt-16">
          <Image src={project.image || '/placeholder.svg'} alt={project.alt} fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <p className="eyebrow text-muted-foreground md:col-span-3">Overview</p>
          <div className="md:col-span-7 md:col-start-5">
            <p className="font-serif text-3xl leading-snug font-light text-balance text-charcoal md:text-4xl">
              {project.description}
            </p>
            <p className="mt-10 border-l border-earth pl-6 text-[14px] leading-relaxed text-charcoal/75">
              This is an illustrative sample concept presented to demonstrate the studio&apos;s design language. It
              is not a completed client project and will be replaced with verified work, project details and
              photography.
            </p>
          </div>
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className="group block border-t border-line bg-paper transition-colors hover:bg-ivory"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
            <div>
              <p className="eyebrow text-muted-foreground">Next Project</p>
              <p className="mt-6 font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-none font-light text-charcoal">
                {next.title}
              </p>
            </div>
            <span className="inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-charcoal uppercase">
              View Project
              <span aria-hidden="true" className="h-px w-10 bg-charcoal transition-all duration-500 group-hover:w-16" />
            </span>
          </div>
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
