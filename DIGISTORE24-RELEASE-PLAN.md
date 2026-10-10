# Digistore24 Release Plan — Premium Multi-Agency Website Template

This file is an internal release checklist. Do not present the template as fully ready until every required item below is complete.

## 1. Protect the product source

- [ ] The current GitHub repository is **public**. It exposes the website source and must not be treated as protected paid delivery.
- [ ] Create a separate public demo copy that contains only the preview files needed to show the design.
- [ ] Move the complete customer package to a private location used only to prepare the download ZIP.
- [ ] Verify that the paid source cannot be downloaded from the public demo repository or its commit history.
- [ ] Keep the GitHub Pages demo working after the separation.

**Important:** deleting files from a public repository is not enough to protect them because previous commits can still contain those files. Do not delete or rewrite the current repository as a shortcut; first make a separate demo copy and verify it.

## 2. Finish the customer ZIP

The ZIP should include:
- All HTML pages and the CSS/JavaScript files needed to run them
- The `fonts/` folder, including both font files and their OFL notices
- `START-HERE.txt` and `CUSTOMIZATION.md`
- A completed commercial licence and any required third-party notices

Do not include internal QA notes, this release plan, or unfinished seller-only listing notes in the customer ZIP.

Before delivery:
- [ ] Extract the ZIP into a new folder.
- [ ] Open `index.html` and test all pages and navigation.
- [ ] Test all four theme styles, mobile menu, customizer copy function, and form behaviour.
- [ ] Confirm local fonts load and their licence notices are present.
- [ ] Confirm no broken paths or missing files.

## 3. Complete information that only the seller can confirm

- [ ] Final seller/business name
- [ ] Customer support email that is actively monitored
- [ ] Product price and currency
- [ ] Refund policy and the applicable digital-product terms
- [ ] Support period, covered issues, and realistic response-time target
- [ ] Final licence terms; review legal wording for the markets where the product will be sold

Do not invent these details or publish pages with `[FILL IN]` prompts.

## 4. Contact form

The template uses a Formspree placeholder. Decide whether the customer-facing template should ship with:
- a clearly labelled demo form that buyers must configure, or
- a working form configured by each buyer using their own Formspree account.

Never put the seller's private form ID into the distributed template. Test invalid input and the successful thank-you redirect.

## 5. Digistore24 setup

After the ZIP and seller details are final:
1. Add the ZIP as a file package in Digistore24's Download Vault.
2. Attach the package to this product's delivery settings.
3. Complete the sales page, seller/support details, price, and legally reviewed refund information.
4. Submit the product for approval.
5. Make a test purchase or use the platform's supported test procedure to confirm delivery before promoting the product.

## Current release status

**Not ready for sale yet.** The current repository is public, seller details and policy text are unfinished, the form ID is a placeholder, and complete mobile/browser/Lighthouse QA has not been verified. Do not claim a test passed unless it was actually performed.
