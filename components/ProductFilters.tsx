'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface ProductFiltersProps {
  categories?: string[]
  sizes?: string[]
  colors?: { name: string; value: string }[]
}

export default function ProductFilters({
  categories = ['Hoodies', 'Sneakers', 'Accessories', 'Tees'],
  sizes = ['XS', 'S', 'M', 'L', 'XL'],
  colors = [
    { name: 'Neon Red', value: '#E63946' },
    { name: 'Off White', value: '#F8F9FA' },
    { name: 'Midnight', value: '#1A1A2E' },
  ],
}: Partial<ProductFiltersProps>) {
  const [open, setOpen] = useState(false)
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [price, setPrice] = useState(150)

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  return (
    <div className="rounded-lg border border-white/10 bg-[#0B0B13] p-4 text-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-sm font-semibold md:hidden"
      >
        Filters
        <ChevronDown className={cn('h-4 w-4 transition-transform', open ? 'rotate-180' : '')} />
      </button>

      <div className={cn('mt-4 space-y-6', open ? 'block' : 'hidden md:block')}>
        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-widest text-white/60">Categories</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 text-sm text-white/80">
                <input type="checkbox" className="accent-[#E63946]" />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-widest text-white/60">Size</Label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const active = selectedSizes.includes(size)
              return (
                <Button
                  key={size}
                  size="sm"
                  variant="outline"
                  onClick={() => toggleSize(size)}
                  className={cn(
                    'border-white/20 text-white',
                    active ? 'border-[#E63946] text-[#E63946]' : 'hover:border-white/50'
                  )}
                >
                  {size}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-widest text-white/60">Color</Label>
          <div className="flex gap-3">
            {colors.map((color) => {
              const active = selectedColors.includes(color.value)
              return (
                <button
                  key={color.value}
                  onClick={() => toggleColor(color.value)}
                  className={cn(
                    'h-6 w-6 rounded-full border',
                    active ? 'border-[#E63946]' : 'border-white/30'
                  )}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-widest text-white/60">Price Range</Label>
          <input
            type="range"
            min={20}
            max={200}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-[#E63946]"
          />
          <div className="text-xs text-white/60">Up to ${price}</div>
        </div>

        <div className="space-y-3">
          <Label className="text-xs uppercase tracking-widest text-white/60">Sort</Label>
          <Select
            options={[
              { label: 'Newest Drops', value: 'new' },
              { label: 'Price: Low to High', value: 'low' },
              { label: 'Price: High to Low', value: 'high' },
            ]}
            className="w-full bg-white/5 text-white"
          />
        </div>
      </div>
    </div>
  )
}
