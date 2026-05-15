DILIVALY — Frontend Product Specification Document
Version 1.0 | Prepared by Senior Product Design Team
Classification: Internal — Frontend Handoff Document

---
1. Project Overview

Product Name: DILIVALY
Product Type: Logistics & Delivery Marketplace Platform
Current State: Web Application Only (no mobile app)
Document Purpose: Complete frontend specification for the DILIVALY public landing page

Platform Summary
DILIVALY is a two-sided logistics marketplace that connects Vendors (businesses and individuals who need items delivered) with Agents (verified delivery professionals who fulfill those orders). The platform operates on a competitive quote model where vendors post delivery requests, agents bid on them, and payment is protected through an escrow system.

Core Value Propositions
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

What the Landing Page Must Accomplish
The landing page serves as the primary acquisition and conversion surface. It must:
1. Clearly explain the two-sided marketplace model
2. Establish trust through design, social proof, and security messaging
3. Drive sign-up from both Vendors and Agents
4. Communicate the escrow and COD features as competitive differentiators
5. Convert curious visitors into registered users

---
2. Business Goals
#Primary Business Goals
Goal 1 — Dual-Sided User Acquisition
The landing page must simultaneously convert two distinct user types. Messaging, CTAs, and UI sections must speak to both Vendors and Agents without creating confusion. Segmented sections should clearly delineate value propositions for each audience.
Goal 2 — Trust Establishment
As a payments-adjacent platform handling escrow funds, DILIVALY must immediately communicate security, reliability, and legitimacy. Every design decision — color, typography, component styling, and copy — must reinforce trust.
Goal 3 — Education on Unique Features
Escrow payments, PIN verification, and COD with dedicated account numbers are differentiating features. The landing page must educate visitors on these concepts in a simple, visual, and non-technical way.

Goal 4 — Conversion Optimization
All sections must serve the conversion funnel. CTA buttons must appear at logical decision points. The page architecture should follow the AIDA model: Attention → Interest → Desire → Action.

#Secondary Business Goals
- Build brand awareness and recognition in the logistics vertical
- Attract agent signups to ensure sufficient supply on the platform
- Communicate the verification/trust system to establish legitimacy
- Lay groundwork for future product expansions (mobile app, real-time tracking)

#KPIs the Landing Page Should Influence
- Vendor signup conversion rate
- Agent signup conversion rate
- Bounce rate reduction
- Time-on-page engagement
- CTA click-through rate

---
3. User Types
User Type 1: Vendor
Who they are:
Businesses, SMEs, e-commerce sellers, or individuals who regularly need items delivered. They may be first-time users evaluating the platform or repeat users who need a reliable delivery solution.

Pain points they have:
- Unpredictable delivery costs
- No visibility into delivery status
- Unreliable agents with no accountability
- Risk of payment fraud, especially for COD orders
- Difficulty managing multiple delivery requests

What they need from the landing page:
- Understand how to post a delivery request
- Feel confident their payments are safe
- See proof that agents are verified and reliable
- Understand how the PIN and escrow system protects them
- Be able to sign up quickly and start posting requests

User Intent Signals:
"I need deliveries done reliably and affordably."

---
User Type 2: Agent
Who they are:
Individual dispatch riders, courier professionals, or small logistics businesses looking for a steady source of delivery jobs. May range from tech-savvy urban riders to less tech-literate operators in peri-urban areas.
Pain points they have:
- Inconsistent job supply
- Late or non-payment after delivery
- No platform to build reputation and credibility
- Difficulty competing against established courier firms

What they need from the landing page:
- Understand how to receive and submit quotes on delivery jobs
- Feel confident they will be paid after completing deliveries
- Understand the verification process and what it entails
- See earnings potential and how the rating system helps them grow

User Intent Signals:
"I want consistent delivery jobs and guaranteed payment."

---
4. User Journeys
Vendor User Journey

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
Agent User Journey

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

---
5. Landing Page Structure
The landing page is structured as a long-form, single-page marketing experience. Sections are ordered strategically to guide the visitor from awareness to conversion.

Page Section Order

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
6. Section-by-Section Breakdown
Section 1: Navigation Bar
Purpose: Persistent top-level navigation that orients users and provides quick access to sign-up and login.
Layout:
- Fixed/sticky navigation bar
- Full-width with max-content-width container (1280px)
- Left: DILIVALY logo (wordmark + icon)
- Center: Navigation links (can use scroll anchors)
- Right: "Log In" ghost button + "Get Started" solid CTA button

Navigation Links
- How It Works
- For Vendors
- For Agents
- Security
- FAQ

