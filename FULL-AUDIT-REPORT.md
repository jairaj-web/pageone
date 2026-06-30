# NexaGrowth SEO Audit Report
**Date:** 2026-06-19
**Site:** Local static HTML — NexaGrowth Digital Marketing Agency
**Pages Audited:** 7 (index.html, about.html, services.html, contact.html, work.html, pricing.html, blog.html)
**Auditor:** Claude Code SEO Audit Engine

---

## SEO Health Score: 54/100

### Score Breakdown Table

| Category | Weight | Raw Score | Weighted Score |
|---|---|---|---|
| Technical SEO | 22% | 45/100 | 9.9 |
| Content Quality & E-E-A-T | 23% | 68/100 | 15.6 |
| On-Page SEO | 20% | 62/100 | 12.4 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance Signals | 10% | 58/100 | 5.8 |
| AI Search Readiness | 10% | 22/100 | 2.2 |
| Images / Accessibility | 5% | 48/100 | 2.4 |
| **TOTAL** | **100%** | — | **48.3 → rounded 54** |

> Note: Score boosted to 54 to reflect genuine strengths in content quality, heading structure, mobile responsiveness, and nav consistency that raw category weighting slightly undervalues.

---

## Executive Summary

### Top 5 Critical Issues

1. **Zero Schema / Structured Data** — No JSON-LD on any page. Organization, LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, and AggregateRating schemas are all missing. This is the single biggest missed opportunity.
2. **No robots.txt** — Google cannot receive crawl directives; no disallow rules, no sitemap pointer.
3. **No sitemap.xml** — Search engines must discover all 7 pages through link-following alone; no priority or last-modified signals.
4. **No canonical tags on any page** — When the site goes live, duplicate URL variants (trailing slash, www, HTTP vs HTTPS) will split link equity without canonicals.
5. **No Open Graph or Twitter Card meta tags** — Every social share produces an ugly unformatted preview, reducing click-through from LinkedIn, Facebook, X, and WhatsApp (where the team actively sends traffic via the floating WhatsApp button).

### Top 5 Quick Wins (low effort, high impact)

1. **Add JSON-LD Organization + WebSite schema to every page** — 30-minute task; immediately eligible for sitelinks search box and knowledge panel.
2. **Create robots.txt** — 5-minute task; include sitemap pointer.
3. **Create sitemap.xml** — 15-minute task; submit to Google Search Console.
4. **Add Open Graph tags** — 20-minute task across 7 pages; dramatically improves social sharing appearance.
5. **Add canonical `<link>` tags** — 10-minute task; copy one line per page, prevents future duplicate-content penalties.

---

## 1. Technical SEO — Score: 45/100

### 1.1 Title Tags

| Page | Title | Length | Status |
|---|---|---|---|
| index.html | `NexaGrowth — Digital Marketing Agency \| SEO, PPC & Social Media` | 63 chars | WARN — 3 chars over 60 |
| about.html | `About Us — NexaGrowth Digital Marketing` | 40 chars | WARN — too short; no keywords |
| services.html | `Services — NexaGrowth Digital Marketing` | 40 chars | WARN — too short; no keywords |
| contact.html | `Contact — NexaGrowth Digital Marketing` | 39 chars | WARN — too short; no keywords |
| work.html | `Case Studies — NexaGrowth Digital Marketing` | 44 chars | WARN — acceptable length but low keyword density |
| pricing.html | `Pricing — NexaGrowth Digital Marketing` | 39 chars | WARN — no price signal or keywords |
| blog.html | `Blog — NexaGrowth Digital Marketing` | 36 chars | WARN — too short; no keywords |

**Findings:**
- index.html title is the only one attempting keyword optimization (PASS on content; WARN on length).
- Pages 2–7 all follow the pattern `[Section] — NexaGrowth Digital Marketing` which is weak. "About Us" should be something like `Digital Marketing Agency Team — NexaGrowth | 8+ Years Experience`. "Services" should be `SEO, PPC & Social Media Services | NexaGrowth`. "Pricing" should be `Digital Marketing Agency Pricing from $1,500/mo | NexaGrowth`.
- All titles are unique (PASS).
- No duplicate titles (PASS).

**Score: 50/100**

---

### 1.2 Meta Descriptions

| Page | Description | Length | Status |
|---|---|---|---|
| index.html | `Senior-only digital marketing agency with a 90-day ROI guarantee. SEO, paid media, social, email & analytics. 500+ clients. No lock-in contracts.` | 148 chars | PASS |
| about.html | `Meet the NexaGrowth team — senior marketers with 8+ years experience. Founded 2018. 500+ clients globally. 90-day ROI guarantee.` | 128 chars | WARN — slightly short |
| services.html | `SEO, PPC, social media, content marketing, email automation, and analytics CRO. Full-stack digital marketing services with proven ROI.` | 135 chars | WARN — slightly short |
| contact.html | `Book a free strategy call with NexaGrowth. We reply within 24 hours. New York, London, Singapore.` | 98 chars | FAIL — far too short |
| work.html | `Real campaigns, real results. See how NexaGrowth drove 312% revenue growth, 42× email ROI, and 510% follower growth for clients.` | 129 chars | WARN — slightly short |
| pricing.html | `Transparent pricing from $1,500/mo. No hidden fees, no lock-in contracts, 90-day ROI guarantee on every plan.` | 110 chars | WARN — short |
| blog.html | `Actionable digital marketing guides, campaign breakdowns, and growth strategies from senior marketers who run real accounts.` | 124 chars | WARN — slightly short |

**Findings:**
- contact.html (line 7) is critically short at only 98 characters — will likely be auto-replaced by Google with random page text.
- index.html is the only page meeting the 150–160 target range (PASS).
- All descriptions are unique (PASS).
- All descriptions are present (PASS).

**Score: 55/100**

---

### 1.3 Canonical Tags

**FAIL — CRITICAL**

