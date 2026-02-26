import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Truck, RefreshCw, Shield, Leaf } from "lucide-react";
import HeroAurora from "@/components/HeroAurora";
import CountdownTimer from "@/components/CountdownTimer";
import GalleryMasonry from "@/components/GalleryMasonry";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import NewsletterSignup from "@/components/NewsletterSignup";

const featuredProducts = [
  {
    id: "1",
    name: "Neon Drip Hoodie",
    price: 149,
    badge: "BESTSELLER",
    image: "/products/neon-drip-hoodie.jpg",
    colors: ["Black", "Charcoal"],
  },
  {
    id: "2",
    name: "Cyber Punk Cargo Pants",
    price: 189,
    badge: "SALE",
    image: "/products/cyber-cargo.jpg",
    colors: ["Black", "Olive"],
  },
  {
    id: "3",
    name: "Glitch Logo Tee",
    price: 59,
    badge: "NEW",
    image: "/products/glitch-tee.jpg",
    colors: ["Black", "White", "Neon Green"],
  },
  {
    id: "4",
    name: "Shadow Runner Sneakers",
    price: 279,
    badge: "LIMITED",
    image: "/products/shadow-runners.jpg",
    colors: ["Triple Black", "White/Neon"],
  },
];

const categories = [
  {
    name: "Hoodies",
    slug: "hoodies",
    image: "/categories/hoodies.jpg",
    count: 24,
    description: "Premium heavyweight cuts",
  },
  {
    name: "Tees",
    slug: "tees",
    image: "/categories/tees.jpg",
    count: 48,
    description: "Graphic statements",
  },
  {
    name: "Sneakers",
    slug: "sneakers",
    image: "/categories/sneakers.jpg",
    count: 18,
    description: "Street-ready kicks",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "/categories/accessories.jpg",
    count: 36,
    description: "Complete the look",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[90vh] overflow-hidden">
        <HeroAurora
          badge="EXCLUSIVE DROP"
          title="NEW DROP: NEON NIGHTS COLLECTION"
          subtitle="Limited edition streetwear for those who refuse to blend in. 72 hours only."
          primaryCta={{ label: "Shop the Drop", href: "/shop?collection=neon-nights" }}
          secondaryCta={{ label: "Watch Lookbook", href: "#lookbook" }}
        />
        <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-lg border border-border bg-background/80 p-4 backdrop-blur">
            <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" />
              Drop ends in
            </div>
            <CountdownTimer endDate="2024-12-31T23:59:59" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary">Trending Now</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold">The pieces everyone&apos;s talking about</h2>
            </div>
            <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
              <Link href="/shop">Shop All</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={700}
                    className="h-72 w-full object-cover"
                  />
                  <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {product.colors.map((color) => (
                      <span key={color} className="rounded-full border border-border px-2 py-1">
                        {color}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full rounded-md px-6 py-3 font-bold uppercase tracking-wider">
                    Quick Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-widest text-primary">Shop by Category</p>
            <h2 className="text-3xl md:text-5xl font-semibold">Find your signature fit</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/shop?category=${category.slug}`} className="group">
                <Card className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={900}
                    height={600}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 space-y-2">
                    <h3 className="text-2xl font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <span className="text-xs uppercase tracking-widest text-primary">
                      {category.count} products
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="lookbook" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry
            headline="LOOKBOOK: STREET STORIES"
            subheadline="Real fits from our community"
            images={[
              {
                url: "/lookbook/look-1.jpg",
                alt: "Model wearing Neon Drip Hoodie in urban setting",
                caption: "Neon Drip Hoodie + Cyber Cargo Pants",
              },
              {
                url: "/lookbook/look-2.jpg",
                alt: "Streetwear outfit featuring Shadow Runners",
                caption: "Shadow Runner Sneakers + Glitch Logo Tee",
              },
              {
                url: "/lookbook/look-3.jpg",
                alt: "Night photography with neon accessories",
                caption: "LED Chain + Reflective Cap",
              },
              {
                url: "/lookbook/look-4.jpg",
                alt: "Full Urban Threads outfit",
                caption: "Oversized Bomber + Tech Joggers",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary">Born on the streets</p>
            <h2 className="text-3xl md:text-5xl font-semibold">We bring back the raw energy of underground culture.</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Urban Threads started in a Brooklyn basement in 2019. We believed streetwear had lost its edge—too corporate, too safe.
              Every piece is designed for those who see the city as their runway.
            </p>
            <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
          <div className="space-y-8">
            <Image
              src="/images/about.jpg"
              alt="Urban Threads brand story"
              width={900}
              height={700}
              className="rounded-lg border border-border object-cover"
            />
            <StatsCounter
              stats={[
                { value: "50K+", label: "Community Members" },
                { value: "12", label: "Countries Shipped" },
                { value: "100%", label: "Sustainable Materials" },
              ]}
              bgColor="bg-card"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            title="WHAT THE STREETS SAY"
            testimonials={[
              {
                quote:
                  "Finally a brand that gets it. The quality is insane and the designs are actually original.",
                name: "Marcus T.",
                designation: "Los Angeles, CA",
                src: "/testimonials/marcus.jpg",
              },
              {
                quote:
                  "Wore my Shadow Runners to ComplexCon and got stopped 10 times. These are statement pieces.",
                name: "Jade K.",
                designation: "New York, NY",
                src: "/testimonials/jade.jpg",
              },
              {
                quote:
                  "The fit on everything is perfect. Oversized but structured. This is how streetwear should be.",
                name: "Tyler R.",
                designation: "Chicago, IL",
                src: "/testimonials/tyler.jpg",
              },
            ]}
            autoplay
          />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              description: "On orders over $100",
            },
            {
              icon: RefreshCw,
              title: "30-Day Returns",
              description: "No questions asked",
            },
            {
              icon: Shield,
              title: "Secure Checkout",
              description: "256-bit SSL encryption",
            },
            {
              icon: Leaf,
              title: "Sustainable",
              description: "Eco-friendly materials",
            },
          ].map((badge) => (
            <Card key={badge.title} className="rounded-lg bg-card border border-border p-6 space-y-3">
              <badge.icon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <NewsletterSignup
            headline="JOIN THE MOVEMENT"
            subheadline="Get early access to drops, exclusive discounts, and street culture content."
            ctaLabel="Subscribe"
          />
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Get 15% off your first order.
          </div>
        </div>
      </section>
    </main>
  );
}
