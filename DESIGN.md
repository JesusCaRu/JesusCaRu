---
name: Jesús Canicio Ruiz — GitHub profile
description: A graphic Full Stack portfolio built from outlined type, real project evidence and connected diagrams.
colors:
  deep-green: "#15221d"
  warm-paper: "#f3f4ec"
  dark-muted: "#b4c7bb"
  light-muted: "#455c50"
  dark-accent: "#c1f17e"
  light-accent: "#32611e"
  dark-panel: "#253a2e"
  light-panel: "#e0e8d8"
  stockflow-accent: "#8bb9ff"
  stockflow-ground: "#15243d"
  ats-accent: "#ffc28c"
  ats-ground: "#34251e"
  booking-accent: "#d6b6ff"
  booking-ground: "#2b233d"
  tiktok-accent: "#ff96c9"
  tiktok-ground: "#341e30"
  cover-copy: "#e3e8e1"
  screen-frame: "#0d1117"
  screen-control: "#6d7e76"
  atlas-dark-panel: "#20332a"
  ats-panel: "#4b3529"
  booking-panel: "#3b2f54"
  document-emphasis: "#aa6332"
  document-line: "#bac0b5"
typography:
  display-desktop: { fontFamily: "Manrope", fontSize: "90px", fontWeight: 800 }
  display-mobile: { fontFamily: "Manrope", fontSize: "82px", fontWeight: 800 }
  role-desktop: { fontFamily: "Manrope", fontSize: "34px", fontWeight: 600 }
  role-mobile: { fontFamily: "Manrope", fontSize: "32px", fontWeight: 600 }
  statement-desktop: { fontFamily: "Manrope", fontSize: "28px", fontWeight: 600 }
  statement-mobile: { fontFamily: "Manrope", fontSize: "34px", fontWeight: 600 }
  diagram-label: { fontFamily: "Manrope", fontSize: "26px", fontWeight: 600 }
  caption-desktop: { fontFamily: "Manrope", fontSize: "22px", fontWeight: 400 }
  caption-mobile: { fontFamily: "Manrope", fontSize: "23px", fontWeight: 400 }
  project-title-desktop: { fontFamily: "Manrope", fontSize: "68px", fontWeight: 800 }
  project-title-mobile: { fontFamily: "Manrope", fontSize: "64px", fontWeight: 800 }
  project-subtitle-desktop: { fontFamily: "Manrope", fontSize: "29px", fontWeight: 600 }
  project-subtitle-mobile: { fontFamily: "Manrope", fontSize: "30px", fontWeight: 600 }
  project-copy: { fontFamily: "Manrope", fontSize: "25px", fontWeight: 400 }
  project-stack-desktop: { fontFamily: "Manrope", fontSize: "24px", fontWeight: 600 }
  project-stack-mobile: { fontFamily: "Manrope", fontSize: "27px", fontWeight: 600 }
  atlas-heading-desktop: { fontFamily: "Manrope", fontSize: "30px", fontWeight: 700 }
  atlas-heading-mobile: { fontFamily: "Manrope", fontSize: "32px", fontWeight: 700 }
  atlas-label-desktop: { fontFamily: "Manrope", fontSize: "22px", fontWeight: 600 }
  atlas-label-mobile: { fontFamily: "Manrope", fontSize: "23px", fontWeight: 600 }
  contact-link: { fontFamily: "Manrope", fontSize: "35px", fontWeight: 800 }
  closing-desktop: { fontFamily: "Manrope", fontSize: "70px", fontWeight: 800 }
  closing-mobile: { fontFamily: "Manrope", fontSize: "64px", fontWeight: 800 }
  closing-support: { fontFamily: "Manrope", fontSize: "31px", fontWeight: 600 }
rounded:
  square: "0px"
  document: "8px"
  frame: "12px"
  screen-clip: "4px"
  document-line: "3px"
