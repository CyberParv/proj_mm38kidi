'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ColorSelectorProps {
  colors?: { name: string; value: string }[]
}

export default function ColorSelector({
  colors = [
    { name: 'Neon Red', value: '#E63946' },
    { name: 'Cloud White', value: '#F8F9FA' },
    { name: 'Midnight', value: '#1A1A2E' },
  ],
}: Partial<ColorSelectorProps>) {
  const [selected, setSelected] = useState(colors[0]?.value || '')

  return (
    <div className="space-y-3">
      <span className="text-sm text-white/70">Color</span>
      <div className="flex gap-3">
        {colors.map((color) => {
          const active = selected === color.value
          return (
            <button
              key={color.value}
              onClick={() => setSelected(color.value)}
              className={cn(
                'relative flex h-8 w-8 items-center justify-center rounded-full border',
                active ? 'border-[#E63946]' : 'border-white/30'
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              {active && <Check className="h-4 w-4 text-black" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
