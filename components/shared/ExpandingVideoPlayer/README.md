# Expanding Video Player with GSAP

A powerful scroll-triggered video player component using GSAP and ScrollTrigger for smooth, professional animations.

## Features

✅ **Smooth scroll animations** - GSAP optimized for 60fps performance  
✅ **Auto-play on scroll** - Video starts playing at 60% scroll progress  
✅ **Progress indicator** - Visual feedback bar at bottom  
✅ **YouTube integration** - Supports YouTube iframe API  
✅ **Responsive design** - Works on all screen sizes  
✅ **TypeScript support** - Fully typed with interfaces  

## Installation

GSAP is already installed in this project:

```bash
pnpm add gsap
```

## Usage

### Basic Implementation

```tsx
import { ExpandingVideoPlayer } from '@/components/shared/ExpandingVideoPlayer'

export default function Page() {
  return (
    <ExpandingVideoPlayer
      videoId="RWH7qeY726k"
      title="EntranceGateway Introduction"
    />
  )
}
```

### With Custom Threshold

```tsx
<ExpandingVideoPlayer
  videoId="RWH7qeY726k"
  title="My Video"
  threshold={0.3}  // Trigger at 30% visibility
  className="my-custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoId` | `string` | Required | YouTube video ID |
| `title` | `string` | `'Video Player'` | Video title for accessibility |
| `threshold` | `number` | `0.5` | Intersection observer threshold (0-1) |
| `className` | `string` | `undefined` | Additional CSS classes |

## How It Works

### GSAP Timeline

The component uses a GSAP timeline with ScrollTrigger:

```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: 'top 80%',    // Start when top hits 80% of viewport
    end: 'top 20%',      // End when top hits 20% of viewport
    scrub: 1,            // Smooth scrubbing with 1s delay
  },
})
```

### Animation Sequence

1. **Slide Down**: Video starts 100px above and slides to position
2. **Fade In**: Opacity animates from 0 to 1
3. **Shadow**: Box shadow intensity increases
4. **Progress Bar**: Updates based on scroll progress
5. **Auto-Play**: Triggers at 60% scroll progress

## Customization

### Change Animation Speed

Modify the `scrub` value in ScrollTrigger:

```typescript
scrub: 0.5,  // Faster response
scrub: 2,    // Slower, more dramatic
scrub: true, // Instant (no delay)
```

### Modify Easing

Change the `ease` property:

```typescript
ease: 'power1.out',  // Gentle
ease: 'power2.out',  // Medium (default)
ease: 'power3.out',  // Strong
ease: 'power4.out',  // Very strong
ease: 'elastic.out', // Bouncy effect
ease: 'back.out',    // Overshoot
```

### Adjust Start/End Points

```typescript
start: 'top top',      // Top of trigger hits top of viewport
start: 'top center',   // Top of trigger hits center
start: 'top bottom',   // Top of trigger hits bottom
start: 'top top+=100', // 100px offset
```

### Enable Debug Markers

Uncomment the markers line:

```typescript
scrollTrigger: {
  // ...
  markers: true, // Shows start/end markers
}
```

## Performance Optimization

### 1. Will-Change CSS

Already applied:

```typescript
style={{
  willChange: 'transform, opacity',
}}
```

### 2. Hardware Acceleration

GSAP automatically uses GPU acceleration for transforms.

### 3. Cleanup

The component properly cleans up on unmount:

```typescript
return () => {
  tl.kill()
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
```

## Advanced Examples

### Add Scale Animation

```typescript
tl.to(videoWrapper, {
  scale: 1.05,
  duration: 1,
  ease: 'power2.out',
}, 0)
```

### Add Rotation

```typescript
tl.fromTo(videoWrapper, {
  rotateX: -10,
}, {
  rotateX: 0,
  duration: 1,
  ease: 'power3.out',
})
```

### Stagger Multiple Elements

```typescript
tl.to('.cards', {
  opacity: 1,
  y: 0,
  stagger: 0.2, // 0.2s delay between each
  duration: 1,
})
```

## Browser Support

✅ All modern browsers (Chrome, Firefox, Safari, Edge)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  
✅ IE11 with polyfills (GSAP 3.x)  

## GSAP License

GSAP is free for most use cases. You need a commercial license if:

- You're creating a product/app that charges users
- You're using GSAP in a SaaS product

For most websites and projects, the free license is sufficient.

Learn more: https://greensock.com/licensing/

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [CodePen Examples](https://codepen.io/GreenSock/)

## Troubleshooting

### Animation not triggering

- Check that the trigger element exists
- Adjust `start` and `end` positions
- Enable `markers: true` for debugging

### Choppy animation

- Use `scrub` instead of `toggleActions`
- Optimize video loading
- Check for other heavy JavaScript

### Layout shift

- Ensure container has proper height
- Use `pinSpacing: false` if needed

### Mobile not working

- Test on real device
- Add `touch-action` CSS if needed
- Check viewport meta tag

## Migration from Vanilla JS

If you're migrating from the vanilla JS version:

1. ✅ Install GSAP: `pnpm add gsap`
2. ✅ Replace scroll event listener with ScrollTrigger
3. ✅ Replace manual calculations with GSAP animations
4. ✅ Enjoy smoother animations with less code!

### Before (Vanilla JS - ~80 lines)

```typescript
useEffect(() => {
  const handleScroll = () => {
    const rect = element.getBoundingClientRect()
    const progress = calculateProgress(rect)
    element.style.transform = `translateY(${-100 * (1 - progress)}px)`
    element.style.opacity = progress
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### After (GSAP - ~30 lines)

```typescript
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: container, scrub: 1 }
  })
  tl.fromTo(element, { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
  return () => tl.kill()
}, [])
```

## Questions?

Need help with customization or have questions about GSAP? Check the resources above or open an issue!
