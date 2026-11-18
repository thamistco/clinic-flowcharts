## 18 November 2026: hair-loss chart added; second accuracy pass corrections

Added chart8.html#hair-loss (seventh section): male pattern hair loss (CKS, May 2026), female pattern hair loss (CKS, April 2026), alopecia areata (CKS, September 2024) and scalp red flags (CKS fungal scalp infection, February 2025), with a matching blank EMIS prompt set (74 total), directory card and source record. NHS minoxidil/finasteride availability stated per the Drug Tariff positions CKS quotes. A second accuracy pass over this week's additions re-verified headache (CG150), depression review timings (NG222), chronic pain (NG193), falls (NG249), melanoma/SCC/BCC referral (NG12) and anal fissure (CKS) without changes, and corrected: trigeminal neuralgia modified-release carbamazepine dose (600-800 mg daily in two divided doses), hyponatraemia repeat-sodium timing (ideally within 24 hours for everyone), haemorrhoids admission/referral wording, abdominal-pain referral routing (urgent referral for suspected cancer only), tinnitus pulsatile-referral wording and removal of an unverifiable melatonin claim, palpitations admission features plus five dead CKS links repointed, soft-tissue sarcoma box leading with NG12 wording, and the stale index coverage count (now 63 clinical / 74 entries). Pass scope: this week's additions plus hair loss, not a whole-site re-verification. Source-checked review copies, not clinical validation.

## 17 November 2026: re-audit reconciliation - hypertension route audited, anaemia monitoring aligned

