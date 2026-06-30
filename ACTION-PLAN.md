# NexaGrowth SEO Action Plan
**Generated:** 2026-06-19
**Current SEO Score:** 54/100
**Target SEO Score:** 82/100 (after all actions complete)

---

## How to Use This Plan

Actions are grouped into four sprints by priority. Each action includes:
- **Effort** estimate (time to implement)
- **Impact** (score points it unlocks)
- **Exact code** where applicable

Complete Sprint 1 before Sprint 2. Sprints 3 and 4 can be batched.

---

## Sprint 1 — Critical Fixes (Do This Week)
*Estimated total effort: 3–4 hours*
*Score impact: +15–18 points*

---

### ACTION 1: Create robots.txt
**Effort:** 5 min | **Impact:** +3 pts | **Priority:** Critical

Create file: `C:\Users\Lenovo\Desktop\Digital marketing\robots.txt`

```
User-agent: *
Allow: /

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot-Image
Allow: /

Sitemap: https://nexagrowth.com/sitemap.xml
```

**Replace `nexagrowth.com` with your actual domain before going live.**

---

### ACTION 2: Create sitemap.xml
**Effort:** 10 min | **Impact:** +3 pts | **Priority:** Critical

Create file: `C:\Users\Lenovo\Desktop\Digital marketing\sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nexagrowth.com/</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/about.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/services.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/work.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/pricing.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/blog.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://nexagrowth.com/contact.html</loc>
    <lastmod>2026-06-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### ACTION 3: Add Canonical Tags to All Pages
**Effort:** 15 min (copy-paste across 7 files) | **Impact:** +4 pts | **Priority:** Critical

Add immediately after `<meta charset="UTF-8">` in each page's `<head>`:

**index.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/">
```

**about.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/about.html">
```

**services.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/services.html">
```

**contact.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/contact.html">
```

**work.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/work.html">
```

**pricing.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/pricing.html">
```

**blog.html** (after line 4):
```html
<link rel="canonical" href="https://nexagrowth.com/blog.html">
```

---

### ACTION 4: Add Open Graph + Twitter Card Tags
**Effort:** 30 min | **Impact:** +4 pts | **Priority:** Critical

Add to **every page** inside `<head>`. Template (customize per page):

**index.html** — paste after the meta description tag (after line 7):
```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="NexaGrowth">
<meta property="og:title" content="NexaGrowth — Digital Marketing Agency | SEO, PPC & Social Media">
<meta property="og:description" content="Senior-only digital marketing agency with a 90-day ROI guarantee. SEO, paid media, social, email & analytics. 500+ clients. No lock-in contracts.">
<meta property="og:url" content="https://nexagrowth.com/">
<meta property="og:image" content="https://nexagrowth.com/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@nexagrowth">
<meta name="twitter:title" content="NexaGrowth — Digital Marketing Agency | SEO, PPC & Social Media">
<meta name="twitter:description" content="Senior-only digital marketing agency with a 90-day ROI guarantee. SEO, paid media, social, email & analytics. 500+ clients.">
<meta name="twitter:image" content="https://nexagrowth.com/images/og-home.jpg">
```

**Repeat for each page** — change `og:title`, `og:description`, `og:url`, and `og:image` per page.

**Note:** You must create OG images (1200×630px JPG) for each page. Use Canva or Figma with the NexaGrowth brand colors (#F59E0B gold on #0F1729 dark background) with the page headline and logo.

---

### ACTION 5: Add Schema / JSON-LD — Phase 1
**Effort:** 45 min | **Impact:** +8 pts | **Priority:** Critical

**Add to index.html** — paste before `</body>` (before line 501):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexagrowth.com/#organization",
      "name": "NexaGrowth",
      "url": "https://nexagrowth.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexagrowth.com/images/nexagrowth-logo.png",
        "width": 200,
        "height": 60
      },
      "description": "Senior-only digital marketing agency with a 90-day ROI guarantee. SEO, paid media, social, email & analytics. 500+ clients globally.",
      "foundingDate": "2018",
      "numberOfEmployees": {"@type": "QuantitativeValue", "minValue": 10},
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-888-639-2947",
        "contactType": "sales",
        "email": "hello@nexagrowth.com",
        "hoursAvailable": "Mo-Fr 09:00-18:00",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "340 Fifth Ave, Suite 1200",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nexagrowth",
        "https://twitter.com/nexagrowth",
        "https://www.instagram.com/nexagrowth"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nexagrowth.com/#website",
      "url": "https://nexagrowth.com",
      "name": "NexaGrowth",
      "publisher": {"@id": "https://nexagrowth.com/#organization"}
    }
  ]
}
</script>
```

