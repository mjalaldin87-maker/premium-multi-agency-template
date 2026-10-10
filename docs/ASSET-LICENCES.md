# Asset and Font Licence Notes

## Artwork
The homepage and portfolio illustrations use CSS shapes and inline SVG. No stock photographs are included.

## Self-hosted fonts
Both variable TrueType fonts are included in `/fonts`, together with their SIL Open Font License 1.1 notices. The OFL allows bundling and redistribution with this template, but the fonts may not be sold by themselves and the licence notices must remain with distributed copies.

- **Bricolage Grotesque** — heading font: `fonts/BricolageGrotesque[opsz,wdth,wght].ttf`. Google Fonts path: `ofl/bricolagegrotesque/`. Upstream source commit recorded in Google Fonts metadata: `84745e5b96261ae5f8c6c856e262fe78d1d6efdd`. Licence: SIL Open Font License 1.1; copyright Bricolage Grotesque Project Authors.
- **Instrument Sans** — body font: `fonts/InstrumentSans[wdth,wght].ttf`. Google Fonts path: `ofl/instrumentsans/`. Upstream source commit recorded in Google Fonts metadata: `7fa22308a3d0c94ee2b3cd537a1196b65db34a3e`. Licence: SIL Open Font License 1.1; copyright Instrument Sans Project Authors.

`design-system.css` loads both fonts locally with `@font-face` and `font-display: swap`. No remote font service is required. Re-check the licence if replacing or modifying either font.

## Release check
- [x] Font binaries included.
- [x] Matching OFL licence notices included.
- [x] Local `@font-face` rules use `font-display: swap`.
- [x] Upstream source details recorded.
- [ ] Browser and final ZIP checks still required.
