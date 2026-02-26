'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images?: string[]
}

export default function ImageGallery({
  images = ['/images/hero.jpg', '/images/gallery-1.jpg', '/images/about.jpg'],
}: Partial<ImageGalleryProps>) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const current = images[active] || images[0] || '/images/hero.jpg'

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#101018]">
        <Image
          src={current}
          alt="Product"
          width={900}
          height={900}
          className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
          unoptimized
        />
        <button
          className="absolute bottom-4 right-4 rounded-md bg-black/60 px-3 py-1 text-xs text-white"
          onClick={() => setLightbox(true)}
        >
          View Fullscreen
        </button>
      </div>

      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={img}
            onClick={() => setActive(index)}
            className={cn(
              'overflow-hidden rounded-md border',
              index === active ? 'border-[#E63946]' : 'border-white/10'
            )}
          >
            <Image src={img} alt="Thumbnail" width={100} height={100} className="h-20 w-20 object-cover" unoptimized />
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setLightbox(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <Image src={current} alt="Fullscreen" width={1200} height={1200} className="max-h-[90vh] w-auto object-contain" unoptimized />
        </div>
      )}
    </div>
  )
}