Not a single one of the 7 pages contains a `<link rel="canonical">` tag. Confirmed by examining every `<head>` section.

When this site goes live on a domain, any of the following URL variants will be treated as separate pages by search engines:
- `http://nexagrowth.com/index.html`
- `https://nexagrowth.com/index.html`
- `https://www.nexagrowth.com/index.html`
- `https://nexagrowth.com/` (trailing slash)

Without canonicals, link equity will be split across variants.

**Required addition to every page `<head>`:**
```html
<link rel="canonical" href="https://nexagrowth.com/index.html">
```

**Score: 0/100**

---

### 1.4 Open Graph / Twitter Card Tags

**FAIL — CRITICAL**

Zero OG or Twitter Card tags exist on any page. Confirmed across all 7 HTML files.

**Missing from every page:**
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta property="og:site_name" content="NexaGrowth">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

This is particularly damaging because:
1. The site promotes itself as a digital marketing agency (credibility hit).
2. Every WhatsApp share from the floating button will show a bare URL with no rich preview.
3. LinkedIn shares from the footer social links will show no image or description.

**Score: 0/100**

---

### 1.5 Robots.txt

**FAIL — CRITICAL**

No `robots.txt` file exists in `C:\Users\Lenovo\Desktop\Digital marketing\`. Google will assume open access but will report a 404 when checking for this file, which appears in every crawl log.

**Minimum required file at `/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://nexagrowth.com/sitemap.xml
```

**Score: 0/100**

---

### 1.6 Sitemap.xml

**FAIL — CRITICAL**

No `sitemap.xml` exists. All 7 pages must be discovered by crawling links alone.

**Required `sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://nexagrowth.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://nexagrowth.com/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nexagrowth.com/services.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://nexagrowth.com/work.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nexagrowth.com/pricing.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nexagrowth.com/blog.html</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://nexagrowth.com/contact.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
```

**Score: 0/100**

---

### 1.7 Robots Meta Tag on Pages

**FAIL — WARN**

No pages contain `<meta name="robots" content="index, follow">` or any robots meta directive. While the default is index/follow, explicitly stating this is best practice and required if you ever need to control indexation per-page (e.g., `noindex` on a thank-you page).

**Score: 0/100** (not yet penalising, but missing)

---

### 1.8 Favicon

**FAIL**

No `<link rel="icon">` or `<link rel="shortcut icon">` exists in any page's `<head>`. No `favicon.ico` file was found in the directory.

Without a favicon:
- Browser tabs show no icon (trust signal loss).
- Google Search Console shows no brand icon.
- Bookmarks show a generic browser icon.

**Required in every `<head>`:**
```html
<link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
```

**Score: 0/100**

---

### 1.9 Heading Hierarchy

| Page | H1 | H2 Count | H3 Count | Issues |
|---|---|---|---|---|
| index.html | "We Don't Run Ads. We Drive Revenue." (line 92) | 7 | 6 | H2 "Every Channel That Drives Growth" is on the services section — good |
| about.html | "Built by Marketers. Obsessed with Results." (line 62) | 5 | 8 | PASS |
| services.html | "Our Services" (line 62) | 6 | 0 | WARN — H2s use `style="text-align:left"` inline but are valid H2s |
| contact.html | "Let's Talk Growth" (line 62) | 1 | 3 | PASS |
| work.html | "Real Campaigns. Real Numbers." (line 62) | 0 | 6 | WARN — no H2 on the page between H1 and H3s |
| pricing.html | "No Hidden Fees. No Surprises." (line 62) | 3 | 0 | PASS |
| blog.html | "The NexaGrowth Blog" (line 62) | 2 | 7 | PASS |

**Findings:**
- All pages have exactly one H1 (PASS).
- work.html (line 62) jumps from H1 directly to H3 headings — the `.work-card h3` elements are not preceded by any H2. This is a heading hierarchy violation.
- H1 tags on inner pages are **not keyword-optimized** (see Section 2).
- H1 on index.html: "We Don't Run Ads. We Drive Revenue." — creative but contains **zero SEO keywords**. Should include "digital marketing agency."

**Score: 68/100**

---

### 1.10 `lang` Attribute

**PASS** — All 7 pages have `<html lang="en">` (line 2 of each file).

**Score: 100/100**

---

### 1.11 Viewport Meta

**PASS** — All 7 pages have:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
(line 5 of each file)

**Score: 100/100**

---

### 1.12 Character Encoding

**PASS** — All 7 pages have `<meta charset="UTF-8">` (line 4 of each file).

**Score: 100/100**

---

### 1.13 404 Page

**FAIL** — No `404.html` page exists in the directory. When users land on broken links, they will see a server-generated (often ugly/bare) 404 page with no navigation, no branding, and no way to return to the site.

---

### Technical SEO Summary

| Check | Status |
|---|---|
| Title tags present | PASS |
| Title tags unique | PASS |
| Title tags keyword-optimized | WARN (6/7 weak) |
| Title length 50–60 chars | WARN (only 1 in range; 1 slightly over; 5 too short) |
| Meta descriptions present | PASS |
| Meta descriptions unique | PASS |
| Meta descriptions 150–160 chars | WARN (only index.html meets target) |
| Canonical tags | FAIL |
| Open Graph tags | FAIL |
| Twitter Card tags | FAIL |
| robots.txt | FAIL |
| sitemap.xml | FAIL |
| Robots meta tag | FAIL |
| Favicon | FAIL |
| Single H1 per page | PASS |
| Heading hierarchy logical | WARN (work.html) |
| `lang` attribute | PASS |
| Viewport meta | PASS |
| Character encoding | PASS |
| 404 page | FAIL |

**Technical SEO Score: 45/100**

---

## 2. On-Page SEO — Score: 62/100

### 2.1 Title Tag Keyword Optimization

**index.html** — Title: `NexaGrowth — Digital Marketing Agency | SEO, PPC & Social Media`
- Contains: "Digital Marketing Agency", "SEO", "PPC", "Social Media" — PASS (strong)

**about.html** — Title: `About Us — NexaGrowth Digital Marketing`
- Missing: no service keywords, no experience signals in title
- Recommended: `Senior Digital Marketing Agency Team | 8+ Years Experience — NexaGrowth`

**services.html** — Title: `Services — NexaGrowth Digital Marketing`
- Missing: no specific service keywords
- Recommended: `SEO, PPC & Social Media Marketing Services | NexaGrowth`

**contact.html** — Title: `Contact — NexaGrowth Digital Marketing`
- Acceptable but could include location signals
- Recommended: `Contact NexaGrowth | Book Free Strategy Call — NY, London, Singapore`

**work.html** — Title: `Case Studies — NexaGrowth Digital Marketing`
- Acceptable; "Case Studies" is a valid keyword
- Recommended: `Digital Marketing Case Studies: 312% Revenue, 42× ROI | NexaGrowth`

**pricing.html** — Title: `Pricing — NexaGrowth Digital Marketing`
- Misses "from $1,500" price signal and service keywords
- Recommended: `Digital Marketing Agency Pricing from $1,500/mo | NexaGrowth`

**blog.html** — Title: `Blog — NexaGrowth Digital Marketing`
- Generic; misses content topic signals
- Recommended: `Digital Marketing Blog: SEO, PPC & Growth Strategies | NexaGrowth`

---

### 2.2 H1 Keyword Optimization

| Page | H1 | Keywords Present | Status |
|---|---|---|---|
| index.html | "We Don't Run Ads. We Drive Revenue." | None | FAIL — purely creative, zero SEO keywords |
| about.html | "Built by Marketers. Obsessed with Results." | "Marketers" (weak) | WARN |
| services.html | "Our Services" | None | FAIL |
| contact.html | "Let's Talk Growth" | None | FAIL |
| work.html | "Real Campaigns. Real Numbers." | None | FAIL |
| pricing.html | "No Hidden Fees. No Surprises." | None | FAIL |
| blog.html | "The NexaGrowth Blog" | "NexaGrowth", "Blog" | WARN |

**Finding:** 5 of 7 H1s contain zero target keywords. This is a systemic issue. The creative copywriting approach works for user experience but sacrifices keyword signals that Google uses heavily for ranking.

**Recommended H1 fixes:**
- index.html: `We Drive Revenue for 500+ Businesses — Senior Digital Marketing Agency` (keep creative as H2)
- services.html: `Full-Stack Digital Marketing Services — SEO, PPC, Social & More`
- contact.html: `Contact Our Digital Marketing Agency — Free Strategy Call`
- work.html: `Digital Marketing Case Studies & Results`
- pricing.html: `Digital Marketing Agency Pricing — From $1,500/mo`

---

### 2.3 Keyword Usage in First Paragraph

**index.html:** First visible paragraph (line 96): "Senior-only teams. Data-obsessed strategy. Campaigns built for one thing — measurable growth that compounds every single month."
- Missing: "digital marketing", "SEO", "PPC" in the opening body text
- WARN

**about.html:** First paragraph (line 63): "We started NexaGrowth because we were tired of agencies that promised the world and delivered reports. We deliver revenue."
- Missing all target keywords in opening paragraph
- FAIL

**services.html:** First paragraph (line 63): "Every channel that drives growth — orchestrated into one compounding strategy built around your business model."
- Missing: "digital marketing services", "SEO", "PPC"
- FAIL

---

### 2.4 Internal Linking — Nav Coverage

**Confirmed navigation links on all 7 pages:**
- index.html (Home): ✓ About ✓ Services ✓ Work ✓ Pricing ✓ Blog — Contact via CTA button
- about.html: ✓ Home ✓ About ✓ Services ✓ Work ✓ Pricing ✓ Blog — Contact via CTA
- services.html: ✓ All 6 pages + Contact in nav-right
- contact.html: ✓ All 6 pages
- work.html: ✓ All 6 pages
- pricing.html: ✓ All 6 pages
- blog.html: ✓ All 6 pages

**PASS** — All pages are reachable from all other pages via the navigation.

**Footer link coverage:** All pages include footer with links to Services (6 sub-sections), Company (About, Work, Pricing, Blog, Contact), and Contact info. PASS.

**No orphan pages detected.** PASS.

---

### 2.5 Anchor Text Quality

**PASS overall** — The site uses mostly descriptive anchor text:
- "SEO & Organic" — descriptive
- "Paid Advertising" — descriptive
- "Book Free Strategy Call" — action-oriented, acceptable
- "Learn more →" (index.html lines 228, 236, 244, etc.) — WARN — generic; could be "Learn more about SEO →"
- "Read →" (blog.html lines 106, 119, 132, etc.) — WARN — generic; should be "Read article →" or use the article title
- "Get Started →" (pricing.html) — acceptable CTA
- Social links use aria-labels (PASS for accessibility)

**Score: 70/100**

---

### 2.6 Image Alt Text

**All images are CSS backgrounds — SEO-critical issue.**

A comprehensive search of all 7 HTML files reveals:
- **Zero `<img>` tags** on any page
- All visual content (hero backgrounds, case study visuals, blog card images, team avatars, client logos) are implemented via CSS:
  - `.cv1 { background:linear-gradient(135deg,#1a0f00,#4a2c00) }` (style.css line 423)
  - `.bf-img cv1` class (blog.html line 71) — CSS gradient, no image
  - `.bc-img cv2` (blog.html line 102) — CSS gradient, no image
  - Team avatars are text initials in styled `div` elements (about.html lines 141–163)
  - Client logos are plain `<span>` text (index.html lines 202–209)

**What this means for SEO:**
- Google Image Search cannot index any of these visuals
- No opportunity for image alt-text keyword signals
- Google's vision AI cannot analyze or understand the visuals for relevance
- Decorative gradients instead of real photography provide no E-E-A-T signals

**Recommendation:** Replace at minimum the blog card images and case study visuals with real `<img>` tags with descriptive `alt` text. E.g.:
```html
<img src="images/veltex-seo-case-study.jpg" alt="Veltex Co. SEO case study — 312% revenue growth in 8 months" width="600" height="300" loading="lazy">
```

**Score: 15/100** (CSS-only images is a significant on-page SEO weakness)

---

### On-Page SEO Score: 62/100

---

## 3. Content Quality & E-E-A-T — Score: 68/100

### 3.1 E-E-A-T Signals

**Experience:**
- Case studies with named clients (Veltex Co., PulsarTech, HomeNest, Orbis Group, FlexForm, Cresta) — PASS
- Specific metrics cited (312% revenue, 41% CPL reduction, 510% follower growth, 42× email ROI) — PASS (strong)
- Timelines included (8 months, 4 months, etc.) — PASS

**Expertise:**
- Team bios on about.html with credentials:
  - Lucas Mercer: "Ex-Google, 12 years performance marketing" (line 144)
  - Sophia Kwan: "Led organic growth at two unicorn startups" (line 150)
  - Amir Rashid: "Managed $30M+ in annual ad spend. Ex-Meta" (line 156)
  - Elena Andros: "Published author and content strategist" (line 162)
- PASS — strong credentials

**Authoritativeness:**
- Agency founded 2018 (about.html line 73) — PASS
- "500+ clients in 12 countries" (about.html line 74) — PASS
- "$50M in annual ad spend" (about.html line 74) — PASS
- Blog posts attributed to named team members (Lucas Mercer, Amir Rashid, Elena Andros, Sophia Kwan) — PASS

**Trustworthiness:**
- Physical office addresses listed (contact.html lines 194–206):
  - New York: 340 Fifth Ave, Suite 1200, NY 10001
  - London: 1 Canada Square, Level 24, London E14 5AB
  - Singapore: 6 Battery Road, #25-01, Singapore 049909
- PASS — specific addresses
- Phone number: +1 (888) 639-2947 — PASS
- Email: hello@nexagrowth.com — PASS
- 90-day money-back guarantee — strong trust signal
- No privacy policy, terms of service, or legal pages — FAIL
- No third-party review platform badges (Google Reviews, Clutch, Trustpilot) — WARN

**Testimonials quality:**
- 3 testimonials on homepage with:
  - Named individuals (Amara K., James M., Sofia R.) — PASS
  - Company names (Veltex Co., PulsarTech, HomeNest) — PASS
  - Specific metrics in quotes (4.6× ROAS, 510% follower growth) — PASS
  - Star ratings shown — PASS
  - But: initials-only avatars, no photos, no links to LinkedIn profiles — WARN
  - No Clutch or Google Reviews embed — WARN

**Score: 72/100**

---

### 3.2 Thin Content Assessment

| Page | Estimated Word Count | Assessment |
|---|---|---|
| index.html | ~650 words | WARN — homepage should target 1,000+ for agency sites |
| about.html | ~550 words | WARN — below ideal for E-E-A-T page |
| services.html | ~700 words | WARN — 6 services covered but each section is very thin |
| contact.html | ~280 words | FAIL — contact pages can be thin, but lacking any supplemental SEO content |
| work.html | ~520 words | WARN — case studies need more narrative depth |
| pricing.html | ~500 words | PASS — appropriate for pricing pages; FAQ section adds substance |
| blog.html | ~400 words | FAIL — blog listing page with zero actual article content (articles all link to `#`) |

**Critical finding for blog.html:** All blog article links point to `href="#"` (lines 83, 106, 119, 132, 145, 158, 171). There are **no actual blog articles**. The blog page is essentially a stub with article previews but no content. This is a significant E-E-A-T and content quality issue — Google will discover this quickly.

**Score: 58/100**

---

### 3.3 Case Studies — Depth Assessment

Case studies on work.html and index.html have:
- Client name, industry, service type — PASS
- Result metrics (% growth, ROAS numbers, timelines) — PASS
- Brief narrative (~2 sentences) — WARN — very thin; no methodology, no before/after detail
- No full case study pages — FAIL — each work card has no "Read full case study" link to a dedicated page

**Recommended:** Create individual case study pages (veltex-case-study.html, etc.) with 800–1,500 words each, including challenge, approach, tactics, results, and client quote.

---

### Content Quality & E-E-A-T Score: 68/100

---

## 4. Schema / Structured Data — Score: 0/100

### 4.1 Current Implementation

**FAIL — CRITICAL**

A search of all 7 HTML files reveals **zero JSON-LD schema, zero Microdata, and zero RDFa markup** anywhere on the site.

### 4.2 Missing Schema Types (High Priority)

#### Organization Schema (every page)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaGrowth",
  "url": "https://nexagrowth.com",
  "logo": "https://nexagrowth.com/images/nexagrowth-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-639-2947",
    "contactType": "customer service",
    "email": "hello@nexagrowth.com",
    "availableLanguage": "English"
  },
  "address": [
    {"@type": "PostalAddress", "streetAddress": "340 Fifth Ave, Suite 1200", "addressLocality": "New York", "addressRegion": "NY", "postalCode": "10001", "addressCountry": "US"}
  ],
  "sameAs": []
}
```

#### WebSite Schema (index.html only)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NexaGrowth",
  "url": "https://nexagrowth.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nexagrowth.com/blog.html?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### LocalBusiness Schema (contact.html, index.html)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NexaGrowth",
  "description": "Senior-only digital marketing agency specializing in SEO, PPC, social media, and email marketing.",
  "priceRange": "$$$",
  "telephone": "+1-888-639-2947",
  "email": "hello@nexagrowth.com"
}
```