spacing:
  header-desktop-inset: "64px"
  header-mobile-inset: "44px"
  project-desktop-inset: "56px"
  project-mobile-inset: "40px"
  atlas-inset: "32px"
  layer-inset: "28px"
components:
  layer-dark: { backgroundColor: "{colors.dark-panel}", textColor: "{colors.warm-paper}", typography: "{typography.diagram-label}", rounded: "{rounded.square}", width: "299px", height: "60px" }
  layer-light: { backgroundColor: "{colors.light-panel}", textColor: "{colors.deep-green}", typography: "{typography.diagram-label}", rounded: "{rounded.square}", width: "299px", height: "60px" }
  cover-stockflow: { backgroundColor: "{colors.stockflow-ground}", textColor: "{colors.stockflow-accent}", rounded: "{rounded.square}" }
  cover-ats: { backgroundColor: "{colors.ats-ground}", textColor: "{colors.ats-accent}", rounded: "{rounded.square}" }
  cover-booking: { backgroundColor: "{colors.booking-ground}", textColor: "{colors.booking-accent}", rounded: "{rounded.square}" }
  cover-tiktok: { backgroundColor: "{colors.tiktok-ground}", textColor: "{colors.tiktok-accent}", rounded: "{rounded.square}" }
  screenshot-frame: { backgroundColor: "{colors.screen-frame}", rounded: "{rounded.frame}" }
  atlas-dark: { backgroundColor: "{colors.atlas-dark-panel}", textColor: "{colors.warm-paper}", rounded: "{rounded.frame}" }
  atlas-light: { backgroundColor: "{colors.light-panel}", textColor: "{colors.deep-green}", rounded: "{rounded.frame}" }
  contact-link: { backgroundColor: "{colors.dark-accent}", textColor: "{colors.deep-green}", typography: "{typography.contact-link}", rounded: "{rounded.frame}", width: "400px", height: "112px" }
---

# Design System: Jesús Canicio Ruiz — GitHub profile

## Overview

**Creative North Star: "Architectural section drawing, amplified"**

A graphic portfolio connects interface, API and data through substantial outlined lettering, project-specific color fields, real screenshots and explanatory diagrams. The green architectural identity now extends across project covers, a technology atlas and contact artwork, reflecting the explicit request for a highly graphical whole profile.

Repository-owned artwork establishes the visual system. GitHub owns surrounding body typography, content measure, native links and keyboard focus. The authoritative implementation is `scripts/build-assets.mjs` plus `scripts/build-graphic-assets.mjs`; `README.md` composes the assets and native text.

**Key Characteristics:**
- Outlined Manrope across the complete graphic identity.
- Four distinct project palettes tied to real work.
- Real screenshots clearly separated from capability diagrams.
- Responsive graphic compositions with native textual fallbacks.
- Static SVG artwork and visible contribution activity.

## Colors

### Primary

Deep green, warm paper and lime form the shared identity. The header exchanges ground and ink between themes; its light connector becomes forest green for contrast. Contact artwork keeps lime ground and deep-green lettering in both themes.

### Secondary

StockFlow uses blue on navy; ATS uses apricot on brown; Booking uses lavender on purple; TikTok uses pink on plum. Each project retains its own dark ground on both light and dark GitHub. Technology groups reuse blue, lime, lavender and apricot in dark mode; all light-mode technology icons use forest green.

### Neutral

Muted greens carry header support and dividers. Panel greens group architectural layers and technology families. Shared light cover copy, dark screenshot chrome and muted chrome controls support project evidence. ATS and Booking have their own diagram panels; warm-paper documents use muted and emphasized horizontal marks.

**The Project Pair Rule.** Keep each project accent with its shipped ground, including on light GitHub; theme switching applies to the header and technology atlas rather than recoloring the project covers.

## Typography

Manrope weights 400, 600, 700 and 800 are converted to paths at build time. The frontmatter records actual generator roles in SVG design units; artwork scales as a whole. There is no browser font dependency, custom page type ramp, letter-spacing or CSS line-height.

