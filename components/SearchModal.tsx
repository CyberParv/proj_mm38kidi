'use client'

import { useState } from 'react'
import { X, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchModalProps {
  isOpen?: boolean
}

export default function SearchModal({ isOpen = false }: Partial<SearchModalProps>) {
  const [open, setOpen] = useState(isOpen)
  const recent = ['Cargo Joggers', 'Reflective Tee', 'Neon Sneakers']
  const suggestions = ['Midnight Utility Hoodie', 'Skyline Bomber', 'Mono Tech Cap']

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} variant="ghost" className="text-white hover:text-[#E63946]">
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0B13]/95 p-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Search the drop</h2>
        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-6">
        <Input
          placeholder="Search products"
          className="h-12 border-white/10 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[#E63946]"
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-white/70">Recent Searches</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {recent.map((item) => (
              <li key={item} className="text-white/80 hover:text-[#E63946]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white/70">Suggested</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {suggestions.map((item) => (
              <li key={item} className="text-white/80 hover:text-[#E63946]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
