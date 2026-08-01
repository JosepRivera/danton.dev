---
name: Josep Rivera Portfolio
description: A dark storm-toned portfolio built on three tonal floors, hairline borders and one blue signal accent.
colors:
  storm-bg: "#0e1018"
  storm-bg2: "#181c28"
  storm-bg3: "#222838"
  storm-border: "#282f44"
  storm-accent: "#6888c8"
  storm-accent2: "#a8b8e0"
  storm-fg: "#e0e8f8"
  storm-fg2: "#8898b8"
typography:
  display:
    fontFamily: "Syne, var(--font-display), sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Syne, var(--font-display), sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Syne, var(--font-display), sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  lead:
    fontFamily: "Geist, var(--font-sans), sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, var(--font-sans), sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, var(--font-sans), sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: "0.05em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  2xl: "1.125rem"
  3xl: "1.375rem"
  4xl: "1.625rem"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "1.5": "0.375rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  "24": "6rem"
components:
  cta-primary:
    backgroundColor: "#2d4d9e"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.25rem"
  cta-primary-hover:
    backgroundColor: "#3458b8"
    textColor: "#ffffff"
  cta-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.storm-fg2}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.625rem 1.25rem"
  cta-secondary-hover:
    textColor: "{colors.storm-fg}"
  card-project:
    backgroundColor: "{colors.storm-bg2}"
    textColor: "{colors.storm-fg}"
    rounded: "{rounded.xl}"
    padding: "1.25rem"
  card-featured:
    backgroundColor: "{colors.storm-bg2}"
    textColor: "{colors.storm-fg}"
    rounded: "{rounded.2xl}"
    padding: "2rem"
  card-contact:
    backgroundColor: "{colors.storm-bg2}"
    textColor: "{colors.storm-fg}"
    rounded: "{rounded.2xl}"
    padding: "1.5rem"
  chip-tech:
    backgroundColor: "{colors.storm-bg3}"
    textColor: "{colors.storm-accent2}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.125rem 0.5rem"
  badge-status:
    backgroundColor: "{colors.storm-bg3}"
    textColor: "{colors.storm-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.625rem"
  skill-badge:
    backgroundColor: "{colors.storm-bg2}"
    textColor: "{colors.storm-fg2}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.75rem"
  skill-badge-hover:
    backgroundColor: "{colors.storm-bg3}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.storm-fg2}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.375rem 0.75rem"
  nav-link-active:
    backgroundColor: "{colors.storm-bg3}"
    textColor: "{colors.storm-fg}"
  monogram:
    backgroundColor: "{colors.storm-bg2}"
    textColor: "{colors.storm-fg}"
    rounded: "{rounded.lg}"
    size: "2.25rem"
---

# Design System: Josep Rivera Portfolio

## Overview

**Creative North Star: "The Storm Console"**

This is a dark instrument panel read at night in soft weather. The ground is a near-black blue-slate (`storm-bg`), lit from off-screen by two enormous, motionless radial glows and covered in a 28px engineering dot grid at 8% opacity. Nothing on the page shouts. Structure is drawn with 1px hairlines rather than fills, depth is achieved by stepping a surface one tone lighter rather than by dropping a shadow, and a single desaturated blue accent does all the pointing. The result reads as *composed, atmospheric, engineered, low-noise* — a page that argues for engineering discipline by exhibiting it.

The system commits hard to one thing: **it is dark, and only dark.** There is no light mode in the codebase, no `prefers-color-scheme` branch, no theme toggle, and none is planned. The `.dark` class block in `app/globals.css` exists only as leftover shadcn scaffolding for the generic `--primary`/`--muted` tokens; the storm palette is defined once on `:root` and is unconditional. Any future work that assumes a light counterpart is working against the system, not extending it.

Density is deliberately low. Sections run on a 6rem vertical rhythm inside a single 64rem spine, cards carry generous internal padding, and content is allowed to breathe rather than tile. Motion is present but disciplined — everything enters by rising 20px while fading in, and interactive surfaces respond by lifting exactly 2px and warming their border toward the accent. There is no confirmed visual anti-reference: the incumbent storm world was reviewed on 2026-08-01 and deliberately preserved, so this document records it as ground truth rather than as a stage to be replaced.

