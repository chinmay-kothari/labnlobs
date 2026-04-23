---
name: Tactile Discovery
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#554336'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#904d00'
  primary: '#8d4b00'
  on-primary: '#ffffff'
  primary-container: '#b15f00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77d'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#62fae3'
  on-secondary-container: '#007165'
  tertiary: '#6448b3'
  on-tertiary: '#ffffff'
  tertiary-container: '#7e62ce'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#e8ddff'
  tertiary-fixed-dim: '#cebdff'
  on-tertiary-fixed: '#21005e'
  on-tertiary-fixed-variant: '#4f319c'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 48px
---

## Brand & Style

The design system is rooted in the philosophy of "Digital Puppetry"—bridging the gap between a high-tech AI companion and a cherished physical toy. The brand personality is imaginative, safe, and deeply tactile. It avoids the cold, flat nature of modern SaaS interfaces in favor of a "Physical-Digital" (Phygital) aesthetic that feels weighted, soft to the touch, and permanent.

The visual style utilizes a refined **Tactile / Skeuomorphic** approach. Every interface element is treated as a physical object that could be picked up, pressed, or turned. This creates an immediate sense of trustworthiness and accessibility for children and parents alike. The goal is to evoke the feeling of high-end wooden toys and matte-finished silicone, moving away from "screen-time" and toward "play-time."

## Colors

The palette is inspired by natural pigments and clay. The primary colors provide warmth and energy, while the secondary "Lob" colors act as identifiers for different AI personalities.

- **Primary (Soft Amber):** Used for main interactions and energetic touchpoints.
- **Secondary (Friendly Teal):** Used for educational and calm interaction states.
- **Tertiary (Muted Lavender/Sage):** Used for specialized Lob personas like "The Storyteller" or "The Explorer."
- **Background (Cream Paper):** A non-pure white (#FDFCF8) that reduces eye strain and mimics the feel of heavy-stock paper or natural felt.

Avoid pure blacks; use deep, warm grays for text to maintain the soft, organic aesthetic.

## Typography

This design system uses a pairing of two highly legible, friendly fonts. 

**Plus Jakarta Sans** is used for headlines. Its soft curves and open counters provide a welcoming, "bouncy" energy that feels playful without becoming a "comic" font.

**Lexend** is used for all body copy and labels. Specifically designed to improve reading proficiency, it offers the high degree of accessibility required for an educational brand while maintaining a clean, modern aesthetic.

Maintain generous line heights to ensure a relaxed reading pace, especially in educational content meant for parents to read alongside children.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model within a flexible container. Because the product is "voice-first," the companion app layout should feel spacious and unhurried. 

Use a 12-column grid for desktop and a 4-column grid for mobile. Spacing rhythm is based on an 8px base unit, but emphasizes large "air-pockets" (using the `lg` and `xl` tokens) to separate different activities or "Lobs." Elements should never feel crowded; the UI should breathe like a physical tabletop workspace.

## Elevation & Depth

Depth is the primary driver of the "tactile" feel. We avoid flat UI in favor of **Dual-Shadow Neomorphism** and **Soft-Textured Tiers**.

- **Physical Press:** Buttons and interactive cards should use a "pressed" state where the shadow shifts from a bottom-right projection to an inner-shadow, simulating the physical displacement of a silicone button.
- **Ambient Shadows:** Objects use a large blur radius (20-40px) with very low opacity (8-12%) tinted with the object's own color rather than black. This mimics how light interacts with colored plastic or wood.
- **Surface Texture:** Backgrounds should include a subtle, microscopic grain overlay to prevent "digital flatness" and suggest a matte, soft-touch finish.

## Shapes

The shape language is defined by "Squircle" geometry. There are no sharp corners in the design system, reflecting the safety-first nature of a physical child's toy. 

The `rounded-lg` and `rounded-xl` tokens should be the default for cards and containers, creating a "puffy" appearance. Buttons should lean toward the pill-shaped end of the spectrum to invite tapping. All strokes and borders should have slightly rounded caps and joins to maintain the organic, hand-molded feel.

## Components

- **Buttons (The "Pressables"):** Designed to look like thick, matte-plastic buttons. They feature a 4px bottom "lip" in a darker shade of the button color, which disappears on click to simulate a physical press.
- **Lob Cards:** Large, rounded containers that house specific AI personalities. They use a subtle gradient and a secondary-colored ambient shadow to distinguish between "Sage" (Green shadow) and "Explorer" (Teal shadow).
- **Voice Orbs:** A unique component representing the AI's presence. Instead of a flat waveform, use a 3D-effect sphere with soft inner glows that pulse slowly, mimicking a breathing rhythm.
- **Toggles:** Designed to look like physical slider switches found on educational toys. The "track" should look recessed (inner shadow), and the "handle" should look extruded (drop shadow).
- **Activity Chips:** Small, pill-shaped tags used for categories (e.g., "Storytime," "Math"). These use the neutral background with a thin, colored border and no shadow to remain secondary to the main "Pressables."
- **Progress Buckets:** Instead of flat bars, use "filling" containers that look like liquid or sand rising inside a translucent vessel.