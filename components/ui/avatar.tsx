import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({ className = '', ...props }: AvatarProps) {
  return <div className={cn('relative h-10 w-10 overflow-hidden rounded-full bg-white/10', className)} {...props} />
}

interface AvatarImageProps {
  src?: string
  alt?: string
}

export function AvatarImage({ src = '', alt = '' }: AvatarImageProps) {
  if (!src) return null
  return <Image src={src} alt={alt} width={40} height={40} className="h-full w-full object-cover" unoptimized />
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function AvatarFallback({ className = '', ...props }: AvatarFallbackProps) {
  return (
    <span
      className={cn('flex h-full w-full items-center justify-center text-xs font-semibold text-white/70', className)}
      {...props}
    />
  )
}
