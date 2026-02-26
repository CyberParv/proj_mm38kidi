'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CartItem from '@/components/CartItem'
import { cn } from '@/lib/utils'

interface CartDrawerProps {
  items?: {
    id: string
    name: string
    imageSrc: string
    price: string
    size: string
    color: string
  }[]
}

export default function CartDrawer({
  items = [
    {
      id: '1',
      name: 'Midnight Utility Hoodie',
      imageSrc: '/images/hero.jpg',
      price: '$78',
      size: 'M',
      color: 'Neon Red',
    },
  ],
}: Partial<CartDrawerProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-[#E63946] text-white hover:bg-[#E63946]/80">
        Open Cart
      </Button>
      <div className={cn('fixed inset-0 z-50', open ? 'block' : 'hidden')}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0B0B13] p-6 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Cart</h3>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                imageSrc={item.imageSrc}
                price={item.price}
                size={item.size}
                color={item.color}
              />
            ))}
          </div>

          <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Subtotal</span>
              <span className="text-white">$156</span>
            </div>
            <Button className="w-full bg-[#E63946] text-white hover:bg-[#E63946]/80">Checkout</Button>
          </div>
        </aside>
      </div>
    </>
  )
}