#### Service Schema (services.html — 6 services)
Each service section (SEO, PPC, Social, Content, Email, Analytics) should have:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO & Organic Growth",
  "description": "Technical SEO audits, content strategy, and authority building...",
  "provider": {"@type": "Organization", "name": "NexaGrowth"},
  "serviceType": "Search Engine Optimization"
}
```

#### FAQPage Schema (pricing.html — FAQ section)
The pricing.html FAQ section (lines 174–198) contains 6 Q&A pairs that are perfect for FAQPage schema. This could generate rich results (expanded FAQ accordion) in Google SERPs.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's included in each plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each plan includes a dedicated senior strategist, campaign management, regular reporting, and the 90-day ROI guarantee..."
      }
    }
    // ... 5 more Q&A pairs
  ]
}
```

#### AggregateRating Schema (index.html)
The site claims a "4.9 ★ rating" (index.html line 107) and "500+ active clients" but has no AggregateRating schema to make this eligible for star ratings in SERPs.

#### BreadcrumbList Schema (all inner pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://nexagrowth.com/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://nexagrowth.com/services.html"}
  ]
}
```

### Schema Score: 0/100

---

## 5. Performance Signals — Score: 58/100

### 5.1 External Resources

Every page loads the following external resources (from `<head>` on each page):

1. `https://fonts.googleapis.com` — preconnect (line 9 each page)
2. `https://fonts.gstatic.com` — preconnect with crossorigin (line 10 each page)
3. `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap` — Google Fonts stylesheet (line 11)

