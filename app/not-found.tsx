import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. Explore the latest drops instead.
        </p>
        <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          <Link href="/shop">Shop the Drop</Link>
        </Button>
      </div>
    </div>
  );
}
