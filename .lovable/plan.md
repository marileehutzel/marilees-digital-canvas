

## Update Skills Cards to Use Global Tailwind Heading Standards

### Current Problem
The skills cards have typography inconsistency:
- **Headers**: Using `<h3>` which inherits global style `text-2xl md:text-3xl` (too large for small cards)
- **Descriptions**: Using `text-sm` override (14px) which breaks from the global paragraph standard

### Solution: Use Semantic Heading Levels

Switch to heading levels that match the card context using your established global styles:

| Element | Current | Change To | Global Style Applied |
|---------|---------|-----------|---------------------|
| Card header | `<h3>` | `<h6>` | `text-base md:text-lg font-medium` |
| Card description | `<p className="text-sm">` | `<p>` (no override) | Inherits global `text-lg md:text-xl` |

### Why h6?
Looking at your global typography hierarchy in `index.css`:
- `h5`: `text-lg md:text-xl font-medium` - Still fairly prominent
- `h6`: `text-base md:text-lg font-medium` - Perfect for compact card headers

### Code Changes

**File: `src/pages/About.tsx`**

Update all 10 skill cards from:
```tsx
<h3 className="font-semibold text-foreground mb-2">Skill Name</h3>
<p className="text-sm text-muted-foreground">Description</p>
```

To:
```tsx
<h6 className="mb-2">Skill Name</h6>
<p>Description</p>
```

### Benefits
- Headers now use `h6` global style: `text-base md:text-lg font-medium text-foreground`
- Descriptions inherit global `p` style: `text-lg md:text-xl text-muted-foreground font-serif leading-relaxed`
- Removes inline overrides in favor of centralized typography
- Future typography changes in `index.css` will automatically apply to these cards
- Maintains proper semantic HTML hierarchy (h2 section title > h6 card titles)

### Visual Result
- **Header**: 16px base / 18px on md screens (down from 24px/30px)
- **Description**: 18px base / 20px on md screens (up from 14px)
- Better balance between header and description text sizes

