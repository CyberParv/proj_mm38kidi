import Link from 'next/link'
import { Instagram, Twitter, Facebook, Youtube, Leaf } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  logoText?: string
}

export default function Footer({ logoText = 'Urban Threads' }: Partial<FooterProps>) {
  return (
    <footer className="bg-[#0B0B13] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-widest">{logoText}</h3>
            <p className="text-sm text-white/70">
              Premium streetwear crafted for the bold. Limited drops, urban essentials, and standout fits.
            </p>
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-white/60 hover:text-[#E63946]" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-[#E63946]" />
              <Facebook className="h-5 w-5 text-white/60 hover:text-[#E63946]" />
              <Youtube className="h-5 w-5 text-white/60 hover:text-[#E63946]" />
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold uppercase text-white">Shop</h4>
            <Link href="/shop" className="block text-white/70 hover:text-[#E63946]">
              New Drops
            </Link>
            <Link href="/shop" className="block text-white/70 hover:text-[#E63946]">
              Hoodies
            </Link>
            <Link href="/shop" className="block text-white/70 hover:text-[#E63946]">
              Sneakers
            </Link>
            <Link href="/shop" className="block text-white/70 hover:text-[#E63946]">
              Accessories
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold uppercase text-white">Company</h4>
            <Link href="/about" className="block text-white/70 hover:text-[#E63946]">
              About Us
            </Link>
            <Link href="/about" className="block text-white/70 hover:text-[#E63946]">
              Brand Story
            </Link>
            <Link href="/contact" className="block text-white/70 hover:text-[#E63946]">
              Contact
            </Link>
            <Link href="/about" className="block text-white/70 hover:text-[#E63946]">
              Careers
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-white">Support</h4>
            <p className="text-sm text-white/70">Join the drop list for exclusive access.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="h-10 bg-white/5 text-white placeholder:text-white/50" />
              <Button className="h-10 bg-[#E63946] text-white hover:bg-[#E63946]/80">Join</Button>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs text-white/70">
              <Leaf className="h-4 w-4 text-[#E63946]" />
              100% recycled packaging
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 md:flex-row">
          <span>© 2024 Urban Threads. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="rounded-md border border-white/10 px-3 py-1">Visa</span>
            <span className="rounded-md border border-white/10 px-3 py-1">Mastercard</span>
            <span className="rounded-md border border-white/10 px-3 py-1">Apple Pay</span>
            <span className="rounded-md border border-white/10 px-3 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
