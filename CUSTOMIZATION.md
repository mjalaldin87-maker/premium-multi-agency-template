# Your Brand — Customization Guide

## Quick start
1. Download the ZIP and extract it.
2. Open `index.html` in a modern browser.
3. Open `customizer.html` to preview the four brand styles.

## Rename the template
Search for the exact phrase `Your Brand` and replace it with your chosen business name. Then manually check page titles, meta descriptions, canonical URLs, Open Graph/Twitter metadata, logo text, footers, contact details, form redirect, licence, privacy notice, and terms. Avoid changing instructions that explain the placeholder unless that is intended.

## Colours and brand styles
Edit CSS variables near the top of `design-system.css`. Main variables include `--brand`, `--brand-strong`, `--brand-soft`, `--accent`, `--paper`, `--ink`, and `--muted`. Four data-attribute themes are included: `ultramarine`, `rose`, `forest`, and `mono`. The live switcher previews CSS variables; it does not edit source files or publish the site.

## Typography
The design declares font variables and uses safe system fallbacks. The requested self-hosted Bricolage Grotesque and Instrument Sans font binaries and licence files are not bundled yet. Add the official font files and their licence notices in `/fonts`, define `@font-face` rules with `font-display: swap`, then verify attribution and file sizes before sale.

## Contact form
In `contact.html`, replace `YOUR_FORM_ID` in the Formspree action with your own form ID. Update the hidden `_next` value or the provider redirect settings to your real domain and `thank-you.html`. Confirm that your Formspree plan and configuration support the desired redirect. Submit a test enquiry and verify the message arrives. The form uses native browser validation; it does not store messages locally.

## Publish
- GitHub Pages: use a repository visibility and Pages configuration supported by your GitHub plan. A public repository exposes the source files.
- Netlify: deploy the static folder or connect a repository, then set your domain and verify routing.
- Update every canonical URL, sitemap URL, robots sitemap URL, social URL, and form redirect to the actual domain.

## Before launch
Replace demo concepts and all `[FILL IN]` prompts. Verify image/font/code licences, check all internal links, keyboard focus, mobile layout, reduced-motion behaviour, form submission, SEO metadata, and Lighthouse. Legal pages are starter copy only and must be reviewed for your circumstances.
