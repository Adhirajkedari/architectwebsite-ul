import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  children,
  className,
  tone = 'dark',
}: {
  index: string
  children: React.ReactNode
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <p
      className={cn(
        'eyebrow flex items-center gap-4',
        tone === 'dark' ? 'text-muted-foreground' : 'text-stone',
        className,
      )}
    >
      <span>{index}</span>
      <span aria-hidden="true" className={cn('h-px w-10', tone === 'dark' ? 'bg-earth' : 'bg-stone/60')} />
      <span>{children}</span>
    </p>
  )
}
