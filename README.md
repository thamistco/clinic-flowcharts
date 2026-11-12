# Primary care: quick pathways

A static UK primary care source directory, linking official NICE/BTS/SIGN/CoSRH resources, plus EMIS Web build specifications and consultation workflow prompts.

## Safety status

This is not a validated clinical decision system. The first prototype's diabetes algorithm used an old pathway. It and the other unvalidated authored clinical algorithms were withdrawn on 11 November 2026. This version links to original guidance and official charts rather than reproducing treatment algorithms.

Use original recommendations, current local policies and patient-specific clinical judgement. There is no guarantee that a weekly check captures changes made between reviews. No patient data belongs in this repository or website.

## Use

Use the GitHub Pages website when published, or download the repository ZIP, extract it, then open `index.html` in a browser on a laptop. This repository contains a generic source directory, not personal or patient information. Public NHS service names describe the geographic coverage of the linked guidance, not any user. There is no build step, dependency installation, database, analytics or backend. Search and filters run in the browser. The copy button copies blank documentation headings only.

## Source review

`sources.json` records the source links and last successful link-check date, or an explicit failed-check status. On each Saturday review:

1. Open the original guideline and its update information, including actual recommendations where changes are mentioned.
2. Check linked visual summaries for replacement or withdrawal. Do not infer recommendation currency from an overview review date alone.
3. Record each material change, unchanged source or failed check in `CHANGELOG.md` with the actual source URL and date checked.
4. Update source links and successful check dates. A failed check is not unchanged.
5. Visually test mobile and desktop layouts and verify filters, links and copy behavior before release.

East Sussex MSK original pathways are linked (publisher labels: mostly July 2025; physiotherapy December 2024), with service exclusions, Bexhill first-contact physiotherapy and the Sussex Formulary. Individual formulary drug entries have not been audited here. Official material is linked, not reproduced; no endorsement is implied.

Earlier index-level CKS checks were incomplete. Deep shoulder and knee pages were subsequently verified; their older clinical revision dates and limited scope are noted below. The page marks this beside both entries. The other 53 of 55 guidance/chart URLs responded successfully; successful access alone does not validate clinical content.


## Expandable review copies: 11 November 2026

The directory now links 21 national-condition review copies (20 new charts plus the hypertension revision). They use short source-linked paraphrases, horizontal desktop rows, vertical expansion, and a stacked phone layout. These are **not clinically validated** decision systems or complete emergency/prescribing protocols.

Each chart states scope, exclusions, source type, publication/update dates where shown and the access date. Selected adult BNF dose cards include safety limitations and live monograph links. Inhaler device-specific dosing, DOAC doses, insulin, HRT and paediatric doses are not improvised.

The shoulder/knee CKS deep pages were successfully checked. Their clinical revisions remain November/August 2022, so only limited assessment/referral summaries are provided. Older generic medicines ladders are omitted; newer condition-specific NICE applies.

The eight local MSK entries retain publisher originals rather than a new combined treatment ladder. Local imaging, generic analgesia, chronic-spine and suspected-cancer routing differences are flagged on [review progress](progress.html), not silently reconciled. Individual Sussex Formulary drug entries are not audited.

Saturday reviews cover every new review copy, update histories, relevant live BNF monographs, local documents and layout/link failures. A failed source check is not unchanged guidance. Recheck live sources at the point of care. Review progress is a source/layout milestone, not clinical approval.


## Further review copies: 12 November 2026

Twelve additional six-box views in `chart2.html`: CVD prevention/statins, GAD, headache/migraine, acne, IBS, recurrent UTI prevention, acute cough/bronchitis, COPD exacerbation, cellulitis, under-18 acute otitis media, acute sinusitis and adult impetigo. Total: 33 national review copies plus 8 retained local originals.

These are source-linked review copies, not clinically validated clinical decision tools. Publication and actual update dates, older evidence dates, source-specific scope and key changes are visible. Five live BNF monographs support nine adult indication-specific cards; not all medicines have a dose card. No patient information or owner identity is included. Saturday source reviews include every new route, update history, drug card and explicit failed check. See progress for the differences and deliberate exclusions.


## Current coverage, 12 November 2026 (latest batch)

43 national-condition review charts plus 8 retained local original entries (51 directory entries). `chart3.html` adds 10 selected new conditions: adult overweight/obesity, insomnia, adult atopic eczema, adult iron deficiency anaemia, osteoporosis risk assessment, adult vaginal discharge, dementia, croup, bronchiolitis and adult non-CF bronchiectasis. Existing asthma now separates diagnostic and treatment age bands. Migraine couples acute and preventive treatment with three adult prevention cards and distinct NICE appraisal routes. GAD adds indication-specific options and flags CKS-supported off-label sertraline separately; depression adds mirtazapine and rechecks sertraline.

Patient information is present on all 43 review charts and their directory cards, with 48 link placements (NHS national pages plus selected local service directories). Dates are link/content checks, not a claim that every local service is available. Older local leaflets with source conflicts or elapsed review dates were not promoted as current advice.

The latest batch contains 16 rechecked/new indication-specific medicine cards (including a replacement sertraline depression card and one BNFC mild-croup card). BNF medicine-indication differences, NICE eligibility and England commissioning differences remain separate. No dose is inferred for other indications or age groups.

Key changes: NG259 replaced CG146 in July 2026; obesity has separate TA1026, TA875, TA664 and TA1152 routes; BNF Wegovy BMI ≥30 dosing now differs from the separate TA1152 CVD ceiling. Current original recommendations take precedence. Detailed omissions and source decisions are on `progress.html` and in each chart. These are not clinically validated prescribing or emergency systems.
