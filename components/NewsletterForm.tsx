'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  incentiveText?: string
  gradient?: boolean
}

export default function NewsletterForm({
  incentiveText = 'Get 10% off your first drop. No spam, just heat.',
  gradient = true,
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const submit = () => {
    if (!email) return
    setSuccess(true)
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6 text-white',
        gradient ? 'bg-gradient-to-r from-[#E63946]/80 to-[#1A1A2E]' : 'bg-[#101018]'
      )}
    >
      <p className="text-sm">{incentiveText}</p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="h-11 bg-white/10 text-white placeholder:text-white/60"
        />
        <Button onClick={submit} className="h-11 bg-white text-black hover:bg-white/80">
          {success ? 'Subscribed' : 'Join List'}
        </Button>
      </div>
      {success && <p className="mt-3 text-xs text-white/80">You are on the list for upcoming drops.</p>}
    </div>
  )
}
