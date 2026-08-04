# ReviewNest — Affiliate Marketing Website

A complete, mobile-first affiliate marketing website you can manage from your
Samsung Android phone. No coding tools or computer required to publish or update it.

## 1. Brand name

**Final name used: ReviewNest**

Other options you can swap to (just find/replace "ReviewNest" in every file):
1. ReviewNest
2. ValuTrail
3. GearScope
4. SmartPick Hub
5. NestPicks

## 2. File structure

```
reviewnest/
├── index.html                 Homepage
├── reviews.html                Product reviews (listing + 3 full review templates)
├── comparison.html             Comparison table
├── categories.html             Category pages (Electronics, Phones, etc.)
├── deals.html                  Deals & offers
├── blog.html                   Blog listing
├── blog/
│   └── sample-post.html        SEO article template (duplicate this for new posts)
├── about.html
├── contact.html                Contact form (needs Formspree setup, see below)
├── privacy-policy.html
├── affiliate-disclosure.html
├── terms.html
├── css/style.css               All styling
├── js/script.js                Mobile menu + notes
├── robots.txt
└── sitemap.xml
```

Every page is a self-contained HTML file (no build tools needed) so you can open
and edit any single page from your phone without breaking the others.

## 3. How to publish this using only your Samsung phone (free)

**Recommended: GitHub Pages + GitHub mobile web editor**

1. On your phone browser, go to github.com and create a free account.
2. Tap **+** → **New repository**. Name it e.g. `reviewnest`. Make it Public.
3. Use the **Add file → Upload files** option (works in mobile browser) to upload
   all the files/folders from this build, keeping the same folder structure
   (css/, js/, blog/ subfolders).
4. Go to repository **Settings → Pages**. Under "Branch", choose `main` and
   folder `/root`, then Save. GitHub gives you a live URL like
   `https://yourusername.github.io/reviewnest/` within a few minutes.
5. Your site is now live and free, with HTTPS included.

**Alternative (even simpler drag-and-drop): Netlify**
1. Go to netlify.com on your phone, sign up free.
2. Use "Add new site" → "Deploy manually" and upload a zip of this folder.
3. Netlify gives you a live URL instantly, plus free custom domain support later.

## 4. Editing the site from your phone

- Open your GitHub repo in the phone browser, tap any `.html` file, tap the
  pencil (edit) icon — GitHub's mobile web editor lets you edit text directly.
  Tap "Commit changes" to publish; the live site updates in ~1 minute.
- For Netlify: reupload the changed file(s) through the same "Deploy manually" flow,
  or connect Netlify to your GitHub repo for auto-publishing on every edit.
- Tip: install a code-editor app like **Acode** or **Spck Editor** from the Play
  Store — both work well on Android and can sync directly with GitHub, making
  editing much easier than a browser text box.

## 5. How to add a new affiliate product

1. Open `reviews.html` (or `categories.html` / `deals.html`).
2. Copy one existing `<div class="card">...</div>` or review section block.
3. Replace:
   - Product name text
   - Description text
   - `$0.00` price
   - Star rating text
   - The image placeholder — see "Adding images" below
4. Find the button `<a href="#" ... rel="nofollow sponsored noopener">Check Price →</a>`
   and replace `href="#"` with your real affiliate link, e.g.
   `href="https://www.amazon.com/dp/XXXXXXXX?tag=youraffiliateid-20"`.
   Keep `rel="nofollow sponsored noopener" target="_blank"` — this is required
   by Google's affiliate-link guidelines and by most affiliate programs.
5. Commit/save the file.

## 6. Adding real images

- Take or find a legitimate product image (your own photo, or one your affiliate
  program explicitly permits you to use — many, like Amazon Associates, provide
  official product images in their affiliate tools).
- Upload the image file into the `images/` folder in your GitHub repo.
- Replace a `<div class="card-img"><span>Product image placeholder</span></div>`
  block with:
  `<div class="card-img"><img src="images/your-image.jpg" alt="Descriptive product name"></div>`
- Always fill in a real `alt` text for SEO and accessibility.

## 7. Writing and publishing a new SEO blog article

1. Copy `blog/sample-post.html`, rename it (e.g. `blog/best-headphones.html`).
2. Edit the `<title>`, `<meta name="description">`, `<h1>`, and body paragraphs.
3. Update the JSON-LD schema block at the top with the new headline and date.
4. Open `blog.html` and add a new card linking to your new file, following the
   pattern of the existing cards.
5. Add the new page's URL to `sitemap.xml`.

## 8. Google Search Console

1. Go to search.google.com/search-console on your phone.
2. Add your site's URL as a property (URL prefix method).
3. Verify ownership — the easiest method on a static GitHub Pages/Netlify site
   is the "HTML tag" method: Search Console gives you a `<meta>` tag; paste it
   into the `<head>` of `index.html`, commit, then click "Verify".
4. Once verified, submit your sitemap: Search Console → Sitemaps → enter
   `sitemap.xml` → Submit.

## 9. Google Analytics

1. Go to analytics.google.com, create a free account and a "GA4" property for
   your site.
2. Copy the Measurement ID (starts with `G-`) and the tracking snippet Google
   provides.
3. Paste that snippet into the `<head>` of every page (or at minimum
   `index.html` to start), right before `</head>`.
4. Commit the changes — traffic data will start appearing within a day.

## 10. Connecting a custom domain

- Buy a domain from a registrar (Namecheap, Google Domains successor Squarespace
  Domains, GoDaddy, etc.) — all have mobile-friendly checkout.
- **GitHub Pages**: in repo Settings → Pages → "Custom domain", enter your
  domain. Then at your registrar, add a CNAME record pointing to
  `yourusername.github.io` (for a subdomain like `www`) or the A records GitHub
  documents for an apex domain.
- **Netlify**: Site settings → Domain management → Add custom domain, then
  follow Netlify's DNS instructions at your registrar.
- Update `sitemap.xml`, `robots.txt`, and every `<link rel="canonical">` and
  `og:url` tag to use your real domain instead of `reviewnest.example`.

## 11. Contact form setup

The form in `contact.html` posts to Formspree, a free service for static-site
forms:
1. Go to formspree.io on your phone, sign up free, create a new form.
2. Copy the form endpoint URL it gives you (looks like
   `https://formspree.io/f/abc12345`).
3. In `contact.html`, replace `YOUR_FORM_ID` in the `<form action="...">` line
   with your real endpoint.
4. Also update the email, WhatsApp number, and social links at the top of that
   page.

## 12. Monetization beyond affiliate links

- **Display ads**: once you have consistent traffic, apply to Google AdSense
  (or an alternative like Ezoic/Mediavine later) and paste their ad code into
  your pages.
- **Sponsored content**: label clearly as "Sponsored" per FTC guidelines —
  duplicate a review block and add a `<span class="badge">Sponsored</span>`.
- **Coupons/deals**: keep the `deals.html` page updated with verified, live
  offers only.

## 13. Before you publish: replace all placeholders

Search every file for these markers and replace them with real content:
- `Placeholder` (product names/descriptions)
- `$0.00` (prices)
- `REPLACE-WITH-AFFILIATE-LINK` (affiliate URLs — currently `href="#"`)
- `[Add date]` (dates)
- `reviewnest.example` (your real domain, once you have one)
- `hello@reviewnest.example`, the WhatsApp number, and social `#` links

Do not publish fabricated prices, specs, reviews, or testimonials — use the
placeholders until you have verified real data, per your own requirement.
