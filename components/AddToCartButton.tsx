'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AddToCartButtonProps {
  soldOut?: boolean
}

export default function AddToCartButton({ soldOut = false }: Partial<AddToCartButtonProps>) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleClick = () => {
    if (soldOut || loading) return
    setLoading(true)
    setSuccess(false)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 1500)
    }, 900)
  }

  return (
    <Button
      onClick={handleClick}
      disabled={soldOut || loading}
      className={cn(
        'w-full bg-gradient-to-r from-[#E63946] to-[#ff5c6b] text-white',
        soldOut ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
      )}
    >
      {soldOut ? 'Sold Out' : loading ? 'Adding...' : success ? <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Added</span> : 'Add to Cart'}
    </Button>
  )
}
