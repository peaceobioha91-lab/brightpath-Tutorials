# PRD: BrightPath Tutorials Website

> Source of truth for WHAT we are building. Any AI tool must read this first.
> Items marked **[CONFIRM]** are facts nobody has given yet. NEVER invent them. Use a placeholder and list them for the student.
> Internal tags (documentation only, never shown on the website): **[MI]** = finding from the mock client interview. **[CA]** = capstone assumption created for this project. See section 14.

## 1. The client
- **Business:** BrightPath Tutorials, an educational and examination-preparation centre.
- **Location:** Uwasota, opposite St. Patrick Catholic Church, Benin City, Edo State, Nigeria. (Spell it "Uwasota" everywhere.)
- **Owner:** Mr Esosa Idahosa. **Admin:** Joy (works weekday mornings only). [MI]
- **What they do:** WAEC, JAMB and Post-UTME exam preparation.
- **Audience:** secondary-school students, prospective university students, and their parents or guardians. [MI]

## 2. The problem (one line)
Parents call or message with questions, but Joy only works weekday mornings, so replies come late and parents go to other centres. Weekend classes, which fill first, lose the most. [MI]

Challenges identified in the mock interview [MI]:
1. Delayed responses to enquiries from parents and prospective students.
2. Difficulty giving consistent information about available programmes.
3. A registration process that relies heavily on manual communication.
4. Limited access to business information outside normal working hours.

## 3. The numbers [MI]
- Normal week: about 10 to 20 enquiries. Before exams: about 40 a week.
- Each takes 5 to 10 minutes to answer (1 to 3 hours a week normally, 3 to 7 before exams).
- Afternoon, evening and weekend enquiries wait until the next weekday morning.

## 4. What the website must do
The site answers parents at any hour and gives them an easy way to register, so no enquiry is lost while Joy is off. It improves access to information, simplifies registration enquiries and gives automated answers to frequent questions.

**Users:** (1) Parents, main user, mostly on phones. (2) Students, 16 to 22, checking classes. No login and no admin dashboard on this site. No database of our own for v1.

**The ONE main action:** a parent taps **Register** and reaches the centre.

## 5. NEVER RULES (apply to website text AND chatbot)
1. Never promise exam scores or results.
2. Never guess fees, dates, times or any detail the client has not given. For anything not documented in this PRD (class start dates, payment methods, phone numbers, email), say "Please contact the centre to confirm."
3. A person (never AI) decides whether a student is accepted, after onboarding.
4. Show past results only if the centre provides them. Never invent them.
5. AI images must not be presented as photos of real students or real results.
6. Never offer Further Mathematics, Agricultural Science, Civic Education or Geography under JAMB. They are WAEC only.
7. Never invent tutor qualifications, years of experience, certificates or employment history. Show only the name, subjects and programmes given in section 6.
8. The fees in section 6 are approved. State them plainly. Do not add hedging, "subject to change" or disclaimer text about fees on the public website. Only the monthly fee is documented, so never calculate or state a total course fee or a discount.

## 6. Pages and sections (v1 must-haves)
Single-page site with a sticky menu, or separate pages. Either is fine; keep it simple.

| Section | Purpose | Main button |
|---|---|---|
| Home | Who BrightPath is, what it offers, in one line | Register |
| About | What the centre is and how lessons work (classroom teaching, past-question practice, revision, mock exams) | Register |
| Classes | WAEC, JAMB, Post-UTME: duration, fee and subjects for each | Register |
| Timetable | The approved weekly timetable | Register |
| Teachers | The eight tutor profiles | Chat with us |
| How it works | Enquiry, then onboarding, then a person decides (steps below) | Register |
| Past results | Only what the centre provides. Nothing provided yet, so a short "coming soon" note | Chat with us |
| Fees | The approved monthly fees, shown plainly | Register |
| FAQ | The 8 customer questions with answers | Chat with us |
| Location | Uwasota, opposite St. Patrick Catholic Church, Benin City, Edo State. Map link **[CONFIRM exact map pin]** | Get directions |
| Footer | Phone and WhatsApp **[CONFIRM]**, email **[CONFIRM]**, address, admin reply hours (weekday mornings, exact times **[CONFIRM]**) | n/a |

### 6.1 Programmes and fees [CA]
| Programme | Duration | Monthly fee |
|---|---|---|
| WAEC Preparation | 12 weeks | ₦15,000 |
| JAMB Preparation | 12 weeks | ₦15,000 |
| Post-UTME Preparation | 12 weeks | ₦12,000 |