**Add to services.html** — paste before `</body>` (before line 304):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NexaGrowth Digital Marketing Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "SEO & Organic Growth",
        "description": "Technical SEO audits, content strategy, and authority building that compounds into sustainable organic traffic and top rankings.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Search Engine Optimization",
        "url": "https://nexagrowth.com/services.html#seo"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Paid Media & PPC",
        "description": "Google, Meta, LinkedIn, TikTok — maximum return on ad spend, tracked to the dollar.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Pay-Per-Click Advertising",
        "url": "https://nexagrowth.com/services.html#ppc"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Platform-native content, community management, and influencer partnerships.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Social Media Marketing",
        "url": "https://nexagrowth.com/services.html#social"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Content Marketing",
        "description": "Strategic blogs, guides, and video scripts that rank on Google and shorten your sales cycle.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Content Marketing",
        "url": "https://nexagrowth.com/services.html#content"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Email Marketing & CRM",
        "description": "Automated lifecycle sequences, behavioural segmentation, and A/B testing. Average 42x ROI.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Email Marketing",
        "url": "https://nexagrowth.com/services.html#email"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Analytics & CRO",
        "description": "Custom dashboards, multi-touch attribution, and weekly reporting. Data-driven decisions.",
        "provider": {"@type": "Organization", "name": "NexaGrowth", "url": "https://nexagrowth.com"},
        "serviceType": "Conversion Rate Optimization",
        "url": "https://nexagrowth.com/services.html#analytics"
      }
    }
  ]
}
</script>
```

**Add to pricing.html** — paste before `</body>` (before line 249):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's included in each digital marketing plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each plan includes a dedicated senior strategist, campaign management, regular reporting, and the 90-day ROI guarantee. Higher tiers add more service channels, more frequent reporting, and closer access to your team."
      }
    },
    {
      "@type": "Question",
      "name": "Is ad spend included in the digital marketing price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — ad spend is billed at cost directly to your account or via invoice. Our fee covers strategy, management, optimisation, and reporting. We never mark up ad spend."
      }
    },
    {
      "@type": "Question",
      "name": "Can I upgrade or downgrade my marketing plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can change your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of the next billing cycle. No penalties or complications."
      }
    },
    {
      "@type": "Question",
      "name": "How does the 90-day ROI guarantee work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If we don't deliver measurable ROI within 90 days of your first campaign going live, you receive a full refund of the management fees paid. We define ROI with you upfront — it's specific and agreed on before we start."
      }
    },
    {
      "@type": "Question",
      "name": "What does no lock-in contract mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You're on a month-to-month agreement. You can cancel anytime with 30 days' written notice. No exit fees, no complex termination clauses — just 30 days' notice and you're free."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer custom digital marketing packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For businesses with specific needs, unusual channel mixes, or large teams we frequently build custom packages. Book a strategy call and we'll put together a proposal tailored to your exact requirements."
      }
    }
  ]
}
</script>
```

---

### ACTION 6: Add Favicon
**Effort:** 20 min | **Impact:** +2 pts | **Priority:** High

