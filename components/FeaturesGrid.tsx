import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { ShieldCheck, Truck, Sparkles, RefreshCw, CreditCard, Gift, Flame, Leaf, Users, Zap } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Flame, Leaf, Users, Zap, 
  ShieldCheck,
  Truck,
  Sparkles,
  RefreshCw,
  CreditCard,
  Gift,
};

export default function FeaturesGrid({
  badge = "Why Shop With Us",
  headline = "Premium service with everyday value",
  subheadline = "Fast delivery, secure checkout, and easy returns keep your shopping simple.",
  features = [],
}: Partial<FeaturesGridProps>) {
  const featuresToRender = features.length
    ? features
    : [
        {
          icon: "Truck",
          title: "Fast, reliable shipping",
          description: "Free shipping over $50 and two-day delivery on top items.",
        },
        {
          icon: "ShieldCheck",
          title: "Secure payments",
          description: "Encrypted checkout with trusted payment partners.",
        },
        {
          icon: "RefreshCw",
          title: "Easy returns",
          description: "Hassle-free returns within 30 days of purchase.",
        },
        {
          icon: "CreditCard",
          title: "Flexible payments",
          description: "Pay now or split into installments with no hidden fees.",
        },
        {
          icon: "Sparkles",
          title: "Curated quality",
          description: "Every product is vetted by our in-house experts.",
        },
        {
          icon: "Gift",
          title: "Rewards program",
          description: "Earn points on every order and unlock exclusive perks.",
        },
      ];

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresToRender.map(function (feature, index) {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={index} className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {Icon ? React.createElement(Icon, { className: "h-6 w-6" }) : <span className="text-xl">★</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
