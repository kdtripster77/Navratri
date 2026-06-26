# Krishna: The Final Night — Landing Page

A premium, invite-only ticket landing page for a 9-hour immersive Navratri
experience, ending in Maharaas. Built with React, Tailwind CSS, and Framer
Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

The output is written to `dist/` — deploy that folder to any static host
(Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc).

## Project structure

```
src/
  components/
    NavBar.jsx          Floating header, glassmorphic on scroll
    Hero.jsx            Full-screen hero, countdown timer, CTA
    Story.jsx           Emotional narrative section
    NineExperiences.jsx Horizontal-scroll cards for the 9 zones
    DigitalPass.jsx      The signature animated access-card element
    Inclusions.jsx       "What your pass includes" grid
    Venue.jsx            Secret farm location section
    LimitedPasses.jsx    500-pass counter + CTA
    InnerCircle.jsx       ₹11,000 upgrade tier
    BookingForm.jsx       Validated form + success modal
    Footer.jsx
    PeacockFeather.jsx    Reusable ambient SVG motif
    ParticleField.jsx     Reusable twinkling-dust ambience
    Reveal.jsx            Scroll-reveal wrapper (Framer Motion)
    Eyebrow.jsx           Small tracked-out section label
  data/
    experiences.js        Copy + icon mapping for the 9 experiences
  index.css               Design tokens as CSS (glass, glow, sheen, dot-grid)
tailwind.config.js        Color/typography tokens (void, moonlight, gold, peacock)
```

## Design tokens

- **Colors** — `void` (deep indigo background), `moonlight` (white/silver
  text), `gold` (muted gold accents/CTAs), `peacock` (teal accents).
- **Type** — Cormorant (display/serif, used for all headlines) + Inter
  (body/UI). Eyebrow labels use Inter at wide letter-spacing.
- **Signature element** — the Digital Pass card in `DigitalPass.jsx`: a
  glassmorphic card with a slow gold sheen sweep, mouse-tilt interaction,
  and a placeholder QR pattern.

## Wiring up real functionality

A few things are stubbed intentionally and need backend work to go live:

1. **Razorpay payment** — `BookingForm.jsx` currently simulates a network
   call with `setTimeout`. Replace that block with a call to your backend
   to create a Razorpay order, then open Razorpay Checkout with the
   returned `order_id`. Anthropic/Claude cannot embed real payment
   credentials in a static front end.
2. **Live passes-remaining counter** — `LimitedPasses.jsx` uses a
   client-side starting number that ticks down on a timer for visual
   effect. Replace `STARTING_REMAINING` and the interval with a fetch to
   your real inventory endpoint.
3. **QR codes on the Digital Pass** — `DigitalPass.jsx` renders a
   placeholder pattern. Swap in a real QR-generation library (e.g.
   `qrcode`) once you have a per-guest Journey ID to encode.
4. **Countdown target date** — set in `Hero.jsx` as `EVENT_DATE`. Update
   to the confirmed event date/time.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations collapse to near-instant).
- All interactive elements have visible focus states.
- Horizontal scroll section is also fully keyboard/touch scrollable, with
  optional arrow buttons on larger screens.
- Form validates name, mobile (10-digit Indian format), email, and city
  client-side before allowing submission.
