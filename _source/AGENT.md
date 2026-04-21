# AGENT.md

## Project
Build a **professional, simple, clean, and powerful static portfolio website** for **DigitalStoneAI Studio / Jay** that will be hosted on **GitHub Pages**.

This site is a **business landing page and portfolio foundation**, not a bloated agency template and not a generic personal website. The design must feel modern, crisp, elegant, and intentional.

The primary purpose of the site is to present Jay as a:

- **AI Systems Architect**
- **Automation Engineer**
- **Systems-oriented builder**
- **Professional with real-world engineering, unmanned systems, operations, and AI workflow experience**

The site must highlight Jay’s ability to design and build:

- AI-driven workflows
- agentic systems
- automation solutions
- structured prototypes
- technical and operational systems
- practical business-facing AI solutions

The site must be built to feel credible to:

- hiring managers
- recruiters
- potential clients
- collaborators

---

## Core Outcome
The final site should make a visitor quickly think:

- This person builds real systems.
- This person understands AI, automation, and operations.
- This person has both technical and business awareness.
- This looks professional, modern, and trustworthy.
- I should keep reading or reach out.

---

## Hosting / Technical Constraints
This site will be deployed as a **static website on GitHub Pages**.

That means:

- No backend required for v1
- No CMS
- No server-side rendering requirement
- No heavy dependencies unless necessary
- Keep deployment simple and reliable
- Optimize for static hosting and fast load times
- All pages must work as static HTML routes or equivalent GitHub Pages-friendly structure

Preferred implementation approach:

- Clean static site architecture
- Easy to maintain
- Easy to extend later
- Mobile responsive
- GitHub Pages friendly

If using a framework, ensure it outputs a static build compatible with GitHub Pages. If a framework is not necessary, prefer a lightweight static implementation.

---

## Design Direction
The website must feel:

- **Professional**
- **Simple**
- **Clean**
- **Powerful**
- **Modern**
- **Intentional**
- **Minimal, but not empty**
- **Elegant, but not fragile**
- **Technical, but not cluttered**

### Avoid
Do **not** make it feel like:

- a generic template
- a startup SaaS landing page clone
- a crypto dashboard
- an over-animated “creative studio” site
- a cluttered agency homepage
- a blog-heavy developer site
- a neon cyberpunk gimmick
- an overly corporate consulting site

### Preferred Visual Personality
Aim for a look that feels like:

- modern technical portfolio
- dark, sleek, high-contrast interface
- subtle gradients or restrained accent color
- strong typography
- clean cards
- generous spacing
- crisp section divisions
- subtle motion only where useful

### Visual Style Rules
- Use a **dark or dark-neutral base**
- Use 1 restrained accent color
- Strong headline typography
- Clear visual hierarchy
- Consistent spacing system
- Rounded corners allowed, but do not overdo them
- Shadows should be subtle
- Animations should be minimal and tasteful
- Hover states should feel polished
- Avoid visual noise

---

## Branding
The user will provide:

- company logo
- case study info
- other images
- additional data

For now, create clean placeholders for these assets.

Brand identity should support the name **DigitalStoneAI Studio** while keeping Jay himself professionally represented.


ANIMATION GUIDELINES:

- Use subtle, professional animations only
- Prefer CSS transitions and lightweight JavaScript
- Implement scroll-based reveal animations (fade-up)
- Add hover effects to buttons and cards
- Keep animations fast (200ms–400ms range)
- Avoid heavy animation libraries
- Avoid excessive motion or distracting effects
- Maintain performance and fast load times
---

## Site Architecture
Build the following primary pages:

1. **Home**
2. **Projects**
3. **Individual Case Study Pages**
4. **Links / Contact**

The **Gallery** is planned for later and does **not** need to be fully implemented in v1 unless included as a placeholder or future-ready nav item.

If included in v1, it should be lightweight and clearly marked as upcoming or future content.

---

## Navigation
Primary navigation should be simple:

- Home
- Projects
- Links

Optional:
- Gallery (only if handled as future-ready or placeholder)

Navigation must be:

- clean
- fixed or neatly persistent
- mobile-friendly
- simple to understand
- consistent across pages

Include a professional footer with:

- brand or personal identity
- short descriptor
- nav links
- LinkedIn / GitHub / email links

---

## Homepage Requirements
The homepage is the most important page. It must carry the positioning of the whole site.

### Homepage Sections
Build the homepage with the following sections, in this order:

#### 1. Hero
Must include:

- Name or brand
- Primary professional headline
- Supporting subtext
- 2 call-to-action buttons

Recommended content direction:

**Headline**
AI Systems Architect & Automation Engineer

**Subtext**
I design and build AI-driven workflows, agentic systems, and automation solutions that improve real-world operations—from business processes to unmanned and technical systems.

**Primary CTA**
View Projects

**Secondary CTA**
Connect

Design notes:
- Keep hero crisp and visually strong
- Avoid giant paragraphs
- Include room for logo or brand mark if useful
- Optional subtle abstract visual or gradient accent

#### 2. Core Capabilities
Section title:
**Core Capabilities**

Items:
- Agentic AI Systems
- Workflow Automation & Orchestration
- AI System Architecture
- Unmanned Systems & Technical Integration
- API & Data Pipeline Design
- AI-Driven Product Prototyping

Design as concise cards, badges, or a clean capability band.

#### 3. Featured Projects
Section title:
**Selected Work**

Show 3 featured project cards with clear project proof.

Project 1:
- AI Workflow Automation System
- Intelligent intake, classification, and response automation for service-based operations

Project 2:
- AI Systems Studio
- Centralized AI generation and workflow platform combining APIs and local models

