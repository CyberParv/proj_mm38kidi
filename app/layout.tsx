import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Urban Threads | Premium Streetwear & Urban Fashion",
  description:
    "Shop the latest streetwear drops from Urban Threads. Premium hoodies, tees, sneakers, and accessories for those who refuse to blend in. Free shipping over $100.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <NavbarSticky
          logo="Urban Threads"
          navItems={[
            { label: "Shop", href: "/shop" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Shop Now"
          ctaHref="/shop"
        />
        {children}
        <FooterMultiColumn
          brand="Urban Threads"
          description="Wear the Culture. Own the Streets. Premium streetwear inspired by underground energy and built for the city."
          columns={[
            {
              title: "Shop",
              links: [
                { label: "All Products", href: "/shop" },
                { label: "Hoodies", href: "/shop?category=hoodies" },
                { label: "Tees", href: "/shop?category=tees" },
                { label: "Sneakers", href: "/shop?category=sneakers" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Lookbook", href: "/#lookbook" },
                { label: "Community", href: "/about" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Shipping & Returns", href: "/contact" },
                { label: "Size Guide", href: "/product/neon-drip-hoodie" },
                { label: "FAQ", href: "/contact#faq" },
                { label: "Cart", href: "/cart" },
              ],
            },
          ]}
          copyright="© 2024 Urban Threads. All rights reserved."
        />
      </body>
    </html>
  );
}