1. Create a 512×512px PNG favicon (gold "N" on dark background using the brand colors: #F59E0B on #0F1729)
2. Generate sizes using realfavicongenerator.net
3. Save as `favicon.png` and `apple-touch-icon.png` in the root directory
4. Add to every page's `<head>` (after the viewport meta tag):

```html
<link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
<link rel="manifest" href="/site.webmanifest">
```

---

### ACTION 7: Optimize Title Tags (6 pages)
**Effort:** 20 min | **Impact:** +4 pts | **Priority:** High

**about.html** — change line 6:
```html
<title>Senior Digital Marketing Team | 8+ Years Experience — NexaGrowth</title>
```

**services.html** — change line 6:
```html
<title>SEO, PPC & Digital Marketing Services | NexaGrowth Agency</title>
```

**contact.html** — change line 6:
```html
<title>Contact NexaGrowth | Free Strategy Call — NY, London, Singapore</title>
```

**work.html** — change line 6:
```html
<title>Digital Marketing Case Studies: 312% Revenue & 42× ROI | NexaGrowth</title>
```

**pricing.html** — change line 6:
```html
<title>Digital Marketing Pricing from $1,500/mo | NexaGrowth Agency</title>
```

**blog.html** — change line 6:
```html
<title>Digital Marketing Blog: SEO, PPC & Growth Strategies | NexaGrowth</title>
```

---

## Sprint 2 — High Impact Fixes (Week 2)
*Estimated total effort: 4–6 hours*
*Score impact: +10–12 points*

---

### ACTION 8: Optimize H1 Tags for Keywords
**Effort:** 30 min | **Impact:** +5 pts | **Priority:** High

The creative taglines work well for UX — keep them as H2 subheadings. Replace H1s with keyword-rich alternatives.

**index.html** — change lines 92–96:
```html
<h1>
    <span class="h1-eyebrow">Award-Winning Digital Marketing Agency</span>
    <span>We Don't Run Ads.</span>
    <span>We Drive <em>Revenue.</em></span>
</h1>
```
Or simply prepend the keyword: Keep H1 as-is but add a keyword-rich subtitle:
```html
<!-- Alternative: keep creative H1, add keyword subhead -->
<p class="hero-keyword-sub">Senior Digital Marketing Agency — SEO, PPC & Social Media</p>
<h1>...</h1>
```

**services.html** — change line 62:
```html
<h1>Full-Stack <em>Digital Marketing Services</em></h1>
```

**contact.html** — change line 62:
```html
<h1>Contact Our <em>Digital Marketing Agency</em></h1>
```

**work.html** — change line 62:
```html
<h1>Digital Marketing <em>Case Studies & Results</em></h1>
```

**pricing.html** — change line 62:
```html
<h1>Digital Marketing Agency <em>Pricing</em></h1>
```

---

### ACTION 9: Fix Meta Descriptions (5 pages)
**Effort:** 15 min | **Impact:** +2 pts | **Priority:** High

**contact.html** — change line 7 (currently only 98 chars — critical):
```html
<meta name="description" content="Book a free 30-minute strategy call with NexaGrowth's senior digital marketing experts. Offices in New York, London & Singapore. Reply within 24 hours.">
```
(157 chars — PASS)

**about.html** — change line 7:
```html
<meta name="description" content="Meet the NexaGrowth team — senior marketers with 8+ years experience each. Founded 2018. 500+ clients in 12 countries. 90-day ROI guarantee. Ex-Google, Ex-Meta.">
```
(161 chars — PASS)

**services.html** — change line 7:
```html
<meta name="description" content="Full-stack digital marketing: SEO, PPC, social media, content, email automation, and analytics CRO. Senior-only teams. 90-day ROI guarantee. 500+ clients served.">
```
(166 chars — slightly over; trim to 160)

**pricing.html** — change line 7:
```html
<meta name="description" content="Transparent digital marketing pricing from $1,500/mo. Growth, Scale, and Enterprise plans. No hidden fees, no lock-in contracts, 90-day ROI guarantee on every plan.">
```
(169 chars — trim to 160)

**blog.html** — change line 7:
```html
<meta name="description" content="Actionable SEO, PPC, social media, and email marketing guides from senior marketers who run real client accounts daily. No fluff — only what works.">
```
(155 chars — PASS)

---

### ACTION 10: Add Contact Page to Primary Nav
**Effort:** 10 min | **Impact:** +2 pts | **Priority:** High

On all 7 pages, add Contact to the `<ul class="nav-links">` list (before the closing `</ul>`):

**All pages — add to nav-links (after "Blog" li):**
```html
<li><a href="contact.html">Contact</a></li>
```

And in the mobile menu `<ul>`, add the same. This gives the Contact page full internal link equity equal to other nav pages.

---

### ACTION 11: Add Real Social Media URLs
**Effort:** 5 min (once you have the URLs) | **Impact:** +2 pts | **Priority:** High

Replace all `href="#"` in social links across all pages:

**Footer social links (all 7 pages):**
```html
<div class="foot-social">
    <a href="https://www.linkedin.com/company/nexagrowth" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
    <a href="https://twitter.com/nexagrowth" aria-label="X (Twitter)" target="_blank" rel="noopener">𝕏</a>
    <a href="https://www.instagram.com/nexagrowth" aria-label="Instagram" target="_blank" rel="noopener">ig</a>
    <a href="https://www.youtube.com/@nexagrowth" aria-label="YouTube" target="_blank" rel="noopener">yt</a>
</div>
```

Also add `aria-label` to mobile footer social links (currently missing on all non-index pages).

---

### ACTION 12: Create 404.html Page
**Effort:** 30 min | **Impact:** +2 pts | **Priority:** High

Create `C:\Users\Lenovo\Desktop\Digital marketing\404.html` with:
- Same navigation as other pages
- "Page not found" H1
- Brief message
- CTA buttons back to home and contact
- Same footer

This page needs to be configured on the hosting server to serve on 404 errors.

---

### ACTION 13: Fix Color Contrast Issues
**Effort:** 20 min | **Impact:** +2 pts | **Priority:** High

In `style.css`, update these opacity values:

**Line 544 (footer links):** `color:rgba(255,255,255,.25)` → `color:rgba(255,255,255,.55)` (meets WCAG AA)

**Line 147 (nav links):** `color:rgba(255,255,255,.55)` → `color:rgba(255,255,255,.75)` (meets WCAG AA)

**Line 361 (ticker text):** `color:rgba(255,255,255,.25)` → decorative, exempt from WCAG, but improve to `.4` for readability

**Line 521 (cta-note):** `color:rgba(255,255,255,.2)` → `color:rgba(255,255,255,.5)`

**Line 479 (stat labels):** `color:rgba(255,255,255,.3)` → `color:rgba(255,255,255,.55)`

---

### ACTION 14: Add work.html H2
**Effort:** 5 min | **Impact:** +1 pt | **Priority:** Medium

In `work.html`, add an H2 before the work grid. Find line 78 (`<div class="work-grid">`) and add before it:

```html
<h2 class="sr-only">Our Work</h2>
```
Or a visible H2:
```html
<h2 style="margin-bottom:2rem">Featured <em>Campaigns</em></h2>
```

This fixes the H1 → H3 jump that violates heading hierarchy.

---

## Sprint 3 — Content & Schema (Week 3–4)
*Estimated total effort: 6–10 hours*
*Score impact: +8–10 points*

---

### ACTION 15: Create Real Blog Articles
**Effort:** 2–3 hours per article | **Impact:** +6 pts | **Priority:** Critical

The blog.html page has 6 article previews + 1 featured post, all linking to `href="#"`. You MUST create actual article pages.

Create `blog/` folder and these 7 files:
1. `blog/seo-strategy-312-percent-revenue-veltex.html`
2. `blog/meta-ads-creative-testing-framework.html`
3. `blog/klaviyo-flows-ecommerce.html`
4. `blog/da80-links-rankings.html`
5. `blog/full-funnel-marketing-1m-framework.html`
6. `blog/tiktok-ads-2026.html`
7. `blog/digital-marketing-audit-process.html`

Minimum 800 words per article. Each article should include:
- Author byline with `<a>` link to author LinkedIn
- `<time datetime="2026-06-12">June 12, 2026</time>` date
- Internal links to services.html and contact.html
- Article schema JSON-LD

**Update blog.html article links** from `href="#"` to the new file paths.

---

### ACTION 16: Add BreadcrumbList Schema to Inner Pages
**Effort:** 30 min | **Impact:** +3 pts | **Priority:** Medium

Add to each inner page before `</body>`:

**about.html:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://nexagrowth.com/"},
    {"@type": "ListItem", "position": 2, "name": "About Us", "item": "https://nexagrowth.com/about.html"}
  ]
}
</script>
```

Repeat for services.html, work.html, pricing.html, blog.html, contact.html with appropriate breadcrumb paths.

---

### ACTION 17: Add Person Schema for Team (about.html)
**Effort:** 20 min | **Impact:** +2 pts | **Priority:** Low-Medium

Add before `</body>` in about.html:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "NexaGrowth Team",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Person",
        "name": "Lucas Mercer",
        "jobTitle": "CEO & Founder",
        "worksFor": {"@type": "Organization", "name": "NexaGrowth"},
        "description": "Ex-Google, 12 years performance marketing. Built and scaled paid media programmes at brands doing $100M+ in revenue.",
        "url": "https://nexagrowth.com/about.html"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Person",
        "name": "Sophia Kwan",
        "jobTitle": "Head of SEO",
        "worksFor": {"@type": "Organization", "name": "NexaGrowth"},
        "description": "Led organic growth at two unicorn startups. Specialist in technical SEO and content-led authority building.",
        "url": "https://nexagrowth.com/about.html"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Person",
        "name": "Amir Rashid",
        "jobTitle": "Paid Media Director",
        "worksFor": {"@type": "Organization", "name": "NexaGrowth"},
        "description": "Managed $30M+ in annual ad spend. Ex-Meta, certified across Google, Meta, LinkedIn, and TikTok.",
        "url": "https://nexagrowth.com/about.html"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Person",
        "name": "Elena Andros",
        "jobTitle": "Head of Content",
        "worksFor": {"@type": "Organization", "name": "NexaGrowth"},
        "description": "Published author and content strategist. Built content programmes that drive 300%+ organic traffic growth.",
        "url": "https://nexagrowth.com/about.html"
      }
    }
  ]
}
</script>
```

