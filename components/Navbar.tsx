'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  cartCount?: number
  links?: { label: string; href: string }[]
}

export default function Navbar({
  logoText = 'Urban Threads',
  cartCount = 2,
  links = [
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}: Partial<NavbarProps>) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B13]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-bold uppercase tracking-widest text-white">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-[#E63946]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className={cn('relative hidden md:block', searchOpen ? 'w-56' : 'w-9')}>
            {searchOpen && (
              <Input
                placeholder="Search drops"
                className="h-9 bg-white/5 text-white placeholder:text-white/50"
              />
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                'absolute right-0 top-0 h-9 w-9 text-white',
                searchOpen ? 'bg-[#E63946]/20' : 'hover:text-[#E63946]'
              )}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="relative text-white hover:text-[#E63946]">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[#E63946] p-0 text-xs">
                {cartCount}
              </Badge>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="text-white hover:text-[#E63946] md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B13]">
          <div className="flex items-center justify-between p-4">
            <span className="text-lg font-bold uppercase tracking-widest text-white">{logoText}</span>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center gap-6 py-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xl font-semibold text-white/90 transition-colors hover:text-[#E63946]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full max-w-xs">
              <Input placeholder="Search drops" className="h-11 bg-white/5 text-white placeholder:text-white/50" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