Format money as ₦15,000 (naira sign, comma). All programmes run in 12-week cycles. Lessons include classroom teaching, past-question practice, revision and mock examinations.

Mock examinations: WAEC once a month. JAMB once a month. Post-UTME once every two months.

### 6.2 Timetable [CA]
| Day | Programme | Time |
|---|---|---|
| Monday | WAEC | 9:00 am – 5:00 pm |
| Tuesday | JAMB | 9:00 am – 5:00 pm |
| Wednesday | WAEC | 9:00 am – 5:00 pm |
| Thursday | JAMB | 9:00 am – 5:00 pm |
| Friday | WAEC Revision | 9:00 am – 5:00 pm |
| Saturday | JAMB Practice | 9:00 am – 12:00 pm |
| Saturday | Post-UTME | 12:30 pm – 5:00 pm |

Weekend classes exist (Saturday only). There are no Sunday classes. Design: show this as a printed-exam-timetable grid (see design.md).

### 6.3 Subjects
**WAEC:** English Language, Mathematics, Biology, Chemistry, Physics, Further Mathematics, Agricultural Science, Economics, Civic Education, Geography, Government, Literature-in-English, Christian Religious Studies (CRS), History, Commerce. Students choose subjects to match their programme and intended exam combination.

**JAMB:** Use of English, Mathematics, Biology, Chemistry, Physics, Economics, Government, Literature-in-English, CRS, Commerce. Candidates get subject combinations suited to their intended course and applicable JAMB requirements. **Not offered under JAMB:** Further Mathematics, Agricultural Science, Civic Education, Geography. (History is also absent from the documented JAMB list, so show it as WAEC only.)

**Post-UTME:**
- Science-oriented candidates: English Language, Mathematics, Physics, Chemistry, Biology.
- Arts-oriented candidates: English Language, Mathematics, Government, Literature-in-English, Economics.
- Coverage may be adjusted to the admission requirements and exam format of the relevant institution.

### 6.4 Teachers (eight fictional tutor profiles, retained) [CA]
Show name, subjects and the programme each subject is taught under. Do not add qualifications, years of experience or photos of real-looking people (use initials or a simple icon).

| Tutor | WAEC subjects | JAMB subjects |
|---|---|---|
| Daniel Osagie | Mathematics, Further Mathematics | Mathematics |
| Esther Aigbe | English Language, Literature-in-English | Use of English, Literature-in-English |
| Michael Eromosele | Biology, Agricultural Science | Biology |
| Grace Igbinovia | Chemistry | Chemistry |
| Samuel Ekhator | Physics | Physics |
| Ruth Omoregie | Economics, Commerce | Economics, Commerce |
| David Imade | Government, History | Government |
| Favour Okon | CRS, Civic Education, Geography | CRS |

Which tutors teach Post-UTME is not documented. Do not state it.

### 6.5 How it works (registration process) [CA]
1. A parent or student visits the website.
2. They look at the programmes, fees and timetable.
3. They tap Register: message on WhatsApp, or complete the enquiry form.
4. The details reach the administrator.
5. The administrator reviews them and contacts the parent or student.
6. Registration is confirmed after the necessary arrangements are completed. A person decides whether a student is accepted, after onboarding.

## 7. Register button and enquiry form
**Register button:** opens WhatsApp to the centre's number with a pre-typed message **[CONFIRM WhatsApp number]**. Backup: a "Call" link. Both appear in the footer too.

**Enquiry / registration form (v1 must-have, built after the Register button works):** proposed fields are parent or student name, phone number, programme (WAEC, JAMB or Post-UTME), and message. On submit, show a short thank-you saying the administrator will contact them (no promised timing). Submissions go to the administrator **[CONFIRM destination, such as the admin email address]**. Build with a config value for the destination so it can be set without rewriting code.