The largest name establishes identity; bold project names and closing copy carry the graphic narrative. Semibold accent subtitles and stacks separate meaning from regular explanatory copy. Atlas headings and labelled logos remain distinct from GitHub-native text.

**The Outline Boundary Rule.** Keep custom identity typography inside generated SVG; preserve meaningful image alternatives and native textual routes to projects and contact.

## Layout

The header is 1280 × 430 on desktop and 720 × 540 on mobile. Its connected desktop diagram gives way to a simpler mobile name-and-promise composition. Project covers are 1280 × 560 or 720 × 820: desktop places copy left and evidence right; mobile stacks the title, subtitle, evidence and technology line and omits the desktop explanatory copy.

The atlas is 1280 × 660 with a two-column, two-row group arrangement, or 720 × 1170 with four stacked groups. Each group has four labelled logos. Contact link artwork is 400 × 112, displayed at 190 CSS pixels wide in centered native links. The closing banner is 1280 × 240 or 720 × 320. Header, covers, atlas and closing banner use separately authored mobile assets at viewport widths up to 600px. Header and atlas also respond to `prefers-color-scheme`.

The README orders identity/contact, brief introduction, four visual projects, technology atlas, visible contribution graphic and closing contact. Experience and detailed technology text use a native disclosure. Full-width images follow the available GitHub content column; the repository imposes no custom page grid.

## Elevation & Depth

Flat fills, panel nesting, arrows and connectors create structure without shadows, gradients or animation. Project covers use two low-opacity circular outlines cropped by the outer frame; they never mask content. Screenshot chrome identifies a real project view rather than imitating depth.

## Shapes

The header and full-bleed artwork retain square outer geometry. Rounded screenshot frames and atlas groups use the frame radius; document and API panels use the document radius. Small screen clipping and document-line rounding are separate roles. Desktop header connectors use 3-unit strokes and 12-unit-radius layer nodes; mobile connectors use 7-unit strokes. Project orbit strokes are 2 units at 0.16 opacity. Diagram connectors have round line caps and joins.

## Components

### Header and project covers

All lettering is generated with the shared outline helper. StockFlow and TikTok embed real repository screenshot bytes; source rasters retain embedded Origin metadata. Their screen frames have a project-view label and demonstration-data caption. ATS uses a document-to-offer analysis diagram; Booking uses an endpoint-to-framework/database diagram. These diagrams explain capabilities and are not application screenshots.

### Technology atlas

Sixteen Simple Icons paths are grouped into four labelled families. Preserve the bundled Simple Icons license and Manrope OFL alongside the graphics. The atlas has distinct light/dark and desktop/mobile variants.

### Contact links and closing artwork

Three SVG image links provide portfolio, LinkedIn and email actions with deep-green symbols, outlined labels and arrows on lime. The closing banner is also an email link. These are native anchors containing static artwork, not custom HTML buttons; GitHub supplies hover, focus and activation behavior.

### Native text, disclosure and activity

Projects retain explicit code links; final contact retains email and profile links. Experience and formation remain available inside native `<details>`. The contribution SVG is visible in its own section, has light/dark variants, and links to its update workflow.

## Do's and Don'ts

### Do:

- **Do** regenerate the full graphic family from the two asset scripts.
- **Do** preserve project palette pairs and separately authored mobile compositions.
- **Do** distinguish original screenshots from explanatory diagrams and retain raster provenance.
- **Do** preserve image alternatives, textual project/contact links and asset licenses.

### Don't:

- **Don't** document GitHub-owned body styling or focus states as repository-controlled tokens.
- **Don't** substitute generated mock screenshots for the real project evidence.
- **Don't** replace outlined identity lettering with browser-dependent font approximations.
- **Don't** apply light-theme recoloring to the intentionally dark project covers.
