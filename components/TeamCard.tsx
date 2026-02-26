import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TeamCardProps {
  name?: string
  role?: string
  bio?: string
  imageSrc?: string
}

export default function TeamCard({
  name = 'Avery Cole',
  role = 'Creative Director',
  bio = 'Shaping the urban narrative through bold silhouettes and limited releases.',
  imageSrc = '/images/team.jpg',
}: Partial<TeamCardProps>) {
  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#101018] text-white">
      <Image src={imageSrc} alt={name} width={500} height={500} className="h-56 w-full object-cover" unoptimized />
      <div className="p-4">
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs text-white/60">{role}</p>
        <p className={cn('mt-3 text-xs text-white/70 opacity-0 transition-opacity group-hover:opacity-100')}>
          {bio}
        </p>
      </div>
    </div>
  )
}