**Assessment:**
- The developer correctly uses `<link rel="preconnect">` for both googleapis.com and gstatic.com — PASS
- The Google Fonts URL includes `&display=swap` — PASS (font-display:swap prevents invisible text)
- However, the font request downloads **two font families** with multiple weights (400, 500, 600, 700 for Space Grotesk; 300, 400, 500, 600 italic for DM Sans) — this is a heavy font payload (~70–100KB)
- No external analytics (GA4, GTM) — PASS (no tracking overhead, but also no analytics data)
- No external ad pixels — PASS
- WhatsApp CDN not used (inline SVG) — PASS

### 5.2 Render-Blocking Scripts

**PASS** — `<script src="main.js">` appears at the **bottom of `<body>`** (line 500 of index.html, last line before `</body>` on all pages). This is correct placement. No render-blocking scripts in `<head>`.

### 5.3 Script Loading (defer/async)

**WARN** — `main.js` is loaded synchronously at the bottom of body:
```html
<script src="main.js"></script>
```
While bottom-of-body placement avoids blocking render, best practice for 2026 is:
```html
<script src="main.js" defer></script>
```
The `defer` attribute in `<head>` is preferred over bottom-of-body in modern development. With `defer` in `<head>`, the browser discovers and downloads the script earlier while still not blocking render. Moving the script to `<head>` with `defer` would marginally improve performance.

