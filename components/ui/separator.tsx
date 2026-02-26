import { cn } from '@/lib/utils'

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Separator({ className = '', ...props }: SeparatorProps) {
  return <hr className={cn('border-none bg-white/10 h-px w-full', className)} {...props} />
}
