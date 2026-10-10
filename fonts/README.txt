FONT BUNDLING STATUS

Font files are not included in this release yet. The current site uses system font fallbacks and does not request remote font files.

Planned fonts:
- Bricolage Grotesque — intended for headings. The family is published under the SIL Open Font License (OFL); verify the exact licence text and version from the official Google Fonts repository before bundling.
- Instrument Sans — intended for body text. The family is published under the SIL Open Font License (OFL); verify the exact licence text and version from the official Google Fonts repository before bundling.

Before shipping:
1. Download the official font binaries and matching OFL licence texts from the official Google Fonts repository.
2. Store binaries in this folder and licence files alongside them.
3. Add @font-face declarations with font-display: swap.
4. Record exact file names, source URLs, commit/version, and licence version in docs/ASSET-LICENCES.md.
5. Confirm that the font licence notices remain in the distributed ZIP.