**Key Characteristics:**
- Dark-only. Three tonal floors (`storm-bg` → `storm-bg2` → `storm-bg3`) and no fourth.
- Hairline structure: every container is bounded by a 1px `storm-border`, never by a fill edge.
- One blue signal accent (`storm-accent`) plus one pale reading accent (`storm-accent2`).
- Essentially flat. Shadows exist only as accent-tinted hover glows.
- Atmospheric background: two fixed radial glows, three fixed blurred orbs, and a 28px dot grid.
- 17px root, so every rem-derived value — including breakpoints — runs 6.25% larger than Tailwind's default.
- Two typefaces only: Syne for headings and the monogram, Geist for everything else.
- Reveal-on-scroll everywhere, staggered 40–150ms by index.

## Colors

A cold, low-chroma blue-slate family — every token sits between hue 263° and 274° in OKLCH, so the whole palette is effectively one hue at eight lightnesses, which is why the page never looks colorful even though nothing in it is truly grey.

### Primary

- **Signal Blue** (`#6888c8`): The one pointing color. It marks the active nav item on mobile, the `R` in the JR monogram, the Hero role line, every section-title rule, focus rings, list bullets, the availability pulse dot, and every hover border warm-up (usually at 30–50% alpha). It is also the source hue for every glow in the system — every `rgba(104, 136, 200, …)` in the codebase is this color at low alpha. Used as a *fill or border tint*, not as body text.

### Secondary

- **Pale Sky** (`#a8b8e0`): The reading accent. Where Signal Blue points, Pale Sky is meant to be read: tech chip labels, certificate dates, education/institution lines, and the hover state of contact card values. It clears 7.42:1 on `storm-bg3`, which is why chip text is legible where Signal Blue text would not be.

### Neutral

- **Storm Ink** (`#0e1018`): The unconditional page ground and the browser `theme-color`. Floor zero. Never used on a card.
- **Cloud Deck** (`#181c28`): Floor one. Every resting card, article, skill badge, nav bar (at 80% with backdrop blur), and the monogram tile.
- **Thunderhead** (`#222838`): Floor two. Insets rather than surfaces — tech chips, icon wells, the active desktop nav pill, the certificate image bed, and skill-badge hover.
- **Hairline Indigo** (`#282f44`): The default 1px border on essentially every bounded element, plus the thin vertical rules that separate metadata.
- **Daybreak White** (`#e0e8f8`): Primary text. Headings, names, card titles, values. 15.43:1 on Storm Ink.
- **Overcast Grey** (`#8898b8`): Secondary text and the system's most-used foreground — body paragraphs, descriptions, uppercase micro-labels, inactive nav links, footer. 6.54:1 on Storm Ink, comfortably past AA.

### Named Rules

**The Storm-Only Rule.** Every surface, text, and border color must resolve to a `--storm-*` token. Generic Tailwind palette names (`violet-*`, `amber-*`, `slate-*`, `emerald-*`, `orange-*`, `sky-*`, `red-*`, `rose-*`, `blue-*`, `cyan-*`) are drift, not vocabulary. They are currently present in five files and every occurrence is a defect, not a precedent.

**The Two-Accent Rule.** `storm-accent` *marks* — borders, rings, icons, rules, dots, glows. `storm-accent2` *reads* — chip labels, dates, metadata values. Never swap the two jobs. The contrast math is why: the reading accent is 78% lightness, the marking accent is 63%.

**The Brand-Hex Exemption.** A raw hex outside the storm family is legitimate only when it is a third party's own identity color rendered at icon or chip scale — React `#61DAFB`, Flutter `#54C5F8`, GitHub `#24292e`/`#444d56`, and the vendor SVG fills in `SkillBadge.tsx` (Zod `#3E67B1`, Linear `#5E6AD2`, and the platform tiles). Everything else needs a token.

**The Ambient Ground Rule.** The page background is not a flat fill. It is Storm Ink plus three fixed layers: a 13%-alpha accent ellipse at the top right, a 9%-alpha ellipse at the bottom left, and a 28px dot grid at 8% alpha. Three additional blurred orbs (600px/500px/300px at 8%/6%/5% accent alpha) sit fixed behind the content. These layers are decorative, `pointer-events-none`, and must never be replaced by a solid color.

