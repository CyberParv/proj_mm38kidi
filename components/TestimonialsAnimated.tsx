"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Loved by shoppers everywhere",
  subheadline = "Real feedback from customers who trust NovaMart.",
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  const testimonialsToRender = testimonials.length
    ? testimonials
    : [
        {
          quote: "The shipping was unbelievably fast, and the packaging was beautiful. Everything arrived perfect.",
          name: "Sofia Martinez",
          designation: "Verified Buyer",
          src: "/images/hero.jpg",
        },
        {
          quote: "I love the curated selection. Every item I ordered has been high quality and exactly as described.",
          name: "Marcus Hill",
          designation: "Repeat Customer",
          src: "/images/hero.jpg",
        },
        {
          quote: "Customer support helped me swap sizes in minutes. Super smooth experience.",
          name: "Priya Singh",
          designation: "Member",
          src: "/images/hero.jpg",
        },
      ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonialsToRender} autoplay={autoplay} />
      </div>
    </section>
  );
}