---

### ACTION 18: Add Individual Case Study Pages
**Effort:** 3–4 hours | **Impact:** +4 pts | **Priority:** Medium

Create `work/` folder with:
1. `work/veltex-seo-case-study.html` — 800+ words
2. `work/pulsartech-ppc-case-study.html` — 800+ words
3. `work/homenest-social-media-case-study.html` — 800+ words
4. `work/orbis-email-case-study.html` — 800+ words
5. `work/flexform-seo-case-study.html` — 800+ words
6. `work/cresta-meta-ads-case-study.html` — 800+ words

Each case study page needs:
- Challenge section
- Approach / strategy section
- Results with specific numbers
- Client testimonial
- CTA to contact
- CaseStudy schema (or Article schema)

Update work.html cards to link to these pages.

---

## Sprint 4 — Accessibility, AI & Polish (Month 2)
*Estimated total effort: 4–6 hours*
*Score impact: +5–7 points*

---

### ACTION 19: Create llms.txt
**Effort:** 20 min | **Impact:** +2 pts | **Priority:** Medium

Create `C:\Users\Lenovo\Desktop\Digital marketing\llms.txt`:

```
# NexaGrowth Digital Marketing Agency
# llms.txt — AI crawler guidance
# https://nexagrowth.com

## About
NexaGrowth is a senior-only digital marketing agency founded in 2018. We specialize in SEO, paid media (Google, Meta, LinkedIn, TikTok), social media, content marketing, email & CRM automation, and analytics/CRO. We serve 500+ clients globally across 12 countries and manage $50M+ in annual ad spend.

## Key Differentiators
- Senior-only teams (8+ years experience, no juniors)
- 90-day ROI guarantee with full refund policy
- Month-to-month contracts, no lock-in
- Offices in New York, London, and Singapore
- 4.9 star client rating

## Services
- SEO & Organic Growth: /services.html#seo
- Paid Media & PPC: /services.html#ppc
- Social Media Marketing: /services.html#social
- Content Marketing: /services.html#content
- Email Marketing & CRM: /services.html#email
- Analytics & CRO: /services.html#analytics

## Pricing
- Growth plan: $1,500/mo (1 channel)
- Scale plan: $4,500/mo (3 channels, most popular)
- Enterprise plan: $12,000/mo (all channels)
- Ad spend billed separately at cost

## Contact
- Email: hello@nexagrowth.com
- Phone: +1 (888) 639-2947
- WhatsApp: https://wa.me/18886392947
- New York HQ: 340 Fifth Ave, Suite 1200, NY 10001

## Team
- Lucas Mercer — CEO & Founder (Ex-Google, 12 years)
- Sophia Kwan — Head of SEO (Ex-unicorn startups)
- Amir Rashid — Paid Media Director (Ex-Meta, $30M+ managed)
- Elena Andros — Head of Content (Published author)

## Key Pages
- Homepage: /
- About: /about.html
- Services: /services.html
- Case Studies: /work.html
- Pricing: /pricing.html
- Blog: /blog.html
- Contact: /contact.html
```

