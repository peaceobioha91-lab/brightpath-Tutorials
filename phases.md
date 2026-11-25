# phases.md: BrightPath build plan (project tracker for every AI tool)

> Read PRD.md, design.md and CLAUDE.md first. This file is the project tracker. Any AI tool must read STATUS, continue from the next unticked box, tick what it finishes, and update STATUS.
> **RULE:** Before finishing any phase, show me the phase checklist and wait for me to tick it. Do not start the next phase until I say "go".

## Tutor's rules (apply to every phase)
1. **Plan first. Never tell a tool "build everything".** One small piece at a time.
2. **Hello world first.** Connect GitHub and hosting (Vercel) before building anything real, so something is always live.
3. **Push to GitHub after every small piece** (hero, then push, then live; next section, push, live). Better to have 10 out of 200 live than 0.
4. **Test your own work before anyone else sees it.** Run two full self-tests before demo day. Then ask teammates to test harshly and look for tiny details.
5. **Required features first. Extras only after the required list is done and live.**
6. **If a tool runs out of credits,** log in to another, connect it to the same GitHub repo, and use the tool-switch prompt below.
7. **Different tools can build different pages** (v0, Codex, OpenCode, Bolt, Lovable). Each pushes to GitHub, then one tool joins everything. Never let two tools edit the same file at once.
8. When stuck, ask questions early. Do not struggle alone.

## STATUS (update after every piece, then push)
- **Current phase:** Phase 1
- **Done:** Phase 0 (planning files on GitHub)
- **Last tool used:** none yet
- **Last push to GitHub:** none yet
- **Live link:** none yet
- **Notes for the next tool:** (what is done, what is half-done, known bugs)

## Tool-switch prompt (paste into a new tool)
> Read PRD.md, design.md, CLAUDE.md and phases.md. Check STATUS to see where we stopped, update it, and continue with the next unticked item. Plan first and wait for my "go".

## Key dates
- Demo day: **Monday** (tutor said there is no internal demo day before it). Wrap up by Sunday so something good is already live.
- Original brief said publish on Friday. Confirm with the tutor whether Friday is still the hand-in.

---

## Phase 0: Setup (DONE)
- [x] GitHub repo `brightpath-Tutorials` with PRD.md, phases.md, design.md, CLAUDE.md, AGENTS.md, client-information.md
- [ ] design.md updated to the purple and sky blue palette and committed on GitHub

## Phase 1: Hello world, live
- [ ] Create the Next.js and Tailwind project (a simple "BrightPath" hello page)
- [ ] Push to GitHub
- [ ] Deploy on Vercel from the repo
**Checklist:** live link opens on my phone; GitHub shows the code.

## Phase 2: Skeleton
- [ ] Style tokens from design.md (colours, fonts)
- [ ] Sticky menu, empty titled section for each section in PRD section 6, footer
- [ ] Push, confirm live
**Checklist:** menu works on phone; looks right at 360px; nothing broken.

## Phase 3: Content, one section at a time (push after each)
- [ ] Home
- [ ] About and How it works
- [ ] Classes with fees (PRD 6.1) and subjects (6.3)
- [ ] Timetable (6.2)
- [ ] Teachers (6.4)
- [ ] Past results note, FAQ, Location, footer
**Checklist:** every fact matches PRD section 6; JAMB exclusions respected; no invented facts; no fee disclaimers.

## Phase 4: Register button and enquiry form
- [ ] Register button opens WhatsApp (number in one config value; placeholder until the client gives it)
- [ ] Enquiry form (fields in PRD 7; destination is a config value)
**Checklist:** both work on a phone; thank-you message shows.

## Phase 5: AI images (extra points for generated images)
- [ ] Write 4 prompts in one consistent style, using the purple and sky blue brand colours; save in `image-prompts.md`
- [ ] Generate hero + 3 class images (for example with Gemini); keep file sizes small
- [ ] Add with alt text; push, confirm live
**Checklist:** same style on all 4; Nigerian setting; page still loads fast.

## Phase 6: Chatbot (Chatbase, about 10 minutes)
- [ ] Write `chatbot-faq.md` from PRD section 8 using only documented facts
- [ ] Create a Chatbase account; add the FAQ as data and the PRD section 8 rules as the system prompt (include the NEVER RULES)
- [ ] Embed the chat bubble on the site; push, confirm live
- [ ] Plan 5 test questions first. One must be a refusal ("Will my child get 300 in JAMB?"). One must be a complaint or special-needs question. Screenshot all answers.
**Checklist:** answers the 8 questions; refuses score promises; hands over complaints and special needs.

## Phase 7: Testing (before anyone else sees it)
- [ ] Self-test 1: every section, every button, on phone and laptop
- [ ] Fix problems one at a time; push after each
- [ ] Self-test 2: repeat from the top
- [ ] Teammates test and are told to be harsh; collect tiny details; fix
**Checklist:** every item in PRD "Definition of done" is ticked.

## Phase 8: Hand-in and demo prep
- [ ] Final live link confirmed on a phone
- [ ] Client agreement and handover report (Module 10) done with a group member playing the owner; agree a price; swap roles
- [ ] Hand-in items ready: approved client brief, live link, images and prompts, chatbot FAQ and instructions, chatbot test screenshots
- [ ] Rehearse the demo
**Checklist:** everything ready before Sunday night.

## Phase 9: Extras (only if all of the above is done and live)
One at a time, push after each:
- [ ] n8n automation (use an n8n.io template and modify it)
- [ ] Exam countdown strip (needs real dates)
- [ ] SEO titles and descriptions, sticky WhatsApp button
- [ ] FAQ search
