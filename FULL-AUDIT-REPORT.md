# PageOne SEO / GEO / AEO / Local SEO / SXO Audit Report
**Date:** 2026-07-15
**Site:** https://pageone-bangalore.netlify.app/ (27 pages)
**Business:** PageOne — freelance digital marketer, Yelahanka New Town, Bangalore
**Method:** 7 parallel specialist audits (technical, content, schema, sitemap, GEO/AI-search, local SEO, SXO), live fetch + full local source review

---

## Overall scores

| Audit | Score |
|---|---|
| Technical SEO | 78/100 |
| Content Quality | 58/100 |
| GEO/AI-Search Readiness | 52/100 |
| Local SEO | 27/100 |
| SXO (Yelahanka page specifically) | 54/100 |
| Sitemap | Pass, no issues |
| Schema | Invalid primary type found (see Critical #1) |

---

## THE #1 FINDING — found independently by 4 of 7 audits

**The site cannot decide if it's a solo freelancer or a multi-person agency, and this shows up in machine-readable schema, not just copy.**

- `llms.txt` / homepage / `/about/`: "I do this personally, no juniors, no account managers, no middlemen"
- `/yelahanka/`: "senior-only marketers," "dedicated account manager: Always," comparison table titled "PageOne vs Other Yelahanka Agencies," schema `@type: MarketingAgency`
- `/pricing/`: "Meet the Team →" (there is no team)
- Footer copyright: "PageOne Agency" on Yelahanka page, "PageOne Inc." on the other 6 location pages (both wrong, both different)
- Article schema on newer blog posts: `"author":{"@type":"Person","name":"PageOne"}` — a brand name typed as a Person, while older posts correctly say `"Jairaj J"`

**Why this matters more than a normal copy inconsistency:** a searcher who has already decided they want a freelancer (to avoid exactly this — account managers, teams, handoffs) lands on `/yelahanka/` and reads language describing the exact thing they're trying to avoid. An AI system reading multiple pages sees contradictory entity descriptions. This is self-inflicted, fixable this week, for free — unlike backlinks/reviews which take months regardless.

**Recommendation:** commit to "freelancer" (it's the true model and the differentiator already built into `/about/` and `llms.txt`) and scrub every agency/team/"Inc." reference site-wide.

---

## Critical findings

### 1. Invalid schema.org type used on 9 pages
`"@type": "MarketingAgency"` is **not a real schema.org type** — verified directly against the schema.org vocabulary (0 occurrences in the full context file; `schema.org/MarketingAgency` returns HTTP 404, `schema.org/LocalBusiness` returns 200). Used on homepage + all 7 location pages. Google's parser doesn't recognize it, so none of the LocalBusiness-specific entity/rich-result signals apply — the schema carries no real weight right now.

`contact/index.html` already has the correct pattern (`LocalBusiness` + `@id` + `hasMap`) — use it as the template to fix the other 9.

### 2. Case-study stat contradiction — now confirmed as THREE different numbers
- `llms.txt` + homepage: 188% revenue growth, 340% organic traffic increase
- `/work/`: 312% revenue growth, 510% follower growth
- `/yelahanka/`: 312% revenue growth + a third, unsourced "500+ Campaigns Delivered" claim
- `/work/` page is titled "Real Campaigns. Real Numbers." but the visible page body contains **zero** actual metrics — the numbers exist only in meta tags/schema, never in content a human reads.

Blocked on you confirming the real figures — I won't guess-fix business claims.

### 3. Business name has 5 live variants
"PageOne" / "PageOne Digital Marketing" / "PageOne Digital Marketing Agency" / "PageOne Agency" / "PageOne Inc." — across schema `name` fields and footer copyright lines. Needs to be locked to one exact string before submitting to any directory (the citation pack you already have explicitly warns against this exact mistake).

### 4. Business hours conflict
Homepage/Contact schema: Mon–Sat, 9:00–19:00. Yelahanka page schema + visible text: Mon–Fri, 9:00–18:00. 6 other location pages: no hours at all. Needs one real answer, propagated everywhere.

---

## High-severity findings

### 5. Six of seven location pages are ~98% duplicate templates
Diffed Hebbal vs Jakkur word-for-word after normalizing the place name: identical structure, identical FAQ, identical bullets. Only genuine difference: one landmark clause per page. Unique body content is ~490-500 words per page vs. Yelahanka's ~1,175 (which has a real comparison table, stats band, 5-question FAQ, map). This is the textbook "doorway page" pattern Google's quality systems are built to detect.

### 6. Literal copy-paste bug
`/north-bangalore/` reads: *"...someone who understands the North Bangalore and North Bangalore market"* — leftover template artifact, never caught.

### 7. Character encoding corruption
Yelahanka page's visible "Working Hours" text contains raw replacement characters (mojibake) instead of clean dashes — will render broken in some browsers/crawlers: `Mon-Fri - 9:00 AM - 6:00 PM IST` (source has replacement chars instead of the dashes)

### 8. Missing security headers
No `_headers` file exists. Only `Strict-Transport-Security` is present (Netlify default). Missing: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Low real-world risk for a brochure site, but a 10-minute fix and visible to any scanner — awkward if a prospective client audits a digital-marketing agency's own site and finds this.

### 9. Pricing figure mismatch
Homepage FAQ schema says services "start from Rs. 10,000/month for a single channel" — but `/pricing/` actually lists SEO at ₹9,000/mo, Ads at ₹8,500/mo. ₹10,000 is the one-time website-design price, not a channel retainer. This exact text is what an AI answer engine would quote directly.

### 10. Unverifiable "Award-Winning" claim
Homepage hero eyebrow tag says "Award-Winning Digital Marketing" — no award is named anywhere on the site, including the About page's credentials section. Exactly the kind of claim Google's quality rater guidelines tell evaluators to discount. Remove unless a specific, real award exists.

### 11. GBP/Maps signals present on only 2 of 9 relevant pages
Maps embed + `geo` + `openingHoursSpecification` exist on Yelahanka + Contact only. The other 6 location pages carry no local-signal completeness at all.

### 12. Incomplete "Also serving nearby" cross-links
Each location page links to only 3-4 of its 5 sibling pages in the body content (footer already covers full mesh, so this is a moderate strengthening opportunity, not a crawl gap).

---

## Medium findings

- Blog posts average ~575 words against a healthier 1,500+ word floor for competitive terms (SEO/Ads/Meta Ads posts specifically) — the fix is depth (real examples, before/after numbers), not padding.
- `Article` schema author inconsistency: brand name typed as `Person` on newer posts vs. real name on older ones.
- No privacy policy / terms page anywhere across 27 pages.
- No IndexNow key/pings for Bing/Yandex — free, 20-minute addition, helps a brand-new site get indexed off Google too.
- Portfolio thumbnails use CSS `background-image` instead of `<img>` — zero alt text, invisible to image crawlers.
- Business type ambiguity flagged for GBP itself: Yelahanka page says "walk in or book a call" (brick-and-mortar framing) while the other 6 pages use pure service-area language. If there's no genuine walk-in office, this could create a mismatch with Google's guidelines once GBP verification completes — decide this explicitly before finishing verification.

---

## What's genuinely working (don't undo)

- Real founder, real linked client sites (vajraaviation.com, cleanzo.pro, etc.), real first-person narrative on `/about/` — rare, genuine first-hand experience signal most competitor sites lack.
- `llms.txt` is well-structured and dated — a real AI-citation asset once the stat conflict is resolved.
- Public, specific pricing — a real trust differentiator vs. competitors hiding behind "contact for quote."
- FAQ schema coverage is solid site-wide.
- AI crawler access (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) fully open, no accidental blocks.
- Fully static HTML — zero JS-rendering risk for any crawler.
- Clean URL structure, correct canonicals, no orphaned pages, sitemap 100% in sync (27/27).
- Blog topic selection itself is good — genuinely useful long-tail queries, not generic filler.

---

## Full prioritized action list

**Fix now — no decision needed, purely correctness:**
1. Replace `MarketingAgency` → `LocalBusiness` + `ProfessionalService` on all 9 pages, add matching `@id` everywhere
2. Fix the "North Bangalore and North Bangalore" duplication bug
3. Fix the UTF-8 encoding corruption on Yelahanka's hours line
4. Fix the pricing FAQ mismatch (₹10,000 → correct per-channel figures)
5. Standardize blog author schema to the real name everywhere
6. Remove the unverifiable "Award-Winning" claim
7. Add security headers via `_headers` file
8. Complete the "Also serving nearby" cross-links (all 5 siblings, not 3-4)
9. Add IndexNow key + submit URLs

**Needs your decision:**
10. Confirm real business hours (pick one, propagate everywhere)
11. Confirm the real case-study stats (currently 3 conflicting sets)
12. Confirm canonical business name (recommend simply "PageOne")
13. Confirm: is there a real walk-in office, or should all copy consistently say service-area/by-appointment?

**Bigger content work:**
14. Give the 6 templated location pages genuinely unique content (real local detail, not find-replace)
15. Deepen the 6 thinnest blog posts with real examples/numbers from actual client work

**Already tracked separately, not re-flagged here:** GBP verification, directory citations, real reviews.
