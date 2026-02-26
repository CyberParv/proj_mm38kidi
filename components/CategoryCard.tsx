import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title?: string
  count?: string
  imageSrc?: string
}

export default function CategoryCard({
  title = 'Hoodies',
  count = '42 items',
  imageSrc = '/images/gallery-1.jpg',
}: Partial<CategoryCardProps>) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#101018]">
      <Image
        src={imageSrc}
        alt={title}
        width={800}
        height={600}
        className={cn('h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105')}
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className="h-1 w-10 bg-[#E63946] mb-2" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-xs text-white/70">{count}</p>
      </div>
    </div>
  )
}
