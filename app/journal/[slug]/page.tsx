import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/site/reveal'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { articles } from '@/lib/site'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt, openGraph: { images: [article.image] } }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-ivory pt-32 md:pt-40">
        <article>
          <header className="mx-auto max-w-4xl px-6 text-center md:px-10">
            <Link href="/#journal" className="eyebrow text-muted-foreground hover:text-charcoal">
              ← Journal
            </Link>
            <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground">
              <span className="eyebrow">{article.category}</span>
              <span aria-hidden="true" className="h-px w-6 bg-earth" />
              <span className="eyebrow">{article.date}</span>
            </div>
            <Reveal>
              <h1 className="mt-8 font-serif text-[clamp(2.5rem,6.5vw,6rem)] leading-[1] font-light tracking-[-0.02em] text-balance text-charcoal">
                {article.title}
              </h1>
            </Reveal>
            <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-charcoal/75">{article.excerpt}</p>
          </header>

          <div className="relative mx-auto mt-16 aspect-[16/9] max-w-[1600px] overflow-hidden bg-line md:mt-20">
            <Image src={article.image || '/placeholder.svg'} alt={article.alt} fill priority sizes="100vw" className="object-cover" />
          </div>

          <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
            <p className="border-l border-earth pl-6 text-[15px] leading-relaxed text-charcoal/75">
              Article content placeholder. Replace this section with the full, published text for &ldquo;
              {article.title}&rdquo;, along with its author and publication date.
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
