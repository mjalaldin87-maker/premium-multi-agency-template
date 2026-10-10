# Manual QA Checklist

Do these checks before selling or publishing. A checkmark should mean the test was actually performed, not assumed.

## Pages and links
- [ ] Open every page: index, services, work, case-study, about, pricing, contact, thank-you, docs, changelog, license, privacy, terms, 404, customizer, niche-starters.
- [ ] Test every navigation/footer link and every CTA.
- [ ] Confirm exactly one meaningful H1 on each page.
- [ ] Confirm titles are unique and under 60 characters.
- [ ] Confirm meta descriptions are unique and 140–160 characters.
- [ ] Replace placeholder domain in canonical, Open Graph, sitemap, robots, and form redirect.
- [ ] Search all files for AETHER, the registered-mark symbol, mailto form handling, fake claims, and unintended real brand/person/client names.

## Visual and responsive checks
- [ ] Test current Chrome, Firefox, Edge, and Safari where available.
- [ ] Test phone portrait, phone landscape, tablet, and desktop widths.
- [ ] Check navigation opens/closes by keyboard and touch.
- [ ] Check visible focus indicators and skip link.
- [ ] Check text contrast against WCAG AA requirements.
- [ ] Check layout at 200% zoom and long text wrapping.
- [ ] Verify reduced-motion preference is respected.
- [ ] Check every image has appropriate alt text; all decorative CSS artwork is hidden from assistive technology where appropriate.

## Functionality
- [ ] Test all four brand switcher styles on homepage and customizer.
- [ ] Test persistence with browser storage enabled and disabled.
- [ ] Verify the customizer copy button and its fallback message.
- [ ] Set the real Formspree ID and test invalid and valid form submissions.
- [ ] Verify the successful form redirect goes to thank-you.html on the real domain.
- [ ] Confirm the enquiry arrives at the expected inbox.
- [ ] Test with JavaScript disabled and confirm the core page content remains readable.

## SEO, performance, and release
- [ ] Validate sitemap.xml and robots.txt after replacing the domain.
- [ ] Check canonical URLs and social metadata.
- [ ] Run Lighthouse on mobile and desktop; record actual results rather than promising a score.
- [ ] Check browser console for errors and network panel for unexpected external requests.
- [ ] List and inspect any asset larger than 150 KB.
- [ ] Confirm font and code licences; add font files and notices if applicable.
- [ ] Review licence, privacy, terms, refund, and support policies.
- [ ] Create a clean release ZIP and test the extracted copy.
- [ ] Keep paid source private before selling; use a separate demo copy if you need a public preview.
