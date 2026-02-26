# Urban Threads

> Wear the Culture. Own the Streets.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

---

## About

Shop the latest streetwear drops from Urban Threads. Premium hoodies, tees, sneakers, and accessories for those who refuse to blend in. Free shipping over $100.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Image gallery showcase
- Customer testimonials
- FAQ section

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |
| Prisma | Next-generation ORM |

## Pages

- **Home** (`/`) — hero, product-grid, category-grid, gallery, split-content, testimonials, trust-badges, newsletter
- **Shop** (`/shop`) — page-header, filterable-product-grid
- **Product Detail** (`/product/[slug]`) — product-detail, tabs, product-grid
- **About** (`/about`) — hero, content-block, features-grid, team, cta-banner
- **Contact** (`/contact`) — page-header, contact-form, contact-info, faq
- **Cart** (`/cart`) — cart

## Project Structure

```
├── .env.example
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── cart/
│   │   │   ├── [itemId]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── newsletter/
│   │   │   └── route.ts
│   │   ├── products/
│   │   │   ├── [slug]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   └── search/
│   │       └── route.ts
│   ├── cart/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── shop/
│       └── page.tsx
├── components.json
├── components/
│   ├── AddToCartButton.tsx
│   ├── Breadcrumb.tsx
│   ├── CTABanner.tsx
│   ├── CTASparkles.tsx
│   ├── CartDrawer.tsx
│   ├── CartItem.tsx
│   ├── CategoryCard.tsx
│   ├── ColorSelector.tsx
│   ├── ContactForm.tsx
│   ├── CountdownTimer.tsx
│   ├── FAQAccordion.tsx
│   ├── FeaturesGrid.tsx
│   ├── Footer.tsx
│   ├── FooterMultiColumn.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroAurora.tsx
│   ├── ImageGallery.tsx
│   ├── Navbar.tsx
│   ├── NavbarSticky.tsx
│   ├── NewsletterForm.tsx
│   ├── NewsletterSignup.tsx
│   ├── ProductCard.tsx
│   ├── ProductFilters.tsx
│   ├── QuantitySelector.tsx
│   ├── SearchModal.tsx
│   ├── SizeSelector.tsx
│   ├── StatsCounter.tsx
│   ├── Tabs.tsx
│   ├── TeamCard.tsx
│   ├── TeamGrid.tsx
│   ├── TestimonialCard.tsx
│   ├── TestimonialsAnimated.tsx
│   ├── TrustBadge.tsx
│   └── ui/
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── backgrounds/
│       │   ├── aurora-background.tsx
│       │   └── sparkles.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── text/
│       │   └── text-generate-effect.tsx
│       └── textarea.tsx
├── lib/
│   ├── cart.ts
│   ├── db.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validators.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prisma/
│   └── schema.prisma
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#00FF88](https://via.placeholder.com/15/00FF88/000000?text=+) | `#00FF88` |
| Secondary | ![#FF00E5](https://via.placeholder.com/15/FF00E5/000000?text=+) | `#FF00E5` |
| Accent | ![#00D4FF](https://via.placeholder.com/15/00D4FF/000000?text=+) | `#00D4FF` |
| Background | ![#0A0A0B](https://via.placeholder.com/15/0A0A0B/000000?text=+) | `#0A0A0B` |

## Typography

- **Headings:** Space Grotesk
- **Body:** Inter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm38kidi.git

# Navigate to the project
cd proj_mm38kidi

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm38kidi)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
