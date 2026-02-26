import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={cn('min-h-[120px] w-full rounded-md border border-white/10 bg-white/5 p-3 text-sm text-white', className)}
      {...props}
    />
  )
}
