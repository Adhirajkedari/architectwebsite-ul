import Image from 'next/image'
import Link from 'next/link'
import { type Article, articles } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ImageReveal, Reveal } from './reveal'
import { SectionLabel } from './section-label'

function ArticleCard({ article, variant = 'row' }: { article: Article; variant?: 'featured' | 'row' }) {
  const featured = variant === 'featured'
  return (
    <article className="group">
      <Link
        href={`/journal/${article.slug}`}
        className={cn('block', !featured && 'lg:grid lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-8')}
      >
        <ImageReveal className={cn('relative overflow-hidden bg-line', featured ? 'aspect-[4/3]' : 'aspect-[3/2]')}>
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.alt}
            fill
            sizes={featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 15rem, (min-width: 640px) 50vw, 100vw'}
            className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
        </ImageReveal>
        <div>
          <div className={cn('mt-5 flex items-center gap-4 text-muted-foreground', !featured && 'lg:mt-1')}>
            <span className="eyebrow">{article.category}</span>
            <span aria-hidden="true" className="h-px w-6 bg-earth" />
            <span className="eyebrow">{article.date}</span>
          </div>
          <h3
            className={cn(
              'mt-4 font-serif font-light tracking-tight text-balance text-charcoal',
              featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-[1.75rem]',
            )}
          >
            {article.title}
          </h3>
          <p
            className={cn(
              'mt-3 max-w-md text-[14px] leading-relaxed text-charcoal/75',
              !featured && 'hidden lg:block',
            )}
          >
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-charcoal uppercase">
            Read Article
            <span aria-hidden="true" className="h-px w-8 bg-charcoal transition-all duration-500 group-hover:w-14" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export function Journal() {
  const [featured, ...rest] = articles
  return (
    <section id="journal" aria-labelledby="journal-heading" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-10">
          <div>
            <Reveal>
              <SectionLabel index="06">Journal</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="journal-heading"
                className="mt-10 font-serif text-[clamp(2.5rem,5.2vw,5rem)] leading-[1] font-light tracking-[-0.02em] text-charcoal"
              >
                Notes &amp; <em className="text-earth italic">Insights</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-[14px] leading-relaxed text-charcoal/75">
              Reflections on light, material and the making of contemporary space.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <ArticleCard article={featured} variant="featured" />
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 lg:gap-0">
            {rest.map((article, i) => (
              <Reveal
                key={article.slug}
                delay={i * 0.08}
                className="lg:border-b lg:border-line lg:py-8 lg:first:pt-0"
              >
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
