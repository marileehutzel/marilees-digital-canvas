

## Move Card Shadow to Match Square Image

Move the shadow classes from the card wrapper to the image container so the shadow aligns with the square image boundaries.

### Changes

**File: `src/components/ProjectCard.tsx`**

**Line 19:** Add shadow classes to the image container
```tsx
<div className="aspect-square overflow-hidden bg-muted max-w-[200px] mx-auto shadow-card hover:shadow-elegant transition-all duration-500">
```

**Line 31-32:** Remove shadow classes from the wrapper
```tsx
const commonClasses =
  "group block relative overflow-hidden rounded-1xl bg-card hover:scale-[1.02]";
```

### Result
The shadow will now be cast by the image container element (which is square and max-w-[200px]), making the shadow align perfectly with the image edges.

