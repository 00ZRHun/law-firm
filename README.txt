RAHMAN & ASSOCIATES - STATIC WEBSITE (plain HTML, CSS, JavaScript)

PAGES
  index.html     Homepage
  about.html     About Us
  services.html  Services / practice areas
  team.html      Our Team
  insights.html  Insights (category filter works)
  contact.html   Contact

HOW TO USE
- Preview: double-click index.html (needs internet for the Google Fonts).
- Host: upload this whole folder to any static host (Netlify, Vercel, GitHub Pages,
  Cloudflare Pages, or normal web hosting) so index.html sits at the site root.

WHAT WORKS
- All navigation links, buttons, images and footers.
- Testimonial carousel (arrows + dots), Insights category filter.
- Contact form: opens the visitor's email app with a pre-filled message to
  enquiry@rahman-associates.com.my. For direct submissions, connect a form service
  (e.g. Formspree or Netlify Forms) later.

PLACEHOLDERS TO REPLACE BEFORE LAUNCH
- Team names, roles and photos (team.html, about.html) - shown as [PARTNER NAME] etc.
- Office hours (contact.html) - [OFFICE HOURS]
- Testimonials 2 and 3 (assets/js/main.js) - [CLIENT TESTIMONIAL...]
- Insights article dates and article pages (insights.html) - [DATE]
- Social media links (footers) - currently point to the contact page
- Confirm the practice-area descriptions on services.html and the stats on the homepage
  with the firm.

STRUCTURE
  assets/css   home.css (homepage), site.css (subpages), extra.css (shared extras)
  assets/js    main.js (carousel, filter, contact form)
  assets/images  the five supplied images
