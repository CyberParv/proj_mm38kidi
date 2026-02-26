import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const thumbnails = [
  "/products/neon-drip-hoodie-2.jpg",
  "/products/neon-drip-hoodie-3.jpg",
  "/products/neon-drip-hoodie-4.jpg",
];

const relatedProducts = [
  { id: "2", name: "Cyber Punk Cargo Pants", price: 189, image: "/products/cyber-cargo.jpg" },
  { id: "4", name: "Shadow Runner Sneakers", price: 279, image: "/products/shadow-runners.jpg" },
  { id: "5", name: "Reflective Bucket Hat", price: 45, image: "/products/bucket-hat.jpg" },
  { id: "8", name: "LED Chain Necklace", price: 89, image: "/products/led-chain.jpg" },
];

export default function ProductDetailPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <div className="text-sm text-muted-foreground">
            <Link href="/shop" className="hover:text-foreground">
              Shop
            </Link>{" "}
            / Neon Drip Hoodie
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Image
                src="/products/neon-drip-hoodie.jpg"
                alt="Neon Drip Hoodie"
                width={900}
                height={1000}
                className="rounded-lg border border-border object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                {thumbnails.map((thumb) => (
                  <Image
                    key={thumb}
                    src={thumb}
                    alt="Neon Drip Hoodie thumbnail"
                    width={300}
                    height={300}
                    className="rounded-md border border-border object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground">BESTSELLER</Badge>
                <h1 className="text-3xl md:text-4xl font-semibold">Neon Drip Hoodie</h1>
                <p className="text-2xl font-bold text-primary">$149</p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground">
                Our signature heavyweight hoodie featuring the iconic Neon Drip graphic. Made from 400gsm organic cotton with a brushed fleece interior.
              </p>
              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-widest text-primary">Select Size</h2>
                <div className="flex flex-wrap gap-3">
                  {["S", "M", "L", "XL"].map((size) => (
                    <Button key={size} variant="outline" className="rounded-md px-4 py-3 font-semibold">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-widest text-primary">Color</h2>
                <div className="flex gap-3">
                  {["Black", "Charcoal"].map((color) => (
                    <span key={color} className="rounded-full border border-border px-4 py-2 text-xs uppercase">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="rounded-md px-3 py-2">-</Button>
                  <span className="text-lg font-semibold">1</span>
                  <Button variant="outline" className="rounded-md px-3 py-2">+</Button>
                </div>
                <Button className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
                  Add to Cart
                </Button>
              </div>
              <Card className="rounded-lg bg-card border border-border p-5 space-y-2">
                <h3 className="text-sm uppercase tracking-widest text-primary">Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>400gsm heavyweight organic cotton</li>
                  <li>Brushed fleece interior</li>
                  <li>Oversized fit with dropped shoulders</li>
                  <li>Screen-printed graphics</li>
                  <li>Kangaroo pocket</li>
                  <li>Ribbed cuffs and hem</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold">Product Info</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-lg bg-card border border-border p-6">
              <h3 className="text-lg font-semibold">Details</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Crafted from premium 400gsm organic cotton sourced from sustainable farms. The brushed fleece interior provides exceptional warmth without bulk.
              </p>
            </Card>
            <Card className="rounded-lg bg-card border border-border p-6">
              <h3 className="text-lg font-semibold">Shipping</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Free standard shipping on orders over $100. Express shipping available at checkout. International shipping to 12 countries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-4xl font-semibold">Complete the Fit</h2>
            <Button asChild variant="outline" className="rounded-md px-6 py-3 font-bold uppercase tracking-wider">
              <Link href="/shop">View All</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="rounded-lg bg-card border border-border overflow-hidden">
                <Image src={product.image} alt={product.name} width={600} height={700} className="h-60 w-full object-cover" />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold text-primary">${product.price}</p>
                  <Button className="w-full rounded-md px-6 py-3 font-bold uppercase tracking-wider">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