## Typography

**Display Font:** Syne (weights 600, 700, 800; loaded via `next/font/google` as `--font-display`, exposed to Tailwind as `font-heading`)
**Body Font:** Geist (loaded as `--font-sans`, applied to `html` by the base layer)
**Label/Mono Font:** None. `--font-mono` in the `@theme inline` block points at `--font-geist-mono`, which is **never defined anywhere in the project** — no mono face is loaded and no component uses `font-mono`. Treat it as a dangling token, not a slot to fill.

**Character:** Syne is wide, geometric and slightly eccentric at heavy weights — it makes headings feel constructed rather than typed, which is the whole argument of the page. Geist underneath it is neutral to the point of invisibility, which is correct: it is carrying dense bilingual technical prose and should not compete. The pairing is deliberately narrow — two faces, no third.

### Hierarchy

- **Display** (700, 3rem stepping to 3.75rem at `sm`, line-height 1.25, tracking -0.025em): Syne. Exactly one instance — the Hero `h1` carrying the name. The Contact heading is its only near-peer at 2.25rem/3rem.
- **Headline** (700, 1.875rem, line-height 1.2, tracking -0.025em): Syne. Every `SectionTitle` `h2`, always followed by a 3rem-wide, 1px Signal Blue rule 0.5rem beneath it.
- **Title** (600–700, 1rem, line-height 1.25): Syne. Card headings — project titles, education and internship roles. The featured project card steps to 1.25rem/700.
- **Lead** (400, 1rem, line-height 1.625): Geist. Hero description, section subtitles, and the Contact intro paragraph (which steps to 1.125rem). Constrained by `max-w-md` or `max-w-2xl` rather than by a `ch` measure.
- **Body** (400, 0.875rem, line-height 1.625): Geist, Overcast Grey. The workhorse — every card description, bio paragraph, and bullet. Detail lines drop to 80% opacity as a second tier rather than to a third color.
- **Label** (600, 0.75rem, uppercase, tracking 0.05em): Geist, Overcast Grey. Eyebrow labels — "FEATURED", "EDUCATION", "EXPERIENCE", contact channel names, skill category headings.

### Named Rules

**The Two-Face Rule.** Syne sets `h1`, `h2`, `h3` (enforced globally in the base layer) and the JR monogram. Geist does everything else — including every uppercase micro-label. A third family is not an option, and an uppercase label is never set in the display face.

**The 17px Root Rule.** `html` is 17px, not 16px. Every rem value in the system — sizes, spacing, radii, and Tailwind's own breakpoints — therefore renders 6.25% larger than the framework default. Always reason in rem; hardcoding px silently breaks the scale.

**The Rule-Under-Heading Rule.** A section heading is never alone. It always carries a 1px, 3rem-wide Signal Blue rule beneath it (a horizontally faded 4rem variant on the Contact heading). The rule is the section marker; the heading is just the words.

## Layout

A single-column spine, not a grid system. Every section is a `<section id>` with 1.5rem horizontal gutters and 6rem of vertical padding, wrapping a `max-w-5xl` (64rem ≈ 1088px at the 17px root) centered container. Nothing breaks that spine except the fixed decorative background layers and the fixed nav.

The nav is fixed to the top, transparent and borderless at rest, and transitions over 300ms to `storm-bg2` at 80% alpha with a `backdrop-blur-md` and a hairline bottom border once scroll passes 50px. Because it overlays content, every `section[id]` carries `scroll-margin-top: 80px` so anchor jumps land cleanly. Section IDs are Spanish (`sobre-mi`, `proyectos`, `experiencia`, `certificados`, `contacto`) and are tracked by a per-section IntersectionObserver at 0.3 threshold with a `-80px 0px -40% 0px` root margin to drive the active-link state.

Internal grids are all simple two- or three-column splits that collapse to one:

- **Projects** — `gap-6`, one column, two at `sm`. The featured project spans the full row and internally splits `md:grid-cols-5` as a 2/5 visual + 3/5 content.
- **Skills** — `gap-10`, two columns at `sm`; badges inside wrap freely at `gap-2`.
- **Experience** and **About** — two columns at `md` (`gap-8` and `gap-12`/`gap-16` respectively).
- **Certificates** — `gap-5`, one → two at `sm` → three at `lg`.
- **Contact** — one → three at `md`, `gap-4` rising to `gap-5`.

