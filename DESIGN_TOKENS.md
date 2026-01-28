# 🎨 EntranceGateway Design Tokens

> Quick reference for colors, typography, and utility classes.

---

## Brand Colors

| Name | Hex | CSS Variable | Tailwind Class |
|------|-----|--------------|----------------|
| **Deep Navy** | `#1A237E` | `var(--color-brand-navy)` | `text-brand-navy`, `bg-brand-navy`, `border-brand-navy` |
| **Trustworthy Blue** | `#0D47A1` | `var(--color-brand-blue)` | `text-brand-blue`, `bg-brand-blue`, `border-brand-blue` |
| **Academic Gold** | `#FFC107` | `var(--color-brand-gold)` | `text-brand-gold`, `bg-brand-gold`, `border-brand-gold` |

### Usage

```tsx
// Primary headers, navigation, high-emphasis text
<h1 className="text-brand-navy">Welcome</h1>
<nav className="bg-brand-navy">...</nav>

// Interactive elements, links, icons
<a className="text-brand-blue hover:text-brand-navy">Link</a>
<button className="bg-brand-blue text-white">Submit</button>

// CTAs, highlights, attention grabbers
<button className="bg-brand-gold text-brand-navy">Get Started</button>
```

---

## Semantic Colors

| Name | Hex | CSS Variable | Use Case |
|------|-----|--------------|----------|
| **Success** | `#2E7D32` | `var(--color-success)` | Validations, completed states, positive trends |
| **Warning** | `#F9A825` | `var(--color-warning)` | Alerts, pending actions, attention required |
| **Error** | `#D32F2F` | `var(--color-error)` | Critical errors, destructive actions, validation failures |

### Usage

```tsx
// Success states
<span className="text-success">Registration successful!</span>
<div className="bg-success text-white p-4">...</div>

// Warning states
<div className="bg-warning text-gray-900 p-4">
  Action required
</div>

// Error states
<span className="text-error">Invalid email address</span>
<div className="border-error border-2">...</div>
```

---

## Grayscale

| Shade | Hex | Tailwind Class |
|-------|-----|----------------|
| 50 | `#FAFAFA` | `text-gray-50`, `bg-gray-50` |
| 100 | `#F5F5F5` | `text-gray-100`, `bg-gray-100` |
| 200 | `#EEEEEE` | `text-gray-200`, `bg-gray-200` |
| 300 | `#E0E0E0` | `text-gray-300`, `bg-gray-300` |
| 400 | `#BDBDBD` | `text-gray-400`, `bg-gray-400` |
| 500 | `#9E9E9E` | `text-gray-500`, `bg-gray-500` |
| 600 | `#757575` | `text-gray-600`, `bg-gray-600` |
| 700 | `#616161` | `text-gray-700`, `bg-gray-700` |
| 800 | `#424242` | `text-gray-800`, `bg-gray-800` |
| 900 | `#212121` | `text-gray-900`, `bg-gray-900` |

---

## Typography

| Font | CSS Variable | Tailwind Class | Use Case |
|------|--------------|----------------|----------|
| **Inter** | `var(--font-sans)` | `font-sans` | UI text, body copy, buttons, forms |
| **Roboto** | `var(--font-heading)` | `font-heading` | Page titles, section headers, print |

### Font Weights

| Weight | Class |
|--------|-------|
| Light (300) | `font-light` |
| Regular (400) | `font-normal` |
| Medium (500) | `font-medium` |
| Semibold (600) | `font-semibold` |
| Bold (700) | `font-bold` |
| Extra Bold (800) | `font-extrabold` |

### Usage

```tsx
// Body text (Inter - default)
<p className="font-sans text-gray-600">Body content...</p>

// Headings (Roboto)
<h1 className="font-heading text-4xl font-extrabold text-brand-navy">
  Page Title
</h1>

// Mixed usage
<article>
  <h2 className="font-heading font-bold text-2xl mb-4">Section</h2>
  <p className="font-sans text-gray-700">Paragraph text...</p>
</article>
```

---

## Surface Colors

| Name | Hex | Tailwind Class | Use Case |
|------|-----|----------------|----------|
| Light | `#FFFFFF` | `bg-surface-light` | Light mode backgrounds |
| Dark | `#1F2937` | `bg-surface-dark` | Dark mode backgrounds |

---

## Common Patterns

### Buttons

```tsx
// Primary CTA
<button className="bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold/90 transition-colors">
  Get Started
</button>

// Secondary
<button className="bg-brand-blue text-white font-medium px-4 py-2 rounded-lg hover:bg-brand-navy transition-colors">
  Learn More
</button>

// Outline
<button className="border-2 border-brand-blue text-brand-blue font-medium px-4 py-2 rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
  Cancel
</button>
```

### Cards

```tsx
<div className="bg-surface-light rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600 text-sm">Card description...</p>
</div>
```

### Alerts

```tsx
// Success alert
<div className="bg-success/10 border border-success text-success p-4 rounded-lg">
  Operation completed successfully!
</div>

// Error alert
<div className="bg-error/10 border border-error text-error p-4 rounded-lg">
  Something went wrong.
</div>
```

---

## CSS Variables Reference

Access any color directly via CSS variables:

```css
.custom-element {
  color: var(--color-brand-navy);
  background-color: var(--color-gray-50);
  border-color: var(--color-brand-blue);
}
```