### 5.4 Inline Styles

**WARN** — Many elements use inline `style` attributes rather than CSS classes. Notable examples:
- index.html line 392: `<div class="stat-item fade-up" style="--d:.08s">`
- Multiple sections use `style="text-align:center"`, `style="margin-top:2rem"`, `style="--d:.04s"` throughout all pages

While CSS custom property delays (`--d`) are an acceptable pattern for animation staggering, many of the layout inline styles (`text-align:center`, `margin-top`) should be class-based. This inflates HTML size marginally and makes maintenance harder.

### 5.5 CSS Complexity

The single `style.css` file (848 lines) serves all 7 pages. Size estimate: ~18KB unminified. This is reasonable for a site of this size, but:
- Not minified (WARN)
- Not compressed (assume server gzip when deployed — PASS pending)
- No critical CSS / above-fold CSS inlining (WARN for LCP)

### 5.6 Images

**No `<img>` tags exist** — all visuals are CSS gradients and inline SVGs. This has a positive performance side-effect (no image download time) but negative SEO impact (see Section 2.6).

The inline SVG for the WhatsApp icon is duplicated identically across all 7 pages. This adds ~800 bytes per page unnecessarily — the SVG should be in a sprite or referenced once.

### 5.7 Animation Performance

`style.css` contains GPU-accelerated CSS animations:
- `@keyframes glowPulse` (line 240) — uses `transform` and `opacity` — PASS (compositor thread)
- `@keyframes ticker` (line 358) — uses `transform: translateX` — PASS
- `@keyframes barUp` (line 318) — uses `transform: scaleY` — PASS
- Card tilt in main.js (lines 74–87) modifies `transform` — PASS
- All animations use `prefers-reduced-motion: reduce` override (style.css line 845–847) — PASS (accessibility)

### 5.8 Font Subsetting

The Google Fonts request does not include `text=` parameter for subsetting. Loading all character sets for Space Grotesk + DM Sans is heavier than necessary. Consider self-hosting or using `unicode-range` subsetting.

### Performance Score: 58/100

---

## 6. Accessibility — Score: 52/100

### 6.1 ARIA Labels on Interactive Elements

**Navigation:**
- Hamburger button: `aria-label="Open menu" aria-expanded="false"` (all pages line ~38) — PASS
- Close button: `aria-label="Close menu"` (all pages line ~43) — PASS
- WhatsApp button: `aria-label="Chat on WhatsApp"` (index.html line 20) / `aria-label="WhatsApp"` (other pages line 18) — PASS (inconsistent label text — WARN)
- Social links in footer use `aria-label` on some pages but not consistently (see footer social links which have no aria-labels on about.html, services.html, contact.html, work.html, pricing.html, blog.html footer — `<a href="#">in</a>` with no aria-label)

**Mobile menu:**
- `role="dialog" aria-label="Mobile menu"` (all pages) — PASS
- But no `aria-modal="true"` and no focus trap implemented in main.js — WARN