Coverage reconciliation after the completed whole-site re-audit found the 60-entry directory includes the standalone hypertension review page as a 52nd route; an anchor-based count had missed it because it is its own page, not a chart anchor. The hypertension route was then audited in full: all 44 quoted NICE NG136 recommendations match the live recommendations text exactly (last updated 26 February 2026; the October 2026 minor amendment clarifies CKD scoping around 1.4.26, as the chart's source note describes), and the four BNF dose examples (amlodipine, ramipril, losartan, indapamide) plus the abridged renal-dose safety notes match the live BNF. No corrections were needed. Separately, the iron-deficiency anaemia monitoring box now preserves the full CKS interval: recheck FBC within 4 weeks of starting iron (rise of about 20 g/L over 3-4 weeks), and after a response recheck at 2-4 months to confirm normalisation. EMIS prompt lines unchanged because box titles are unchanged. Source-checked, not clinical validation.

## 17 November 2026: re-audit third batch - CVD risk type 1 statin branch, dose-card corrections

Whole-site accuracy-and-omission re-audit, third batch. The CVD-risk chart named type 1 diabetes as outside risk-scoring tools but never routed the statin offer; box 3 now carries the NG238 1.6.10-1.6.12 branch (offer atorvastatin 20 mg to adults with type 1 diabetes over 40, with diabetes over 10 years, with nephropathy or with other CVD risk factors; consider for ages 18-40 with additional risk features), with three source links. Two doxycycline dose cards (acute cough, COPD exacerbation) each contained a sentence copied from the acne card about topical acne treatment; both now describe the correct indication criteria. EMIS prompt lines unchanged because box titles are unchanged. 11 further entries verified accurate with omission review: anxiety, migraine, acne, IBS, recurrent UTI, cellulitis, otitis media, sinusitis (including the MHRA 30 April 2026 decongestant 5-day limit), impetigo, shoulder and knee (CKS revisions confirmed still current). Audit continues; remaining routes are logged on progress.html.

## 17 November 2026: re-audit omission fixes - COPD and heart failure

Whole-site accuracy-and-omission re-audit, second batch. Omission review found two in-scope NICE offers not named on their charts: pulmonary rehabilitation in stable COPD and cardiac rehabilitation in chronic heart failure. COPD box 2 now names the offer of pulmonary rehabilitation for people who view themselves as functionally disabled by COPD (NG115 1.2.83). Heart failure box 6 now includes the offer of a personalised, exercise-based cardiac rehabilitation programme (NG106 1.11.1). EMIS prompt lines unchanged because box titles are unchanged. 14 further entries this batch verified accurate against live source text: sore throat, UTI, CAP, asthma, type 2 diabetes, dyspepsia, back pain, fever in under-5s, AF, contraception, menopause, thyroid, depression, osteoarthritis. Audit continues; remaining routes are logged on progress.html.

## 17 November 2026: CKD statin omission corrected; whole-site re-audit started

User-reported omission confirmed: the CKD chart had no lipid management. Added a statin box from NICE NG238 section 1.8 (offer atorvastatin 20 mg for primary or secondary CVD prevention in CKD; increase dose if target not met and eGFR 30 or more; renal-specialist agreement for higher doses below 30; no CVD risk tool per 1.1.9; renal replacement therapy outside scope). NG203 itself carries no statin recommendation. Matching blank EMIS prompt line, directory card, source record and progress log updated. A full accuracy-and-omission re-audit of every review route is now running and is logged on progress.html. Source-checked, not clinical validation.

## 16 November 2026: scabies patient and household review

Added chart6.html#scabies and matching blank EMIS prompts. 60 entries (49 clinical + 2 support + 1 training/workflow + 8 source-only local), 60 prompt sets, 95 patient-link placements across 51 clinical/support routes. Covers individual assessment and treatment suitability, household/asymptomatic contacts, dates/supply/help, laundry, contact/school/work advice, post-treatment itch and escalation. Source differences are explicit, especially contact look-back and ivermectin repeat-dose wording. No oral-dose calculator, universal family prescription or copied outbreak protocol. No new local comparison without a documented difference. Existing withholds unchanged. Source access is not clinical validation.

## 12 November 2026: National / Local comparison tabs

## 14 November 2026 - Saturday source check

- 2026-11-18 12:35 UTC: TEMPORARY SAFETY CONTAINMENT. After independent clinical safety review findings (finasteride MHRA safeguard omissions; minoxidil product-specific stop/eligibility omissions; unresolved CKS/BNF versus Tegretol PR SmPC carbamazepine ceiling conflict; weaker topiramate pregnancy-prevention conditions on chart7; incorrect no-dose banner), all authored medication dosing, initiation, choice, change, stopping and escalation advice was temporarily removed from chart.html, chart2-chart8.html, hypertension.html and emis.html, and a site-wide containment banner was added to every page. Official source links remain as a directory. Pre-containment content preserved in git history at a6047a5 for independent qualified clinical review. New prescribing additions frozen. Nothing on the site is clinically validated.
- No new clinical recommendation change identified in the checked material. Clinical boxes, medicine examples, EMIS prompts and all eight local-PDF withholds unchanged.
- Retrieved 359 source/resource URLs plus chronic-pain assessment/investigations; 149 saved extracts matched after result-number/whitespace normalisation. Current update histories and selected high-risk recommendations were reviewed; other retrievals are not claimed byte-for-byte unchanged.
- Five CKS 403 fetches recovered in the browser: suspected bronchiectasis, croup currency, mild eczema, knee change history and chronic-pain investigations. Sparse currency/navigation pages remain limited evidence.
- All eight local MSK PDF downloads exactly match the 12 November copies. Publisher index and NHS England phased-access guidance re-read. Local safety conflicts remain.
- CKS chronic-pain investigations now readable; clarified the fibromyalgia provenance note and added the original link in the private companion. Test examples remain from RCP section 2.4. No clinical instruction changed.
- RCGP added October exam results; explicit domain descriptors and format unchanged, including the existing editorial domain-count inconsistency.
- Published the dated review log separately from the 12 November full clinical-audit dates. This is not clinical validation, exhaustive external-content endorsement or a patient-specific prescribing check.


Added source-separated National / Local tabs for 15 entries and their affected authored charts, plus the audit log. Differences and safety/source status stay visible above the tabs. National clinical criteria remain distinct from local commissioning/access; all existing PDF clinical quick-link withholds remain. Patient-support links without a documented guidance difference are not presented as competing guidance. Keyboard arrows/Home/End and active-panel labels are supported. No new clinical algorithms or prescriptions were added.

## 12 November 2026: full claim-level UK-source audit and fibromyalgia

Added an RCP/NICE adult fibromyalgia review chart, four patient links and matching blank EMIS prompts. Current totals: 57 entries, 47 clinical charts + 2 support pages + 8 source-only local references; 57 EMIS sets, 92 patient-link placements. All authored route claims checked against live linked UK sources. Corrected CKD referral thresholds, knee scope, MART licensing, migraine partial warning list, MHRA decongestant scope, national Right to Choose contract wording, SEN/EHC links and source dates. No external publisher PDF is clinically endorsed. Eight clinical quick-links withheld after conflicts/unverifiable claims; the publisher index and national-source correction log remain. Read progress.html for the route ledger, source failures and limits. This does not establish clinical validation.

# Change log

## 11 November 2026

- Withdrew the prototype's incorrect diabetes algorithm and other unvalidated authored clinical algorithms.
- Added links to NICE NG28's February 2026 medicines update and current official visual summaries.
- Expanded the directory to 21 conditions plus 8 local pathway/referral entries, including heart failure, thyroid disease, depression, osteoarthritis, gout, shoulder and knee pain.
- Added blank documentation headings, EMIS build specifications and a Saturday source-review checklist.
- This is a source directory, not a clinically validated decision system. Added direct links to East Sussex MSK pathways for foot/ankle, hand/wrist, hip, knee, shoulder/elbow, spine/neck, lumps/bumps and physiotherapy criteria. Local drug entries have not been audited.

- Link access checked for 55 unique guidance/chart URLs: 53 responded successfully. NICE CKS shoulder and knee pages returned HTTP 403 and are marked unverified, not unchanged. Link access does not validate clinical recommendations.

## 11 November 2026: expanded review copies

- Added twenty condition review charts and changed hypertension to horizontal desktop rows with vertical source expansion, stacked on phone.
- Linked verified review copies from the directory. All remain explicitly unvalidated, with source-specific scope and exclusions.
- NICE recommendation content and histories checked, including NG28 February 2026 initial treatment, NG59 July 2026 removals, current menopause bleeding advice and heart-failure appraisal links.
- Selected adult BNF cards: phenoxymethylpenicillin, nitrofurantoin, amoxicillin, omeprazole, sertraline, colchicine, allopurinol and levothyroxine, alongside four existing hypertension examples.
- CKS deep shoulder/knee assessment, management and change-history pages now accessible. Their 2022 clinical revisions are explicit. Older generic medicine advice not reproduced.
- Eight East Sussex MSK originals retained. Local/national imaging, analgesia and referral differences flagged; no new combined treatment ladder or invented dose advice.
- All 21 national condition views inspected at 320, 390 and 1280 pixels, source expansions checked for overflow. Directory filters/search and review progress checked.
- Source/layout review is not clinical validation. Individual Sussex Formulary drug listings not audited. Live sources remain authoritative.


## 2026-11-12 - further condition review copies

Added 12 review views with 72 expandable boxes and exact recommendation links in chart2.html. Checked current Recommendations and Update-information pages for NG238, CG113, CG150, NG198, CG61, NG112, NG120, NG114, NG115, NG141, NG91, NG79 and NG153. Publication/headline dates are not substituted for later minor updates. Source boundaries, active older guidelines and differences are explicit in progress.

Verified live BNF atorvastatin, sumatriptan, flucloxacillin, doxycycline and methenamine hippurate monographs, supporting 9 indication-specific adult cards. No paediatric, GAD-specific, preventive migraine or isotretinoin dosing inferred. Prednisolone 30 mg for 5 days is attributed to NICE NG115, not represented as a separate BNF card.

Preserved all earlier charts and local originals. New routes are linked from the searchable directory and progress log. Source and layout checking is not clinical validation.


## 12 November 2026: latest expansion and patient information

- Added 10 condition review charts in `chart3.html`, 63 conditional source-linked boxes. Adult scope and exclusions are explicit. Osteoporosis uses NG259, not replaced CG146; obesity distinguishes product licence/dose, NICE TA criteria and NHS England phased access.
- Replaced the asthma view with 13 age-specific boxes. Diagnostic age cutoffs differ from treatment cutoffs. No unverified paediatric inhaler dosing.
- Kept acute/preventive migraine together, added three adult prevention cards, appraisal routes and stopping criteria. Added five GAD option cards; sertraline GAD is explicitly off-label and CKS-supported, not a BNF GAD indication. Rechecked depression sertraline and added mirtazapine.
- Verified one BNFC mild-croup oral dexamethasone dose. No liquid volumes, unverified maxima or severe-croup repeat doses inferred. Other missing/unverified dose cards were skipped rather than invented.
- Added NHS patient information to all 43 national-condition review charts and matching directory cards, plus selected verified East Sussex service directories: 48 chart link placements. Content/link check dates and source names are displayed. Local eligibility/availability still needs checking.
- Inspected but did not add older ESHT croup (steam advice), osteoporosis (obsolete CG146 citation), child-asthma (older licensing) and IV-iron (elapsed review date) leaflets as current patient advice.
- Source evidence includes NG246, NG259, NG245, NG97, NG9, NG117, CG150, CG113, NG222, NG190, current NICE TAs, BNF/BNFC, CKS, BTS adult bronchiectasis and NHS England commissioning. Exact URLs are in the chart/source directory; source chronology and limitations are on the progress page.
- Before publication: personal/family-data scan and noreply commit identity required. All 43 chart routes checked at 320/390/1280 pixels with directory and source-disclosure checks. Source/layout checks are not clinical validation.


## 12 November 2026: neurodivergence, carers, joint pain and EMIS prompts

Added `chart4.html` with autism/ADHD referral and England Right to Choose, age-banded children's distressed-behaviour support, carers' assessments/breaks, and source-based adult joint-pain patterns/referral. Three clinical charts and two clearly labelled patient-support pages, 47 boxes, 40 new patient/support link placements. Current coverage: 46 clinical charts + 2 support pages + 8 retained local originals = 56 entries. Total patient/support links across the 48 review/support routes: 88 placements.

Added `emis.html`: 56 matching copy-ready blank documentation prompt sets, linked from every review/support page and directory entry, including the eight local originals. These are build specifications, not installable EMIS templates or completed clinical records. No unverified codes or doses, pre-ticked normal findings or negative red flags. Check source/local pathway, build/test and approve locally.

Current source conditions and older evidence dates are explicit. Right to Choose requires clinical appropriateness and a qualifying service contract; no wait, GP shared-care acceptance, provider vacancy or financial entitlement is guaranteed. Local course ages/availability vary; provider grants are not personal payments. Carer legal routes and adult/child neurodevelopmental routes are not merged. Joint-pain referral and investigation boundaries remain those in original NICE/CKS sources, not a new scoring system.

- Final currency check also incorporated the BSR PMR treatment guideline published 14 October 2026, replacing the older 2009 BSR/BHPR treatment guideline. Older CKS diagnostic assessment is separated from newer confirmed-PMR specialist-input thresholds; no steroid trial, taper or DMARD regimen is reproduced. Source: https://academic.oup.com/rheumatology/article/65/10/keag502/8914455


## 12 November 2026: multiple symptoms and SCA

Added chart5.html#polysymptomatic (adult clinical review aid, not a medically-unexplained-symptom diagnosis) and chart5.html#sca-consultation (separate educational/workflow guide). RCGP official 3-minute reading/12-minute consultation and three domains are distinguished from independent coaching checkpoints and suggested real-clinic admin allowances. GMC contemporaneous-record/referral duties remain explicit. No treatment algorithm, universal blood panel, exercise progression or local service promise is created. NG12 2026 non-site-specific symptom criteria and ME/CFS safeguards are sourced.

Current scope: 59 entries = 48 clinical + 2 support + 1 training/workflow + 8 source-only local; 59 blank documentation/workflow prompts and 94 patient-link placements across 50 clinical/support routes. Corrected fibromyalgia EMIS source footer NG100 to NG193 after reconciling every prompt footer against sources.json. Existing national/local comparisons and eight clinical-PDF quick-link withholds remain. No personal/family data included.

## 17 November 2026: re-audit final batch - charts 3-6 verified, course bands and insomnia note corrected

Whole-site accuracy-and-omission re-audit, final batch. Chart 3 (obesity, insomnia, eczema, anaemia, osteoporosis, vaginal discharge, dementia, croup, bronchiolitis, bronchiectasis), chart 4 (autism, ADHD, children-support, carers-support, joint pain, fibromyalgia) and chart 5 (polysymptomatic patient, SCA guide) plus chart 6 (scabies) completed full claims verification and omission review against live guidance: NG246, TA1026, TA875, TA664, TA1152, NG259 (published 29 July 2026), NG190, NG97, NG9, CG128, CG142, CG170, NG87, NG219, NG100, NG226, NG65, NG193, NG12 (updated 15 April 2026), NG56, NG206, RCP fibromyalgia guideline, CKS September 2025 scabies, BASHH 2025, BNF/BNFC live dose entries (permethrin once weekly for 2 doses including face/neck/scalp/ears 8-12 hours; ivermectin 200 micrograms/kg with restricted repeat wording; dexamethasone 150 micrograms/kg single mild-croup dose), NHS scabies 8-week sexual-contact advice, NHS England October 2026 pharmacy pathway, RCGP SCA marking page (amended June 2025) and examination-day guide.

Two corrections shipped: children-support course age bands updated to the live Family Hubs wording (EarlyBird Plus 4+, Teen Life 10+, disability parenting 2+), and the insomnia source note corrected now that the CKS currency page matches the scenario pages at June 2026. Every external source link re-verified live, including all Sussex local services and GMC Good medical practice 2024. Re-audit complete: all 59 entries plus the 8 source-only local references verified against current sources with omission review.

## 18 November 2026: sixteen-topic requested expansion - chart7, chart8, COPD/gout branches, prompts, directory and register

Added `chart7.html` (pain management NG193/NG215; headache CG150/NG12; palpitations CKS; falls NG249/CKS; tinnitus NG155/CKS/NG12; acute abdominal pain CKS/NG12; mental health review NG222/NG215 with QOF 2025/26 SMI checks and Sussex SMI LCS in a National/Local tab) and `chart8.html` (haemorrhoids CKS/NG12; anal fissure CKS/BNF GTN; new skin lesion or lump NG12/CKS; hyponatraemia CKS; trigeminal neuralgia CKS/BNF carbamazepine; codeine/opioid dependence and down-titration NG215/CKS/NG193, individualised not a universal schedule). Expanded `chart.html`: COPD post-bronchodilator FEV1/FVC diagnosis detail, incidental-emphysema route and eosinophil-guided biologic add-on eligibility per NG115 1.2.54 with TA1142 (dupilumab, March 2026) and TA1166 (mepolizumab, June 2026) in defined groups; gout kidney-function branch (NSAID/colchicine eGFR cautions per CKS/BNF, corticosteroid oral or injection as remaining NG219 options chosen by comorbidities, co-prescriptions and preferences, renal allopurinol/febuxostat dosing per BNF). No preferred-drug inference beyond source scope.

Load-bearing dosing, caution and referral claims were re-read against current source text (NICE, CKS, BNF) on 18 November 2026 rather than relying on citation dates: carbamazepine starting/titration/maximum and specialist threshold, GTN course and contraindications, hyponatraemia severity/admission and correction scope, opioid dependence versus opioid use disorder referral, renal gout-medicine cautions, COPD biologic TA eligibility. The existing fibromyalgia chart was re-checked against the request and remains current. Unverified: NHS Sussex SMI LCS SSX-LCS018 stated period ended 30 September 2025, renewal unverified; flagged on the chart, progress page and source register.

Added 13 blank EMIS prompt sets (73 total, anchors match chart ids), 13 directory cards on `index.html` (73 entries: 62 clinical charts, 2 support pages, 1 training/workflow guide, 8 source-only local) and 13 `sources.json` records (114 patient-link placements across 64 routes). Companion app updated with the same 13 conditions and coverage totals. Review copies, not clinical validation; public pages carry no patient data.
