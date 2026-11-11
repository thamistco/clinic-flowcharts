# Primary care: quick pathways

A static UK primary care source directory, linking official NICE/BTS/SIGN/CoSRH resources, plus EMIS Web build specifications and consultation workflow prompts.

## Safety status

This is not a validated clinical decision system. The first prototype's diabetes algorithm used an old pathway. It and the other unvalidated authored clinical algorithms were withdrawn on 11 November 2026. This version links to original guidance and official charts rather than reproducing treatment algorithms.

Use original recommendations, current local policies and patient-specific clinical judgement. There is no guarantee that a weekly check captures changes made between reviews. No patient data belongs in this repository or website.

## Use

Download the repository ZIP, extract it, then open `index.html` in a browser on a laptop. GitHub Free does not serve Pages from a private repository. For an owner-only live website on a phone or laptop, use the private hosted link supplied separately. Do not make this repository public to enable Pages. There is no build step, dependency installation, database, analytics or backend. Search and filters run in the browser. The copy button copies blank documentation headings only.

## Source review

`sources.json` records the source links and last successful link-check date, or an explicit failed-check status. On each Saturday review:

1. Open the original guideline and its update information, including actual recommendations where changes are mentioned.
2. Check linked visual summaries for replacement or withdrawal. Do not infer recommendation currency from an overview review date alone.
3. Record each material change, unchanged source or failed check in `CHANGELOG.md` with the actual source URL and date checked.
4. Update source links and successful check dates. A failed check is not unchanged.
5. Visually test mobile and desktop layouts and verify filters, links and copy behavior before release.

East Sussex MSK original pathways are linked (publisher labels: mostly July 2025; physiotherapy December 2024), with service exclusions, Bexhill first-contact physiotherapy and the Sussex Formulary. Individual formulary drug entries have not been audited here. Official material is linked, not reproduced; no endorsement is implied.

At the 11 November 2026 access check, NICE CKS shoulder and knee pages returned HTTP 403. Their recommendations were not verified. The page marks this beside both entries. The other 53 of 55 guidance/chart URLs responded successfully; successful access alone does not validate clinical content.
