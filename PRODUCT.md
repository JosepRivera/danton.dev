# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences in sequence, and the order is the constraint:

1. **Technical recruiters / HR (primary, first contact).** Screening candidates for
   backend internships and junior roles, mostly in Peru. They scan rather than read,
   do not open source code, and are looking for signals of seriousness, stack fit,
   and whether this person finishes things.
2. **Tech leads / senior developers (secondary, validation).** They arrive after the
   recruiter opens the door and they *do* read the GitHub repositories. They judge
   architecture and engineering decisions before they judge copy.

A page that only satisfies one of the two fails. The recruiter must be able to
qualify Josep in a fast scan; the lead must find real substance underneath it.

## Product Purpose

Personal portfolio for Josep Rivera, a final-year Software Design and Development
student at Tecsup (Lima). It exists to convert a cold visit into a professional
conversation about backend work.

Success is a single, concrete action: **the visitor reaches out on LinkedIn**
(`rivera-josep`). Email and GitHub are supporting paths, not the goal.

## Positioning

**Full Stack developer** who ships complete systems alone — data model through
deploy, backend through mobile — with the engineering discipline usually found only
on the backend side.

Confirmed 2026-08-01, replacing an earlier "Backend Developer" framing. The evidence
never supported the narrower title: Flutter mobile for FRK, native Kotlin
intercepting Yape/Plin notifications, React front ends for Tecsup, NestJS and FastAPI
backends throughout. He was calling himself backend while shipping full stack.

What stays from the narrower framing is the *standard*, not the scope: modular
architecture, real tests, documented contracts. The claim is engineering discipline
applied across the whole stack — not feature count, not stack name-dropping.

Defensible because the work backs it: Overload ships modular NestJS with Vitest
coverage and full Swagger; the Tecsup system runs against ~5,000 real pieces of
equipment across 20+ labs rather than seed data; FRK met a sub-3-second query
requirement under Scrum with a real client on the other side.

Adjacent portfolios from the same cohort can claim the same stack. They cannot
truthfully claim the same evidence.

## Operating Context

- Discovery is cold: a recruiter opens the URL with no prior context and decides
  within seconds whether to keep reading.
- The scan happens as often on mobile as on desktop.
- Validation happens off-site, in the linked GitHub repositories.
- The audience is bilingual: Peruvian recruiters read Spanish, while remote and
  international leads read English. Both must get a first-class version.

## Capabilities and Constraints

- Static marketing-style site on Next.js 16 / React 19 / Tailwind v4, deployed to
  Vercel at `rivera-dev.vercel.app`. No backend, no database, no auth.
- Full Spanish/English localization through `lib/i18n.ts`, toggled client-side.
  Every user-facing string must exist in both languages.
- Single sequential page (Hero → About → Projects → Skills → Experience →
  Certificates → Contact) plus a standalone `/contact` route.
- Dark theme only. There is no light mode and none is planned.
- **No CV download exists, deliberately.** The PDF and every link to it were removed
  from the site and purged from git history on 2026-08-01. Future work must not
  reintroduce a CV download, a "Download CV" button, or a résumé file.
- Certificates are served as PDFs from `public/certificates/`.
- Undecided: no formal accessibility standard has been committed to yet.

## Brand Commitments

Binding:

- Name **Josep Rivera**.
- Voice is first person, direct, and explicitly anti-fluff — the About section states
  outright that writing code for its own sake is not interesting. Marketing language
  and superlatives break character.
- Every factual claim in "Evidence on Hand".
- The existing section order: Hero → About → Projects → Skills → Experience →
  Certificates → Contact. Confirmed as sound; work refines sections in place.
- The `storm-*` identity and the dark ground. The incumbent visual world is
  **preserved**, not replaced.

**Route: refinement, not redesign.** A full redesign was explored on 2026-08-01 and
**rejected** by the user, who confirmed the current structure is sound and wants
section-by-section improvement instead. No visual-world replacement, no `new-work`
concept roll, no DESIGN.md replacement. Refinement inherits the incumbent identity;
any earlier note treating the current look as anti-reference is void.

