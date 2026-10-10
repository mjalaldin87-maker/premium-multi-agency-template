# Asset and Font Licence Notes

## Artwork
The homepage and portfolio illustrations are made with CSS shapes and inline SVG. No stock photographs or third-party image files are included in the current HTML pages.

## Planned fonts — not bundled yet
- **Bricolage Grotesque** — planned heading font. Google Fonts lists this family under the SIL Open Font License (OFL). Before bundling, record the exact upstream file, version/commit, and licence text.
- **Instrument Sans** — planned body font. Google Fonts lists this family under the SIL Open Font License (OFL). Before bundling, record the exact upstream file, version/commit, and licence text.

The current release uses system font fallbacks and does not make remote font requests. The font families above are planned, not currently included. Do not advertise them as bundled until the font files and licence notices are present in /fonts.

## Release check
- [ ] Add official font binaries and corresponding OFL licence files.
- [ ] Add local @font-face rules with font-display: swap.
- [ ] Record exact source/version details.
- [ ] Verify that all distributed files may be redistributed under their licences.
- [ ] List any asset larger than 150 KB.