(The group n8n form is NOT connected to this site. Tutor's instruction. No login or admin dashboard here either.)

## 8. Chatbot (Chatbase), required
Answers these 8 questions at any hour:
1. When do classes start? 2. Do you have weekend classes? 3. What subjects do you teach? 4. Where are you? 5. How long does the tutorial run, and what are the payment plans? 6. How will the tutorial improve my child's learning? 7. What results have your students had before? 8. How do I register?

Rules: friendly tone, uses the business name, follows the NEVER RULES, points people to Register. If a parent is unhappy with progress or asks about special needs, it does not answer and says a person will follow up. For anything it has no source for, it says it will pass the question to the centre.

**Knowledge source:** a `chatbot-faq.md` built only from this PRD (sections 1, 6, 7). Grounding for each question:

| # | Answer from | If detail is missing |
|---|---|---|
| 1 | Classes run in 12-week cycles; weekly timetable in 6.2 | No exact start date is documented. Say the centre will confirm the next start date |
| 2 | Yes: Saturdays. JAMB Practice 9:00 am – 12:00 pm, Post-UTME 12:30 pm – 5:00 pm | n/a |
| 3 | Subject lists in 6.3, keeping the JAMB exclusions | n/a |
| 4 | Uwasota, opposite St. Patrick Catholic Church, Benin City, Edo State | n/a |
| 5 | 12 weeks. Monthly fee ₦15,000 (WAEC), ₦15,000 (JAMB), ₦12,000 (Post-UTME) | Payment methods are not documented. Say the administrator will confirm how to pay |
| 6 | Describe the method only: classroom teaching, past-question practice, revision, monthly mock exams (every two months for Post-UTME) | Never promise improvement, scores or results |
| 7 | No results have been provided by the centre | Say so honestly, mention the regular mock exams, and offer a person to follow up |
| 8 | Tap Register (WhatsApp) or use the enquiry form; the administrator reviews and contacts them; a person decides acceptance after onboarding | n/a |

## 9. AI images (required)
At least 4: one large hero image and three for the class cards (WAEC, JAMB, Post-UTME). Same style and colours throughout. Nigerian students and settings. Save every prompt in `image-prompts.md`. Do not use AI images as tutor photos.

## 10. Quality bar
- Looks good and loads fast on a phone (test at 360px wide).
- No lorem ipsum, no fake reviews, no invented facts.
- Readable text (good contrast), big tap targets.
- Live on a public link, tested by classmates.
- Fees, timetable, subjects and tutor allocations match section 6 exactly. "Uwasota" is spelled correctly everywhere.

## 11. Extras (ONLY after everything above works and is live)
- n8n automation: email Joy plus an auto-reply to the parent.
- Client agreement and handover report (Module 10).
- "Exam countdown" strip for the next JAMB/WAEC date **[CONFIRM dates]**.
- Small touches: FAQ search, sticky WhatsApp button, SEO titles and descriptions.

(The simple enquiry form that emails Joy was an extra. The client information document puts online registration and enquiry in scope, so it is now v1, section 7.)

## 12. Definition of done
- [ ] All sections in section 6 are present with real content or clear placeholders
- [ ] Fees, timetable, subjects and tutor allocations match section 6, including the JAMB exclusions
- [ ] Register button opens WhatsApp correctly on a phone
- [ ] Enquiry form submits and reaches the administrator
- [ ] Chatbot is embedded and passes 5 tests (one must be a refusal)
- [ ] 4 consistent AI images added, prompts saved
- [ ] Works on a phone, live on a link
- [ ] Client brief "approved" screenshot and all hand-in items ready

## 13. Open questions
**Resolved by client-information.md:** timetable, fees and duration, teacher names and subjects, subject lists, exact area and landmark, registration steps, mock exam frequency.

**Still open (use placeholders until given):**
- Phone and WhatsApp number (needed for the Register button to work)
- Where form submissions are delivered, such as the administrator's email address
- Exact start date of the next 12-week cycle
- Accepted payment methods and whether online payment is needed
- Admin reply hours (exact times, weekday mornings only is known)
- Past results the centre is happy to share (none provided yet)
- Exact map pin for the location
- Exam dates for the countdown (extra only)

## 14. Internal documentation: where each fact comes from
**Not shown on the website.** The business is a simulated capstone scenario.

**Mock interview findings [MI]** (simulated interview, not a real business owner): the centre provides exam-preparation lessons; audience is secondary-school students, prospective university students and parents; enquiries come from students and parents; Joy handles administrative enquiries and registration communication; delayed replies slow information reaching families; Joy works weekday mornings only; weekly enquiry volumes (10 to 20, about 40 before exams); the need for a more organised way to share services and take registration enquiries.

**Capstone assumptions [CA]** (created to make the scenario realistic; confirm with a real client in a real engagement): programme fees; the weekly timetable; 12-week cycles; mock exam frequency; all eight tutor profiles (fictional, not verified qualifications or employment records); subject lists and tutor allocations; the registration process; the chatbot's general-information role and handover of complex enquiries to the administrator.

**Would need validation with a real client:** actual fees and payment arrangements; tutor qualifications and availability; classroom capacity; exact registration requirements; official phone number and email; accepted payment methods; whether online payment is required; exact subject combinations per exam; class allocation.