The Hero is the only full-bleed moment: `min-h-screen`, 5rem top padding to clear the nav, and a `flex-col-reverse` that puts the portrait above the text on mobile and to the right of it from `md` up.

Spacing runs on Tailwind's 0.25rem step. The rhythm that actually recurs is 6rem between sections, 3rem below a section title, 1.5rem of card padding (2rem on the featured card, 1.25rem on standard cards), and 0.5–0.75rem inside chip rows.

### Named Rules

**The 5xl Spine Rule.** Every section is `max-w-5xl`, centered, 1.5rem gutters, 6rem vertical. A new section that invents its own width or rhythm breaks the page's only structural promise.

**The Rem Breakpoint Rule.** Breakpoints are rem-based and therefore scaled by the 17px root: `sm` = 680px, `md` = 816px, `lg` = 1088px. Test against those numbers, not against 640/768/1024.

## Elevation & Depth

**This system is essentially flat, and that is deliberate.** There is no shadow scale, no elevation ladder, and no ambient drop shadow anywhere at rest. Depth is produced by exactly two mechanisms: **tonal layering** (`storm-bg` ground → `storm-bg2` surface → `storm-bg3` inset) and **hairline borders** (a single 1px `storm-border` around every bounded element). A card is "above" the page because it is one tone lighter and outlined, not because it casts anything.

Shadows appear only as a *response*, never as a resting property, and when they do appear they are accent-tinted glows with heavy negative spread rather than black drop shadows — light pooling around an element, not an object floating over a surface. The only exception is the Hero's "Backend Dev" chip, which carries a stock `shadow-lg`; it is the single black-shadow instance in the codebase.

### Shadow Vocabulary

- **Card Hover Glow** (`box-shadow: 0 8px 24px -8px rgba(104, 136, 200, 0.12)`): Standard project cards on hover, paired with a 2px lift.
- **Certificate Halo** (`box-shadow: 0 0 32px -4px rgba(104, 136, 200, 0.15)`): Certificate cards on hover. Zero offset — a pure halo, no lift.
- **Contact Glow** (`box-shadow: 0 4px 16px -4px rgba(104, 136, 200, 0.2)`): Contact channel cards on hover; the strongest alpha in the system because it marks the page's single conversion target.
- **CTA Rest Glow** (`box-shadow: 0 0 20px -6px rgba(45, 77, 158, 0.5)`): The only shadow present at rest, under the Hero primary CTA.
- **CTA Hover Glow** (`box-shadow: 0 0 24px -4px rgba(52, 88, 184, 0.6)`): Its hover state — wider, brighter, still zero-offset.

### Named Rules

**The Glow-Not-Shadow Rule.** Depth is tone and hairline. If an element needs to feel raised, shadows are the wrong tool — step it a floor lighter or brighten its border. Where a shadow is genuinely warranted it must be an accent-tinted glow (`rgba(104, 136, 200, …)`), negative-spread, and triggered by state. Black drop shadows do not belong to this system.

**The Three-Floor Rule.** `storm-bg` → `storm-bg2` → `storm-bg3`. Three floors, no fourth. A surface that needs more separation than floor two provides gets a border or a glow, not a new background value.

## Shapes

Soft-rectangular throughout, with radius scaling by surface area. The whole scale derives from a single `--radius: 0.625rem`, multiplied to produce every step, so the family stays proportional if the base is ever tuned.

- **Gently rounded, small** (0.5rem, `rounded-md`): Inline atoms — tech chips, education/internship tags, nav links, small link buttons.
- **Rounded, control-scale** (0.625rem, `rounded-lg`): Interactive controls — CTAs, skill badges, certificate action links, the language toggle shell, the JR monogram tile, icon wells.
- **Softly rounded, card-scale** (0.875rem, `rounded-xl`): Standard cards — project cards, experience articles, About work cards.
- **Generously rounded, feature-scale** (1.125rem, `rounded-2xl`): Feature surfaces — the featured project card, certificate cards, contact channel cards, and the project monogram tile.
- **Pill** (1.625rem, `rounded-4xl`): The shadcn `Badge` primitive.
- **Circular** (`rounded-full`): Status badges, the Hero portrait and its two concentric halo rings, list bullets, the availability pulse, and every decorative orb.

