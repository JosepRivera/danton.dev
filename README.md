# Josep Rivera — Backend Developer Portfolio

Modern, performant portfolio website built with cutting-edge web technologies.

## Overview

This is a professional portfolio showcasing backend development expertise, primarily focused on **NestJS**, **FastAPI**, **Python**, **Node.js**, and **Docker**. The site demonstrates scalable API design and real-world AI integration in production environments.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [lucide-react](https://lucide.dev/) (UI), [devicons-react](https://devicons.dev/) (Tech)
- **Code Quality**: [Biome](https://biomejs.dev/) (linter & formatter)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

```
rivera.dev/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navigation, Footer
│   ├── sections/          # Hero, About, Projects, Skills, Experience, Contact
│   └── ui/                # Reusable UI components (Button, Badge, etc.)
├── data/
│   ├── projects.ts        # Projects content
│   └── skills.ts          # Skills & tech stack
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── biome.json            # Linting & formatting config
```

## Getting Started

### Prerequisites

- **Node.js** 18.17+ or 20.x
- **pnpm** 8+ ([install guide](https://pnpm.io/installation))

### Installation

```bash
# Clone the repository
git clone https://github.com/josep-riv/rivera.dev.git
cd rivera.dev

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run Biome linter and formatter
pnpm check

# Format code automatically
pnpm format

# Lint code
pnpm lint
```

## Color Palette — "Tormenta" Theme

Professional storm-inspired color scheme:

```css
--storm-bg:      #0e1018  /* Deep background */
--storm-bg2:     #181c28  /* Secondary background */
--storm-bg3:     #222838  /* Tertiary background */
--storm-accent:  #6888c8  /* Primary accent (used sparingly) */
--storm-accent2: #a8b8e0  /* Secondary accent */
--storm-fg:      #e0e8f8  /* Foreground text */
--storm-fg2:     #8898b8  /* Secondary text */
--storm-border:  #282f44  /* Borders */
```

## Key Features

✅ **Performance-First**: Static Site Generation with Next.js  
✅ **Fully Responsive**: Mobile-first design with Tailwind CSS  
✅ **Accessible**: WCAG 2.2 compliance, semantic HTML  
✅ **Dark Mode Ready**: Theme support with Tailwind CSS  
✅ **Smooth Animations**: Framer Motion with `prefers-reduced-motion` respect  
✅ **SEO Optimized**: Meta tags, structured data, XML sitemap  
✅ **Type-Safe**: Full TypeScript coverage  
✅ **Zero Runtime**: Biome ensures code quality without ESLint overhead

## Important Guidelines

- ⚠️ **Do NOT** use ESLint — Biome is configured instead
- 📝 **Always** keep project and skill data in `/data` directory (never hardcode)
- 🎬 **All animations** must respect `prefers-reduced-motion` preference
- 📱 **Mobile-first** responsive design approach
- 🎨 Use Context7 MCP for documentation before implementation

## Deployment

The site is deployed on **Vercel**. Each push to the `main` branch triggers an automatic deployment.

```bash
# Deploy to Vercel (requires Vercel CLI)
vercel deploy --prod
```

## License

All content and design © 2024 Josep Rivera. All rights reserved.

---

**Live Site**: [rivera.dev](https://rivera.dev)  
**GitHub**: [josep-riv/rivera.dev](https://github.com/josep-riv/rivera.dev)
