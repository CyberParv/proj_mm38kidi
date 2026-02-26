import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 space-y-4">
          <p className="text-sm uppercase tracking-widest text-primary">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-semibold">We&apos;re here to help</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Questions, collabs, or just want to say what&apos;s up? We&apos;re here.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm
            headline="Send us a message"
            subheadline="We respond within 24 hours."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "hello@urbanthreads.com" },
              { icon: "Phone", label: "Phone", value: "+1 (718) 555-0199" },
              { icon: "MapPin", label: "Studio", value: "247 Bedford Ave, Brooklyn, NY 11211" },
            ]}
          />
          <div className="space-y-6">
            <Card className="rounded-lg bg-card border border-border p-6 space-y-2">
              <h2 className="text-xl font-semibold">Other ways to reach us</h2>
              <p className="text-sm text-muted-foreground">Mon-Fri: 10am - 6pm EST</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Instagram: @urbanthreads</p>
                <p>TikTok: @urbanthreads</p>
                <p>Twitter: @urbanthreads</p>
              </div>
            </Card>
            <Card className="rounded-lg bg-card border border-border p-6 space-y-2">
              <h3 className="text-lg font-semibold">Press & Collaborations</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re always open to working with creators. Select &quot;Collaboration&quot; in the contact form.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <FAQAccordion
            headline="FREQUENTLY ASKED"
            items={[
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 days) is available at checkout. International orders typically arrive within 10-14 business days.",
              },
              {
                question: "What's your return policy?",
                answer:
                  "We offer 30-day returns on all unworn items with tags attached. Simply initiate a return through your account or contact us. We'll send you a prepaid shipping label.",
              },
              {
                question: "How do your sizes run?",
                answer:
                  "Our pieces are designed with an oversized fit. If you prefer a more fitted look, we recommend sizing down. Check the size guide on each product page for detailed measurements.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes! We currently ship to 12 countries including Canada, UK, Germany, France, Australia, and Japan. Shipping rates and times vary by location.",
              },
              {
                question: "How can I collaborate with Urban Threads?",
                answer:
                  "We're always open to working with artists, photographers, and creators who align with our vision. Send us your portfolio through the contact form with 'Collaboration' as the subject.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
