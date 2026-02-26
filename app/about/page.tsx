import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroAurora from "@/components/HeroAurora";
import FeaturesGrid from "@/components/FeaturesGrid";
import TeamGrid from "@/components/TeamGrid";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="min-h-[60vh]">
        <HeroAurora
          title="WE ARE URBAN THREADS"
          subtitle="Born from the underground. Built for the streets."
          primaryCta={{ label: "Shop Now", href: "/shop" }}
          secondaryCta={{ label: "Follow Us", href: "https://instagram.com/urbanthreads" }}
        />
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold">Our Story</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Urban Threads was founded in 2019 in a Brooklyn basement by two friends who were tired of seeing streetwear lose its soul.
              What started as a passion project quickly became a movement.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              We saw major brands diluting street culture, turning rebellion into corporate marketing. We wanted to create something real—
              clothes that carry the energy of late-night sessions, underground shows, and city streets.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Today, we&apos;ve grown into a global community of over 50,000 members across 12 countries. Every piece is still designed in Brooklyn,
              and we work exclusively with sustainable manufacturers who share our values.
            </p>
            <Button className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">Explore the Archive</Button>
          </div>
          <Image
            src="/images/about.jpg"
            alt="Urban Threads founders"
            width={900}
            height={800}
            className="rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            headline="WHAT WE STAND FOR"
            features={[
              {
                icon: "Flame",
                title: "Authenticity",
                description: "We don't follow trends—we create them. Every design comes from real street culture, not focus groups.",
              },
              {
                icon: "Leaf",
                title: "Sustainability",
                description: "100% organic cotton, recycled packaging, carbon-neutral shipping. The streets deserve a clean future.",
              },
              {
                icon: "Users",
                title: "Community",
                description: "Our customers aren't customers—they're family. We spotlight real people, not paid influencers.",
              },
              {
                icon: "Zap",
                title: "Quality",
                description: "Premium materials, meticulous construction. Our pieces are built to last, not to be thrown away.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="THE CREW"
            members={[
              {
                name: "Marcus Chen",
                title: "Co-Founder & Creative Director",
                imageUrl: "/team/marcus.jpg",
                bio: "Former graffiti artist turned designer. Marcus brings 15 years of street art experience to every collection.",
              },
              {
                name: "Jade Williams",
                title: "Co-Founder & CEO",
                imageUrl: "/team/jade.jpg",
                bio: "Streetwear collector and business strategist. Jade handles the operations while keeping the brand authentic.",
              },
              {
                name: "Tyler Rodriguez",
                title: "Head of Design",
                imageUrl: "/team/tyler.jpg",
                bio: "Sneakerhead and graphic designer. Tyler's bold visuals define the Urban Threads aesthetic.",
              },
              {
                name: "Aisha Johnson",
                title: "Community Manager",
                imageUrl: "/team/aisha.jpg",
                bio: "Our connection to the streets. Aisha curates our social presence and community events.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <CTABanner
            headline="JOIN THE MOVEMENT"
            description="Be part of something real."
            ctaLabel="Shop Now"
            ctaHref="/shop"
            secondaryCtaLabel="Follow Us"
            secondaryCtaHref="https://instagram.com/urbanthreads"
          />
        </div>
      </section>
    </main>
  );
}
