import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type Project, projects } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ImageReveal, Reveal } from './reveal'
import { SectionLabel } from './section-label'

const layout = [
  { wrapper: 'md:col-span-7', aspect: 'aspect-[4/3]', sizes: '(min-width: 768px) 58vw, 100vw' },
  { wrapper: 'md:col-span-4 md:col-start-9 md:mt-48', aspect: 'aspect-[3/4]', sizes: '(min-width: 768px) 33vw, 100vw' },
  { wrapper: 'md:col-span-5 md:col-start-2 md:-mt-24', aspect: 'aspect-[4/5]', sizes: '(min-width: 768px) 42vw, 100vw' },
  { wrapper: 'md:col-span-6 md:col-start-7 md:mt-32', aspect: 'aspect-[16/11]', sizes: '(min-width: 768px) 50vw, 100vw' },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const l = layout[index % layout.length]
  return (
    <article className={cn('group', l.wrapper)}>
      <Link href={`/projects/${project.slug}`} className="block" aria-label={`View project: ${project.title}`}>
        <ImageReveal className={cn('relative overflow-hidden bg-line', l.aspect)}>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.alt}
            fill
            sizes={l.sizes}
            className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <span className="eyebrow absolute top-4 left-4 bg-paper/90 px-3 py-2 text-charcoal backdrop-blur-sm">
            Sample Concept
          </span>
          <span
            aria-hidden="true"
            className="absolute right-4 bottom-4 flex h-14 w-14 translate-y-3 items-center justify-center rounded-full bg-paper text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.25} />
          </span>
        </ImageReveal>

        <Reveal className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 border-t border-line pt-5">
          <span className="font-serif text-lg text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-serif text-3xl font-light tracking-tight text-charcoal md:text-4xl">
                {project.title}
              </h3>
              <p className="eyebrow text-muted-foreground">
                {project.category} <span aria-hidden="true">·</span> {project.location}
              </p>
            </div>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-charcoal/75">{project.description}</p>
            <span className="mt-5 inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-charcoal uppercase">
              View Project
              <span aria-hidden="true" className="h-px w-8 bg-charcoal transition-all duration-500 group-hover:w-14" />
            </span>
          </div>
        </Reveal>
      </Link>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-paper py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="02">Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="projects-heading"
                className="mt-10 font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] font-light tracking-[-0.02em] text-charcoal"
              >
                Featured <em className="text-earth italic">Projects</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
            <p className="text-[14px] leading-relaxed text-charcoal/75">
              A selection of design concepts that express the studio&apos;s spatial language. These are
              illustrative sample concepts and will be replaced with verified, completed work.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-20 md:mt-28 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