---

### ACTION 20: Add Focus Styles for Accessibility
**Effort:** 15 min | **Impact:** +2 pts | **Priority:** Medium

Add to `style.css` after the `:root` block (after line 27):

```css
/* ── FOCUS ACCESSIBILITY ──────────────────────────────────────── */
:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 3px;
    border-radius: 3px;
}
/* Remove outline:none from form elements and replace with visible state */
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(245,158,11,.15);
    /* Do NOT add outline:none here */
}
/* Skip navigation */
.skip-nav {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--gold);
    color: #fff;
    padding: 8px 16px;
    z-index: 9999;
    font-weight: 700;
    transition: top .2s;
}
.skip-nav:focus { top: 0; }
```

Add skip nav link to the top of `<body>` on all pages (immediately after `<body>`):
```html
<a href="#main-content" class="skip-nav">Skip to main content</a>
```

And add `id="main-content"` to the first main content element on each page (e.g., the hero section or page-header div).

---

### ACTION 21: Create Privacy Policy Page
**Effort:** 45 min | **Impact:** +3 pts + legal compliance | **Priority:** High

The contact form collects: first name, last name, email, company, service interest, budget, and message. The newsletter form collects email addresses. GDPR and CCPA require a Privacy Policy.

Create `privacy.html` with:
- What data is collected
- How it's used
- Third parties (Google Fonts currently loads external resources)
- User rights (access, deletion)
- Contact for privacy requests: hello@nexagrowth.com

