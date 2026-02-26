import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const filters = {
  categories: [
    { name: "All", slug: "all", count: 126 },
    { name: "Hoodies", slug: "hoodies", count: 24 },
    { name: "Tees", slug: "tees", count: 48 },
    { name: "Sneakers", slug: "sneakers", count: 18 },
    { name: "Accessories", slug: "accessories", count: 36 },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Neon Green", "Charcoal", "Olive"],
  sortOptions: ["Newest", "Price: Low to High", "Price: High to Low", "Best Selling"],
};

const products = [
  { id: "1", name: "Neon Drip Hoodie", price: 149, image: "/products/neon-drip-hoodie.jpg", category: "hoodies" },
  { id: "2", name: "Cyber Punk Cargo Pants", price: 189, image: "/products/cyber-cargo.jpg", category: "bottoms", badge: "SALE" },
  { id: "3", name: "Glitch Logo Tee", price: 59, image: "/products/glitch-tee.jpg", category: "tees" },
  { id: "4", name: "Shadow Runner Sneakers", price: 279, image: "/products/shadow-runners.jpg", category: "sneakers" },
  { id: "5", name: "Reflective Bucket Hat", price: 45, image: "/products/bucket-hat.jpg", category: "accessories" },
  { id: "6", name: "Oversized Bomber Jacket", price: 249, image: "/products/bomber-jacket.jpg", category: "hoodies" },
  { id: "7", name: "Tech Fleece Joggers", price: 119, image: "/products/tech-joggers.jpg", category: "bottoms" },
  { id: "8", name: "LED Chain Necklace", price: 89, image: "/products/led-chain.jpg", category: "accessories" },
];

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary">Shop All</p>
          <h1 className="text-4xl md:text-6xl font-semibold">126 products</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            From heavyweight hoodies to statement sneakers, explore the full Urban Threads catalog.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <Card className="rounded-lg bg-card border border-border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold">Categories</h2>
                <div className="mt-4 space-y-2">
                  {filters.categories.map((category) => (
                    <Link key={category.slug} href={`/shop?category=${category.slug}`} className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground">
                      <span>{category.name}</span>
                      <span className="text-xs">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Sizes</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {filters.sizes.map((size) => (
                    <Button key={size} variant="outline" className="rounded-md px-3 py-2 text-xs uppercase">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Colors</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {filters.colors.map((color) => (
                    <Badge key={color} className="border border-border bg-card text-foreground">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Sort By</h3>
                <Select className="mt-3 w-full">
                  {filters.sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </Select>
              </div>
            </Card>
          </aside>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image src={product.image} alt={product.name} width={600} height={700} className="h-72 w-full object-cover" />
                  {product.badge && (
                    <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">{product.badge}</Badge>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{product.category}</span>
                    <Link href={`/product/${product.id}`} className="text-primary">
                      View
                    </Link>
                  </div>
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
