# DESIGN.md - Legenda Fastfood

## Context

- Artifact type: ecommerce landing with mobile ordering flow
- Positioning: direct, local, energetic fastfood
- Audience: mobile-first visitors ordering shawarma, burgers, combos and drinks
- Primary action: add food to cart and review the order
- Adjectives: hot, simple, quick, generous, tactile
- Aesthetic essence: hot, clean, direct
- Single-minded proposition: food is visible, choices are fast, the cart never surprises the user
- Mode: light | Density: balanced
- Constraints: plain HTML/CSS/JS, WCAG AA targets, no sticky header/cart on mobile

## Aesthetic

- Direction: product-first orange fastfood UI with white cards and real food cutouts
- Defining trait: food images sit on transparent backgrounds so the card surface stays continuous
- Signature move: add-to-cart motion sends a small orange token into the header cart counter

## Typography

- Display: Russo One | source: Google Fonts | license: OFL
- Body: Manrope | source: Google Fonts | license: OFL
- Scale: base 16px, clear display jumps for hero and section headings
- Weights: body 500/600/700/800/900, display 400
- Tracking: 0, no negative letter spacing

## Color

- Strategy: warm orange is the food signal, white surfaces carry product clarity, dark brown is used for controls
- Palette:
  - bg: #fffaf3
  - surface: #fffefd
  - fg: #21160f
  - muted: #786b61
  - border: rgba(67, 42, 24, 0.09)
  - accent: #ff5a00
  - accent-dark: #e14500
  - accent-soft: #fff0e6
  - error: #dc1f18

## Spacing, Radius, Shadow

- Spacing base: 4px, grouped controls use tight 8-12px gaps, sections use larger 46-74px gaps
- Radius: pill for controls, 20-28px for large food surfaces
- Shadow approach: soft elevation on white product cards, no border-plus-heavy-shadow stacking

## Layout and Composition

- Mobile-first; 591px viewport from user screenshots is treated as a target width
- Header is static in the page flow, not sticky
- Hero image must never exceed viewport width
- Category shortcuts become a two-column grid on mobile and a five-column grid on tablet/desktop
- Menu filters become a compact two-row grid on mobile instead of horizontal scrolling
- Desktop cart is a right drawer opened from the header cart icon

## Components and States

- Buttons: primary filled orange, secondary white/outlined, icon-only cart and menu buttons have aria labels
- Cart drawer: opens from the right, closes by close button, backdrop, or Escape
- Cart counter: visible numeric badge in the header
- Checkout: button does not call a phone number; it keeps the user in the cart flow
- Focus: visible box-shadow ring

## Motion

- Motion communicates state and causality only
- Add-to-cart creates a small transform-only token flight to the cart counter
- Drawer uses right-edge transform with a sheet easing
- Reduced motion skips token flight and keeps state feedback

## Imagery

- Product assets use transparent edge-cleaned PNGs
- Promo uses a composed shawarma + fries + drink image instead of the previous shifted banner
- Every catalog SKU has its own transparent product image so repeated cards do not share the same photo
- Promo imagery is a product stack on the site surface, not food placed on an orange rectangle
- Avoid: white image boxes inside white cards, generic glow, decorative stock effects

## Accessibility

- Touch targets are 44px where practical
- Icon-only buttons have accessible names
- Cart drawer supports Escape close and focus return to the trigger
- Text contrast uses dark brown on white and white on orange

## Slop Audit

- Date: 2026-07-04 | Result: fixed mobile overflow, sticky chrome, decorative sheen, old phone-link checkout, and white-box image artifacts
- Remaining watch item: food photography is generated/cropped from supplied references, so final brand shoot assets would improve production realism

## Changelog

- 2026-07-04: Reworked mobile layout, cart drawer, product image treatment, promo image and purposeful cart motion.
- 2026-07-05: Added unique transparent product imagery for all catalog positions and redesigned the daily promo card.
