import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className = '', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-[#E63946]/90 px-2 py-0.5 text-xs font-semibold text-white',
        className
      )}
      {...props}
    />
  )
}
