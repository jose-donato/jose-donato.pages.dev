# Trading-Focused Design System

This design system is built for professional trading and financial applications, featuring a dark-only theme with HFT-inspired aesthetics.

## Color Palette

### Base Colors
- **Primary Background**: `#0a0a0a` - Deep black for main backgrounds
- **Secondary Background**: `#1a1a1a` - Slightly lighter for cards and sections
- **Tertiary Background**: `#242424` - For hover states and interactive elements
- **Quaternary Background**: `#2d2d2d` - For elevated components

### Text Hierarchy
- **Primary Text**: `#ffffff` - Main content, headings
- **Secondary Text**: `#e5e7eb` - Subheadings, important secondary content
- **Muted Text**: `#9ca3af` - Descriptions, metadata, less important content
- **Disabled Text**: `#6b7280` - Disabled states

### Trading Colors
- **Bullish/Positive**: `#10b981` (Green) - For positive values, gains, buy signals
- **Bearish/Negative**: `#dc2626` (Red) - For negative values, losses, sell signals
- **Neutral**: `#9ca3af` (Gray) - For unchanged values

### Border System
- **Primary Border**: `#374151` - Default borders
- **Secondary Border**: `#4b5563` - Subtle separators
- **Focus Border**: `#10b981` - Focus states (bullish green)
- **Hover Border**: `#6b7280` - Hover states

## Utility Classes

### Buttons
- `.btn` - Default button with secondary background
- `.btn-primary` - Primary action button (bullish green)
- `.btn-danger` - Destructive action button (bearish red)
- `.btn-outline` - Outline button with transparent background
- `.icon-btn` - Square icon button

### Cards
- `.card` - Basic card with secondary background and border
- `.card-interactive` - Card with hover effects for clickable content

### Links
- `.link` - Styled link with bullish green color and hover effects

### Dividers
- `.divider` - Horizontal divider line

### Trading-Specific Classes
- `.price-positive` - Green text for positive price changes
- `.price-negative` - Red text for negative price changes
- `.price-neutral` - Gray text for neutral price changes
- `.bg-bullish-subtle` - Subtle bullish background
- `.bg-bearish-subtle` - Subtle bearish background

### Volume Indicators
- `.volume-extreme` - Extreme volume indicator (red)
- `.volume-high` - High volume indicator (orange)
- `.volume-medium` - Medium volume indicator (blue)
- `.volume-low` - Low volume indicator (gray)
- `.volume-minimal` - Minimal volume indicator (dark gray)

## Animations

### Trading-Specific Animations
- `.animate-flash` - Flash animation for price updates
- `.animate-slide-up` - Slide up animation for new data
- `.animate-fade-in` - Fade in animation for loading states
- `.animate-pulse-green` - Green pulse for positive changes
- `.animate-pulse-red` - Red pulse for negative changes

### Professional Animations
- `.wave` - Wave animation for friendly elements
- `.reveal-image` - Reveal animation for images
- `.underline-animation` - Animated underline for links and active states

## Typography

### Font Families
- **Sans-serif**: Inter, system-ui, sans-serif (default)
- **Monospace**: JetBrains Mono, Fira Code, Monaco, Consolas (for financial data)

### Usage Guidelines
- Use monospace fonts for numerical data, prices, and timestamps
- Use sans-serif for all other content
- Maintain consistent font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Component Patterns

### Navigation
- Centered navigation with trading-focused styling
- Active states with animated underlines
- Hover effects with color transitions

### Cards
- Consistent padding and border radius
- Hover effects for interactive cards
- Proper contrast ratios for accessibility

### Forms
- Consistent input styling with focus states
- Trading-themed color scheme
- Proper error and success states

### Pagination
- Custom pagination components
- Trading-focused color scheme
- Accessible navigation controls

## Best Practices

### Color Usage
1. Use bullish green for positive actions and values
2. Use bearish red for negative actions and values
3. Use neutral colors for unchanged or informational content
4. Maintain proper contrast ratios for accessibility

### Spacing
1. Use consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px)
2. Maintain visual hierarchy with proper spacing
3. Use padding and margins consistently

### Interactions
1. Provide clear hover and focus states
2. Use smooth transitions (200-300ms)
3. Ensure all interactive elements are accessible

### Performance
1. Use CSS custom properties for theming
2. Minimize animation complexity
3. Optimize for trading application performance needs

## Implementation Notes

This design system is built with:
- **Tailwind CSS v4** for utility classes
- **CSS Custom Properties** for theming
- **Astro Components** for reusable patterns
- **TypeScript** for type safety

The system is designed to be:
- **Scalable**: Easy to extend with new components
- **Maintainable**: Consistent patterns and naming
- **Accessible**: Proper contrast and focus management
- **Professional**: Suitable for financial applications