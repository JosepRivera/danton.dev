# Josep Rivera — Portfolio

## Stack
- Next.js + TypeScript (App Router, SSG)
- Tailwind CSS + shadcn/ui (Radix)
- Framer Motion (animaciones)
- lucide-react (iconos UI)
- devicons-react (iconos de tech)
- Biome (linter/formatter, NO eslint)
- pnpm (gestor de paquetes)
- Deploy: Vercel

## Comandos
- `pnpm dev` — desarrollo
- `pnpm build` — build producción
- `pnpm check` — lint + format con Biome

## Estructura
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/     → Nav, Footer
│   ├── sections/   → Hero, About, Projects, Skills, Experience, Contact
│   └── ui/         → ProjectCard, SkillBadge, SectionTitle
├── data/
│   ├── projects.ts
│   └── skills.ts
└── lib/
    └── utils.ts

## Paleta — Tormenta
--storm-bg:      #0e1018
--storm-bg2:     #181c28
--storm-bg3:     #222838
--storm-accent:  #6888c8   ← usar dosificado, no en todo
--storm-accent2: #a8b8e0
--storm-fg:      #e0e8f8
--storm-fg2:     #8898b8
--storm-border:  #282f44

## Reglas importantes
- Biome en lugar de ESLint — no tocar .eslintrc
- Datos de proyectos y skills SIEMPRE en /data, nunca hardcodeados en componentes
- Todas las animaciones deben respetar prefers-reduced-motion
- Mobile first, totalmente responsive
- Usar Context7 MCP para consultar docs antes de implementar
```