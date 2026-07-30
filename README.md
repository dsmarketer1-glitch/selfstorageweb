# Self Storage 214 — Crowley, TX Website

A complete, fully-functional marketing & booking website for **Self Storage 214**, a self-storage facility at **1520 Bean Dr, Crowley, TX 76036** (phone **(682) 200-3353**). Built with **React 19**, **React Router 7**, and **Vite**. No backend required — all data is mocked client-side so the site runs entirely in the browser.

The brand logo lives at `public/logo.png` (served at `/logo.png`) and appears in the header, footer, and browser tab icon.

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Pages

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Hero search, how-it-works, storage types, stats, testimonials, size estimator, mobile app, referral, supplies, FAQ |
| `/locations` | Locations | Region filter, live search, facility cards, move-in specials, resources, FAQ |
| `/locations/:id` | Location detail | Amenities, filterable unit list, why-store-here, landmarks, office hours, reviews |
| `/climate-controlled` | Climate Controlled | Benefits, protection standards, what-needs-it, nearby facilities, FAQ |
| `/vehicle-storage` | Vehicle & RV Storage | Vehicle types, storage options, features, FAQ |
| `/business-storage` | Business Storage | Use cases, benefits, advantages, FAQ |
| `/security` | Security | Five pillars, app access, hardened infrastructure, testimonials, FAQ |
| `/size-guide` | Size Guide | Interactive size selector, comparison table, packing tips |
| `/about` | About Us | Story, stats, mission, standards, leadership team, values |
| `/faq` | FAQ | Categorized accordion (renting, access, billing, security) |
| `/contact` | Contact | Working contact form with success state, contact methods |
| `/account` | My Account | Sign-in / sign-up form + mock customer dashboard |
| `*` | 404 | Friendly not-found page |

## Architecture

```
src/
  components/   Header, Footer, Faq (accordion), CTA, ScrollToTop
  data/         locations.js — shared facility/unit data
  pages/        one component (+ scoped .css) per route
  index.css     design system: tokens, utilities, buttons, cards
  pages/pages.css  shared page section styles (heroes, splits, grids)
```

### Design system
- Brand palette driven by CSS custom properties (`--primary` amber, `--secondary` navy).
- Reusable utility + component classes (`.btn-primary`, `.card`, `.feature-grid`, `.subhero`, …).
- Fully responsive with a mobile nav drawer, dropdown menu, and breakpoints at 960px / 640px / 540px.

### Functional behavior (no backend)
- Home & Locations search navigate / filter facilities in real time.
- Location detail filters units by size.
- Size Guide selector updates the detail panel interactively.
- Contact form and newsletter validate and show success states.
- Account page toggles between auth and a mock dashboard.

Icons via [`lucide-react`](https://lucide.dev). Fonts via Google Fonts (Inter).
