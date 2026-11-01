# Urban Spark Electrical - Website

A five-page website for Urban Spark Electrical, a Johannesburg-based residential and commercial electrical services company.

## Pages

| File            | Purpose                                  |
|------------------|-------------------------------------------|
| `index.html`     | Home page - hero, key services, why choose us, testimonials |
| `about.html`     | Company history, mission, vision, team, values |
| `services.html`  | Detailed list of services offered |
| `enquiry.html`   | Quote request form |
| `contact.html`   | Contact details, service area, general enquiry form, map placeholder |
| `style.css`      | Single external stylesheet linked by all pages |

## Styling approach (Part 2)

- External stylesheet: all five pages link to one shared `style.css`, using a kebab-case naming convention (e.g. `.site-header`, `.card-grid`, `.hero__image`).
- Reset & base style: a universal box-sizing reset, plus base font, colour and spacing set as CSS custom properties (`:root`) so they're reused consistently across the site.
- Colour scheme: charcoal (`#161b22`), cream background (`#f7f5f0`), amber accent (`#f2a93b`), and teal secondary accent (`#1b8a91`) — chosen to evoke electrical/spark imagery without leaning on a generic template palette.
- Typography: Barlow Condensed for headings (industrial, condensed feel) paired with Inter for body text, set on a modular type scale (`--step--1` to `--step-4`).
- Layout: CSS Grid for the hero section, service card grids, testimonials and footer; Flexbox for the header and navigation.
- Visual styles: `border`, `box-shadow` and background colour used on cards, buttons and form fields, with `:hover`, `:focus`/`:focus-visible` and `:active` states on all interactive elements (nav links, buttons, form inputs).

## Responsive design (Part 3)

Breakpoints:
- Desktop: default styles (> 900px)
- Tablet:`@media (max-width: 900px)` - hero and card grids drop to two columns, footer to two columns
- Mobile:`@media (max-width: 600px)` - single-column layout throughout, stacked navigation

Relative units (`rem`, `em`, `%`, `vw`) are used for spacing, type sizing and widths so the layout scales rather than relying on fixed pixel values. Images use a `sizes` attribute so the browser can pick an appropriately sized image for the current viewport.


### 2026-09-16
- Added external stylesheet (`style.css`) and linked it from all five pages.
- Added a CSS reset and base typography/colour/spacing tokens.
- Restructured header/nav, hero, service cards, feature list, testimonials and footer with semantic classes for CSS Grid and Flexbox layout.
- Applied visual styling (colour, background, border, box-shadow) and interactive states (`:hover`, `:focus-visible`, `:active`) to navigation, buttons and form fields.
- Added responsive breakpoints at 900px (tablet) and 600px (mobile), converted spacing/type sizes to relative units, and added `sizes` attributes to images.

## Part 3 - Functionality and SEO

### JavaScript functionality
- Added `js/script.js`, loaded with `defer` on all five pages.
- Services page: live keyword filtering hides non-matching service cards and announces the number of matches.
- Image lightbox: click an image in the main content to enlarge it; close with the Close button, outside click, or Escape.
- Quote form: browser/JavaScript validation, prevents past preferred dates, displays indicative service price ranges, and prepares a quote email to `info@urbanspark.co.za`.
- Contact form: includes message type, validates required fields, and prepares a complete email to the business.
- Forms use the visitor's configured email application (`mailto:`). **There is no server-side submission or database**, so visitors must send the prepared email themselves. Indicative price ranges are examples only and must be confirmed by the business.

### SEO and technical files
- Existing page titles and meta descriptions retained and checked for relevance to the Johannesburg electrical-services business.
- Semantic headings, descriptive image alt text, internal navigation, mobile viewport metadata, and responsive styles are retained.
- Added `robots.txt` and `sitemap.xml`. Before publishing, replace `www.example.com` with the actual deployed domain and add the sitemap URL to `robots.txt`.
- Contact page includes embedded maps for Johannesburg and Sandton service areas. No exact walk-in office address is claimed.
- Performance/security: images use responsive sizing where configured; external embeds and remote images require an internet connection. Use HTTPS on deployment and keep all dependencies updated.

### Testing checklist
1. Open `index.html` and confirm all five navigation links work.
2. On `services.html`, search for `solar`, `backup`, and a word with no match.
3. Click an image and close the lightbox using its button, Escape, and the overlay.
4. Submit empty or invalid quote/contact forms and confirm browser validation appears.
5. Complete each form and confirm the email app opens with the fields populated. Send a test email only to an address you control.
6. Check the layout at desktop, tablet, and mobile widths; verify both embedded maps load.
7. Replace placeholder sitemap domain and deploy to a public HTTPS host (for example, GitHub Pages or Netlify).

### Part 3 changelog — 2026-10-21
- Added deferred JavaScript across the five website pages.
- Implemented service search/filtering, interactive image lightbox, client-side form validation, indicative quote estimates, and email composition for contact and quote requests.
- Added message-type selection and two embedded service-area maps to the contact page.
- Added `robots.txt`, `sitemap.xml`, test checklist, and Part 3 documentation. Deployment URL remains to be added after hosting.

### References (Part 3)
- Google. (n.d.) *Google Maps*. Available at: https://www.google.com/maps (Accessed: 21 October 2026).
- MDN Web Docs. (n.d.) *Constraint validation*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (Accessed: 21 October 2026).
- MDN Web Docs. (n.d.) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 21 October 2026).
- Sitemaps.org. (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 21 October 2026).
- The Independent Institute of Education. (2026) *Web Development (Introduction) WEDE5020: Portfolio of Evidence - Part 3: Enhancing Functionality and SEO*. Assessment brief.
