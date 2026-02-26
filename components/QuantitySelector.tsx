'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuantitySelectorProps {
  initial?: number
}

export default function QuantitySelector({ initial = 1 }: Partial<QuantitySelectorProps>) {
  const [quantity, setQuantity] = useState(initial)

  const decrement = () => setQuantity((q) => Math.max(1, q - 1))
  const increment = () => setQuantity((q) => q + 1)

  return (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0B0B13] px-2 py-1">
      <Button size="icon" variant="ghost" onClick={decrement} className="text-white hover:text-[#E63946]">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="min-w-[24px] text-center text-sm font-semibold text-white">{quantity}</span>
      <Button size="icon" variant="ghost" onClick={increment} className="text-white hover:text-[#E63946]">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
