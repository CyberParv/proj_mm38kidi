'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import QuantitySelector from '@/components/QuantitySelector'

interface CartItemProps {
  name?: string
  imageSrc?: string
  price?: string
  size?: string
  color?: string
}

export default function CartItem({
  name = 'Midnight Utility Hoodie',
  imageSrc = '/images/hero.jpg',
  price = '$78',
  size = 'M',
  color = 'Neon Red',
}: Partial<CartItemProps>) {
  return (
    <div className="flex gap-3 rounded-md border border-white/10 bg-[#101018] p-3">
      <Image src={imageSrc} alt={name} width={80} height={100} className="h-20 w-16 object-cover" unoptimized />
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/60">
              {size} / {color}
            </p>
          </div>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-[#E63946]">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <QuantitySelector initial={1} />
          <span className="text-sm font-semibold text-white">{price}</span>
        </div>
      </div>
    </div>
  )
}
