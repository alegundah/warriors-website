# DESIGN.md: Warriors

Design system for the Warriors Viking clan website (Projekt Vikingetogt). Read this before touching any UI in this repo.

## 1. Visual theme and atmosphere

Billboard above, catalog below. The page reads like a campaign poster carved on a shield board: a white canvas, near-black ink, and one red used sparingly like blood on snow. Photography (3D renders of the clan) carries the atmosphere; type carries the voice. Nothing is rounded. Nothing glows.

Dials: DESIGN_VARIANCE 8 (asymmetric, left-anchored, no centered hero), MOTION_INTENSITY 7 (hero entry, scroll reveals, one scroll-driven timeline, no scroll-jacking), VISUAL_DENSITY 3 (generous section spacing, py-24 to py-40).

## 2. Color palette and roles

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Canvas | `--color-canvas` | `#ffffff` | Page background |
| Canvas soft | `--color-canvas-soft` | `#f5f5f5` | Photo stage, alternate bands |
| Ink | `--color-ink` | `#111111` | Text, primary buttons, footer, nav on dark |
| Ink soft | `--color-ink-soft` | `#2a2a2a` | Ink hover |
| Ink muted | `--color-ink-muted` | `#6b6b6b` | Secondary text, eyebrows (4.5:1 on white) |
| Hairline | `--color-hairline` | `#d9d9d9` | 1px dividers on light |
| Hairline dark | `--color-hairline-dark` | `#333333` | 1px dividers on ink |
| Red | `--color-red` | `#d30005` | Primary CTA, the Next Raid band, key numerals, scroll progress |
| Red deep | `--color-red-deep` | `#9e0004` | Red hover and pressed |

Rules: one accent (red) for the whole page. Red never appears as a background except in the single "Next Raid" chapter band. No gradients, no pure `#000000`, no outer glows, no drop shadows (depth comes from ink/white polarity and 1px hairlines).

## 3. Typography

- Display: Bebas Neue (400), uppercase, `leading-[0.9]`, `tracking-[-0.01em]`. Utility: `.type-display`.
- Body: Barlow 400/500/600, 18px base, `leading-relaxed`.
- Scale (desktop / mobile): hero 144 / 64px; section display 96 / 56px; timeline year 72 / 48px; stat numeral 80 / 56px; h3 28 / 24px (Barlow 600); body 18 / 17px; eyebrow 12px uppercase tracking 0.18em.
- Emphasis only via weight within the same family. Never inject a serif word. Max 1 eyebrow per 3 sections.
- No em dashes or en dashes anywhere in copy. Use a comma, a full stop, or a plain hyphen.

## 4. Component styling

- Buttons: `.btn` (48px tall, uppercase 12px tracked label, radius 0, `active:scale-[0.97]`). Variants: `.btn-ink`, `.btn-red` (primary CTA only), `.btn-outline`, `.btn-outline-light`. Labels max 3 words, never wrap.
- Cards: radius 0, 1px hairline border, 24px padding, no shadow. Use cards only when hierarchy needs them; otherwise `border-t` / `divide-y`.
- Inputs: 48px tall, 1px hairline, radius 0, red focus outline (2px, offset 3px).
- Icons: Phosphor (`@phosphor-icons/react`), weight `regular`, 20 or 24px, one family only. Decorative icons get `aria-hidden`.
- Images: `next/image`, edge-to-edge inside their frame, `object-cover`.

## 5. Layout

- Container `max-w-[1400px]`, gutters 20 / 32 / 48px.
- Sections: `py-24 md:py-32 lg:py-40`. Spacing ladder 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Layout families used (at least four, never two zigzags in a row): full-bleed hero with left-anchored stack; stat strip with `divide-x`; asymmetric gallery `2fr 1fr`; scroll timeline; full-bleed red band with oversized numerals; two-column offer / code; catalog grid; marquee; ink footer.
- Hero: `min-h-[100dvh]`, headline max 2 lines, subtext under 20 words, exactly one primary and one secondary CTA, no scroll cue.

## 6. Motion

- Only `transform` and `opacity` (and `clip-path` for image reveals).
- Entrances: `ease: [0.16, 1, 0.3, 1]`, 400 to 600ms, stagger 50 to 80ms. Hover and press: 150ms. Marquee: linear.
- `whileInView` with `viewport={{ once: true, margin: "-100px" }}`. Never a `window` scroll listener; use `useScroll` / `useTransform`.
- `<MotionConfig reducedMotion="user">` at the root plus `useReducedMotion()` for parallax and canvas effects. Reduced motion shows the final readable state.
- Max one marquee on the page. Every animation must have a one-sentence reason.

## 7. Do and do not

Do: lead with the render, left-align, let white space work, keep red rare, use real historical facts, cite sources.
Do not: center everything, add a third button shape, use rounded corners, use gradients or glows, use emoji as icons, use horned helmets, write "unleash" or "elevate", use fake round numbers.

## 8. Responsive

Breakpoints checked: 375, 768, 1024, 1440. Hero type steps 144 > 96 > 64. Stat strip stacks to 2 columns at 768 and 1 column at 375. Gallery collapses to a single column. Timeline year moves above content under 768. Touch targets at least 44px.
