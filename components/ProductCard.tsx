import Image from 'next/image'
import { Heart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  name?: string
  price?: string
  salePrice?: string
  imageSrc?: string
  colors?: string[]
}

export default function ProductCard({
  name = 'Midnight Utility Hoodie',
  price = '$98',
  salePrice = '$78',
  imageSrc = '/images/hero.jpg',
  colors = ['#E63946', '#FFFFFF', '#1A1A2E'],
}: Partial<ProductCardProps>) {
  return (
    <Card className="group overflow-hidden bg-[#101018] text-white">
      <div className="relative">
        <Image src={imageSrc} alt={name} width={500} height={600} className="h-64 w-full object-cover" unoptimized />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="sm" className="bg-white text-black hover:bg-[#E63946] hover:text-white">
            <Eye className="mr-2 h-4 w-4" />
            Quick View
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:text-[#E63946]">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <Badge className="absolute left-3 top-3 bg-[#E63946]">Sale</Badge>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="text-sm font-semibold">{name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-white">{salePrice}</span>
          <span className="text-sm text-white/50 line-through">{price}</span>
        </div>
        <div className="flex items-center gap-2">
          {colors.map((color) => (
            <span
              key={color}
              className={cn('h-4 w-4 rounded-full border border-white/20')}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <Button className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/80">Quick Add</Button>
      </div>
    </Card>
  )
}
