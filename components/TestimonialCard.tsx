import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface TestimonialCardProps {
  quote?: string
  rating?: number
  name?: string
  location?: string
  product?: string
  avatarSrc?: string
}

export default function TestimonialCard({
  quote = 'The quality is insane. Fits perfectly and the neon hits under city lights.',
  rating = 5,
  name = 'Jordan Miles',
  location = 'Brooklyn, NY',
  product = 'Midnight Utility Hoodie',
  avatarSrc = '/images/team.jpg',
}: Partial<TestimonialCardProps>) {
  return (
    <Card className="bg-[#101018] p-6 text-white">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={index < rating ? 'h-4 w-4 text-[#E63946]' : 'h-4 w-4 text-white/20'} />
        ))}
      </div>
      <p className="mt-4 text-sm text-white/80">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name?.charAt(0) || 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-white/60">
            {location} · {product}
          </p>
        </div>
      </div>
    </Card>
  )
}
