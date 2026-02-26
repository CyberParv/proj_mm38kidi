'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface TabsProps {
  tabs?: { label: string; content: string }[]
}

export default function Tabs({
  tabs = [
    { label: 'Details', content: 'Premium heavyweight cotton with reflective embroidery and hidden pockets.' },
    { label: 'Size Guide', content: 'Oversized fit. Size down for a closer cut. Model wears size M.' },
    { label: 'Shipping', content: 'Free shipping on orders over $120. 30-day returns included.' },
  ],
}: Partial<TabsProps>) {
  const [active, setActive] = useState(0)

  return (
    <div className="space-y-4 text-white">
      <div className="flex flex-wrap gap-6 border-b border-white/10">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={cn(
              'pb-2 text-sm font-semibold',
              active === index ? 'border-b-2 border-[#E63946] text-[#E63946]' : 'text-white/70'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-white/80">{tabs[active]?.content}</p>
    </div>
  )
}