Project 3:
- AI Media & Content Pipeline
- Structured system for scalable visual content generation and brand consistency

Each card should include:
- title
- one-line summary
- tags
- button to view case study

These may initially point to placeholder case study pages.

#### 4. Skills / Systems Section
Section title:
**Tools, Systems, and Applied Capabilities**  
or  
**Systems Expertise**

This section must present Jay’s skills as **capabilities**, not as a random tool dump.

Use grouped content such as:

##### AI Systems & Architecture
- Designing agentic workflows and multi-step AI systems
- LLM integration using tools such as Claude, Codex, Gemini, OpenAI ecosystems
- Retrieval-based systems and structured information workflows
- Prompt engineering and system logic design
- Vibe engineering translated professionally as structured system architecture and guided AI-assisted build workflows

##### Automation & Engineering Systems
- Workflow automation and orchestration
- API integration and data pipelines
- Process optimization and system design
- OWASP Top 10 aware implementation mindset for safer systems design

##### Development & Build Execution
- AI-assisted development workflows
- Static site architecture
- GitHub deployment
- Rapid prototyping
- Functional UI for AI tools and systems

##### Unmanned Systems & Technical Background
- Unmanned systems experience
- Autonomous systems support and integration
- Engineering technician background
- Real-world troubleshooting and operational thinking

#### 5. System Design Approach
Section title:
**System Design Approach**

4 steps:
1. Identify
2. Design
3. Build
4. Refine

Suggested descriptions:

- **Identify** — Analyze workflows, inefficiencies, and opportunities
- **Design** — Architect AI-driven solutions with structured logic
- **Build** — Develop practical workflows, tools, and prototypes
- **Refine** — Improve clarity, usability, reliability, and impact

This section should visually reinforce strategic thinking.

#### 6. Background
Section title:
**Background**

Use content direction like:

Jay combines hands-on engineering experience with modern AI systems thinking. With over 15 years of experience in customer service, operations, business workflows, and technical environments, he brings a real-world understanding of how systems operate and where they fail. His work focuses on building practical AI-driven solutions that improve workflows, automate processes, and support better execution.

Keep this concise, professional, and trustworthy.

#### 7. Value Delivery Section
Section title:
**What I Deliver**

Possible items:
- Streamlined workflows through intelligent automation
- Scalable AI systems for business and technical operations
- Rapid prototyping of AI-powered tools and solutions
- Practical systems designed for real-world use

This section is important for recruiter and client clarity.

#### 8. Final CTA
A clean closing section inviting action.

Suggested line:
Open to opportunities, collaborations, and building practical AI systems.

Buttons:
- View Projects
- Connect

---

## Projects Page Requirements
The projects page is the proof hub.

### Purpose
Show structured case studies and project summaries that support Jay’s credibility.

### Page Sections
#### 1. Projects Hero / Intro
Title:
**Projects & Case Studies**

Intro text should explain that these projects demonstrate Jay’s approach to AI systems, automation workflows, and practical technical builds.

#### 2. Project Grid
Include at least 3 project cards with placeholders.

Each card should include:
- project title
- short description
- category
- tools or capabilities
- value statement
- link to case study

Each card should feel polished and intentional.

---

## Case Study Page Template Requirements
Each case study page must follow a consistent structure.

### Required Sections
1. Project Hero
2. The Problem
3. The Goal
4. The Solution
5. How It Works
6. Key Features
7. Outcome / Impact
8. Visual Placeholder Area
9. Next Steps / Future Iteration
10. CTA Back to Projects / Links

### Placeholder Guidance
The user will supply the real case study content later.  
For now, generate strong placeholders that match the theme of each project.

Do not invent unrealistic claims. Keep placeholders professional and believable.

---

## Links / Contact Page Requirements
This page must be simple and professional.

### Include:
- LinkedIn
- GitHub
- Email
- Optional resume placeholder

### Design
Use clean cards or structured rows with:
- title
- short descriptor
- action button or link

Keep it frictionless.

---

## Copy Style
All website copy must be:

- concise
- professional
- confident
- modern
- practical
- free of fluff
- free of exaggerated marketing hype

Avoid phrases like:
- visionary
- disrupt
- game-changing
- guru
- ninja
- passionate about innovation

Prefer language that signals:
- clarity
- execution
- systems thinking
- practical value

---

## UX Rules
- Every page should have a clear next action
- Buttons should be purposeful
- The homepage should be skimmable
- Sections should not feel crowded
- Maintain strong mobile responsiveness
- Layout should not break on smaller screens
- Project pages should be easy to scan
- Navigation should always feel obvious

---

## Accessibility / Quality Rules
- Semantic structure
- Good contrast
- Alt text support
- Keyboard-friendly navigation where possible
- Responsive behavior across common screen sizes
- Fast load times
- Clean code structure
- Reusable components if appropriate

---

## Content Priorities
Priority order for this build:

1. Professional positioning
2. Clean visual experience
3. Recruiter/client clarity
4. Proof structure through projects
5. Easy maintainability

---

## Build Philosophy
This site should feel like it was made by someone who:

- understands systems
- values clarity
- can build practical AI solutions
- has professional taste
- knows how to present work without overexplaining it

The build should prioritize polish over complexity.

---

## Final Instruction to the Builder
When making design or implementation decisions, always choose the option that is:

- cleaner
- clearer
- more professional
- more maintainable
- more credible to hiring managers and clients

Do not overbuild.  
Do not overdecorate.  
Do not add unnecessary sections.  
Do not turn the site into a toy.

This is a **professional AI systems portfolio foundation**.