Open to refinement inside that commitment, never to wholesale replacement:

- Exact palette values. The `storm-*` system stays; individual tones and the accent
  may be tuned, and the generic Tailwind colors that leaked in (`violet-*`, `amber-*`,
  `slate-*` decorative gradients) should be consolidated into it.
- Type. Both current faces carry a known flag — Syne is a training-data default for
  Persuade surfaces and Geist sits on the detector's overused-font list — so the
  pairing is a legitimate refinement target, not a fixed commitment.
- The "JR" monogram.
- Density, rhythm, motion, and hierarchy within each section.

## Surface Mode

**Persuade.** Chosen deliberately over the Experience default that portfolios usually
take. Josep is not a visual designer — the artifact is not the interface, it is the
software behind the links. The visitor arrives to decide, and success is an outbound
LinkedIn message. That makes the page an argument, not a gallery, and it unlocks the
bolder color strategies Experience-mode portfolios avoid.

## Evidence on Hand

**Paid client work (confirmed by CV, currently absent from the site):**

- **FRK Outdoors** — Flutter mobile app, freelance, Lima, April 2026. Field operators
  manage advertising assets, log incidents, and check structure status. Tuned queries
  to respond in under 3 seconds against a defined performance requirement. Delivered
  in a 2-developer Scrum team on 4-week sprints.
- **Restaurante Adrián** — full-stack management system, freelance, Aguaytía, March
  2026. NestJS + React; role-based sales, per-recipe automatic stock deduction,
  immutable cash closure. Claude API assistant answering business questions in natural
  language over Supabase, Holt-Winters demand forecasting, and a Kotlin Android app
  intercepting Yape/Plin notifications via `NotificationListenerService` with no
  third-party API dependency.

**Internship:**

- **Tecsup Inventory** — FastAPI backend and React/TypeScript front end, January 2026.
  Claude Vision label OCR and Groq Whisper voice dictation for phone-based asset
  registration; automated PDF/Excel reporting via ReportLab and OpenPyXL. 5,000+ items
  across 20+ labs. Public GitHub link.

**Personal projects:**

- **Overload** — NestJS/PostgreSQL/Prisma strength-training backend; progressive
  overload volume math, real-time PR detection, Epley 1RM estimation, Vitest, full
  Swagger. Public GitHub link. Finished.
- **SmartBite** — the productized form of the Restaurante Adrián system. The site
  currently labels it "in development" while the CV presents the client delivery as
  complete. **This conflict is unresolved and must be settled before either claim
  ships again.**

**Credentials:**

- Four certificate PDFs (Python 114h, Java 155h, English B1, React 46h) totaling
  275+ hours, all locally hosted and verifiable.
- Profesional Técnico en Diseño y Desarrollo de Software, Tecsup, in progress.
- English level B1, completed and certified.

**Known site/CV divergences to resolve, not paper over:**

1. The CV leads with **"Desarrollador Full Stack"** and direct client communication;
   the site leads with **"Backend Developer"**. Both are defensible, but they are
   currently telling two different stories to the same recruiter.
2. Two real freelance clients appear nowhere on the site — the strongest available
   evidence of shipping for people who pay.
3. A phone number exists on the CV. It is deliberately **not** recorded here and must
   not be added to this repository or the site.

Absent, and never to be fabricated: employment history beyond the roles above,
testimonials, user counts, performance benchmarks beyond the FRK 3-second
requirement, and awards.

## Product Principles

1. **Evidence over adjectives.** Every claim on the page must trace to a repository,
   a certificate, or the internship. If it cannot be linked, it does not ship.
2. **Scannable first, deep second.** The recruiter's fast pass and the lead's slow
   pass are both first-class; neither is served by burying the other.
3. **One conversion.** LinkedIn is the destination. Additional calls to action
   compete with it rather than complementing it.
4. **Bilingual parity.** Spanish and English are equals. A feature that only reads
   well in one language is unfinished.
5. **Honest status labels.** Work in progress stays labeled in progress. Overstating
   completeness is the fastest way to lose the lead who checks.