Add link to footer on all pages in foot-bot section:
```html
<p>© 2026 NexaGrowth Inc. All rights reserved. | <a href="privacy.html" style="color:rgba(255,255,255,.4)">Privacy Policy</a></p>
```

---

### ACTION 22: Fix Touch Targets
**Effort:** 10 min | **Impact:** +1 pt | **Priority:** Medium

In `style.css`:

**Line 185 (mob-x button):** change to `width:44px; height:44px`

**Line 537 (footer social links):** change to `width:44px; height:44px` (currently 34×34px)

---

### ACTION 23: Self-Host Google Fonts (Performance + Privacy)
**Effort:** 30 min | **Impact:** +1 pt | **Priority:** Low-Medium

1. Download Space Grotesk and DM Sans from fonts.google.com
2. Convert to WOFF2 format
3. Save to `fonts/` folder
4. Replace in all 7 pages — remove the 3 Google Fonts `<link>` tags and add to `style.css`:

```css
@font-face {
    font-family: 'Space Grotesk';
    src: url('../fonts/space-grotesk-700.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}
/* Repeat for each weight */
```

This eliminates the external DNS lookup, improves LCP, and removes a GDPR concern (Google Fonts logs IP addresses).

---

## Summary: Score Projection After Each Sprint

| Sprint | Actions | Hours | New Score |
|---|---|---|---|
| Baseline | — | — | 54/100 |
| Sprint 1 | Actions 1–7 | 3–4h | 68/100 |
| Sprint 2 | Actions 8–14 | 4–6h | 74/100 |
| Sprint 3 | Actions 15–18 | 6–10h | 80/100 |
| Sprint 4 | Actions 19–23 | 4–6h | **85/100** |

---

## Quick Reference Checklist

### Sprint 1 (This Week)
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add canonical tags to all 7 pages
- [ ] Add OG + Twitter Card tags to all 7 pages (create OG images too)
- [ ] Add Organization + WebSite + Service + FAQPage JSON-LD schema
- [ ] Add favicon (create PNG, add link tags to all pages)
- [ ] Rewrite title tags on 6 pages

### Sprint 2 (Next Week)
- [ ] Optimize H1 tags on 5 pages
- [ ] Fix meta descriptions on 5 pages (especially contact.html — critical)
- [ ] Add Contact link to primary nav on all pages
- [ ] Replace social `href="#"` with real social URLs
- [ ] Create 404.html
- [ ] Fix color contrast (6 CSS changes)
- [ ] Add H2 to work.html

### Sprint 3 (Weeks 3–4)
- [ ] Write and publish 7 blog articles (actual HTML pages)
- [ ] Add BreadcrumbList schema to inner pages
- [ ] Add Person schema for team (about.html)
- [ ] Create 6 individual case study pages

### Sprint 4 (Month 2)
- [ ] Create llms.txt
- [ ] Add focus-visible CSS styles
- [ ] Add skip navigation link
- [ ] Create Privacy Policy page
- [ ] Fix touch targets (mob-x, social links to 44px)
- [ ] Self-host Google Fonts (optional but recommended)
- [ ] Add `defer` to script tags

---

## After Deployment

Once live on a real domain:

1. **Submit sitemap to Google Search Console:** `https://search.google.com/search-console` → Add property → Sitemaps → Submit `sitemap.xml`
2. **Submit sitemap to Bing Webmaster Tools:** `https://www.bing.com/webmasters`
3. **Request indexing** for each of the 7 pages via GSC URL Inspection tool
4. **Set up GA4** for traffic analytics — the site currently has no analytics
5. **Get external reviews** on Clutch.co and Google Business Profile to support the 4.9★ claim
6. **Build backlinks** — reach out to industry publications for guest posts (this site has excellent content depth for pitching)
7. **Monitor Core Web Vitals** via Google PageSpeed Insights once deployed

---

*End of ACTION-PLAN.md*
*Generated: 2026-06-19 | NexaGrowth SEO Action Plan*
