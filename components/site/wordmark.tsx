import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex flex-col leading-none', className)}>
      <span className="font-serif text-[22px] font-normal tracking-tight">
        <span className="italic">Ar.</span> Dipti Khaire
      </span>
      <span className="mt-1.5 text-[9px] tracking-[0.32em] uppercase opacity-70">Architecture Studio</span>
    </span>
  )
}
