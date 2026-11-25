# CLAUDE.md: house rules for BrightPath Tutorials

(Codex and OpenCode read a file called AGENTS.md. Keep a copy of this file under that name too.)

## What this project is
A website for BrightPath Tutorials, a WAEC/JAMB/Post-UTME tutorial centre in Uwasota, Benin City. Parents are the main users, mostly on phones. Goal: answer parents at any hour and make registering easy.

## Read first, every session
PRD.md (what), design.md (look), phases.md (plan and STATUS).

## Stack
Next.js, TypeScript, Tailwind CSS. Deploy on Vercel. Code on GitHub. Chatbot: Chatbase embed script. No database and no login in v1.

## Working rules
1. **Plan first.** Before big changes, explain the plan (files to change, what could break, how to test) and wait for my "go".
2. **Small changes, one at a time.** Fix ONLY what I ask. Do not change layout, colours or other pages unless told.
3. After each change, tell me exactly what you changed and how I can test it.
4. **Before finishing a phase,** show the phase checklist from phases.md and wait for me to tick it.
5. After each finished phase: update STATUS in phases.md, then I push to GitHub.
6. Follow design.md for every colour, font and size.
7. Mobile first. Check at 360px wide.

## NEVER RULES (website text and chatbot)
- Never promise exam scores, grades or results.
- Never guess or invent fees, dates, times, teacher names, addresses, phone numbers or results. If a fact is missing, write a clear placeholder like "Contact the centre to confirm" and list it for me.
- A person always decides if a student is accepted. Never say a student is accepted.
- Show past results only if the centre provided them.
- Do not present AI images as real students or real work.
- No lorem ipsum. No fake reviews.

## Secrets
Never put passwords, API keys or tokens in code or in these files. Use `.env.local` (and keep it out of GitHub).

## Content facts we DO have
Business: BrightPath Tutorials. Area: Uwasota, Benin City. Owner: Mr Esosa Idahosa. Admin: Joy (weekday mornings). Classes: WAEC, JAMB, Post-UTME. Process: enquiry, then onboarding, then a person decides. Fees: not confirmed yet, so say "Contact the centre for fees".

## Useful commands
`npm install` then `npm run dev` (runs at localhost:3000). `npm run build` to check before pushing.
