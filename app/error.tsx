"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-4xl font-semibold">Something went wrong</h1>
        <p className="text-muted-foreground">
          We hit a snag while loading this page. Try again or head back to the shop.
        </p>
        <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    </div>
  );
}