Borders are always exactly 1px and always `storm-border` at rest. They never thicken; they change *color*, warming to `storm-accent` at 30–50% alpha on hover. The Hero portrait is the one place a heavier stroke appears (`ring-2` at 20% accent), and it reads as a lens rim rather than a border.

Clipping is used structurally: cards are `overflow-hidden` so the project visual, its dot-grid SVG, and the certificate image bleed to the card's own radius. The certificate image scales to 1.04 inside that clip on hover.

Recurring silhouettes worth preserving: the **concentric circle stack** around the Hero portrait (two hairline rings at -0.75rem and -1.5rem inset), the **top accent bar** on certificate cards (a 2px full-width issuer-colored strip), and the **24px SVG grid** that fills every project visual in that project's accent color at 20% opacity.

### Named Rules

**The Hairline Rule.** Every container is bounded by a 1px `storm-border`. Hover warms it toward the accent; it never gets thicker and it never becomes a fill edge.

**The Radius-Climbs-With-Area Rule.** `md` for inline atoms, `lg` for controls, `xl` for cards, `2xl` for feature surfaces, `full` for status. A radius that does not match its surface area reads as a mistake.

## Components

### Buttons

- **Shape:** Rounded to control scale (0.625rem), with 1.25rem × 0.625rem padding and 0.875rem semibold text.
- **Primary:** The Hero's "See projects" CTA is the only true primary in the system — a left-to-right deep-blue gradient (`#1a2d5c` → `#2d4d9e`) on white text, carrying the CTA Rest Glow. It is a hardcoded, in-family literal rather than a token, and it is the *only* sanctioned gradient fill.
- **Hover / Focus:** Gradient brightens (`#1f3570` → `#3458b8`), the button lifts 2px, and the glow widens — all over 150ms. Focus-visible draws a 2px ring in `#3458b8` and suppresses the native outline.
- **Secondary / Ghost:** Transparent with a `storm-border` hairline and Overcast Grey text. Hover warms the border to 40% accent, brings text to Daybreak White, and lifts 2px. Focus-visible rings in Signal Blue. Smaller link-buttons inside cards (GitHub, "View certificate") follow the same grammar at 0.75–0.875rem on a `storm-bg3` bed.
- **Note:** `components/ui/button.tsx` and its `cva` variants are the untouched shadcn primitive wired to the generic `--primary`/`--secondary` tokens. It is **not** part of the storm system and is not used by any section; the real buttons are hand-written anchors.

### Chips

- **Tech chip:** `storm-bg3` bed, 1px `storm-border`, 0.5rem radius, 0.5rem × 0.125rem padding, 0.75rem medium Pale Sky text. Used for every stack tag on project cards and every curriculum tag in Experience. Static — no hover, no selected state.
- **Status badge:** Fully round, 0.625rem × 0.125rem padding, 0.75rem medium. The on-system variant is 10%-alpha accent fill, 20%-alpha accent border, Signal Blue text. Three sibling variants (`done`, `internship`, `client`) currently use off-token hues and are flagged below.
- **Issuer badge:** Fully round with a 1.5px leading dot, sitting absolutely at the top-right of a certificate image over a 90%-alpha dark bed. Per-issuer color; currently off-token.

### Cards / Containers

- **Corner Style:** 0.875rem for standard cards, 1.125rem for feature cards.
- **Background:** `storm-bg2` flat. The Contact card is the one exception — a `to-bottom-right` gradient from `storm-bg2` down to `storm-bg`, which reads as a very slight vignette rather than as a gradient.
- **Shadow Strategy:** None at rest. On hover, the appropriate glow from the Elevation vocabulary (see above).
- **Border:** 1px `storm-border`, warming to 30% accent (project), 40% (certificate) or 50% (contact) on hover.
- **Internal Padding:** 1.25rem on standard project cards and certificate bodies, 1.5rem on Contact and Experience cards, 2rem on the featured project card at `md` and up.
- **Behavior:** Every card is an `article` or an `a`, reveals on scroll, and — except certificates, which only halo — lifts 2px on hover over 200–500ms with an explicitly enumerated `transition-[…]` property list rather than `transition-all`.