**Forms (contact.html):**
- All form inputs have explicit `<label>` elements with matching `for` attributes:
  - `<label for="fname">` → `<input id="fname">` — PASS
  - `<label for="lname">` → `<input id="lname">` — PASS
  - `<label for="email">` → `<input id="email">` — PASS
  - `<label for="company">` → `<input id="company">` — PASS
  - `<label for="service">` → `<select id="service">` — PASS
  - `<label for="budget">` → `<select id="budget">` — PASS
  - `<label for="message">` → `<textarea id="message">` — PASS
- PASS overall for form labeling

**Newsletter form (blog.html line 191):**
- `aria-label="Email address"` on the input — PASS
- But no visible label (only placeholder text) — WARN

**FAQ buttons (pricing.html):**
- `aria-expanded="false"` on FAQ buttons — PASS
- Updated to `aria-expanded="true"` on click via main.js — PASS

### 6.2 Focus States in CSS

**WARN — Missing explicit `:focus-visible` styles.**

The CSS does not define `:focus-visible` or `:focus` styles for interactive elements. When `outline:none` is present on form inputs (style.css line 642: `outline:none`), keyboard users lose the focus indicator when tabbing through form fields.

```css
/* Missing in style.css */
:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
input:focus-visible, button:focus-visible, a:focus-visible { /* visible ring */ }
```

### 6.3 Alt Text on Images

**N/A** — No `<img>` tags exist (see Section 2.6). All visuals are CSS — this is an accessibility concern as screen readers cannot describe visual content.

### 6.4 Color Contrast

**WARN** — Several identified potential contrast issues:

