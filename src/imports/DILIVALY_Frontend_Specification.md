# DILIVALY — Frontend Product Specification Document
### Version 1.0 | Prepared by Senior Product Design Team
### Classification: Internal — Frontend Handoff Document

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Business Goals](#2-business-goals)
3. [User Types](#3-user-types)
4. [User Journeys](#4-user-journeys)
5. [Landing Page Structure](#5-landing-page-structure)
6. [Section-by-Section Breakdown](#6-section-by-section-breakdown)
7. [UI/UX Guidelines](#7-uiux-guidelines)
8. [Layout Specifications](#8-layout-specifications)
9. [Responsive Design Requirements](#9-responsive-design-requirements)
10. [Typography System](#10-typography-system)
11. [Color System](#11-color-system)
12. [Component Architecture](#12-component-architecture)
13. [Animation Requirements](#13-animation-requirements)
14. [CTA Placement Strategy](#14-cta-placement-strategy)
15. [Navigation Structure](#15-navigation-structure)
16. [Footer Structure](#16-footer-structure)
17. [Accessibility Requirements](#17-accessibility-requirements)
18. [SEO Requirements](#18-seo-requirements)
19. [Performance Optimization Requirements](#19-performance-optimization-requirements)
20. [Recommended Frontend Stack](#20-recommended-frontend-stack)
21. [Recommended Folder Structure](#21-recommended-folder-structure)
22. [Reusable Components List](#22-reusable-components-list)
23. [Suggested Icon Categories](#23-suggested-icon-categories)
24. [Suggested Image & Illustration Direction](#24-suggested-image--illustration-direction)
25. [Empty State Recommendations](#25-empty-state-recommendations)
26. [Hover & Interaction States](#26-hover--interaction-states)
27. [Mobile Responsiveness Guidelines](#27-mobile-responsiveness-guidelines)
28. [Tablet Responsiveness Guidelines](#28-tablet-responsiveness-guidelines)
29. [Desktop Layout Requirements](#29-desktop-layout-requirements)
30. [Trust & Security Visual Direction](#30-trust--security-visual-direction)
31. [Recommended Microinteractions](#31-recommended-microinteractions)
32. [Loading States](#32-loading-states)
33. [FAQ Structure](#33-faq-structure)
34. [Testimonial Layout](#34-testimonial-layout)
35. [Dashboard Preview Requirements](#35-dashboard-preview-requirements)
36. [Escrow & COD Section Requirements](#36-escrow--cod-section-requirements)
37. [Delivery PIN Verification UI Direction](#37-delivery-pin-verification-ui-direction)
38. [Developer Notes](#38-developer-notes)
39. [Future Scalability Considerations](#39-future-scalability-considerations)

---

## 1. Project Overview

**Product Name:** DILIVALY
**Product Type:** Logistics & Delivery Marketplace Platform
**Current State:** Web Application Only (no mobile app)
**Document Purpose:** Complete frontend specification for the DILIVALY public landing page

### Platform Summary

DILIVALY is a two-sided logistics marketplace that connects **Vendors** (businesses and individuals who need items delivered) with **Agents** (verified delivery professionals who fulfill those orders). The platform operates on a competitive quote model where vendors post delivery requests, agents bid on them, and payment is protected through an escrow system.

### Core Value Propositions

For Vendors:
- Competitive quotes from multiple verified agents
- Secure escrow payment — pay only after confirmed delivery
- PIN-based delivery verification for fraud prevention
- COD (Cash on Delivery) support with dedicated account numbers

For Agents:
- Steady stream of nearby delivery opportunities
- Fair, competitive bidding environment
- Guaranteed payment after delivery confirmation
- Reputation and ratings system to build credibility

### What the Landing Page Must Accomplish

The landing page serves as the primary acquisition and conversion surface. It must:

1. Clearly explain the two-sided marketplace model
2. Establish trust through design, social proof, and security messaging
3. Drive sign-up from both Vendors and Agents
4. Communicate the escrow and COD features as competitive differentiators
5. Convert curious visitors into registered users

---

## 2. Business Goals

### Primary Business Goals

**Goal 1 — Dual-Sided User Acquisition**
The landing page must simultaneously convert two distinct user types. Messaging, CTAs, and UI sections must speak to both Vendors and Agents without creating confusion. Segmented sections should clearly delineate value propositions for each audience.

**Goal 2 — Trust Establishment**
As a payments-adjacent platform handling escrow funds, DILIVALY must immediately communicate security, reliability, and legitimacy. Every design decision — color, typography, component styling, and copy — must reinforce trust.

**Goal 3 — Education on Unique Features**
Escrow payments, PIN verification, and COD with dedicated account numbers are differentiating features. The landing page must educate visitors on these concepts in a simple, visual, and non-technical way.

**Goal 4 — Conversion Optimization**
All sections must serve the conversion funnel. CTA buttons must appear at logical decision points. The page architecture should follow the AIDA model: Attention → Interest → Desire → Action.

### Secondary Business Goals

- Build brand awareness and recognition in the logistics vertical
- Attract agent signups to ensure sufficient supply on the platform
- Communicate the verification/trust system to establish legitimacy
- Lay groundwork for future product expansions (mobile app, real-time tracking)

### KPIs the Landing Page Should Influence

- Vendor signup conversion rate
- Agent signup conversion rate
- Bounce rate reduction
- Time-on-page engagement
- CTA click-through rate

---

## 3. User Types

### User Type 1: Vendor

**Who they are:**
Businesses, SMEs, e-commerce sellers, or individuals who regularly need items delivered. They may be first-time users evaluating the platform or repeat users who need a reliable delivery solution.

**Pain points they have:**
- Unpredictable delivery costs
- No visibility into delivery status
- Unreliable agents with no accountability
- Risk of payment fraud, especially for COD orders
- Difficulty managing multiple delivery requests

**What they need from the landing page:**
- Understand how to post a delivery request
- Feel confident their payments are safe
- See proof that agents are verified and reliable
- Understand how the PIN and escrow system protects them
- Be able to sign up quickly and start posting requests

**User Intent Signals:**
"I need deliveries done reliably and affordably."

---

### User Type 2: Agent

**Who they are:**
Individual dispatch riders, courier professionals, or small logistics businesses looking for a steady source of delivery jobs. May range from tech-savvy urban riders to less tech-literate operators in peri-urban areas.

**Pain points they have:**
- Inconsistent job supply
- Late or non-payment after delivery
- No platform to build reputation and credibility
- Difficulty competing against established courier firms

**What they need from the landing page:**
- Understand how to receive and submit quotes on delivery jobs
- Feel confident they will be paid after completing deliveries
- Understand the verification process and what it entails
- See earnings potential and how the rating system helps them grow

**User Intent Signals:**
"I want consistent delivery jobs and guaranteed payment."

---

## 4. User Journeys

### Vendor User Journey

```
AWARENESS
  └── Discovers DILIVALY via social media, search, or word of mouth
        │
        ▼
LANDING PAGE ARRIVAL
  └── Hero section communicates: "Post a delivery. Get competing quotes. Pay securely."
        │
        ▼
EXPLORATION
  └── Scrolls through How It Works section (vendor perspective)
  └── Reviews escrow and COD protection features
  └── Reads testimonials from other vendors
        │
        ▼
CONSIDERATION
  └── Explores pricing or fee structure (if applicable)
  └── Reviews FAQ section addressing payment concerns
        │
        ▼
DECISION
  └── Clicks "Get Started as a Vendor" CTA
        │
        ▼
CONVERSION
  └── Registers → Completes KYC → Posts first delivery request
```

---

### Agent User Journey

```
AWARENESS
  └── Discovers DILIVALY via social media, search, or word of mouth
        │
        ▼
LANDING PAGE ARRIVAL
  └── Hero section or dedicated Agent section communicates: "Get delivery jobs. Submit quotes. Earn reliably."
        │
        ▼
EXPLORATION
  └── Scrolls through How It Works section (agent perspective)
  └── Reviews earnings dashboard preview
  └── Reviews verification and trust system
        │
        ▼
CONSIDERATION
  └── Understands quote submission process
  └── Sees guaranteed payment via escrow
        │
        ▼
DECISION
  └── Clicks "Join as a Delivery Agent" CTA
        │
        ▼
CONVERSION
  └── Registers → Completes Verification → Starts receiving delivery requests
```

---

## 5. Landing Page Structure

The landing page is structured as a long-form, single-page marketing experience. Sections are ordered strategically to guide the visitor from awareness to conversion.

### Page Section Order

| # | Section Name | Primary Goal |
|---|---|---|
| 1 | Navigation Bar | Orientation + CTA access |
| 2 | Hero Section | Grab attention + primary CTA |
| 3 | Stats / Social Proof Bar | Establish credibility instantly |
| 4 | How It Works — Vendor | Educate vendor audience |
| 5 | How It Works — Agent | Educate agent audience |
| 6 | Feature Highlights — Vendor | Deep-dive vendor benefits |
| 7 | Feature Highlights — Agent | Deep-dive agent benefits |
| 8 | Escrow & COD Protection Section | Differentiate + build trust |
| 9 | Delivery PIN Verification Section | Explain unique security feature |
| 10 | Dashboard Preview Section | Show the product (social proof via product) |
| 11 | Trust & Security Section | Reinforce platform safety |
| 12 | Testimonials | Social proof |
| 13 | FAQ Section | Remove objections |
| 14 | Final CTA Section | Last conversion push |
| 15 | Footer | Navigation + legal |

---

## 6. Section-by-Section Breakdown

---

### Section 1: Navigation Bar

**Purpose:** Persistent top-level navigation that orients users and provides quick access to sign-up and login.

**Layout:**
- Fixed/sticky navigation bar
- Full-width with max-content-width container (1280px)
- Left: DILIVALY logo (wordmark + icon)
- Center: Navigation links (optional — can use scroll anchors)
- Right: "Log In" ghost button + "Get Started" solid CTA button

**Navigation Links (if included):**
- How It Works
- For Vendors
- For Agents
- Security
- FAQ

**Design Specifications:**
- Background: Dark (#07120A) with subtle glassmorphism frosted blur effect on scroll
- Height: 72px desktop, 60px mobile
- Transition: Background becomes more opaque as user scrolls past the hero fold
- Logo: SVG format, white wordmark with green (#00C805) accent element
- "Get Started" button: Filled bright green (#00C805), dark text, rounded-full, 10px horizontal padding

**Behavior:**
- Transparent at page top, semi-opaque dark with backdrop blur on scroll
- Mobile: Collapses to hamburger menu (animated slide-in drawer)
- Active link state: Underline in bright green or bright green text color

---

### Section 2: Hero Section

**Purpose:** The single most important section on the page. Must communicate DILIVALY's core value within 3 seconds. Drives primary CTA engagement.

**Layout:**
- Full viewport height (100vh) on desktop, 90vh minimum on mobile
- Two-column layout on desktop: Left column = copy + CTAs, Right column = illustration/product visual
- Single-column stacked layout on mobile (copy above, visual below)
- Background: Dark (#07120A) with animated gradient mesh or radial glow in deep green and bright green

**Left Column — Copy:**
- Pre-headline badge: Small pill badge reading "🚀 Trusted Delivery Marketplace" (green tint, glassmorphism)
- H1 Headline: Bold, large-scale headline. Example: "Deliver Anything. Anywhere. Securely."
- Subheadline: 2–3 lines describing the platform at a high level. Example: "Post a delivery. Get competing quotes from verified agents. Pay through escrow. Only pay when it arrives."
- Dual CTA Group:
  - Primary CTA: "Start Delivering" (filled green button)
  - Secondary CTA: "Become an Agent" (ghost/outlined button, green border)
  - Helper text below CTAs: "Free to join. No subscription fees."

**Right Column — Visual:**
- Illustration or 3D graphic showing: a delivery route, a phone with DILIVALY UI, or an abstract logistics graphic
- If using a product mock: Show the Vendor dashboard or the quote comparison screen
- Floating UI cards around the main visual (glassmorphism style):
  - Card 1: "📦 New Quote Received — ₦1,200" (pulsing green dot)
  - Card 2: "✅ Delivery Confirmed — PIN Verified"
  - Card 3: "💰 ₦5,400 Released from Escrow"
- These cards animate in on page load (staggered fade + slide)

**Background Treatment:**
- Radial green glow emanating from top-right or center-right
- Subtle noise/grain texture overlay for premium feel
- Optional: Animated floating particles or grid lines

---

### Section 3: Stats / Social Proof Bar

**Purpose:** Immediately below the hero fold, this bar communicates scale, trust, and activity. Addresses the "is this real?" question.

**Layout:**
- Full-width horizontal strip
- 4 stat blocks evenly spaced inside max-content container
- Divider lines between stats on desktop (remove on mobile, stack 2x2)

**Stats to Display (use realistic/aspirational figures or placeholders):**
- **Active Agents** — e.g., "2,400+"
- **Deliveries Completed** — e.g., "18,000+"
- **Vendors Onboarded** — e.g., "950+"
- **Escrow Transactions Secured** — e.g., "₦120M+"

**Design Specifications:**
- Background: Slightly lighter dark surface (#0D1F11 or similar green-dark)
- Stat numbers: Large, bold, bright green (#00C805)
- Stat labels: Small, muted text, uppercase, letter-spacing 0.1em
- Padding: 60px vertical on desktop, 40px on mobile
- Animated counters: Numbers count up when section enters viewport (using IntersectionObserver + requestAnimationFrame)

---

### Section 4: How It Works — Vendor

**Purpose:** Walk vendors through the end-to-end delivery request journey in simple, visual steps.

**Layout:**
- Centered section header: "How It Works for Vendors"
- Section badge above header (e.g., pill tag: "FOR VENDORS")
- Step list: Horizontal on desktop (scrollable), vertical on mobile
- 6 key steps presented as numbered cards

**Steps to Display:**
1. Complete KYC Verification
2. Create a Delivery Request
3. Receive Competing Quotes from Nearby Agents
4. Accept Your Preferred Quote
5. Pay Securely into Escrow via Your DILIVALY Wallet
6. Delivery Confirmed via PIN → Escrow Released

**Card Design:**
- Glassmorphism card: dark green tint, frosted border, subtle glow
- Top: Step number (large, bold, green) + step icon
- Middle: Step title (medium bold)
- Bottom: 1–2 sentence description
- Connecting line or arrow between cards on desktop
- Active/current step state visually distinct (brighter glow, green accent border)

**Supplementary:**
- Below steps: "And that's it. Your item arrives safely, and payment is only released when confirmed." — italic, muted, centered
- CTA below: "Post Your First Delivery →" (green outlined button)

---

### Section 5: How It Works — Agent

**Purpose:** Walk agents through the process of receiving jobs, submitting quotes, completing deliveries, and earning.

**Layout:**
- Mirror layout of Vendor section but distinguished by a color tint variation or section background shade change
- Section badge: "FOR AGENTS"
- 6 key steps

**Steps to Display:**
1. Register and Complete Verification
2. Receive Nearby Delivery Requests
3. Submit Your Best Quote
4. Order Becomes Active When Vendor Accepts
5. Pick Up Item → Complete Delivery
6. Customer Confirms via PIN → You Get Paid

**CTA below:** "Start Earning as an Agent →" (green outlined button)

---

### Section 6: Feature Highlights — Vendor

**Purpose:** Showcase the breadth of vendor-specific features in a visually rich, scannable format.

**Layout:**
- 2-column grid on desktop (feature cards), single column on mobile
- Alternate left/right large feature blocks for key features
- Small feature icon grid for secondary features (3-column grid)

**Key Feature Blocks (Large):**
1. **Quote Comparison System** — "Compare prices from multiple verified agents before committing. Choose by price, ratings, or delivery speed."
2. **Escrow Payment Protection** — "Your money is held securely until delivery is confirmed. No pay-and-pray."
3. **COD Protection** — "Need cash on delivery? Agents use a dedicated account. Funds held until the customer confirms receipt."
4. **Delivery PIN Verification** — "A unique PIN ensures your customer physically received the order before a single naira is released."

**Secondary Feature Grid (6 features, 3 columns):**
- Track Order Status
- Delivery History
- Wallet Top-Up
- Email Notifications
- Agent Performance Ratings
- Instant Quote Alerts

**Design Specifications:**
- Large feature blocks: Full-bleed glassmorphism cards, 2-column, with icon, headline, body text, and optional screenshot
- Feature grid cards: Small square cards, centered icon (green), short label, minimal border
- Icons: Custom thin-line or fill icons aligned to brand palette

---

### Section 7: Feature Highlights — Agent

**Purpose:** Showcase agent-specific features.

**Layout:**
- Same grid structure as Vendor features but with agent-specific content

**Key Feature Blocks:**
1. **Smart Delivery Matching** — "Receive requests near your current location. No wasted routes, no unnecessary travel."
2. **Earnings Dashboard** — "Track completed deliveries, earnings over time, and pending payments in one view."
3. **Verification & Trust System** — "Your verified badge makes vendors choose you first. Build your rep."
4. **Quote Submission System** — "Submit competitive quotes directly to vendor requests in seconds."

**Secondary Feature Grid:**
- Instant Job Notifications
- Order Status Updates
- Delivery Management Tools
- Rating & Reputation Builder
- Secure Payment Pipeline
- Performance Analytics

---

### Section 8: Escrow & COD Protection Section

**Purpose:** This is a trust-critical section. It must explain the escrow and COD mechanisms in visual, clear, non-technical terms. This section is a key conversion driver.

**Layout:**
- Full-width dark section with prominent heading
- Two sub-sections stacked or side-by-side tabs:
  - Escrow System
  - COD Protection

**Escrow Sub-Section — Visual Explanation:**
- Animated/static flow diagram showing:
  `Vendor Pays → Funds Enter Escrow → Agent Delivers → PIN Confirmed → Escrow Released → Agent Receives Payment`
- Three key callouts (pill badges):
  - "🔒 Funds Locked in Escrow"
  - "📍 Delivery in Progress"
  - "✅ Released on Confirmation"
- Descriptive body text explaining the mechanism

**COD Sub-Section — Visual Explanation:**
- Flow diagram:
  `Vendor Creates COD Order → Agent Receives Dedicated Account → Customer Pays Account → Funds Held → Delivery Confirmed → Vendor Receives Funds`
- Emphasis on: "Each agent has a unique, dedicated virtual account number for COD collections"
- Highlight the protection for vendors in a COD scenario

**Design Specifications:**
- Section background: Very dark green-black (#07120A)
- Flow diagrams: Custom SVG or CSS-animated step-through
- Connecting arrows: Bright green (#00C805) animated dashed lines
- Step nodes: Circular glassmorphism nodes with icons

---

### Section 9: Delivery PIN Verification Section

**Purpose:** Explain this unique security mechanism in a visual, memorable way. This feature is a key differentiator.

**Layout:**
- Split layout: Left = explanation copy, Right = UI mockup of PIN entry screen
- Or: Single-column with a centered UI mockup and copy above/below

**Copy Structure:**
- Section badge: "SECURE DELIVERY"
- Headline: "Every Delivery is PIN-Protected"
- Sub-copy: "When an order starts, a unique PIN is generated. The vendor shares it with their customer. The customer gives the PIN to the agent on delivery. Only then is payment released."

**Visual — PIN UI Mockup:**
- Phone mockup (or floating card) showing a 4–6 digit PIN entry interface
- Styled in DILIVALY's dark UI aesthetic
- Animated: PIN digits appear one-by-one, then a success animation (green checkmark + "Delivery Confirmed" message)

**3-Step Visual Flow:**
1. Order Starts → PIN Generated (icon: lock)
2. Vendor Shares PIN with Customer (icon: share/message)
3. Customer Provides PIN to Agent → Payment Released (icon: checkmark)

**Design Notes:**
- Use a pulsing green circle around the PIN display for emphasis
- Consider a "watch how it works" animated mockup loop

---

### Section 10: Dashboard Preview Section

**Purpose:** Show rather than tell. A glimpse of the actual product builds trust, reduces signup anxiety, and communicates professionalism.

**Layout:**
- Dark section with centered heading: "Everything in One Powerful Dashboard"
- Large browser or device mockup containing a dashboard screenshot
- Tabbed interface: "Vendor View" | "Agent View" — clicking switches the dashboard visual

**Vendor Dashboard Preview Should Show:**
- Active delivery requests list
- Quote comparison cards (showing 2–3 agent quotes with prices)
- Wallet balance with escrow summary
- Order status tracker (step-based progress bar)

**Agent Dashboard Preview Should Show:**
- Nearby delivery requests feed
- Quote submission interface
- Earnings overview (total earned, pending, released)
- Delivery history list

**Design Specifications:**
- Browser frame: Thin rounded dark frame, subtle drop shadow
- Dashboard itself: Use the actual DILIVALY UI design language
- Floating feature labels (tooltip-style) pointing to key UI elements: "Quote Comparison", "Escrow Balance", "Order PIN"
- Tab toggle: Pill toggle with smooth background slide transition

---

### Section 11: Trust & Security Section

**Purpose:** Directly address payment and data security concerns with visual proof elements.

**Layout:**
- 3-column grid of trust cards + a large trust statement heading
- Security badge strip below cards

**Trust Cards (3-4):**
1. **Verified Agents Only** — "All agents undergo identity and document verification before accessing the platform."
2. **Escrow-Protected Payments** — "Vendor funds are held securely and only released on delivery confirmation."
3. **PIN Delivery Verification** — "Every delivery requires physical PIN confirmation — no PIN, no payment."
4. **Encrypted Transactions** — "All payment data is encrypted end-to-end."

**Security Badge Strip:**
- Row of badge icons: SSL Secured | Encrypted Payments | KYC Verified | Escrow Protected
- Small, minimal, icon + label format
- Subtle divider line above strip

---

### Section 12: Testimonials

**Purpose:** Social proof from real users (or representative user archetypes during early stage) drives conversion.

**Layout:**
- Carousel or 3-column grid on desktop, single-column scroll on mobile
- Two segments: Vendor testimonials and Agent testimonials (toggle or labeled)
- Each testimonial card contains: quote, user avatar, name, user type badge

**Card Design:**
- Glassmorphism card, soft green-tinted border
- Large opening quote mark (") in bright green
- Quote body text in white, medium weight
- Bottom: Avatar (circular, placeholder if real photos unavailable) + Name + Role badge (green pill: "Vendor" or "Agent")
- Star rating row (5 stars, green)

---

### Section 13: FAQ Section

**Purpose:** Reduce friction and remove objections by proactively answering common questions.

**Layout:**
- Two-column accordion list on desktop (6 questions left, 6 right), single column on mobile
- Section header: "Got Questions? We've Got Answers."
- Optional category tabs above: All | Vendors | Agents | Payments | Security

**Vendor FAQ Questions:**
- How do I post a delivery request?
- How does escrow payment work?
- What is COD protection?
- How does the delivery PIN work?
- Can I track my delivery in real-time?
- What happens if an agent doesn't deliver?
- How do I rate an agent?

**Agent FAQ Questions:**
- How do I register as a delivery agent?
- How do I receive delivery requests?
- How and when do I get paid?
- What is the verification process?
- What is the rating system?
- How does the quote submission work?

**Accordion Design:**
- Closed state: Question row with "+" icon, light border
- Open state: Expanded answer, animated height transition, green left border accent
- Hover state: Subtle green background tint on question row

---

### Section 14: Final CTA Section

**Purpose:** The last conversion push before the footer. Captures users who have scrolled the full page but haven't yet committed.

**Layout:**
- Full-width section, gradient dark green background
- Centered, single column
- Two distinct CTA paths clearly presented

**Copy Structure:**
- Pre-headline: "Ready to Get Started?"
- Headline: "Join DILIVALY Today"
- Sub-copy: "Whether you're sending a package or delivering one — DILIVALY connects you with the right partner, every time."
- Dual CTA group:
  - Primary: "Post a Delivery as a Vendor" (large, filled green)
  - Secondary: "Join as a Delivery Agent" (large, ghost/outlined)
- Trust reinforcement below CTAs: "Free to join. No hidden fees. Secure escrow payments."

**Design Notes:**
- Background: Radial green glow on dark, or animated gradient shift
- Optional: Floating abstract delivery-related icons in background (muted, low opacity)

---

## 7. UI/UX Guidelines

### Design Principles

**1. Dark Premium First**
All UI defaults to the dark (#07120A) background. Light variants are used only for card surfaces and elevation. Never use a white or light background for any full-width section.

**2. Glassmorphism as the Primary Card Language**
Cards, modals, info blocks, and floating elements use glassmorphism: translucent dark-green backgrounds, frosted glass blur, thin light-green or white border at low opacity, subtle inner shadow.

```
Glassmorphism Card Spec:
  background: rgba(1, 77, 11, 0.15)
  backdrop-filter: blur(12px)
  border: 1px solid rgba(0, 200, 5, 0.15)
  border-radius: 16px
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)
```

**3. Visual Hierarchy Through Green**
Use bright green (#00C805) exclusively for:
- CTA buttons
- Icon accents
- Step numbers
- Stat numbers
- Active states
- Highlight elements

Never use bright green for body text or as a background fill on large sections.

**4. Motion Adds Meaning, Not Noise**
Every animation must serve a functional purpose: communicating state change, guiding attention, or illustrating a process. Avoid decorative animation that distracts.

**5. Conversion-Optimized Layouts**
Information flows top-to-bottom in a logical progression. Every section should have a visible or implied "next step." Use directional cues (arrows, visual flow) to guide the user forward.

### Visual Hierarchy Rules

- H1 / Section Headlines: 48–72px, bold weight, tight letter-spacing
- H2 / Sub-section titles: 32–40px, semibold
- H3 / Card titles: 20–24px, semibold
- Body text: 16–18px, regular weight, line-height 1.6
- Caption / label text: 12–14px, uppercase, letter-spacing 0.08em
- CTA buttons: 16–18px, semibold or bold

### Spacing System

Use an 8px base grid throughout.

| Token | Value | Use |
|---|---|---|
| space-1 | 8px | Minimal gaps |
| space-2 | 16px | Component internal padding |
| space-3 | 24px | Card padding |
| space-4 | 32px | Small section gaps |
| space-5 | 48px | Medium section spacing |
| space-6 | 64px | Standard section padding (vertical) |
| space-7 | 80px | Large section padding |
| space-8 | 128px | Major section divisions |

### Border Radius System

| Token | Value | Use |
|---|---|---|
| radius-sm | 6px | Tags, badges, small elements |
| radius-md | 12px | Buttons, small cards |
| radius-lg | 16px | Cards, modals |
| radius-xl | 24px | Feature blocks |
| radius-full | 9999px | Pills, avatar circles, toggle buttons |

---

## 8. Layout Specifications

### Page Container

- Max content width: **1280px**
- Side padding (desktop): 40px each side
- Side padding (tablet): 24px each side
- Side padding (mobile): 16px each side

### Grid System

Desktop: 12-column grid, 24px gutters
Tablet: 8-column grid, 20px gutters
Mobile: 4-column grid, 16px gutters

### Section Padding

Every page section uses consistent vertical padding:
- Desktop: 96px top, 96px bottom
- Tablet: 72px top, 72px bottom
- Mobile: 56px top, 56px bottom

Hero section exception:
- Desktop: Centered in 100vh, no extra padding
- Mobile: padding-top 80px (for nav clearance), padding-bottom 48px

### Elevation System

Multiple depth layers using box-shadow and z-index:

| Layer | Z-index | Shadow |
|---|---|---|
| Base content | 0 | None |
| Cards | 1 | 0 8px 24px rgba(0,0,0,0.3) |
| Floating elements | 10 | 0 12px 40px rgba(0,0,0,0.5) |
| Sticky nav | 100 | 0 2px 20px rgba(0,0,0,0.6) |
| Modals/overlays | 1000 | Full-page overlay |

---

## 9. Responsive Design Requirements

### Breakpoint System

| Breakpoint | Token | Min Width |
|---|---|---|
| Mobile | `sm` | 0px |
| Mobile Large | `md` | 480px |
| Tablet | `lg` | 768px |
| Desktop Small | `xl` | 1024px |
| Desktop | `2xl` | 1280px |
| Desktop Large | `3xl` | 1536px |

### Mobile-First Approach

All CSS should be written mobile-first. Use min-width media queries to progressively enhance layout for larger screens.

### Critical Responsive Behaviors

1. **Navigation:** Hamburger menu below 1024px
2. **Hero:** 2-column → 1-column, visual stacks below copy on mobile
3. **How It Works Steps:** Horizontal scroll (with snap) on tablet, vertical stack on mobile
4. **Feature Cards:** 3-column → 2-column → 1-column
5. **Dashboard Preview:** Browser mockup scales proportionally, tabs remain visible
6. **Testimonials:** 3-column → 1-column carousel
7. **FAQ:** 2-column → 1-column
8. **Stats Bar:** 4-column → 2x2 grid on mobile
9. **Footer:** Multi-column → stacked single column

---

## 10. Typography System

### Font Pairing

**Display / Headline Font:**
- Font: **Clash Display** (or **Cabinet Grotesk**)
- Weights: 600, 700
- Used for: H1, H2, hero headlines, section titles
- Fallback: 'Helvetica Neue', sans-serif

**Body / UI Font:**
- Font: **Satoshi** (or **DM Sans**)
- Weights: 400, 500, 600
- Used for: Body text, buttons, labels, UI elements
- Fallback: 'Helvetica', sans-serif

**Mono / Code Font (for PIN display and account numbers):**
- Font: **JetBrains Mono** or **IBM Plex Mono**
- Weight: 500
- Used for: PIN codes, account numbers, reference IDs

### Type Scale

| Style | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---|---|---|---|---|---|
| Display XL | Clash Display | 72px | 40px | 700 | 1.1 |
| Display L | Clash Display | 56px | 36px | 700 | 1.15 |
| H1 | Clash Display | 48px | 32px | 600 | 1.2 |
| H2 | Clash Display | 36px | 28px | 600 | 1.25 |
| H3 | Satoshi | 24px | 20px | 600 | 1.3 |
| H4 | Satoshi | 20px | 18px | 600 | 1.35 |
| Body L | Satoshi | 18px | 16px | 400 | 1.6 |
| Body M | Satoshi | 16px | 15px | 400 | 1.6 |
| Body S | Satoshi | 14px | 13px | 400 | 1.5 |
| Label | Satoshi | 12px | 11px | 500 | 1.4 |
| Caption | Satoshi | 11px | 10px | 400 | 1.4 |

### Typography Rules

- Never use font-weight below 400 in body content
- H1 and Display text should always be white or near-white on dark backgrounds
- Body text: Use rgba(255,255,255,0.75) for secondary body text
- Never use text smaller than 11px
- Apply letter-spacing: 0.06–0.1em to uppercase labels and badges only

---

## 11. Color System

### Core Palette

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `color-bg-primary` | #07120A | rgb(7, 18, 10) | Page background |
| `color-bg-surface` | #0D1F11 | rgb(13, 31, 17) | Card surfaces, nav bg |
| `color-bg-elevated` | #122618 | rgb(18, 38, 24) | Elevated cards, hover bg |
| `color-brand-deep` | #014D0B | rgb(1, 77, 11) | Buttons bg, accents |
| `color-brand-bright` | #00C805 | rgb(0, 200, 5) | CTAs, highlights, numbers |
| `color-brand-glow` | rgba(0,200,5,0.2) | — | Glow effects, radial BGs |
| `color-text-primary` | #FFFFFF | rgb(255,255,255) | Headlines, primary text |
| `color-text-secondary` | rgba(255,255,255,0.65) | — | Body text, descriptions |
| `color-text-muted` | rgba(255,255,255,0.40) | — | Captions, disabled |
| `color-border-default` | rgba(0,200,5,0.12) | — | Card borders |
| `color-border-active` | rgba(0,200,5,0.4) | — | Focused/active borders |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `color-success` | #00C805 | Success states, confirmations |
| `color-warning` | #F5A623 | Warning states |
| `color-error` | #E53935 | Error states, destructive |
| `color-info` | #29B6F6 | Informational states |

### Gradient Definitions

```css
/* Hero radial glow */
--gradient-hero-glow: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,200,5,0.12) 0%, transparent 70%);

/* CTA button gradient */
--gradient-cta: linear-gradient(135deg, #00C805 0%, #014D0B 100%);

/* Section divider gradient */
--gradient-divider: linear-gradient(90deg, transparent, rgba(0,200,5,0.3), transparent);

/* Dark surface gradient */
--gradient-surface: linear-gradient(180deg, #0D1F11 0%, #07120A 100%);
```

### Dark Mode Note

The DILIVALY landing page is **dark mode native**. There is no light mode variant. All design decisions assume the dark (#07120A) background as the default canvas.

---

## 12. Component Architecture

### Atomic Design Structure

Following atomic design methodology (Atoms → Molecules → Organisms → Templates → Pages).

### Atoms

Small, indivisible UI units:

| Component | Description |
|---|---|
| `Button` | Primary, secondary, ghost, icon variants |
| `Badge` | Pill-shaped tags (role badges, status badges) |
| `Icon` | SVG icon wrapper with size and color props |
| `Avatar` | Circular image/initials display |
| `Divider` | Horizontal rule with gradient option |
| `Spinner` | Loading indicator |
| `Input` | Text input field (for email signup if present) |
| `StarRating` | 5-star visual display component |
| `ProgressBar` | Horizontal progress fill bar |
| `Tag` | Colored status label |

### Molecules

Combinations of atoms forming meaningful UI patterns:

| Component | Description |
|---|---|
| `StatCard` | Metric + label display (used in stats bar) |
| `FeatureCard` | Icon + headline + description |
| `StepCard` | Numbered step with icon + description |
| `TestimonialCard` | Quote + avatar + name + role |
| `FAQItem` | Accordion question + answer |
| `FeatureBadge` | Icon + short label (for security strip) |
| `UserTypeToggle` | Pill toggle for Vendor/Agent views |
| `QuoteCard` | Mock quote card for dashboard preview |
| `FlowNode` | Single step in escrow/COD flow diagram |
| `PINDisplay` | Monospaced PIN code display widget |

### Organisms

Complete section-level components:

| Component | Description |
|---|---|
| `Navbar` | Full navigation header |
| `HeroSection` | Full hero with copy + visual |
| `StatsBar` | 4-stat horizontal strip |
| `HowItWorks` | Step-by-step flow section (accepts vendor/agent variant prop) |
| `FeatureGrid` | Feature cards grid (accepts variant prop) |
| `EscrowSection` | Escrow + COD explanation with flow diagrams |
| `PINSection` | PIN verification explanation |
| `DashboardPreview` | Tabbed product mockup |
| `TrustSection` | Trust cards + security badges |
| `TestimonialsSection` | Testimonials carousel/grid |
| `FAQSection` | Accordion FAQ |
| `FinalCTA` | Last conversion section |
| `Footer` | Full site footer |

### Component Props Pattern (React)

All section-level components should accept a `variant` prop where dual audience content applies:

```typescript
type UserVariant = 'vendor' | 'agent';

interface HowItWorksProps {
  variant: UserVariant;
}

interface FeatureGridProps {
  variant: UserVariant;
}
```

---

## 13. Animation Requirements

### Animation Philosophy

DILIVALY animations should feel **purposeful, premium, and fast**. Avoid slow or lingering transitions that frustrate users. All animations should complete within 300–600ms unless intentionally looping.

### Scroll-Triggered Animations

Use IntersectionObserver with a threshold of 0.15 (trigger when 15% of element is visible).

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Section headlines | Fade up (0 → 1, translateY 20px → 0) | 500ms | 0ms |
| Stat numbers | Count up from 0 | 1500ms | Staggered 100ms each |
| Step cards | Fade in + slide left/right | 400ms | Staggered 100ms each |
| Feature cards | Fade up | 350ms | Staggered 80ms each |
| Testimonial cards | Fade in | 300ms | Staggered 100ms each |
| Trust badges | Fade in | 250ms | Staggered 60ms each |

### Hero Load Animations (Page Load)

Sequence on initial page load:
1. (0ms) Nav fades in
2. (100ms) Badge pill fades in
3. (200ms) H1 slides up + fades in
4. (400ms) Subheadline fades in
5. (600ms) CTA buttons fade in
6. (800ms) Floating UI cards animate in (staggered, each with scale + fade)
7. (1000ms) Background glow pulses subtly

### Button & Interactive Animations

| Interaction | Animation |
|---|---|
| Button hover | Scale 1.02, brightness +10%, shadow expand |
| Button press | Scale 0.98, instant |
| Button release | Spring back to 1 |
| Accordion open | Height auto transition, ease-in-out, 250ms |
| Tab switch | Background slides with CSS transform |
| Nav link hover | Underline slides in from left, 200ms |
| Card hover | Translate Y -4px, shadow intensify, 200ms |

### Looping Animations

| Element | Animation | Duration |
|---|---|---|
| Hero background glow | Subtle pulse (opacity 0.8 → 1.0) | 3s loop |
| Active step indicator | Pulsing ring | 2s loop |
| Floating hero cards | Gentle float (translateY ±6px) | 4s ease-in-out loop |
| PIN digits (demo) | Sequential reveal + reset | 3s loop |

### Animation Easing Functions

```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Reduced Motion

Always implement the `prefers-reduced-motion` media query. All translate and scale animations should reduce to simple fade-in on reduced motion. Looping animations should stop.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. CTA Placement Strategy

### CTA Philosophy

Every CTA on the DILIVALY landing page should:
1. Be visible without scrolling or within natural scroll rhythm
2. Clearly communicate who it is for (vendor or agent)
3. Use action-oriented language ("Post a Delivery", not "Sign Up")
4. Never require users to scroll more than 2 viewport heights without encountering a CTA

### CTA Inventory

| # | Location | Text | Type | Target |
|---|---|---|---|---|
| 1 | Nav (right) | "Get Started" | Primary button | Signup |
| 2 | Hero | "Start Delivering" | Primary button | Vendor signup |
| 3 | Hero | "Become an Agent" | Ghost button | Agent signup |
| 4 | How It Works — Vendor | "Post Your First Delivery →" | Text link + outline | Vendor signup |
| 5 | How It Works — Agent | "Start Earning as an Agent →" | Text link + outline | Agent signup |
| 6 | Dashboard Preview | "Try it Free" or "Sign Up Free" | Inline button | General signup |
| 7 | Final CTA Section | "Post a Delivery as a Vendor" | Large primary | Vendor signup |
| 8 | Final CTA Section | "Join as a Delivery Agent" | Large ghost | Agent signup |

### CTA Button Design Specifications

**Primary CTA (Vendor-oriented):**
```
Background: #00C805
Text: #07120A (dark, high contrast)
Padding: 14px 32px
Border-radius: 9999px (full pill)
Font: Satoshi, 16px, weight 600
Hover: Scale 1.02, box-shadow 0 0 20px rgba(0,200,5,0.4)
```

**Secondary/Ghost CTA (Agent-oriented):**
```
Background: transparent
Border: 2px solid rgba(0,200,5,0.6)
Text: #00C805
Padding: 14px 32px
Border-radius: 9999px
Hover: Background rgba(0,200,5,0.1), border rgba(0,200,5,1)
```

### CTA Copy Guidelines

- Use first-person verbs: "Start Delivering", "Join Now", "Post My Request"
- Include low-friction qualifiers: "Free to join", "No card required"
- Separate vendor and agent CTAs with visual distinction (label or icon prefix)

---

## 15. Navigation Structure

### Desktop Navigation

```
[DILIVALY Logo]    [How It Works] [For Vendors] [For Agents] [Security] [FAQ]    [Log In] [Get Started]
```

**Behavior:**
- Transparent on hero section, transitions to dark opaque with blur on scroll (>100px from top)
- Scroll spy: Active link highlights as user scrolls through sections
- "Get Started" button: Always visible, bright green, pill shape
- "Log In": Ghost text link, no border, right of nav

### Mobile Navigation (Hamburger Menu)

**Trigger:** Hamburger icon (3 lines → X animation) at right of mobile nav bar

**Drawer:**
- Full-height right-side drawer (or full-screen overlay)
- Background: #07120A with subtle green glow
- Links: Large, centered, Clash Display font, 32px
- CTA buttons at bottom of drawer: "Get Started as Vendor" + "Join as Agent"
- Close: Tap X or tap outside drawer

### Anchor Link Behavior

All navigation links on the landing page should be smooth-scroll anchor links to section IDs.

```html
<a href="#how-it-works">How It Works</a>
```

JavaScript smooth scroll override:
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
```

Offset should account for sticky nav height (72px).

---

## 16. Footer Structure

### Footer Layout

Three-column layout on desktop, stacked single column on mobile.

```
[Logo + Tagline]    [Product Links]    [Company Links]    [Legal Links]
                    [Social Icons]
[Copyright line]                                          [Trust badges]
```

### Footer Columns

**Column 1 — Brand**
- DILIVALY logo (white)
- 2-line tagline: "Connecting vendors and agents for reliable, secure deliveries."
- Social media icons: Twitter/X, Instagram, LinkedIn, Facebook (green, hover bright green)

**Column 2 — Product**
- How It Works
- For Vendors
- For Agents
- Security & Escrow
- COD Protection
- Delivery PIN

**Column 3 — Company**
- About DILIVALY
- Careers
- Blog/News
- Contact Us
- Support Center

**Column 4 — Legal**
- Terms of Service
- Privacy Policy
- Cookie Policy
- Refund Policy

### Footer Bottom Bar

- Left: © 2025 DILIVALY. All rights reserved.
- Right: Small trust badges — SSL icon, Escrow protected icon

**Design Specifications:**
- Footer background: #030A04 (slightly darker than page bg)
- Top border: 1px gradient (transparent → green → transparent)
- Column headers: 12px, uppercase, letter-spacing 0.1em, muted text
- Links: 14px, semi-muted white, hover: bright green
- Padding: 80px top, 40px bottom

---

## 17. Accessibility Requirements

### WCAG 2.1 Level AA Compliance

DILIVALY must meet WCAG 2.1 Level AA as a minimum standard.

### Color Contrast

- All body text on dark backgrounds: Minimum 4.5:1 contrast ratio
- Large text (24px+): Minimum 3:1 contrast ratio
- Bright green (#00C805) on dark (#07120A): Check and adjust if needed (use contrast checker)
- Interactive elements: 3:1 minimum against adjacent colors
- Note: Pure #00C805 on #07120A achieves approximately 8.5:1 — compliant

### Keyboard Navigation

- All interactive elements reachable via Tab key
- Visible focus rings on all focusable elements (use green outline: 2px solid #00C805, offset 2px)
- Logical tab order following visual reading order
- Skip-to-main-content link at page top (visible on focus)
- FAQ accordion: Operable via Enter/Space keys
- Modal/drawer: Focus trap when open, return focus to trigger on close

### Screen Reader Support

- All images have descriptive `alt` attributes
- Icon-only buttons have `aria-label`
- Accordion items use `aria-expanded`, `aria-controls`
- Dashboard preview tabs use `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- Animated counters: Announce final value to screen readers (update after animation)
- Live regions for dynamic content updates

### Semantic HTML Requirements

```html
<!-- Use proper semantic elements -->
<header> for navigation
<main> for primary content
<section> for each landing page section (with aria-label or aria-labelledby)
<article> for testimonial cards
<nav> for navigation
<footer> for footer
<h1> exactly once per page
<h2> for section titles
<h3> for card titles
```

### Motion Accessibility

- Implement `prefers-reduced-motion` query (see Animation Requirements)
- Never use animations that flash more than 3 times per second

---

## 18. SEO Requirements

### Meta Tags

```html
<title>DILIVALY — Logistics & Delivery Marketplace | Post. Quote. Deliver.</title>
<meta name="description" content="DILIVALY connects vendors with verified delivery agents. Post delivery requests, receive competing quotes, pay securely via escrow, and confirm deliveries with PIN verification.">
<meta name="keywords" content="delivery marketplace, logistics platform, send package, delivery quotes, secure delivery, escrow payment, COD delivery Nigeria">

<!-- Open Graph -->
<meta property="og:title" content="DILIVALY — Secure Delivery Marketplace">
<meta property="og:description" content="Post delivery requests. Get competing quotes from verified agents. Pay through escrow. Only pay when it arrives.">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://dilivaly.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="DILIVALY — Delivery Marketplace">
<meta name="twitter:description" content="Compare quotes, pay securely, deliver reliably.">
<meta name="twitter:image" content="/twitter-card.png">
```

### Structured Data (Schema.org)

Implement the following schema types:

```json
// Organization schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DILIVALY",
  "url": "https://dilivaly.com",
  "description": "Logistics and delivery marketplace platform",
  "logo": "https://dilivaly.com/logo.png"
}

// WebSite schema with SearchAction
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://dilivaly.com",
  "name": "DILIVALY"
}
```

### Heading Hierarchy

- One `<h1>` on the page (hero headline)
- `<h2>` for every major section heading
- `<h3>` for card/feature titles
- `<h4>` for sub-items if needed
- Never skip heading levels

### Performance as SEO

Core Web Vitals targets (see Section 19):
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### URL Structure

- Landing page: `https://dilivaly.com/`
- No dynamic query parameters on the landing page
- Canonical tag pointing to primary URL

---

## 19. Performance Optimization Requirements

### Core Web Vitals Targets

| Metric | Target | Acceptable |
|---|---|---|
| Largest Contentful Paint (LCP) | < 2.0s | < 2.5s |
| First Input Delay (FID) | < 50ms | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.05 | < 0.1 |
| First Contentful Paint (FCP) | < 1.5s | < 1.8s |
| Time to Interactive (TTI) | < 3.5s | < 5s |

### Image Optimization

- Use WebP format for all photography and illustrations
- Use SVG for all icons, logos, and geometric illustrations
- Implement lazy loading for all images below the fold
- Use `srcset` and `sizes` for responsive images
- Hero image: LCP candidate — preload with `<link rel="preload">`
- Maximum image size: 200KB for content images, 50KB for thumbnails

### Font Loading

- Use `font-display: swap` for all custom fonts
- Preload critical fonts (headline font at minimum):
  ```html
  <link rel="preload" href="/fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
  ```
- Self-host all custom fonts (no Google Fonts dependencies)
- Subset fonts to include only required character sets

### JavaScript Performance

- Code-split by route (Next.js automatic code splitting)
- Defer non-critical JavaScript
- Avoid render-blocking third-party scripts
- Scroll animation library: Use lightweight IntersectionObserver (native), avoid heavy scroll libraries
- Total JS bundle: < 200KB gzipped for initial load

### CSS Performance

- Avoid unused CSS — use PurgeCSS or Tailwind's content config
- Critical CSS inlined in `<head>`
- Avoid excessive CSS animations on mobile (use reduced-motion)

### Caching Strategy

- Static assets: max-age 1 year with content hash in filename
- HTML: max-age 0, must-revalidate (or CDN edge cache with cache invalidation)
- CDN: Use Cloudflare or Vercel Edge Network for global distribution

### Third-Party Scripts

- Load analytics (Google Analytics or Plausible) as non-blocking deferred script
- No A/B testing scripts on initial render
- Any chat widgets: Load after user interaction (5s delay minimum)

---

## 20. Recommended Frontend Stack

### Core Framework

**Next.js 14+ (App Router)**
- Rationale: SSG for landing page (maximum performance), SSR for dynamic pages, excellent SEO support, Vercel deployment
- Alternative: Astro 4+ for purely static landing page with superior build performance

### Styling

**Tailwind CSS v3+**
- Custom theme configuration to implement DILIVALY's design tokens
- Plugin: `@tailwindcss/typography` for prose content
- Custom CSS for glassmorphism effects and complex animations

**CSS Modules** (for complex component-specific styles that conflict with Tailwind utilities)

### Animation

**Framer Motion v10+** (if using React/Next.js)
- For scroll-triggered animations, page transitions, and complex motion sequences
- Use `motion.div` with `whileInView` for scroll-triggered reveals
- Use `AnimatePresence` for tab/accordion transitions

**Lottie React** for any vector animations (e.g., success states, PIN confirmation)

### Icons

**Lucide React** (primary icon set — clean, modern, consistent)
**Custom SVG icons** for brand-specific logistics icons not in standard icon sets

### Component Library

**Custom-built component library** (no third-party UI library) — to maintain full control over the dark premium aesthetic and glassmorphism design language. Shadcn/ui primitives can be used as unstyled base for complex components (accordion, tabs, dialog).

### Development Tooling

| Tool | Purpose |
|---|---|
| TypeScript | Type safety across all components |
| ESLint | Code quality |
| Prettier | Code formatting |
| Husky | Pre-commit hooks |
| Storybook | Component development and documentation |

### Deployment

**Vercel** (primary recommendation)
- Native Next.js support
- Edge Network for global CDN
- Preview deployments per branch
- Analytics integration

---

## 21. Recommended Folder Structure

```
dilivaly-landing/
├── public/
│   ├── fonts/               # Self-hosted font files (.woff2)
│   ├── images/              # Static images (og-image, favicons)
│   ├── icons/               # Static icon SVGs if not inline
│   └── favicon.ico
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout (fonts, metadata, global providers)
│   │   ├── page.tsx         # Landing page (composes all section organisms)
│   │   └── globals.css      # Global CSS, custom properties
│   │
│   ├── components/
│   │   ├── atoms/           # Button, Badge, Icon, Avatar, Input, StarRating
│   │   ├── molecules/       # StatCard, FeatureCard, StepCard, TestimonialCard, FAQItem
│   │   ├── organisms/       # Navbar, HeroSection, HowItWorks, FeatureGrid, etc.
│   │   └── layout/          # PageContainer, SectionWrapper, Grid, Divider
│   │
│   ├── constants/
│   │   ├── navigation.ts    # Nav link definitions
│   │   ├── features.ts      # Feature card content (vendor + agent variants)
│   │   ├── steps.ts         # How It Works step definitions
│   │   ├── faqs.ts          # FAQ questions + answers
│   │   ├── testimonials.ts  # Testimonial data
│   │   └── stats.ts         # Stats bar data
│   │
│   ├── hooks/
│   │   ├── useScrollSpy.ts  # Active nav link detection
│   │   ├── useCounter.ts    # Animated stat counter
│   │   └── useInView.ts     # IntersectionObserver hook
│   │
│   ├── lib/
│   │   ├── analytics.ts     # Analytics event helpers
│   │   └── utils.ts         # General utilities (cn(), formatNumber(), etc.)
│   │
│   ├── styles/
│   │   ├── tokens.css       # CSS custom properties (design tokens)
│   │   ├── typography.css   # Type scale classes
│   │   └── animations.css   # Keyframe definitions
│   │
│   └── types/
│       ├── common.ts        # Shared TypeScript interfaces
│       └── content.ts       # Content data type definitions
│
├── tailwind.config.ts       # Tailwind theme configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json
└── package.json
```

---

## 22. Reusable Components List

### Priority: Must-Build (Core Components)

| Component | Location | Props |
|---|---|---|
| `Button` | atoms/ | `variant`, `size`, `icon`, `loading`, `disabled` |
| `Badge` | atoms/ | `variant` (role/status/count), `color`, `size` |
| `SectionWrapper` | layout/ | `id`, `className`, `background` |
| `GlassCard` | atoms/ | `className`, `hover`, `glow` |
| `StatCard` | molecules/ | `value`, `label`, `prefix`, `suffix`, `animate` |
| `FeatureCard` | molecules/ | `icon`, `title`, `description`, `variant` |
| `StepCard` | molecules/ | `step`, `icon`, `title`, `description`, `isLast` |
| `TestimonialCard` | molecules/ | `quote`, `author`, `role`, `avatar`, `rating` |
| `FAQItem` | molecules/ | `question`, `answer`, `defaultOpen` |
| `HowItWorks` | organisms/ | `variant` (vendor/agent) |
| `Navbar` | organisms/ | — |
| `Footer` | organisms/ | — |
| `FlowDiagram` | molecules/ | `steps`, `variant` (escrow/cod) |
| `PINDisplay` | molecules/ | `digits`, `animate`, `confirmed` |
| `DashboardMockup` | organisms/ | `activeTab` |
| `UserTypeToggle` | molecules/ | `value`, `onChange` |

### Priority: Should-Build (Enhancement Components)

| Component | Use |
|---|---|
| `CounterAnimation` | Wraps stat numbers with count-up behavior |
| `ScrollReveal` | Wrapper for scroll-triggered animation |
| `GradientText` | Green gradient text effect |
| `GlowDot` | Pulsing dot indicator (online/active state) |
| `Tooltip` | Dashboard feature label tooltips |
| `TabGroup` | Accessible tab interface |
| `Accordion` | Accessible FAQ accordion |
| `Carousel` | Mobile testimonials carousel |

---

## 23. Suggested Icon Categories

The icon system should use **Lucide React** as the primary library supplemented by custom SVG icons for logistics-specific concepts.

### Navigation & UI Icons
- Menu, X (close), ChevronDown, ChevronRight, ArrowRight, ExternalLink

### User Type Icons
- User (vendor), Truck (agent), UserCheck (verified user)

### Feature Icons
- Package (delivery request), Package2 (item), MapPin (location), Navigation
- Clock (status/time), CheckCircle (confirmation), XCircle (failure)
- Shield, ShieldCheck (security/verification), Lock, Unlock, Key
- CreditCard, Wallet, DollarSign, Banknote (payments)
- Star, StarHalf (ratings)
- Bell, BellRing (notifications)
- BarChart2, TrendingUp (earnings/analytics)
- FileText (request/documentation)
- MessageSquare (communication)
- RefreshCw (retry), Loader (loading)

### Custom SVG Icons (Build These)
- Escrow vault icon (abstract safe/lock combination)
- PIN keypad icon (numeric keypad)
- Competing quotes icon (multiple quote bubbles)
- COD account icon (account number + coins)
- Delivery route icon (simplified A→B with stops)

---

## 24. Suggested Image & Illustration Direction

### Illustration Style

**Style:** Isometric 3D illustrations with a dark, premium color palette using DILIVALY's brand colors.

**Primary Style Reference:** Modern SaaS isometric illustrations in dark mode — similar to Stripe, Linear, or Loom's illustration style.

**Color Application:** All illustrations should incorporate deep green (#014D0B) and bright green (#00C805) as primary colors, with dark background shapes that harmonize with the page.

### Hero Visual

**Option A (Recommended):** Abstract isometric logistics scene — a stylized city/town aerial view with delivery routes animated as glowing green paths between buildings. A phone or dashboard UI floats above the scene.

**Option B:** Clean 3D phone mockup showing the DILIVALY app interface (dashboard or quote comparison screen) with floating UI cards around it.

**Option C:** Abstract data visualization — interconnected nodes representing vendors and agents in a network, with glowing connection paths.

### Section Illustrations

| Section | Illustration Concept |
|---|---|
| Escrow section | Abstract vault or safe with animated lock mechanism |
| COD section | Stylized bank account card with number |
| PIN section | Phone with PIN entry interface |
| Trust section | Shield with checkmark, abstract security motif |
| Dashboard section | Browser/phone frame with actual product UI |

### Photography Direction

If real photography is used (e.g., in testimonials or team photos):
- Use dark-toned photos with slight green color grading
- Avoid bright, overly saturated lifestyle photography
- Prefer close-up, focused product/logistics contexts
- Human photos: Diverse representation (African business context)

### Asset Format Requirements

- All illustrations: SVG preferred, WebP as fallback
- Icons: SVG inline or sprite
- Avoid PNG for illustrations (use SVG)
- Hero animation: CSS/JS animated SVG or Lottie JSON

---

## 25. Empty State Recommendations

While empty states are primarily relevant inside the app, the landing page should communicate what happens in key zero-state scenarios for new users.

### Dashboard Preview Empty States

In the Dashboard Preview section, if showing empty state UIs:

**Vendor Empty State:**
- Illustration: Package icon with subtle glow
- Copy: "Ready to post your first delivery? It takes less than 2 minutes."
- CTA: "Create Delivery Request"

**Agent Empty State:**
- Illustration: Delivery location pin with radius circle
- Copy: "Your delivery requests will appear here once you're verified."
- CTA: "Complete Verification"

### Visual Empty State Design Rules

- Never show a blank white space — always have an illustration or icon
- Always include an action CTA in empty states
- Use muted (low opacity) versions of brand icons for empty state illustrations
- Keep copy encouraging and action-oriented, not apologetic

---

## 26. Hover & Interaction States

### Comprehensive Interaction State Map

**Navigation Links:**
- Default: White text, 75% opacity
- Hover: White text, 100% opacity + bright green underline slides in from left (200ms)
- Active (scroll spy): Bright green color
- Focus: Green outline ring

**Primary CTA Button:**
- Default: #00C805 background, dark text
- Hover: Scale 1.02, glow shadow `0 0 20px rgba(0,200,5,0.5)`, brightness +5%
- Active/Press: Scale 0.97, no shadow
- Focus: Green outline offset 3px
- Disabled: 40% opacity, no hover effects, `cursor: not-allowed`
- Loading: Spinner replaces text, no hover effect

**Ghost CTA Button:**
- Default: Transparent, green border (0.6 opacity), green text
- Hover: Background `rgba(0,200,5,0.1)`, border full opacity, subtle glow
- Active: Background `rgba(0,200,5,0.2)`

**Feature Cards (glassmorphism):**
- Default: Dark translucent bg, subtle border
- Hover: TranslateY -4px, enhanced box-shadow, border brighter (0.3 → 0.5 opacity), slight bg brightness increase
- Focus: Green outline ring

**Step Cards:**
- Default: Standard glassmorphism
- Hover: Green top border accent appears, translateY -2px
- Active step indicator: Pulsing green ring animation

**Testimonial Cards:**
- Default: Glassmorphism card
- Hover: Slight scale 1.01, enhanced shadow

**FAQ Items:**
- Default: Subtle border-bottom, grey+ icon
- Hover: Background tint `rgba(0,200,5,0.04)`, icon turns green
- Open: Green left border 3px, icon rotates 45°

**Social Links (footer):**
- Default: 50% opacity
- Hover: Full opacity, color turns bright green, scale 1.15

---

## 27. Mobile Responsiveness Guidelines

### Target Mobile Breakpoints

- Primary: 375px (iPhone SE / baseline)
- Standard: 390px (iPhone 14)
- Large: 430px (iPhone 14 Plus)

### Critical Mobile Adaptations

**Navigation:**
- Logo left, hamburger right
- All nav links hidden, revealed via drawer
- CTAs in drawer bottom section
- Nav height: 60px

**Hero Section:**
- Single column, stacked (copy above, illustration below)
- H1: 36–40px (reduced from 56–72px desktop)
- Illustration: 80% width, centered below CTA group
- Floating UI cards: Reduce to 2 (remove 1), scale down
- CTA buttons: Full-width on mobile

**Stats Bar:**
- 2×2 grid (not 4-column)
- Divider lines removed
- Stats vertically stacked within each cell

**How It Works Steps:**
- Vertical stack, full width
- Connecting arrows become vertical lines between cards
- Cards: Full width, left-aligned

**Feature Cards Grid:**
- Single column
- Cards: Full width
- Icon centered above text

**Escrow/COD Flow Diagram:**
- Vertical flow layout (top to bottom)
- Connecting arrows point down
- Each node full width

**Dashboard Preview:**
- Phone mockup only (no browser frame)
- Tab toggles: Full width pills
- Feature labels: Removed or shown as caption below mockup

**Testimonials:**
- Single card visible, horizontal swipe carousel
- Pagination dots below

**FAQ:**
- Single column full width

**Footer:**
- Stacked single column
- Links arranged in 2-column grid within each section
- Social icons: Centered row

### Touch Targets

All interactive elements: Minimum 44×44px tap target (even if visual size is smaller, use padding to expand tap area)

### Thumb-Friendly Zone

Primary CTAs and navigation elements should be accessible in the bottom 60% of the screen (thumb-reachable zone on standard mobile).

---

## 28. Tablet Responsiveness Guidelines

### Target Tablet Breakpoints

- Portrait: 768px (iPad mini/Air portrait)
- Landscape: 1024px (iPad Air landscape, baseline desktop)

### Tablet Layout Adaptations

**Navigation:** Full navigation links visible (no hamburger), but compressed. "Get Started" button may shrink to icon-only or shorter text.

**Hero:** 2-column layout maintained but with reduced proportions. Illustration takes 45% of width.

**Stats Bar:** 4-column maintained, tighter spacing.

**How It Works:** Horizontal scroll with snap points if 6 cards don't fit. Alternatively: 2-row × 3-column grid.

**Feature Grid:** 2-column grid.

**Dashboard Preview:** Browser mockup maintained, smaller scale.

**Testimonials:** 2-column grid.

**FAQ:** 1-column full width (2-column can be cramped at 768px).

**Footer:** 3-column (merge two columns, eliminate one).

### Tablet-Specific Considerations

- Hover effects: Test on tablets (no hover, use focus/active states)
- Touch scroll for horizontal step flows
- Pinch-to-zoom should not be disabled

---

## 29. Desktop Layout Requirements

### Desktop Grid

12-column, 1280px max-width, 24px gutters, 40px side padding.

### Desktop-Specific Features

**Hero:**
- 2-column split: 55% copy, 45% visual
- Full 100vh with vertical centering
- Background glow centered on visual side

**How It Works:**
- 6 cards in horizontal row, connected by animated dashed line
- Cards slightly overlapping connectors (z-index layering)

**Feature Grid:**
- 3-column for secondary features
- 2-column for primary large feature blocks (alternating left/right)

**Dashboard Preview:**
- Full browser frame mock, 80% page width
- Tab toggle floating above or within the frame

**Testimonials:**
- 3-column grid (not carousel — desktop has enough space)
- Optional: Large quote in center, two flanking cards offset

**FAQ:**
- 2-column split, 6 questions per column

### Large Desktop (1536px+)

- Max content width: 1280px remains
- Increase side whitespace
- Slightly increase font sizes for large display headlines

---

## 30. Trust & Security Visual Direction

### Design Imperative

As a platform handling real payments and escrow, DILIVALY must communicate trustworthiness through design alone before the user reads any copy. Every visual choice — dark backgrounds, green accents, locked icons, glassmorphism — should subconsciously communicate: "This platform is serious, secure, and professional."

### Trust Signal Hierarchy

**Level 1 — Immediate (Above the fold):**
- Brand mark (green and dark color = financial/security associations)
- "Verified" and "Secure" language in hero
- Floating UI card: "✅ Delivery Confirmed — PIN Verified"

**Level 2 — Engagement (During scroll):**
- KYC verification steps prominently shown
- Escrow payment flow visualization
- "Verified Agent" badge design
- Lock icons used consistently

**Level 3 — Deep (Lower page):**
- Trust cards section with specific security statements
- Security badge strip (SSL, Encrypted, Escrow, KYC)
- Testimonials with names and roles
- FAQ addresses payment safety questions

### Security Visual Language

**Icons to use consistently for security:**
- ShieldCheck: Platform-level security
- Lock: Escrow/payment lock
- Key: PIN system
- UserCheck: Agent verification
- Banknote + Shield combined: COD protection

**Color Treatment for Security:**
- All security-related elements use bright green (#00C805) — green historically communicates "go" and "safe" in financial contexts
- Never use red near payment elements unless indicating an error

### "Verified" Badge Design

Agent verified badges should appear wherever agents are referenced:
- Circular or pill shape
- Green background (#00C805 at 15% opacity)
- Green border
- Green checkmark icon + "Verified" text
- Size: Small (24px height) inline, Medium (32px) on profile-style cards

---

## 31. Recommended Microinteractions

### Definition

Microinteractions are small, contained interaction moments that provide feedback, guide behavior, and add delight. DILIVALY's microinteractions should feel precise and purposeful — never silly.

### Priority Microinteractions to Implement

**1. CTA Button Loading State**
When user clicks "Get Started": Button text fades out, spinner fades in. Prevents double-click. Success → redirect.

**2. FAQ Accordion Open/Close**
Plus icon rotates to X smoothly (45deg rotation, 250ms). Answer height animates from 0 to auto with opacity fade-in.

**3. Stat Counter Animation**
Numbers count up from 0 on first scroll into view. Easing: fast start, slow finish. One-shot (no repeat on subsequent scrolls).

**4. Tab Switch (Dashboard Preview)**
Active pill background slides horizontally to new selection (not a jump — a smooth translate animation using absolute positioned highlight element).

**5. Testimonial Card Hover**
Subtle scale (1.01) + slight elevation increase. Quote mark color shifts from muted green to bright green.

**6. Step Card Hover**
Green accent line slides in from left edge of card (width 0 → 3px, height 40%). translateY -3px.

**7. Navigation Link Hover**
Underline slides in from left, 200ms ease-out. Width goes from 0 to 100% of text width.

**8. Input Focus (if email signup is present)**
Border transitions from default (muted green) to bright green. Subtle glow radiates outward from input frame.

**9. Success State Animation (PIN Confirmation demo)**
After PIN entry in demo mockup: Digits show red → green transition, checkmark icon draws in, "Delivery Confirmed" text fades up.

**10. Mobile Menu Open/Close**
Hamburger lines morph to X (SVG path animation). Drawer slides in from right with backdrop fade.

---

## 32. Loading States

### Page Loading

**Initial Page Load:**
- No custom loading screen for landing page (static/SSG should load instantly)
- Skeleton screens for any client-side data fetching

**Content Loading (if dynamic):**
- Use shimmer skeleton components that match the shape of final content
- Skeleton color: rgba(255,255,255,0.08) with shimmer animation
- Loading duration: Show skeleton for minimum 300ms even if data loads faster (prevent flash)

### Component Loading States

**Buttons:**
- Text disappears, spinner appears (same size as text, centered)
- Button stays same dimensions (no layout shift)
- Disabled during loading state

**Stats Bar:**
- Show "—" placeholder until counter animation triggers

**Dashboard Preview:**
- Tab content: Crossfade transition between dashboard views (no blank state)

### Skeleton Component Design

```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.06) 0%,
    rgba(0,200,5,0.08) 50%,
    rgba(255,255,255,0.06) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 33. FAQ Structure

### Information Architecture

**Category System:**

Tab 1: All Questions
Tab 2: For Vendors
Tab 3: For Agents
Tab 4: Payments & Security

### Full FAQ Question Bank

**Vendor Questions:**
1. How do I post a delivery request on DILIVALY?
2. How does the escrow payment system work?
3. What is COD (Cash on Delivery) protection and how does it work?
4. What is the delivery PIN and why do I need it?
5. Can I track my delivery in real-time?
6. How do I compare and choose between agent quotes?
7. What happens if an agent fails to complete my delivery?
8. How do I rate a delivery agent?
9. How does the DILIVALY wallet work?
10. Is my payment information secure?

**Agent Questions:**
1. How do I register and get verified as a delivery agent?
2. How do I receive nearby delivery requests?
3. How do I submit a quote for a delivery request?
4. How and when do I get paid?
5. What documents do I need for verification?
6. How does the rating system affect my visibility?
7. What happens if a customer disputes a delivery?
8. How does the COD dedicated account work for agents?

### Accordion Component Behavior

```typescript
// Data structure for FAQItem component
interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: 'vendor' | 'agent' | 'payments' | 'general';
}
```

- Default: All closed
- Only one open at a time within the same column (optional UX decision — can allow multiple)
- Smooth height animation (not display:none toggle)
- ARIA compliant (aria-expanded, aria-controls, role="button" on trigger)

---

## 34. Testimonial Layout

### Data Structure

```typescript
interface Testimonial {
  id: string;
  quote: string;         // 2–4 sentences max
  author: string;
  role: string;          // e.g., "Vendor — Fashion E-commerce"
  avatar?: string;       // Optional profile image URL
  rating: number;        // 1–5
  userType: 'vendor' | 'agent';
}
```

### Desktop Layout (3-column grid)

- Row 1: 3 testimonials visible
- Optional: Masonry layout if quotes vary dramatically in length
- "Load More" button to reveal additional testimonials (lazy render, no network request if all pre-loaded)

### Mobile Layout (Single Carousel)

- One testimonial per view
- Horizontal swipe gesture support
- Dot pagination indicator below
- Auto-advance every 5 seconds (pause on hover, pause on touch)

### Card Design

```
┌──────────────────────────────────┐
│ "                                │
│  [2–4 line quote text here]      │
│                              "   │
│ ──────────────────────────────── │
│ [Avatar] Name          ⭐⭐⭐⭐⭐ │
│          Vendor — Lagos          │
└──────────────────────────────────┘
```

- Large decorative quote mark in bright green (top left)
- Closing quote mark muted (bottom right)
- Star rating row: bright green filled stars, muted empty stars
- Role badge below name: pill shape, green border, 12px text

### Content Guidelines for Testimonials

- Quotes should feel specific and authentic (mention features like escrow, quotes, PIN)
- Include both vendor and agent perspectives
- Show real use cases: "I sent 12 packages last week through DILIVALY…"
- Include location context: "Lagos-based vendor"

---

## 35. Dashboard Preview Requirements

### Purpose

The dashboard preview builds credibility by showing the actual product. It reduces signup anxiety by setting accurate expectations.

### Layout

**Container:** Browser chrome mockup (thin dark frame, simple window controls — 3 dots, URL bar showing "app.dilivaly.com")

**Tab Toggle:** Pill toggle at top of browser frame — "Vendor View" | "Agent View"

**Content Switching:** Crossfade transition (300ms opacity) between dashboard views on tab switch.

### Vendor Dashboard Preview Content

Must Show:
- Dashboard header: "Welcome back, [Vendor Name]" + wallet balance chip
- Delivery request creation button (prominent, green)
- Active requests list (2–3 items): Each showing destination, status chip, quoted price
- Quote comparison card: One request expanded showing 3 agent quotes with prices, ratings, ETA
- Order status tracker: Simple step progress bar (Pending → Quoted → Active → Delivered)

### Agent Dashboard Preview Content

Must Show:
- Earnings summary header: "This Week: ₦12,400 | Total: ₦84,200"
- Nearby requests feed (2–3 items): Each showing pickup location, item type, estimated value
- Active order card: Current delivery with item, pickup point, destination, action button
- Quote submission mini-form on one request
- Ratings summary: "4.8 ⭐ (127 deliveries)"

### Design Notes

- Dashboard UI should match the actual DILIVALY app design language
- All data should be realistic-looking placeholder data
- Use real ₦ (naira) amounts for Nigerian market context
- Floating feature labels (white tooltip-style) pointing at key elements with arrows: "Compare quotes side-by-side", "Funds in escrow", "One-tap PIN entry"

### Technical Implementation

The dashboard preview is a **static visual mockup** — not a live demo. Implement as:
- A styled HTML/CSS/React component that looks like the dashboard
- Tab switching toggles between two pre-rendered views
- No actual data fetching required

---

## 36. Escrow & COD Section Requirements

### Escrow System Visual

**Goal:** Explain a potentially complex financial concept in under 10 seconds of viewing.

**Required Visual Elements:**

Flow diagram with 6 nodes:

```
[Vendor Pays] ──→ [Funds Enter Escrow] ──→ [Agent Picks Up] ──→ [Item Delivered] ──→ [PIN Confirmed] ──→ [Agent Paid]
```

Each node:
- Circular icon container (glassmorphism)
- Icon relevant to step
- Short label (max 3 words)
- Status color: Grey (inactive) → Green (active/complete)

Animation:
- Progressive reveal — nodes light up in sequence on section entrance
- Connecting line draws from left to right (SVG stroke-dashoffset animation)
- Final node: Bright green pulsing "Payment Released" confirmation

Key callout boxes (floating, small glassmorphism cards):
- "🔒 Your funds are locked until confirmation"
- "✅ Only released when PIN is verified"
- "🛡 Zero risk to vendor"

---

### COD System Visual

**Goal:** Show how agents handle cash payments without the vendor losing control.

**Required Visual Elements:**

Flow diagram:

```
[Vendor Creates COD Order] ──→ [Agent Gets Dedicated Account] ──→ [Customer Pays Account] ──→ [Funds Held] ──→ [Delivery Confirmed] ──→ [Vendor Receives Funds]
```

Key callout: "Each agent has a unique dedicated account number per COD transaction"

Visual of dedicated account card:
- Bank-card style mini mockup
- Shows: "DILIVALY AGENT COD — Acct: 0123456789"
- Bank name: "[Partner Bank]"

**Security Statement:**
"Funds are ring-fenced. Neither the agent nor DILIVALY can access them until the delivery is confirmed."

---

### Section Layout

- Full-width dark section
- Tabs at top: "Escrow System" | "COD Protection"
- Each tab shows its respective flow diagram
- Shared security statement below both flows

---

## 37. Delivery PIN Verification UI Direction

### Concept Explanation

The delivery PIN is DILIVALY's primary mechanism for confirming physical delivery. The UI must make this concept immediately intuitive.

### Visual Components Required

**1. PIN Flow Diagram (3 steps)**

```
Step 1                    Step 2                    Step 3
[Order Created]          [Vendor → Customer]        [Customer → Agent]
   └── PIN               "Share this PIN:            "Enter 4-digit PIN"
       Generated          [  4  2  7  9  ]"          [_ _ _ _] ✓
```

**2. Animated PIN Display Mock**

A phone UI card showing:
- Screen: "Your Delivery PIN"
- 4-digit display in monospace font (JetBrains Mono)
- Green background cards for each digit
- Share button below ("Share with Customer →")
- Animation: Digits reveal one-by-one (card flip or fade-in effect)

**3. PIN Entry Mock (Agent Side)**

- 4–6 input boxes (PIN-entry style)
- Each digit box: Dark bg, green border on focus
- On completion: Green checkmark animation
- "Delivery Confirmed!" text animates in below
- Small "Escrow Released" status chip appears

### Design Specifications for PIN Display

```css
.pin-digit {
  width: 52px;
  height: 64px;
  background: rgba(0, 200, 5, 0.1);
  border: 2px solid rgba(0, 200, 5, 0.4);
  border-radius: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 600;
  color: #00C805;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Security Messaging Around PIN Section

Include a small disclaimer/explanation:
"Your PIN is never stored or displayed to the agent in advance. The customer must physically provide it at the delivery point."

---

## 38. Developer Notes

### Critical Implementation Notes

**1. Dark Background on `<html>` and `<body>`**
Set the dark background immediately on `<html>` to prevent white flash on page load:
```css
html, body {
  background-color: #07120A;
  color: white;
}
```

**2. Font Loading Strategy**
Load Clash Display and Satoshi as self-hosted WOFF2 files. Use `font-display: swap`. Preload only the bold weight of the display font (most visible above fold).

**3. CLS Prevention**
- Reserve space for images before they load (use `aspect-ratio` CSS property or explicit width/height attributes)
- Reserve space for font loading (use size-adjust or explicitly set line-heights)
- Never insert content above existing content after page load

**4. Glassmorphism Browser Support**
`backdrop-filter: blur()` is not supported in all browsers. Add a fallback:
```css
.glass-card {
  background: rgba(1, 77, 11, 0.8); /* Fallback: opaque dark green */
  backdrop-filter: blur(12px); /* Modern browsers */
}
@supports not (backdrop-filter: blur(12px)) {
  .glass-card {
    background: rgba(1, 77, 11, 0.95);
  }
}
```

**5. Animation Performance**
Only animate `transform` and `opacity` properties. Never animate `height`, `width`, `top`, `left`, or `padding` directly — these trigger layout recalculation. For accordion height animation, use `max-height` or the Web Animations API's `auto` keyword.

**6. IntersectionObserver Cleanup**
Always disconnect IntersectionObserver instances after they have triggered (for one-shot animations):
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // Stop observing after trigger
    }
  });
}, { threshold: 0.15 });
```

**7. Scroll Jank Prevention**
Add `will-change: transform` to elements that animate on scroll. Remove after animation completes to free GPU memory.

**8. SVG Optimization**
All SVGs should be SVGO-optimized before including in the project. Use `viewBox` attribute, remove unnecessary metadata, and ensure all paths are simplified.

**9. Anchor Link Offset**
Sticky nav is 72px. Offset all anchor scroll targets:
```css
section[id] {
  scroll-margin-top: 80px;
}
```

**10. Accessible Color Contrast Verification**
Before shipping, run all text/background combinations through a WCAG contrast checker. Critical pairs to verify:
- rgba(255,255,255,0.65) on #07120A
- #00C805 on #07120A
- rgba(255,255,255,0.40) on #07120A (may fail — restrict to non-essential text only)

**11. Nigerian Market Considerations**
- Use ₦ (Naira) symbol for all monetary examples
- Avoid USD or other currency assumptions
- Consider lower-bandwidth environments: Optimize aggressively, target good performance on 3G
- Test on popular Nigerian Android devices (Samsung Galaxy A-series)

**12. No Map Tracking — Do Not Misrepresent**
The landing page must NOT show or imply real-time map tracking. The product has status-based tracking only. Do not include map UI elements in the dashboard preview. Replace with a simple step/status progress bar.

---

## 39. Future Scalability Considerations

### Design System Scalability

**Token-Based Architecture:**
Implement all design decisions as CSS custom properties from Day 1. When branding evolves, only the token values need updating — not individual components.

```css
/* When expanding to a light theme in future */
:root[data-theme="light"] {
  --color-bg-primary: #F0F9F1;
  --color-text-primary: #07120A;
  /* Override only tokens that change */
}
```

**Component Versioning:**
Build components with props-based variants rather than separate components. This allows new variants to be added without breaking existing usage:

```typescript
// Scalable: add 'tertiary' variant later without changing API
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tertiary';
```

### Feature Roadmap Design Readiness

**Real-Time Map Tracking (Future):**
The current status tracker component should be designed to accept a `trackingMode` prop that defaults to `'status'` but could be upgraded to `'map'` when the feature ships. Reserve layout space in the dashboard preview for a map panel.

**Mobile App Launch:**
- Landing page will need a "Download App" section when mobile app launches
- Reserve the final CTA section structure to accommodate dual CTAs: "Use Web App" + "Download App"
- Consider building a dedicated app download page from the start

**Additional User Types:**
Current platform is strictly vendor + agent. If a "dispatcher" or "enterprise" user type is introduced:
- The navigation, hero dual-CTA structure, and How It Works section must accommodate a third variant
- Design the `UserVariant` type as extensible from the start

**Internationalization (i18n):**
- Use i18n-ready component architecture (react-i18next or next-intl)
- All user-facing strings should be in a centralized translation file from Day 1
- RTL layout support: Use logical CSS properties (`margin-inline-start` instead of `margin-left`)

**Blog / Content Marketing:**
- The footer already includes a "Blog/News" link — ensure the landing page nav and footer component can accommodate this when launched
- Typography system (Section 10) should cover blog content styles (pull quotes, code blocks, captions)

### Technical Scalability

**Monorepo Consideration:**
When the main web app is built, consider a monorepo setup (Turborepo) so the landing page and the web app can share the component library, design tokens, and utility functions.

**Storybook:**
Maintain a Storybook instance from Day 1. Every reusable component should have stories covering all variants and states. This becomes the design system documentation for the growing team.

**Analytics Architecture:**
Build a thin analytics wrapper from the start:
```typescript
// analytics.ts
export const track = (event: string, properties?: Record<string, unknown>) => {
  // Swap between providers (GA4, Mixpanel, Amplitude) by only changing this file
  window.analytics?.track(event, properties);
};
```

**A/B Testing Readiness:**
Design components to support experimentation flags:
```typescript
// Feature flags can be injected at the layout level
interface LandingPageProps {
  experiments?: {
    heroHeadlineVariant?: 'A' | 'B';
    ctaTextVariant?: 'action' | 'benefit';
  }
}
```

---

## Appendix A: CSS Custom Properties (Design Token Reference)

```css
:root {
  /* Background Colors */
  --color-bg-primary: #07120A;
  --color-bg-surface: #0D1F11;
  --color-bg-elevated: #122618;

  /* Brand Colors */
  --color-brand-deep: #014D0B;
  --color-brand-bright: #00C805;
  --color-brand-glow: rgba(0, 200, 5, 0.2);

  /* Text Colors */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.65);
  --color-text-muted: rgba(255, 255, 255, 0.40);

  /* Border Colors */
  --color-border-default: rgba(0, 200, 5, 0.12);
  --color-border-active: rgba(0, 200, 5, 0.4);

  /* Semantic Colors */
  --color-success: #00C805;
  --color-warning: #F5A623;
  --color-error: #E53935;
  --color-info: #29B6F6;

  /* Spacing */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 80px;
  --space-8: 128px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Typography */
  --font-display: 'Clash Display', 'Helvetica Neue', sans-serif;
  --font-body: 'Satoshi', 'Helvetica', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-elevated: 0 12px 40px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 20px rgba(0, 200, 5, 0.3);

  /* Transitions */
  --transition-fast: 150ms var(--ease-standard);
  --transition-standard: 250ms var(--ease-standard);
  --transition-slow: 400ms var(--ease-decelerate);

  /* Easing */
  --ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Appendix B: Glassmorphism Card Mixin Reference

```css
/* Base glassmorphism card */
.glass-card {
  background: rgba(1, 77, 11, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 200, 5, 0.15);
  border-radius: var(--radius-lg);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Hover enhancement */
.glass-card:hover {
  border-color: rgba(0, 200, 5, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(0, 200, 5, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  transition: all var(--transition-standard);
}

/* Fallback for unsupported browsers */
@supports not (backdrop-filter: blur(12px)) {
  .glass-card {
    background: rgba(1, 77, 11, 0.9);
  }
}
```

---

*Document version 1.0 — DILIVALY Frontend Specification*
*Prepared for: Frontend Development Team, UI/UX Designers, Product Managers, Stakeholders*
*Classification: Internal — Frontend Handoff*