### Inputs / Fields

**None exist.** The site is static with no forms, no text inputs, and no validation states. The `--input`, `--ring` and `aria-invalid` tokens present in `globals.css` and the shadcn variants are unused scaffolding. Do not document, style, or invent input treatments until a real form exists.

### Navigation

- **Style:** Fixed full-width header, transparent and borderless above 50px of scroll, then `storm-bg2` at 80% alpha with `backdrop-blur-md` and a hairline bottom border. Inner nav is `max-w-5xl`, 1.5rem × 1rem padding.
- **Typography:** 0.875rem Geist for links; the monogram is 0.875rem bold Syne with -0.025em tracking.
- **Default / Hover / Active:** Links rest as Overcast Grey on a transparent bed with a transparent 1px border (so the active state does not shift layout). Hover brings text to Daybreak White over a 50%-alpha `storm-bg3`. Active fills `storm-bg3` with a visible `storm-border` and Daybreak White text.
- **Mobile:** Links collapse behind a hamburger; the panel animates `max-h` 0 → 24rem with opacity over 200ms and reveals a hairline top border. Mobile links use a different active treatment — Signal Blue text at medium weight instead of a filled pill.
- **Language toggle:** A two-button ES/EN segmented control in a `storm-bg2` shell with a 0.5rem-radius `storm-bg3` thumb on the selected side, `aria-pressed` on both buttons.

### The JR Monogram

The brand mark and a durable commitment. A 2.25rem square tile, 0.625rem radius, `storm-bg2` fill, `storm-border` hairline, containing "JR" in bold Syne where **J is Daybreak White and R is Signal Blue**. On hover the tile's border warms to 40% accent over 200ms. It is the only place the accent appears as a text color at small size on `storm-bg2` — which is legible; the same treatment on `storm-bg3` would not be.

### The Project Visual

The signature custom component. Every project card is headed by a generated 13rem-tall panel (or a 2/5 column on the featured card) built entirely from that project's `accentColor`:

1. A `135deg` linear gradient from the accent at ~9% alpha to transparent at 60%.
2. A full-bleed SVG `<pattern>` of 24px grid lines stroked at 0.5px in the accent, at 20% opacity.
3. Two blurred accent circles — a 8rem orb bleeding off the top-right at 20% opacity with a 2xl blur, and a 4rem orb at the bottom-left at 10% with an xl blur.
4. A centered 3.5rem tile at 1.125rem radius holding the project's initials in bold Syne, with the accent at 25% alpha as border, 8% as fill, and full strength as text, the whole tile at 60% opacity.