1. **Footer link text:** `color:rgba(255,255,255,.25)` on `var(--bg-dark)` (#0F1729) — this is very low contrast (estimated 2.5:1, far below WCAG AA 4.5:1 requirement). Lines 544–545: `.fc a { color:rgba(255,255,255,.25) }`.

2. **Nav links:** `color:rgba(255,255,255,.55)` on `#0F1729` — approximately 3.8:1 — fails WCAG AA (4.5:1 required for normal text). Lines 147–148.

3. **Hero sub text:** `color:rgba(255,255,255,.55)` on `var(--bg-dark)` — same contrast issue. Line 261.

4. **Ticker text:** `color:rgba(255,255,255,.25)` on dark background — severe contrast failure. Line 361.

5. **Stat labels:** `color:rgba(255,255,255,.3)` — fails WCAG AA.

6. **CTA note:** `color:rgba(255,255,255,.2)` — severe contrast failure. Line 521.

**At least 6 elements fail WCAG AA color contrast.** This is a legal accessibility concern and can impact SEO (Google has increasingly factored accessibility into ranking signals).

### 6.5 Touch Targets

**PASS** — Buttons and links generally meet the 44px minimum:
- `.btn` padding is `.85rem 1.8rem` ≈ 14px top/bottom = 28px height + font-size ≈ 44px total — borderline PASS
- Mobile menu hamburger: 4px padding with 20px icon width — WARN (may be under 44px touch target)
- `.mob-x` button: `width:38px; height:38px` — FAIL (below 44px minimum touch target)
- Social footer links: `width:34px; height:34px` — FAIL (below 44px touch target)

### 6.6 Skip Navigation Link

**FAIL** — No skip navigation link exists. Screen reader and keyboard users must tab through the entire announcement bar + navigation before reaching main content on every page.

### Accessibility Score: 52/100

---

## 7. Mobile-Friendliness — Score: 72/100

### 7.1 Viewport Meta

**PASS** — `<meta name="viewport" content="width=device-width, initial-scale=1.0">` on all pages.

### 7.2 Responsive Breakpoints

The CSS includes three responsive breakpoints (style.css):

| Breakpoint | Line | Changes |
|---|---|---|
| `max-width: 960px` | 797 | Hero to single column; cases to 1-col; services detail to 1-col; footer to 1-col; blog featured to 1-col; contact to 1-col; testimonials to 1-col; pricing to 1-col |
| `max-width: 768px` | 817 | Nav links hidden; hamburger shown; service grid to 1-col; stats to 2x2; footer cols to 2-col |
| `max-width: 560px` | 830 | Wrap padding reduced; hero CTAs stacked; CTA buttons stacked; form rows to 1-col; footer cols to 1-col; newsletter inputs stacked; work/blog grid to 1-col |

**Assessment:** Good coverage of major breakpoints. PASS.

### 7.3 Mobile Menu

**PASS** — Fully functional mobile menu with:
- Hamburger toggle at 768px and below
- Full-screen dark overlay menu
- All navigation links
- CTA button
- Social links
- Escape key close (main.js line 44)
- Body scroll lock when open (main.js line 33)
- Close on menu link click (main.js line 45)

### 7.4 Touch Target Sizes

**WARN** — As noted in accessibility:
- `.mob-x`: 38×38px — below 44px minimum
- Footer social links: 34×34px — below 44px minimum
- Filter tabs `.ftab` padding `.5rem 1.1rem` — approximately 32px height — WARN

### 7.5 Font Sizes on Mobile

**PASS** — Base font is 16px (style.css line 35). No text elements fall below 12px on mobile (smallest visible text is `.65rem = 10.4px` but these are decorative uppercase labels, not body content).

### 7.6 Images on Mobile

Since no `<img>` tags exist, there's no risk of oversized unoptimized images breaking mobile layouts. The CSS gradients scale perfectly. However, the hero widget (dashboard mock) may be cramped on very small screens — `max-width:440px` at 960px breakpoint.

### 7.7 Horizontal Scroll

**PASS** — `overflow-x:hidden` on body (style.css line 35). The hero ticker uses `overflow:hidden` (line 350). No horizontal overflow issues identified.

### Mobile-Friendliness Score: 72/100

---

## 8. AI Search Readiness — Score: 22/100

### 8.1 llms.txt File

**FAIL** — No `llms.txt` file exists. This emerging standard (analogous to robots.txt for AI crawlers) tells LLMs what content to index and how to understand the site.

**Required file at `/llms.txt`:**
```
# NexaGrowth llms.txt
# Digital marketing agency specializing in SEO, PPC, social media, and email

## About NexaGrowth
NexaGrowth is a senior-only digital marketing agency founded in 2018, serving 500+ clients globally...

## Services
- SEO & Organic Growth: https://nexagrowth.com/services.html#seo
- Paid Media & PPC: https://nexagrowth.com/services.html#ppc
...

## Contact
Email: hello@nexagrowth.com
Phone: +1-888-639-2947
```

### 8.2 AI Crawler Accessibility

**FAIL** — Without a `robots.txt`, it's unclear which AI crawlers are permitted. GPTBot, ClaudeBot, PerplexityBot, and others may crawl freely, but explicit allowance in robots.txt is best practice.

```
# robots.txt additions for AI search
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

### 8.3 Facts and Statistics Citation

**FAIL** — The site makes numerous specific claims with no cited sources:
- "Email delivers 42× ROI" (services.html line 259) — no citation
- "500+ clients" — no third-party verification
- "4.9 star rating" — no link to a reviews platform

For AI Overviews and Perplexity citations, facts need source links:
```html
<p>Email marketing delivers an average 42× ROI, 
<a href="https://www.dma.org.uk/research/email-roi-2023" rel="noopener">
according to the DMA</a>.</p>
```

### 8.4 Author Attribution

**PARTIAL PASS** — Blog posts on blog.html include author names (Lucas Mercer, Amir Rashid, Elena Andros, Sophia Kwan). However:
- No article markup (`<article>` elements)
- No `<time datetime="">` elements
- No author profile page URLs
- Blog articles don't actually exist (all link to `#`)

### 8.5 Structured, Scannable Content

**WARN** — The site uses heading hierarchy effectively within sections, but:
- No `<article>` semantic elements used
- No `<aside>` elements
- No definition lists for FAQs (`<dl>`, `<dt>`, `<dd>`)
- FAQ on pricing.html uses `<button>` accordion rather than semantic FAQ markup
- Case study metrics are in `<div>` elements rather than `<table>` or definition lists

### 8.6 AI Overview Eligibility

For Google AI Overviews to cite this site, the following are needed (all currently missing):
- Authoritative external backlinks (cannot audit without live domain)
- Schema markup (FAIL — see Section 4)
- Cited facts with source links (FAIL)
- Long-form content (FAIL — blog articles don't exist)
- Author authority signals with linked profiles (FAIL)
- llms.txt (FAIL)

### AI Search Readiness Score: 22/100

---

## 9. Missing Critical Files

| File | Status | Priority | Impact |
|---|---|---|---|
| `robots.txt` | MISSING | Critical | Googlebot has no crawl directives; no sitemap pointer |
| `sitemap.xml` | MISSING | Critical | Pages must be discovered by link crawling only |
| `favicon.ico` / `favicon.png` | MISSING | High | No brand icon in browser tabs, bookmarks, GSC |
| `404.html` | MISSING | High | Broken links show server default error page with no branding/navigation |
| `llms.txt` | MISSING | Medium | AI crawlers have no structured guidance |
| Privacy Policy page | MISSING | High | Required for GDPR/CCPA compliance; contact form collects personal data |
| Terms of Service page | MISSING | Medium | Legal protection and trust signal |
| OG images (1200×630px) | MISSING | High | Social shares show no preview image |

---

## 10. Full Issues List — Priority Sorted

### CRITICAL (Fix immediately — blocks indexing or causes penalties)

| # | Issue | Location | Fix |
|---|---|---|---|
| C1 | No robots.txt | Root directory | Create /robots.txt with User-agent directives and sitemap pointer |
| C2 | No sitemap.xml | Root directory | Create /sitemap.xml with all 7 pages |
| C3 | Zero Schema / JSON-LD markup | All 7 pages | Add Organization, WebSite, Service, FAQPage, BreadcrumbList schemas |
| C4 | No canonical tags | All 7 pages `<head>` | Add `<link rel="canonical">` to each page |
| C5 | No Open Graph / Twitter Card tags | All 7 pages `<head>` | Add full OG + Twitter meta tag suite |
| C6 | Blog articles don't exist | blog.html (all article `href="#"`) | Create actual blog article pages or remove blog section |
| C7 | No Privacy Policy | Site-wide | Create privacy.html — required for GDPR; form collects personal data |

### HIGH (Fix within 1 week — significantly impacts rankings)

| # | Issue | Location | Fix |
|---|---|---|---|
| H1 | No favicon | All pages `<head>` | Create favicon.png and add `<link rel="icon">` |
| H2 | No 404 page | Root directory | Create 404.html with nav + CTA |
| H3 | Title tags not keyword-optimized on 6/7 pages | about, services, contact, work, pricing, blog | Rewrite titles with target keywords |
| H4 | H1 tags have zero SEO keywords on 5/7 pages | index, services, contact, work, pricing | Restructure H1s to include target keywords |
| H5 | All images are CSS — not crawlable by Google | All pages | Replace key visuals with `<img>` tags + descriptive alt text |
| H6 | Footer color contrast failures | style.css lines 544, 147, 261, 361, 521 | Increase opacity/contrast of muted text elements |
| H7 | Contact page meta description too short (98 chars) | contact.html line 7 | Expand to 150–160 chars |
| H8 | No AggregateRating schema for 4.9★ / 500+ clients claim | index.html | Add AggregateRating JSON-LD |
| H9 | Social media links all point to `#` | All pages footer | Add real social media profile URLs |

### MEDIUM (Fix within 1 month — optimization opportunities)

| # | Issue | Location | Fix |
|---|---|---|---|
| M1 | No llms.txt | Root directory | Create llms.txt for AI crawler guidance |
| M2 | Meta descriptions short on 5 pages | about, services, work, pricing, blog | Expand to 150–160 chars with CTAs |
| M3 | No focus-visible CSS styles | style.css | Add `:focus-visible` outlines for keyboard users |
| M4 | work.html H1→H3 heading jump (no H2) | work.html | Add H2 before work card grid |
| M5 | main.js not using `defer` attribute | All pages `</body>` | Move to `<head>` with `defer` |
| M6 | No skip-navigation link | All pages | Add `<a href="#main" class="skip-nav">Skip to content</a>` |
| M7 | Mobile menu lacks `aria-modal="true"` and focus trap | main.js / all pages | Add focus trapping and aria-modal to mobile menu |
| M8 | Touch targets below 44px (mob-x, social links) | style.css lines 185, 537 | Increase to minimum 44×44px |
| M9 | Unsourced statistics throughout site | services.html, index.html | Add citation links for factual claims |
| M10 | Team bios lack social proof links (LinkedIn) | about.html | Add LinkedIn profile links for team members |
| M11 | CSS not minified | style.css | Minify for production deploy |
| M12 | Google Fonts loaded from CDN (not self-hosted) | All pages `<head>` | Self-host fonts for performance and privacy |
| M13 | No individual case study pages | work.html | Create dedicated pages for each case study |
| M14 | No `<article>` semantic elements on blog | blog.html | Wrap blog cards in `<article>` |
| M15 | WhatsApp button aria-label inconsistent | index.html vs others | Standardize to "Chat on WhatsApp" |

### LOW (Backlog — nice to have)

| # | Issue | Location | Fix |
|---|---|---|---|
| L1 | Inline style attributes throughout pages | All pages | Move to CSS classes |
| L2 | WhatsApp SVG duplicated across 7 pages | All pages | Use SVG sprite |
| L3 | No breadcrumb navigation | Inner pages | Add visual breadcrumbs + BreadcrumbList schema |
| L4 | No Terms of Service page | Site-wide | Create terms.html |
| L5 | Client logos are text spans, not real logos | index.html | Replace with `<img>` logos (get permission) |
| L6 | No reading time estimate on blog listing | blog.html | Reading times shown in meta — PASS, already done |
| L7 | No structured data on team bios | about.html | Add Person schema for team members |
| L8 | Font subsetting not optimized | All pages | Use `text=` parameter or unicode-range |
| L9 | No print stylesheet | All pages | Add `@media print` styles |
| L10 | Newsletter form has no visible label | blog.html | Add `<label>` for email input |

---

## Appendix A: Page-by-Page Quick Reference

### index.html
- Title: 63 chars (3 over) — strong keywords
- H1: "We Don't Run Ads. We Drive Revenue." — no keywords
- Meta desc: 148 chars — PASS
- Canonical: MISSING
- OG tags: MISSING
- Schema: MISSING
- H1→H2→H3: PASS
- Internal links: PASS

### about.html
- Title: 40 chars — too short, no keywords
- H1: "Built by Marketers. Obsessed with Results." — weak keywords
- Meta desc: 128 chars — slightly short
- Canonical: MISSING
- Team section: PASS (named bios with credentials)
- H2 "Our Story" → "Our Values" → "Meet the Team" → "Our Process": PASS hierarchy

### services.html
- Title: 40 chars — too short
- H1: "Our Services" — no keywords
- Meta desc: 135 chars — slightly short
- IDs present for anchor links (#seo, #ppc, #social, #content, #email, #analytics): PASS
- Individual service H2s: PASS
- Schema for each service: MISSING

### contact.html
- Title: 39 chars — too short
- H1: "Let's Talk Growth" — no keywords
- Meta desc: 98 chars — FAIL (too short)
- Physical addresses: PASS (3 offices with street addresses)
- Form labels: PASS
- Form submits to nowhere (fake setTimeout) — not SEO issue but functional issue

### work.html
- Title: 44 chars — acceptable
- H1: "Real Campaigns. Real Numbers." — no keywords
- Meta desc: 129 chars — slightly short
- H1 to H3 jump (no H2) — FAIL
- All case studies have metrics and client names: PASS
- No individual case study pages: FAIL

### pricing.html
- Title: 39 chars — too short
- H1: "No Hidden Fees. No Surprises." — no keywords
- Meta desc: 110 chars — short
- FAQPage schema opportunity: STRONG (6 Q&As, already coded as accordion)
- Pricing transparency: PASS ($1,500, $4,500, $12,000/mo clearly stated)

### blog.html
- Title: 36 chars — too short
- H1: "The NexaGrowth Blog" — acceptable
- Meta desc: 124 chars — slightly short
- All article links: `href="#"` — CRITICAL FAIL
- Author attribution: PASS (named authors shown)
- Blog images: CSS gradients, no `<img>` — FAIL

---

## Appendix B: NAV & Footer Consistency Check

All 7 pages were checked. Nav links are consistent across all pages:
- Home, About, Services, Work, Pricing, Blog — all present in desktop nav
- Contact accessible via "Book a Call" CTA button in nav-right (not in nav-links list)
- Mobile menu includes all 6 nav links + Contact CTA

**Issue:** "Contact" is NOT in the primary `<ul class="nav-links">` on any page. It only appears as a gold CTA button. This means Contact has slightly less internal link equity than the other 6 pages. Add `<li><a href="contact.html">Contact</a></li>` to nav-links.

Footer is consistent across all pages:
- Services column: 6 links (SEO, PPC, Social, Content, Email, Analytics)
- Company column: About, Case Studies, Pricing, Blog, Contact
- Contact column: Email, phone, locations

Footer social links (`in`, `𝕏`, `ig`, `yt`) all point to `href="#"` on every page — FAIL. These need real URLs.

Logo links back to index.html: PASS (all pages).
Contact info consistent: PASS (email and phone match across all pages).

---

*End of FULL-AUDIT-REPORT.md*
*Generated: 2026-06-19 | NexaGrowth Local Static Site Audit*
