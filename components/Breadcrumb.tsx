import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  items?: { label: string; href: string }[]
}

export default function Breadcrumb({
  items = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Midnight Utility Hoodie', href: '/product' },
  ],
}: Partial<BreadcrumbProps>) {
  return (
    <nav className="flex items-center gap-2 text-xs text-white/70">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          <Link href={item.href} className="hover:text-[#E63946]">
            {item.label}
          </Link>
          {index < items.length - 1 && <ChevronRight className="h-3 w-3 text-white/30" />}
        </div>
      ))}
    </nav>
  )
}