Two of the four project accents are on-brand (`#6888c8` = Signal Blue; `#54C5F8` = Flutter's identity color, a sanctioned brand hex). The other two are generic Tailwind literals and are flagged below.

### The Reveal Pattern

Not a component, but the most-repeated behavior in the system. Two distinct mechanisms coexist:

1. **CSS-animation reveals.** `.animate-fade-up` (0.6s, opacity 0→1 plus 20px rise) and `.animate-fade-scale` (0.7s, opacity plus 0.95→1 scale), both `ease-out both`, staggered by inline `animationDelay`. Used by the Hero (100/200/300/350ms), project cards (`index × 150ms`) and skill badges (`index × 40ms`). `.animate-float` (5s, ±10px, infinite, 1s delay) carries the Hero portrait.
2. **React-driven reveals.** A shared `useInView` IntersectionObserver hook (`lib/use-in-view.ts`, threshold 0.05–0.2, latches true and never resets) toggles `opacity-0 translate-y-5` → `opacity-100 translate-y-0` with a 300–400ms `ease-out` transition and an inline `transitionDelay` stagger of 80–100ms per index. Used by every section wrapper, About work cards, Experience columns, certificate cards and contact cards.

Hover timing is layered by intent: 150ms for direct interaction (links, buttons, chips), 200ms for card borders and the mobile menu, 300ms for the nav bar and inner card details, 500ms for the Contact card's atmospheric transitions.

### Named Rules

**The Lift-Two Rule.** An interactive surface rises exactly 2px on hover and nothing else moves. Certificates are the deliberate exception — they halo without lifting, because their image already scales.

**The Enumerated-Transition Rule.** Cards animate a named property list (`transition-[border-color,transform,box-shadow]`), not `transition-all`. Adding a property to a card means adding it to that list.

## Do's and Don'ts

### Do:

- **Do** resolve every color to a `--storm-*` token. If a new UI need has no token, tune the storm palette rather than reaching into Tailwind's default palette.
- **Do** keep the ground dark and unconditional. There is no light mode, no theme toggle, and no `prefers-color-scheme` branch anywhere in this project.
- **Do** use Overcast Grey (`#8898b8`) for secondary prose on the dark ground — it measures 6.54:1 and is safe at any size.
- **Do** use Pale Sky (`#a8b8e0`) for any accent-colored *text* that sits on `storm-bg3` — it measures 7.42:1 on that bed.
- **Do** build depth by stepping one tonal floor and adding a 1px `storm-border`, then let hover warm that border to 30–50% accent.
- **Do** lift interactive surfaces exactly 2px on hover and pair the lift with an accent-tinted, negative-spread glow.
- **Do** stagger scroll reveals by index — 40ms for dense badge grids, 80–100ms for cards, 150ms for large project cards.
- **Do** reason in rem. The root is 17px, so `max-w-5xl` is 1088px and `md` fires at 816px.
- **Do** restore a visible focus indicator every time `focus-visible:outline-none` is used. The established replacement is `focus-visible:ring-2 focus-visible:ring-storm-accent`.
- **Do** inline third-party brand SVGs at their own identity hex — React `#61DAFB`, Flutter `#54C5F8`, GitHub `#24292e`/`#444d56`, and the vendor fills in `SkillBadge.tsx` are correct and intentional.
- **Do** set headings in Syne via `font-heading` and everything else in Geist, including uppercase micro-labels.

### Don't:

- **Don't** introduce generic Tailwind palette colors. This drift is real and currently present in the codebase; every listed occurrence is a defect to consolidate into the storm palette, not a pattern to copy:
  - `components/sections/Contact.tsx` lines 60, 67, 74 — `from-red-500 to-rose-500`, `from-blue-500 to-cyan-500`, `from-slate-400 to-slate-600` as per-channel hover washes.
  - `components/sections/Certificates.tsx` lines 13–26 — the `issuerConfig` map, using `orange-*` (Udemy), `sky-*` (Tecsup) and `violet-300`/`violet-400`/`violet-500`/`violet-950` (DevTalles).
  - `components/ui/ProjectCard.tsx` lines 30, 32, 42, 48 — `emerald-*` and `amber-*` status badges, `slate-*` for the Next.js version button.
  - `components/sections/Experience.tsx` line 123 — `amber-500`/`amber-400` on the internship year pill.
  - `data/projects.tsx` lines 174 and 232 — raw `#f59e0b` and `#10b981` project accent colors (these are Tailwind amber-500 and emerald-500 by hex, not brand identity colors, so the Brand-Hex Exemption does not cover them).
- **Don't** put Signal Blue (`#6888c8`) text on Thunderhead (`#222838`). That pair measures **4.16:1**, below AA for normal text. No single className in the codebase currently produces it, so this is a hazard to avoid rather than an existing violation — but `text-storm-accent` on a `bg-storm-bg3` surface is one careless edit away. Use Pale Sky for accent text on that bed.
- **Don't** ship a React-driven scroll reveal without a reduced-motion guard. The `prefers-reduced-motion` block in `app/globals.css` covers **only** `.animate-fade-up`, `.animate-fade-scale` and `.animate-float`. The `useInView` opacity/translate transitions used by every section wrapper, About, Experience, Certificates and Contact are **not covered** and will still animate for users who asked for less motion. This is a known, currently-unclosed gap.
- **Don't** use `focus-visible:outline-none` without a replacement ring. `components/layout/Nav.tsx` line 76 does exactly this on the JR monogram link, leaving it with no visible keyboard focus indicator.
- **Don't** add a light theme, a `.dark`-class dependency, or any `prefers-color-scheme` branching. The `.dark` block in `globals.css` is inert shadcn scaffolding; treat it as legacy, not as a second theme to maintain.
- **Don't** add black drop shadows or a fourth tonal floor. If `storm-bg3` is not enough separation, add a border or a glow.
- **Don't** use `transition-all` on cards. Enumerate the animated properties.
- **Don't** add a monospace font on the strength of the `--font-mono` token — it references `--font-geist-mono`, which is never defined. Either load a real face deliberately or leave the slot empty.
- **Don't** style or extend `components/ui/button.tsx`, `badge.tsx`, `card.tsx`, `separator.tsx` or `tooltip.tsx` as if they were the design system. They are unused shadcn primitives wired to the generic `--primary`/`--muted` tokens; the storm components are hand-written.
- **Don't** invent input, form, or validation styling. No form exists, and the `--input`/`--ring`/`aria-invalid` tokens are unused scaffolding.
- **Don't** add a second gradient fill. The Hero CTA is the only sanctioned one; the Contact card's `storm-bg2 → storm-bg` wash and the Contact heading rule are the only other gradients, and both are near-invisible by design.

<!-- PENDING USER CONFIRMATION

Per document.md Step 3, the following are creative choices that cannot be auto-extracted
from code. Each slot below is filled in the document above with the option best supported
by the evidence; the alternatives are listed here for the user to confirm or swap.

1. CREATIVE NORTH STAR  — currently: "The Storm Console"
   a) "The Storm Console"   — the palette is literally named "Paleta Tormenta" in
      globals.css; the dot grid, hairline structure and single blue signal read as a
      dark instrument panel. Strongest evidence tie: it names what the code already
      calls itself.
   b) "The Overcast Grid"   — leans harder on the 28px dot grid and 24px SVG project
      grids as the defining motif, and on the two fixed atmospheric glows as weather.
      More atmospheric, less about precision.
   c) "The Night Watch"     — leans on mood and restraint (calm dark, low chroma, quiet
      motion) rather than on instrumentation. Warmest of the three; weakest tie to the
      engineering-grid evidence.

