# design.md: BrightPath Tutorials design guide

> Use this guide for visual decisions so every page feels like part of the same brand.

## Brand identity
**Brand:** BrightPath Tutorials

**Personality:** modern, premium, professional, welcoming, and trustworthy. The site should feel polished and distinctive—not like a generic school website.

## Colour palette
Deep purple is the primary brand colour. Blue is not part of this identity. Use lavender and white as supporting colours; reserve gold for small, deliberate accents.

| Name | Hex | Use |
|---|---|---|
| Deep Purple | `#32145A` | Primary brand colour, headings, body text on light surfaces, navigation, and primary buttons |
| Lavender | `#F2ECF7` | Soft section and card surfaces; pair with Deep Purple text |
| White | `#FFFFFF` | Main page and card background; pair with Deep Purple text |
| Soft Lavender | `#D9CCE8` | Subtle borders and dividers only; not text or the sole indicator of state/focus |
| Gold | `#8A5A00` | Sparing accent for a small highlight, icon, or label; avoid using it as a large surface |

Contrast checks: Deep Purple on White is 15.18:1 and on Lavender is 13.10:1. Gold on White is 5.93:1 and on Lavender is 5.11:1. These text pairings meet WCAG AA for normal text. Soft Lavender on White is only 1.53:1, so use it decoratively and never rely on it alone to communicate meaning. Avoid blue-based colours and avoid Deep Purple text on Gold, which does not provide sufficient contrast.

## Typography
Use two font families intentionally across the whole site:

- **Headings:** Geist Serif, generally semibold or bold, for a refined editorial character.
- **Body and interface:** Geist Sans for body copy, navigation, buttons, forms, labels, and all other interface text.

Use `Georgia, serif` as the heading fallback and `system-ui, sans-serif` as the body fallback. Do not introduce another display or script font.

### Type scale
Mobile-first sizes; scale headings up on wider screens while keeping the hierarchy consistent:

- H1: 32px mobile, up to 48px desktop
- H2: 26px mobile, up to 36px desktop
- H3: 20px mobile, up to 24px desktop
- Body: 16–18px with 1.5–1.6 line height
- Small text: 14px minimum

Keep paragraphs comfortably readable, with line lengths around 70 characters or fewer.

## Logo concept
Use the agreed concept: an open book with a rising sun emerging from it and an upward path integrated into the symbol. It should communicate learning, growth, direction, and achievement. Keep the mark simple and recognisable at small sizes, suitable for the website header, footer, and other brand materials. It should remain legible in a single-colour Deep Purple version; a small Gold sun detail may be used sparingly.

## Layout, surfaces, and controls
- Design mobile-first at 360px wide; interactive targets should be at least 44px tall/wide.
- Use a spacing scale of 8, 16, 24, 40, and 64px. Prefer flexible layouts and vary section composition rather than repeating identical card grids.
- Use restrained 10px corners for cards and buttons. Keep shadows minimal; use a subtle 1px Soft Lavender border where appropriate.
- Primary buttons use a Deep Purple background with White text. Secondary buttons use a White background with a Deep Purple border and text. Keep labels direct and clear, such as “Register”, “Chat with us”, and “Get directions”.
- Keep body text Deep Purple on White or Lavender surfaces. Use Gold only where its contrast remains clear; do not use the low-contrast Soft Lavender as text.

## Signature layout
Present the timetable like a printed exam timetable: an orderly, easy-to-scan grid with clear day and programme labels. Use Deep Purple, Lavender, and White for its structure; no green or blue accents.

## Homepage hero
Keep the homepage hero static for now. Do not use video backgrounds, animated hero visuals, moving illustrations, or other motion-based hero elements. Make it attractive through typography, layout, colour, and appropriate static design elements. This decision may be revisited later.

## Imagery
Imagery decisions are intentionally deferred. Do not select or add photography, stock imagery, AI-generated imagery, or tutor/staff photographs until this is addressed separately. Do not present assumptions about actual BrightPath tutors or students as confirmed facts. Any future imagery must follow the project’s factual and representation rules, including the PRD restriction against presenting AI images as real students or real results.

## Motion and accessibility
Keep the visual experience calm. The homepage hero remains static; do not add animation to it. Respect reduced-motion preferences for any non-hero interaction. Maintain readable type, visible keyboard focus, sufficient contrast, and clear labels across screen sizes.

## Writing tone
Use simple words, active voice, and sentence case. Be welcoming and professional without hype. Never promise exam scores, grades, or results, and never invent client facts.
