# SymbAIote - Ethan's Build Plan

## Project Overview
**Brand:** SymbAIote - Streetwear for the AI-bonded
**Repo:** github.com/L7Shift/SymbAIote
**Live:** symbaiote.vercel.app
**Stack:** Next.js 14, TypeScript, Tailwind CSS v4

---

## Your Scope

### 1. Product Detail Pages (PDP)
Build full product pages at `/specimens/[slug]`

**Requirements:**
- Large product image gallery (main image + thumbnails if we add more shots)
- Product name, tagline, description (pull from existing data in ProductGrid.tsx)
- Price display
- Size selector (S, M, L, XL, 2XL)
- "Add to Cart" button
- Product details/specs section (material, fit, care instructions)
- Related products at bottom

**Routes to create:**
- `/specimens/the-bond`
- `/specimens/show-me-the-md`
- `/specimens/wtf-agent`
- `/specimens/agent-call-my-agent`

**Design notes:**
- Match existing brand aesthetic (dark theme, cyan/magenta accents)
- Reference globals.css for color variables and typography
- Keep the edge - this isn't generic e-commerce

---

### 2. Cart Functionality
Build a working cart system (client-side for now, no backend)

**Requirements:**
- Cart state management (React Context or Zustand)
- Add to cart from Quick View modal AND PDP
- Cart drawer/sidebar that slides in
- Show items: image, name, size, quantity, price
- Update quantity / remove items
- Cart total
- "Checkout" button (can be placeholder for now)
- Cart count in nav header (currently hardcoded to 0)
- Persist cart in localStorage

**Components to create:**
- `CartProvider.tsx` - Context for cart state
- `CartDrawer.tsx` - Slide-out cart UI
- Update `Navigation.tsx` - Wire up cart icon to open drawer

---

### 3. Social Media Profile Setup
Set up and brand SymbAIote's social presence

**Platforms to create:**
- Instagram (@symbaiote)
- X/Twitter (@symbaiote)
- TikTok (@symbaiote)

**Requirements:**
- Consistent handle across all platforms (try for @symbaiote, fallback @symbaiote_)
- Profile photo: Use brand logo
- Bio: Short, edgy, on-brand (e.g., "Streetwear for the AI-bonded. The bond is permanent.")
- Link in bio: symbaiote.vercel.app (update when custom domain ready)
- Cover/header images where applicable

**Content ideas for launch:**
- Product shots (we have model photos)
- Behind-the-scenes AI collaboration angle
- Tease drops with "SPECIMEN ###" format

**Brand voice:**
- Cryptic but not cringe
- Tech-native, not tech-bro
- Exclusive without being pretentious

---

## Existing Code Reference

**Product data lives in:** `src/components/ProductGrid.tsx`
```typescript
const products = [
  { id: '001', name: 'THE BOND', slug: 'the-bond', price: 62, ... },
  { id: '002', name: 'SHOW ME THE .MD', slug: 'show-me-the-md', ... },
  // etc
]
```

**Brand colors (globals.css):**
- `--cyan: #00e5ff`
- `--magenta: #ff2d7b`
- `--acid: #00ff88`
- `--void: #050508` (background)

**Fonts:**
- Headings: Bebas Neue
- Body: Chakra Petch
- Mono: Share Tech Mono

---

## Getting Started

```bash
cd /Users/kjleftwich/Desktop/claude-projects/SymbAIote/symbaite
npm install
npm run dev
# Opens at localhost:3000
```

---

## Git Workflow
- Branch off `main` for features
- PR back to `main` when ready
- Vercel auto-deploys on merge

---

## Questions?
Hit up Ken. Keep it edgy.
