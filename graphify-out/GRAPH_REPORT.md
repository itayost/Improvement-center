# Graph Report - .  (2026-08-01)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 125 nodes · 188 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4e791857`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 10

## God Nodes (most connected - your core abstractions)
1. `trackWhatsAppClick()` - 12 edges
2. `trackPhoneClick()` - 12 edges
3. `scripts` - 5 edges
4. `ArticleCta()` - 4 edges
5. `ContactForm()` - 4 edges
6. `Footer()` - 4 edges
7. `TrustedOrganizations()` - 4 edges
8. `ContactPage()` - 4 edges
9. `trackEvent()` - 4 edges
10. `trackFormSubmit()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ArticleCta()` --calls--> `trackWhatsAppClick()`  [EXTRACTED]
  src/components/ArticleCta.jsx → src/utils/analytics.js
- `Footer()` --calls--> `trackWhatsAppClick()`  [EXTRACTED]
  src/components/Footer.jsx → src/utils/analytics.js
- `Header()` --calls--> `trackPhoneClick()`  [EXTRACTED]
  src/components/Header.jsx → src/utils/analytics.js
- `ContactPage()` --calls--> `trackPhoneClick()`  [EXTRACTED]
  src/pages/ContactPage.jsx → src/utils/analytics.js
- `ContactPage()` --calls--> `trackWhatsAppClick()`  [EXTRACTED]
  src/pages/ContactPage.jsx → src/utils/analytics.js

## Import Cycles
- None detected.

## Communities (13 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (19): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, eslint, @eslint/js (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (7): About(), Hero(), trustBadges, Stats, Testimonials, screenshots, TestimonialScreenshots()

### Community 2 - "Community 2"
Cohesion: 0.19
Nodes (9): App(), Header(), NAV_ITEMS, articles, getArticleBySlug(), BlogArticlePage(), BlogListPage(), Home() (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.23
Nodes (9): ContactForm(), FloatingCallButton(), Footer(), mainServices, ServicesPage(), teamTypes, trackEvent(), trackFormSubmit() (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.19
Nodes (7): Faq(), faqs, trustedLogos, TrustedOrganizations(), AboutPage(), staffMembers, ContactPage()

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (11): lucide-react, dependencies, lucide-react, react, react-dom, react-helmet-async, react-router-dom, react (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.36
Nodes (5): ArticleCta(), WhatsAppIcon(), getWhatsAppLink(), WHATSAPP_MESSAGES, WHATSAPP_NUMBER

### Community 8 - "Community 8"
Cohesion: 0.32
Nodes (4): CtaStrip(), Services(), topServices, trackWhatsAppClick()

## Knowledge Gaps
- **34 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 5` to `Community 6`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `trackWhatsAppClick()` connect `Community 8` to `Community 3`, `Community 4`, `Community 7`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._