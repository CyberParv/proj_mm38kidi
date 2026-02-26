'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SizeSelectorProps {
  sizes?: { label: string; available: boolean }[]
}

export default function SizeSelector({
  sizes = [
    { label: 'XS', available: false },
    { label: 'S', available: true },
    { label: 'M', available: true },
    { label: 'L', available: true },
    { label: 'XL', available: true },
  ],
}: Partial<SizeSelectorProps>) {
  const [selected, setSelected] = useState('M')

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>Size</span>
        <button className="text-xs text-[#E63946] hover:underline">Size guide</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            key={size.label}
            size="sm"
            variant="outline"
            disabled={!size.available}
            onClick={() => setSelected(size.label)}
            className={cn(
              'border-white/20 text-white',
              selected === size.label ? 'border-[#E63946] text-[#E63946]' : 'hover:border-white/50',
              !size.available ? 'opacity-40 cursor-not-allowed' : ''
            )}
          >
            {size.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