2. OVERVIEW MOOD ADJECTIVES — currently: "composed, atmospheric, engineered, low-noise"
   a) composed / atmospheric / engineered / low-noise  — balances the ambient glow
      layers against the hairline precision. Covers both halves of the system.
   b) quiet / technical / disciplined / cold           — sharper and more engineering-
      forward; drops the atmospheric half, which is a real and prominent part of the
      implementation.
   c) calm / nocturnal / precise / spacious            — foregrounds the 6rem rhythm and
      dark ground; understates the grid and hairline vocabulary.
   NOTE: no visual anti-reference is recorded, because PRODUCT.md explicitly voids the
   earlier note that treated the current look as one. Confirm that this stays empty.

3. COLOR CHARACTER NAMES — currently the "storm weather" set
   a) Storm Ink / Cloud Deck / Thunderhead / Hairline Indigo / Signal Blue / Pale Sky /
      Daybreak White / Overcast Grey
      — keeps every name inside the incumbent storm metaphor, so the names reinforce
      the token prefix they describe.
   b) Midnight Slate / Raised Slate / Elevated Slate / Divider Indigo / Signal Blue /
      Muted Periwinkle / Ice White / Steel Grey
      — more literal and easier for a newcomer to map to a hex, but abandons the
      metaphor the codebase already established.
   c) Deep Overcast / Low Cloud / High Cloud / Seam / Beacon / Haze / First Light /
      Drizzle
      — most evocative and most memorable, least self-explanatory. Best if the North
      Star lands on option 1b or 1c.

4. ELEVATION PHILOSOPHY — currently: "flat by tonal layering; glow, not shadow"
   a) Flat, tonal-layered, glow-on-state  — matches the code exactly: no resting shadow
      except one CTA, three tonal floors, all shadows accent-tinted and hover-only.
   b) Layered                             — accurate about the three floors but implies
      a shadow ladder the project does not have.
   c) Lifted                              — not supported; nothing in the system floats
      at rest. Listed only for completeness.

5. COMPONENT PHILOSOPHY — currently: "quiet instruments"
   a) "Quiet instruments — hairline-defined, they answer by warming their edge rather
      than by lifting off the page."  — matches the border-warm + 2px-lift grammar.
   b) "Refined and restrained."   — safe and true, but generic; gives an AI consumer
      less to act on.
   c) "Precise and unshowy."      — closest to the PRODUCT.md anti-fluff voice, but
      describes the copy more than the components.

-->
