# phases.md: BrightPath build plan

> Read PRD.md, design.md and CLAUDE.md first.
> **RULE:** Before finishing any phase, show me the phase checklist and wait for me to tick it. Do not start the next phase until I say "go".

## STATUS (update after every phase, then push to GitHub)
- **Current phase:** Phase 0
- **Last tool used:** (none yet)
- **Last push to GitHub:** (none yet)
- **Live link:** (none yet)
- **Notes for the next tool:** (write what is done, what is half-done, any bugs)

## Tool-switch prompt (paste into a new tool when credits run out)
> Read PRD.md, phases.md, design.md and CLAUDE.md. Check what is done in STATUS, update it, and continue with the next unfinished phase. Plan first and wait for my "go".

## Suggested tools
- v0: Home, Classes, Teachers and other screens that must look good
- Bolt / Codex / OpenCode: assemble pages, fix bugs, embed chatbot, polish
- GitHub holds the code. Vercel publishes it. One tool at a time on the project.

---

## Phase 0: Setup (today)
- [ ] Create GitHub repo `brightpath-tutorials`
- [ ] Add PRD.md, phases.md, design.md, CLAUDE.md to the repo
- [ ] Gather client facts for every **[CONFIRM]** in PRD.md (or agree placeholders)
**Checklist:** files are on GitHub; I know which facts are still missing.

## Phase 1: Skeleton and first live link
- [ ] Create the project (Next.js + Tailwind, per CLAUDE.md)
- [ ] Menu, empty section for each page in PRD section 6, footer
- [ ] Style tokens from design.md applied
- [ ] Push to GitHub, deploy on Vercel
**Checklist:** live link opens on my phone; menu works; nothing broken.

## Phase 2: Real content and Register button
- [ ] Hero line and Home copy
- [ ] Classes (WAEC, JAMB, Post-UTME)
- [ ] How it works (enquiry, onboarding, person decides)
- [ ] Timetable, Teachers, Fees, Past results with real content or clear placeholders
- [ ] Location, footer
- [ ] Register button opens WhatsApp with pre-typed message
**Checklist:** no lorem ipsum; no invented facts; Register works on a phone; NEVER RULES respected.

## Phase 3: AI images
- [ ] Write 4 prompts in one consistent style (save in `image-prompts.md`)
- [ ] Generate hero + 3 class images; optimise size
- [ ] Add to site with alt text
**Checklist:** same style across all 4; Nigerian setting; page still loads fast on phone.

## Phase 4: Chatbot (Chatbase)
- [ ] Write FAQ from the 8 questions (`chatbot-faq.md`) using only client-given facts
- [ ] Create Chatbase agent; add FAQ as source and instructions with the NEVER RULES
- [ ] Embed chat bubble on the site
- [ ] Plan 5 test questions BEFORE testing (free plan has few messages). One must be a refusal (e.g. "Will my child get 300 in JAMB?"). Screenshot all answers.
**Checklist:** bot answers 8 questions correctly; refuses score promises; hands over complaints/special needs.

## Phase 5: Test and fix
- [ ] Test on 2 phones plus laptop
- [ ] Classmates test and report problems
- [ ] Fix bugs one at a time; push after each fix
- [ ] Check text contrast, tap sizes, speed
**Checklist:** every item in PRD "Definition of done" is ticked.

## Phase 6: Publish and hand in
- [ ] Final deploy; confirm live link on a phone
- [ ] Collect hand-in items: approved client brief, live link, 4 images and prompts, chatbot FAQ and instructions, 5 chatbot screenshots
**Checklist:** everything ready before Friday.

## Phase 7: Extras (only if time)
Pick in this order, one at a time, push after each:
- [ ] Simple enquiry form that emails Joy
- [ ] n8n automation (use an n8n.io template)
- [ ] Client agreement and handover report
- [ ] Exam countdown strip
- [ ] SEO titles and descriptions, sticky WhatsApp button
