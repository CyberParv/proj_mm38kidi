import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CartPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 space-y-10">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-primary">Your Cart</p>
            <h1 className="text-4xl md:text-6xl font-semibold">Review your drop</h1>
          </div>

          <Card className="rounded-lg bg-card border border-border p-10 text-center space-y-4">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-muted-foreground">Looks like you haven&apos;t added anything yet.</p>
            <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
