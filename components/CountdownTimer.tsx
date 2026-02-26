'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  targetDate?: string
}

export default function CountdownTimer({ targetDate = '2025-01-01T00:00:00Z' }: Partial<CountdownTimerProps>) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const distance = Math.max(target - now, 0)
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex flex-wrap gap-4 text-white">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className={cn('flex min-w-[80px] flex-col items-center rounded-md border border-[#E63946]/50 bg-[#101018] px-3 py-2')}
        >
          <span className="text-xl font-bold text-[#E63946]">{value.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-widest text-white/60">{label}</span>
        </div>
      ))}
    </div>
  )
}