Design Specifications:
- Background: Dark (#07120A) with subtle glassmorphism frosted blur effect on scroll
- Height: 72px desktop, 60px mobile
- Transition: Background becomes more opaque as user scrolls past the hero fold
- Logo: SVG format, white wordmark with green (#00C805) accent element
- "Get Started" button: Filled bright green (#00C805), dark text, rounded-full, 10px horizontal padding

Behavior:
- Transparent at page top, semi-opaque dark with backdrop blur on scroll
- Mobile: Collapses to hamburger menu (animated slide-in drawer)
- Active link state: Underline in bright green or bright green text color

---
Section 2: Hero Section
Purpose: The single most important section on the page. Must communicate DILIVALY's core value within 3 seconds. Drives primary CTA engagement.
Layout:
- Full viewport height (100vh) on desktop, 90vh minimum on mobile
- Two-column layout on desktop: Left column = copy + CTAs, Right column = illustration/product visual
- Single-column stacked layout on mobile (copy above, visual below)
- Background: Dark (#07120A) with animated gradient mesh or radial glow in deep green and bright green

Left Column — Copy:
- Pre-headline badge: Small pill badge reading "🚀 Trusted Delivery Marketplace" (green tint, glassmorphism)
- H1 Headline: Bold, large-scale headline. Example: "Deliver Products. Nationwide. Securely."
- Subheadline: 2–3 lines describing the platform at a high level. Example: "Post a delivery. Get competing quotes from verified agents. Pay through escrow”
- Dual CTA Group:
  - Primary CTA: "Start Delivering" (filled green button)
  - Secondary CTA: "Become an Agent" (ghost/outlined button, green border)
  - Helper text below CTAs: "Free to join. No subscription fees."

Right Column — Visual:
- If using a product mock: Show the Vendor dashboard or the quote comparison screen
- Floating UI cards around the main visual (glassmorphism style):
  - Card 1: "📦 New Quote Received — ₦1,200" (pulsing green dot)
  - Card 2: "✅ Delivery Confirmed — PIN Verified"
  - Card 3: "💰 ₦5,400 Released from Escrow"
- These cards animate in on page load (staggered fade + slide)

Background Treatment:
- Radial green glow emanating from top-right or center-right
- Subtle noise/grain texture overlay for premium feel
- Optional: Animated floating particles or grid lines

---
Section 3: Stats / Social Proof Bar
Purpose: Immediately below the hero fold, this bar communicates scale, trust, and activity. Addresses the "is this real?" question.

Layout:
- Full-width horizontal strip
- 4 stat blocks evenly spaced inside max-content container
- Divider lines between stats on desktop (remove on mobile, stack 2x2)

Stats to Display (use realistic/aspirational figures or placeholders):
- Active Agents — e.g., "2,400+"
- Deliveries Completed — e.g., "18,000+"
- Vendors Onboarded — e.g., "950+"
- Escrow Transactions Secured — e.g., "₦120M+"

Design Specifications:
- Background: Slightly lighter dark surface (#0D1F11 or similar green-dark)
- Stat numbers: Large, bold, bright green (#00C805)
- Stat labels: Small, muted text, uppercase, letter-spacing 0.1em
- Padding: 60px vertical on desktop, 40px on mobile
- Animated counters: Numbers count up when section enters viewport (using IntersectionObserver + requestAnimationFrame)
---
Section 4: How It Works — Vendor
Purpose: Walk vendors through the end-to-end delivery request journey in simple, visual steps.
Layout:
- Centered section header: "How It Works for Vendors"
- Section badge above header (e.g., pill tag: "FOR VENDORS")
- Step list: Horizontal on desktop (scrollable), vertical on mobile
- 6 key steps presented as numbered cards

Steps to Display:
1. Complete KYC Verification
2. Create a Delivery Request
3. Receive Competing Quotes from Nearby Agents
4. Accept Your Preferred Quote
5. Pay Securely into Escrow via Your DILIVALY Wallet
6. Delivery Confirmed via PIN → Escrow Released

Card Design:
- Glassmorphism card: dark green tint, frosted border, subtle glow
- Top: Step number (large, bold, green) + step icon
- Middle: Step title (medium bold)
- Bottom: 1–2 sentence description
- Connecting line or arrow between cards on desktop
- Active/current step state visually distinct (brighter glow, green accent border)

Supplementary:
- Below steps: "And that's it. Your item arrives safely, and payment is only released when confirmed." — italic, muted, centered
- CTA below: "Post Your First Delivery →" (green outlined button)

---
Section 5: How It Works — Agent
Purpose: Walk agents through the process of receiving jobs, submitting quotes, completing deliveries, and earning.
Layout:
- Mirror layout of Vendor section but distinguished by a color tint variation or section background shade change
- Section badge: "FOR AGENTS"
- 6 key steps

Steps to Display:
1. Register and Complete Verification
2. Receive Nearby Delivery Requests
3. Submit Your Best Quote
4. Order Becomes Active When Vendor Accepts
5. Pick Up Item → Complete Delivery
6. Customer Confirms via PIN → You Get Paid

CTA below: "Start Earning as an Agent →" (green outlined button)
---

Section 6: Feature Highlights — Vendor
Purpose: Showcase the breadth of vendor-specific features in a visually rich, scannable format.
Layout:
- 2-column grid on desktop (feature cards), single column on mobile
- Alternate left/right large feature blocks for key features
- Small feature icon grid for secondary features (3-column grid)

Key Feature Blocks (Large):
1. Quote Comparison System — "Compare prices from multiple verified agents before committing. Choose by price, ratings, or trust score."
2. Escrow Payment Protection — "Your money is held securely until delivery is confirmed. No pay-and-pray."
3. COD Protection — "Need cash on delivery? Agents use a dedicated account. Funds held until the customer confirms receipt."
4. Delivery PIN Verification — "A unique PIN ensures your customer physically received the order before a single naira is released."

Secondary Feature Grid (6 features, 3 columns):
- Track Order Status
- Delivery History
- Wallet Top-Up
- Email Notifications
- Agent Performance Ratings
- Instant Quote Alerts

Design Specifications:
- Large feature blocks: Full-bleed glassmorphism cards, 2-column, with icon, headline, body text, and optional screenshot
- Feature grid cards: Small square cards, centered icon (green), short label, minimal border
- Icons: Custom thin-line or fill icons aligned to brand palette

---
Section 7: Feature Highlights — Agent
Purpose: Showcase agent-specific features.
Layout:
- Same grid structure as Vendor features but with agent-specific content
Key Feature Blocks:
1. Smart Delivery Matching — "Receive requests for the states where you operate."
2. Earnings Dashboard — "Track completed deliveries, earnings over time, and pending payments in one view."
3. Verification & Trust System — "Your verified badge makes vendors choose you first. Build your rep."
4. Quote Submission System — "Submit competitive quotes directly to vendor requests in seconds."

Secondary Feature Grid:
- Instant Job Notifications
- Order Status Updates
- Delivery Management Tools
- Rating & Reputation Builder
- Secure Payment Pipeline

---
Section 8: Escrow & COD Protection Section
Purpose: This is a trust-critical section. It must explain the escrow and COD mechanisms in visual, clear, non-technical terms. This section is a key conversion driver.
Layout:
- Full-width dark section with prominent heading
- Two sub-sections stacked or side-by-side tabs:
  - Escrow System
  - COD Protection

Escrow Sub-Section — Visual Explanation:
- Animated/static flow diagram showing:
  `Vendor Pays → Funds Enter Escrow → Agent Delivers → PIN Confirmed → Escrow Released → Agent Receives Payment`
- Three key callouts (pill badges):
  - "🔒 Funds Locked in Escrow"
  - "📍 Delivery in Progress"
  - "✅ Released on Confirmation"
- Descriptive body text explaining the mechanism

COD Sub-Section — Visual Explanation:
- Flow diagram:
  `Vendor Creates COD Order → Agent Receives Dedicated Account → Customer Pays Account → Funds Held → Delivery Confirmed → Vendor Receives Funds`
- Emphasis on: "Each agent has a unique, dedicated virtual account number for COD collections"
- Highlight the protection for vendors in a COD scenario

Design Specifications:
- Section background: Very dark green-black (#07120A)
- Flow diagrams: Custom SVG or CSS-animated step-through
- Connecting arrows: Bright green (#00C805) animated dashed lines
- Step nodes: Circular glassmorphism nodes with icons

---
Section 9: Dashboard Preview Section
Purpose: Show rather than tell. A glimpse of the actual product builds trust, reduces signup anxiety, and communicates professionalism.
Layout:
- Dark section with centered heading: "Everything in One Powerful Dashboard"
- Large browser or device mockup containing a dashboard screenshot
- Tabbed interface: "Vendor View" | "Agent View" — clicking switches the dashboard visual

Vendor Dashboard Preview Should Show:
- Active delivery requests list
- Quote comparison cards (showing 2–3 agent quotes with prices)
- Wallet balance with escrow summary
- Order status tracker (step-based progress bar)

Agent Dashboard Preview Should Show:
- Nearby delivery requests feed
- Quote submission interface
- Earnings overview (total earned, pending, released)
- Delivery history list

Design Specifications:
- Browser frame: Thin rounded dark frame, subtle drop shadow
- Dashboard itself: Use the actual DILIVALY UI design language
- Floating feature labels (tooltip-style) pointing to key UI elements: "Quote Comparison", "Escrow Balance", "Order PIN"
- Tab toggle: Pill toggle with smooth background slide transition

---

Section 11: Trust & Security Section
Purpose: Directly address payment and data security concerns with visual proof elements.
Layout:
- 3-column grid of trust cards + a large trust statement heading
- Security badge strip below cards

Trust Cards (3-4):
1. Verified Agents Only — "All agents undergo identity and document verification before accessing the platform."
2. Escrow-Protected Payments — "Vendor funds are held securely and only released on delivery confirmation."
3. PIN Delivery Verification — "Every delivery requires physical PIN confirmation — no PIN, no payment."
4. Encrypted Transactions — "All payment data is encrypted end-to-end."

Security Badge Strip:
- Row of badge icons: SSL Secured | Encrypted Payments | KYC Verified | Escrow Protected
- Small, minimal, icon + label format
- Subtle divider line above strip

---

Section 12: Testimonials
Purpose: Social proof from real users (or representative user archetypes during early stage) drives conversion.
Layout:
- Carousel or 3-column grid on desktop, single-column scroll on mobile
- Two segments: Vendor testimonials and Agent testimonials (toggle or labeled)
- Each testimonial card contains: quote, user avatar, name, user type badge

Card Design:
- Glassmorphism card, soft green-tinted border
- Large opening quote mark (") in bright green
- Quote body text in white, medium weight
- Bottom: Avatar (circular, placeholder if real photos unavailable) + Name + Role badge (green pill: "Vendor" or "Agent")
- Star rating row (5 stars, green)

---

Section 13: FAQ Section

Purpose: Reduce friction and remove objections by proactively answering common questions.

Layout:
- Two-column accordion list on desktop (6 questions left, 6 right), single column on mobile
- Section header: "Got Questions? We've Got Answers."
- Optional category tabs above: All | Vendors | Agents | Payments | Security

Vendor FAQ Questions:
- How do I post a delivery request?
- How does escrow payment work?
- What is COD protection?
- How does the delivery PIN work?
- Can I track my delivery in real-time?
- What happens if an agent doesn't deliver?
- How do I rate an agent?

Agent FAQ Questions:
- How do I register as a delivery agent?
- How do I receive delivery requests?
- How and when do I get paid?
- What is the verification process?
- What is the rating system?
- How does the quote submission work?

Accordion Design:
- Closed state: Question row with "+" icon, light border
- Open state: Expanded answer, animated height transition, green left border accent
- Hover state: Subtle green background tint on question row
---
Section 14: Final CTA Section
Purpose: The last conversion push before the footer. Captures users who have scrolled the full page but haven't yet committed.
Layout:
- Full-width section, gradient dark green background
- Centered, single column
- Two distinct CTA paths clearly presented

Copy Structure:
- Pre-headline: "Ready to Get Started?"
- Headline: "Join DILIVALY Today"
- Sub-copy: "Whether you're sending a package or delivering one — DILIVALY connects you with the right partner, every time."
- Dual CTA group:
  - Primary: "Post a Delivery as a Vendor" (large, filled green)
  - Secondary: "Join as a Delivery Agent" (large, ghost/outlined)
- Trust reinforcement below CTAs: "Free to join. No hidden fees. Secure escrow payments."

Design Notes:
- Background: Radial green glow on dark, or animated gradient shift
- Optional: Floating abstract delivery-related icons in background (muted, low opacity)

---

7. UI/UX Guidelines

Design Principles

1. Dark Premium First
All UI defaults to the dark (#07120A) background. Light variants are used only for card surfaces and elevation. You can use white or light background at minimal sections.
2. Glassmorphism as the Primary Card Language
Cards, modals, info blocks, and floating elements use glassmorphism: translucent dark-green backgrounds, frosted glass blur, thin light-green or white border at low opacity, subtle inner shadow.
Glassmorphism Card Spec:
  background: rgba(1, 77, 11, 0.15)
  backdrop-filter: blur(12px)
  border: 1px solid rgba(0, 200, 5, 0.15)
  border-radius: 16px
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)
3. Visual Hierarchy Through Green
Use bright green (#00C805) exclusively for:
- CTA buttons
- Icon accents
- Step numbers
- Stat numbers
- Active states
- Highlight elements

Never use bright green for body text or as a background fill on large sections.

4. Motion Adds Meaning, Not Noise
Every animation must serve a functional purpose: communicating state change, guiding attention, or illustrating a process. Avoid decorative animation that distracts.
5. Conversion-Optimized Layouts
Information flows top-to-bottom in a logical progression. Every section should have a visible or implied "next step." Use directional cues (arrows, visual flow) to guide the user forward.

