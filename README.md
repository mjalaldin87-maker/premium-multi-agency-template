# Your Brand — Multi-Purpose Agency Website Template

A static HTML/CSS/JavaScript starter for creative studios, agencies, consultants, and service businesses. It has no build step and uses CSS/SVG artwork rather than stock photos.

## Pages included
- `index.html` — homepage with four-style live brand switcher
- `services.html` — service offering layout
- `work.html` — portfolio layouts; samples are marked demo concepts
- `case-study.html` — case-study framework
- `about.html` — business and team introduction
- `pricing.html` — pricing/package framework with prompts
- `contact.html` — validated form with a Formspree placeholder
- `thank-you.html` — post-submission confirmation page
- `customizer.html` — brand style preview and CSS token helper
- `niche-starters.html` — eight service-business directions
- `docs.html` — setup documentation
- `changelog.html` — release notes starter
- `license.html`, `privacy.html`, `terms.html` — policy/licence starters that need review
- `404.html` — not-found page

## Key files
- `design-system.css` — brand variables, homepage layout, switcher themes
- `product-pages.css` — shared secondary-page layout and responsive rules
- `brand-switcher.js` — accessible style switcher and guarded localStorage
- `script.js` — mobile navigation, current year, and form validation
- `START-HERE.txt`, `CUSTOMIZATION.md`, `LISTING.md`, `LICENSE.txt`, `QA-CHECKLIST.md`

## Run locally
1. Download and extract the repository ZIP.
2. Open `index.html` in a modern browser.
3. Open `customizer.html` to try the style presets.
4. Use a local static server for more realistic form, route, and browser testing.

## Before publishing
1. Replace every `Your Brand` placeholder and all `[FILL IN]` prompts.
2. Replace demo concepts with approved work or keep them clearly labelled.
3. Replace `YOUR_FORM_ID` in `contact.html`, configure the redirect with Formspree, and test a real submission.
4. Replace `https://yourdomain.com` in canonical tags, sitemap, robots, Open Graph URLs, and the form redirect.
5. Review the licence, privacy notice, terms, refund policy, and support policy with appropriate professional advice.
6. Test all pages, keyboard navigation, mobile layouts, links, and contrast before sale.

## Known limitations
- Bricolage Grotesque and Instrument Sans font files are **not yet bundled**. Current styles use system font fallbacks; no remote font request is required.
- The Formspree form ID is a placeholder and will not submit successfully until configured.
- SEO metadata and placeholder domain values require final replacement and audit.
- A Lighthouse score of 95+ is a target, not a verified result.
- This template has not yet passed a complete manual cross-browser/device test.
