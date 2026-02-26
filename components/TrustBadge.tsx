import { Shield, Truck, RefreshCcw, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadgeProps {
  icon?: string
  title?: string
  description?: string
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Truck,
  RefreshCcw,
  Lock,
}

export default function TrustBadge({
  icon = 'Shield',
  title = 'Secure Checkout',
  description = '256-bit encrypted payments',
}: Partial<TrustBadgeProps>) {
  const Icon = iconMap[icon] || Shield

  return (
    <div className="flex gap-4 rounded-lg border border-white/10 bg-[#101018] p-4 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E63946]/10 text-[#E63946]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className={cn('text-xs text-white/60')}>{description}</p>
      </div>
    </div>
  )
}
