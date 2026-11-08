---
name: Jesús Canicio Ruiz — GitHub profile
description: Architectural clarity for a Full Stack developer’s GitHub profile.
colors:
  deep-green: "#15221d"
  warm-paper: "#f3f4ec"
  dark-muted: "#b4c7bb"
  light-muted: "#455c50"
  dark-accent: "#c1f17e"
  light-accent: "#32611e"
  dark-panel: "#253a2e"
  light-panel: "#e0e8d8"
typography:
  display-desktop:
    fontFamily: "Manrope"
    fontSize: "90px"
    fontWeight: 800
  display-mobile:
    fontFamily: "Manrope"
    fontSize: "82px"
    fontWeight: 800
  role-desktop:
    fontFamily: "Manrope"
    fontSize: "34px"
    fontWeight: 600
  role-mobile:
    fontFamily: "Manrope"
    fontSize: "32px"
    fontWeight: 600
  statement-desktop:
    fontFamily: "Manrope"
    fontSize: "28px"
    fontWeight: 600
  statement-mobile:
    fontFamily: "Manrope"
    fontSize: "34px"
    fontWeight: 600
  diagram-label:
    fontFamily: "Manrope"
    fontSize: "26px"
    fontWeight: 600
  caption-desktop:
    fontFamily: "Manrope"
    fontSize: "22px"
    fontWeight: 400
  caption-mobile:
    fontFamily: "Manrope"
    fontSize: "23px"
    fontWeight: 400
rounded:
  square: "0px"
spacing:
  desktop-inset: "64px"
  mobile-inset: "44px"
  layer-inset: "28px"
  layer-gap: "33px"
components:
  layer-dark:
    backgroundColor: "{colors.dark-panel}"
    textColor: "{colors.warm-paper}"
    typography: "{typography.diagram-label}"
    rounded: "{rounded.square}"
    width: "299px"
    height: "60px"
  layer-light:
    backgroundColor: "{colors.light-panel}"
    textColor: "{colors.deep-green}"
    typography: "{typography.diagram-label}"
    rounded: "{rounded.square}"
    width: "299px"
    height: "60px"
---

# Design System: Jesús Canicio Ruiz — GitHub profile

## Overview

**Creative North Star: "Architectural section drawing"**

A single editorial masthead makes the connection between interface, API and data visible. Substantial lettering, green ink, warm paper and registered vector geometry establish a calm, precise identity; factual native Markdown carries the rest of the profile.

This system governs the repository-owned SVG masthead. GitHub owns body typography, surrounding colors, content measure, link states and keyboard focus. Source of truth: `scripts/build-assets.mjs`, the four `assets/header-*.svg` files and `README.md`.

**Key Characteristics:**
- Outlined Manrope identity lettering.
- Square layers connected by selective green accents.
- Theme-aware, separately composed desktop and mobile vectors.
- Static artwork with native textual links and disclosure.

## Colors

Warm paper and deep green exchange ground and ink roles across themes; restrained panels and contrast-adjusted connectors preserve the hierarchy.

### Primary

- **Lime connector** (`dark-accent`): structural brackets, connecting lines and layer nodes on the dark ground.
- **Forest connector** (`light-accent`): the same geometry adapted to the light ground.

### Neutral

- **Deep green / warm paper:** dark ground and light-theme ink / light ground and dark-theme ink.
- **Muted greens:** theme-specific role, caption and divider colors.
- **Panel greens:** flat fields behind the three diagram labels.

**The Contrast Pair Rule.** Preserve each theme’s complete ground, ink, muted, accent and panel assignment when regenerating artwork.

## Typography

**Display Font:** Manrope, generated as SVG paths rather than live text or a browser font dependency. The frontmatter records the actual size and weight supplied to the outline generator. Sizes and spacing are SVG design units and scale with the artwork; no CSS line-height or letter-spacing is assigned.

The name uses the display roles, the occupation uses the role roles, and the promise uses the statement roles. Diagram labels are semibold; captions are regular. Mobile has its own hierarchy rather than a uniformly reduced desktop composition. Native README headings, paragraphs and links retain GitHub typography.

**The Outline Boundary Rule.** Keep custom identity typography inside generated SVG; maintain equivalent readable identity and role information in image alternatives and README prose.

## Layout

Desktop artwork uses a 1280 × 430 viewBox: name and role at left, three connected layers at right, with a divider and promise below. Layer rectangles begin at y=92, 185 and 278; their label inset and intervening gap are recorded above.

At a viewport width of 600px or less, `<picture>` selects a separately composed 720 × 540 mobile SVG. It keeps the two-line name and occupation, splits the promise into two lines, adds a short technology caption and replaces the diagram with a small connector motif. Artwork fills the available README width. Theme selection uses `prefers-color-scheme`; the default image is the light desktop variant.

The body follows native document flow: introduction and contact links, named projects, capabilities, contact, then optional activity. No page grid, fixed card widths or custom page breakpoint is imposed.

## Elevation & Depth

Flat vector fills establish grouping. Panels, alignment and connecting strokes communicate structure without shadows, gradients or simulated material. The masthead has no animation or interactive state.

## Shapes

Square panel corners, orthogonal brackets and straight connectors define the silhouette. Desktop structural strokes are 3 SVG units; layer nodes have radius 5. Mobile connector strokes are 7 units. The horizontal divider uses the theme’s muted color at 0.35 opacity. These are artwork geometry, not page borders or focus indicators.

## Components

### Responsive masthead

Four versioned SVGs provide desktop/mobile and light/dark variants. Lettering, accessible SVG title/description and geometry are generated together; the README image also carries meaningful alternative text. Rebuild variants through the generator and retain `assets/Manrope-OFL.txt`.

### Connected layer diagram

Three equal square-cornered panels labelled Interfaz, API and Datos share one vertical connector and paired brackets. Accent nodes mark each layer. The sidecar previews this actual static artwork in both themes; it does not introduce interactive cards.

### Native links and activity disclosure

Project and contact actions are explicit Markdown links. Activity uses native `<details>` / `<summary>` and a theme-aware contribution SVG. GitHub supplies hover, focus, open-state behavior and body styling; this repository defines no custom button, input or navigation component.

## Do's and Don'ts

### Do:

- **Do** regenerate all four mastheads together and preserve their theme pairings.
- **Do** retain the separate mobile composition and informative image alternatives.
- **Do** keep project evidence and contact routes available as native text links.
- **Do** keep artwork flat, static and structurally connected.

### Don't:

- **Don't** document GitHub-owned body CSS or interaction states as repository-controlled tokens.
- **Don't** replace outlined display lettering with a system-font approximation.
- **Don't** introduce raster dependencies or animation into this static vector identity.
