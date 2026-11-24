/* Site navigation and flowchart enhancements (UI redesign, 21 Nov 2026).
   Progressive enhancement only: it never changes clinical wording. Without JavaScript every page still reads in full. */
(function(){
  'use strict';
  var GROUPS={"heart": "Heart and circulation", "resp": "Breathing and lungs", "ent": "Ear, nose and throat", "urinary": "Kidney and urinary", "metabolic": "Diabetes, hormones and blood", "gut": "Stomach and bowel", "skin": "Skin and hair", "mental": "Mental health and neurodevelopment", "neuro": "Headache, nerves and pain", "msk": "Muscles, bones and joints", "women": "Women's and sexual health", "children": "Children", "older": "Older people and carers", "consult": "Consultations and complex care", "urgent": "Urgent and red-flag presentations", "men": "Men's health", "lifestyle": "Alcohol and smoking"};
  var DATA=[{"t": "Acne vulgaris", "h": "chart2.html#acne", "g": "skin", "c": "NICE NG198", "s": "acne"}, {"t": "Acute abdominal pain: triage and routing", "h": "chart7.html#abdominal-pain", "g": "gut", "c": "NICE CKS", "s": "abdominal-pain"}, {"t": "Acute cough / acute bronchitis", "h": "chart2.html#acute-cough", "g": "resp", "c": "NICE NG120", "s": "acute-cough"}, {"t": "Acute otitis media: under 18s", "h": "chart2.html#otitis-media", "g": "ent", "c": "NICE NG91", "s": "otitis-media"}, {"t": "Acute sinusitis", "h": "chart2.html#sinusitis", "g": "ent", "c": "NICE NG79", "s": "sinusitis"}, {"t": "Alcohol use disorders", "h": "chart13.html#alcohol", "g": "lifestyle", "c": "NICE CG115 · CG100", "s": "alcohol"}, {"t": "Anal fissure: assessment and management", "h": "chart8.html#anal-fissure", "g": "gut", "c": "NICE CKS · BNF", "s": "anal-fissure"}, {"t": "Asthma: diagnosis and treatment by age", "h": "chart.html#asthma", "g": "resp", "c": "BTS, NICE and SIGN NG245", "s": "asthma"}, {"t": "Atopic eczema in children", "h": "chart10.html#eczema-child", "g": "children", "c": "NICE CG57", "s": "eczema-child"}, {"t": "Atopic eczema: adult review", "h": "chart3.html#eczema", "g": "skin", "c": "NICE CKS + NG190", "s": "eczema"}, {"t": "Atrial fibrillation", "h": "chart.html#af", "g": "heart", "c": "NICE NG196", "s": "af"}, {"t": "Blackouts and collapse (TLoC)", "h": "chart9.html#blackout", "g": "urgent", "c": "NICE CG109", "s": "blackout"}, {"t": "Breast lump", "h": "chart11.html#breast-lump", "g": "women", "c": "NICE NG12", "s": "breast-lump"}, {"t": "Bronchiectasis: adult community review", "h": "chart3.html#bronchiectasis", "g": "resp", "c": "BTS + NICE NG117 + CKS", "s": "bronchiectasis"}, {"t": "Bronchiolitis: primary-care assessment", "h": "chart3.html#bronchiolitis", "g": "children", "c": "NICE NG9", "s": "bronchiolitis"}, {"t": "Carers: assessments, breaks and practical support", "h": "chart4.html#carers-support", "g": "older", "c": "Patient signposting · England / East Sussex", "s": "carers-support"}, {"t": "Cellulitis and erysipelas", "h": "chart2.html#cellulitis", "g": "skin", "c": "NICE NG141", "s": "cellulitis"}, {"t": "Chest pain: acute and stable", "h": "chart9.html#chest-pain", "g": "urgent", "c": "NICE CG95", "s": "chest-pain"}, {"t": "Children: distressed behaviour and support by age", "h": "chart4.html#children-support", "g": "children", "c": "Patient/family signposting · NICE CG170 + NG87", "s": "children-support"}, {"t": "Chronic kidney disease", "h": "chart.html#ckd", "g": "urinary", "c": "NICE NG203 + NG238", "s": "ckd"}, {"t": "Codeine and opioid dependence: review and down-titration", "h": "chart8.html#opioid-tapering", "g": "neuro", "c": "NICE NG215 · CKS", "s": "opioid-tapering"}, {"t": "Constipation in children", "h": "chart10.html#constipation-child", "g": "children", "c": "NICE CG99", "s": "constipation-child"}, {"t": "Contraception", "h": "chart.html#contraception", "g": "women", "c": "CoSRH UKMEC 2025", "s": "contraception"}, {"t": "COPD", "h": "chart.html#copd", "g": "resp", "c": "NICE NG115", "s": "copd"}, {"t": "COPD exacerbation: community review", "h": "chart2.html#copd-exacerbation", "g": "resp", "c": "NICE NG114", "s": "copd-exacerbation"}, {"t": "Croup: assessment and first actions", "h": "chart3.html#croup", "g": "children", "c": "NICE CKS + BNFC", "s": "croup"}, {"t": "CVD prevention and statin review", "h": "chart2.html#cvd-risk", "g": "heart", "c": "NICE NG238", "s": "cvd-risk"}, {"t": "Depression", "h": "chart.html#depression", "g": "mental", "c": "NG222", "s": "depression"}, {"t": "Dyspepsia and reflux", "h": "chart.html#dyspepsia", "g": "gut", "c": "NICE CG184", "s": "dyspepsia"}, {"t": "Early pregnancy bleeding or pain", "h": "chart11.html#early-pregnancy", "g": "women", "c": "NICE NG126", "s": "early-pregnancy"}, {"t": "Falls: assessment and prevention in older people", "h": "chart7.html#falls", "g": "older", "c": "NICE NG249 · CKS", "s": "falls"}, {"t": "Fever in under 5s", "h": "chart.html#fever-child", "g": "children", "c": "NICE NG143", "s": "fever-child"}, {"t": "Fibromyalgia: diagnosis, support and review", "h": "chart4.html#fibromyalgia", "g": "neuro", "c": "RCP UK 2022 · NICE NG193 · CKS", "s": "fibromyalgia"}, {"t": "Foot &amp; Ankle: East Sussex pathway", "h": "index.html#local-foot-ankle", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-foot-ankle"}, {"t": "Gastroenteritis in under 5s", "h": "chart10.html#gastro-child", "g": "children", "c": "NICE CG84", "s": "gastro-child"}, {"t": "Generalised anxiety disorder", "h": "chart2.html#anxiety", "g": "mental", "c": "NICE CG113", "s": "anxiety"}, {"t": "Gout", "h": "chart.html#gout", "g": "msk", "c": "NG219", "s": "gout"}, {"t": "Haemorrhoids: assessment and management", "h": "chart8.html#haemorrhoids", "g": "gut", "c": "NICE CKS · NG12", "s": "haemorrhoids"}, {"t": "Hair loss: assessment and management", "h": "chart8.html#hair-loss", "g": "skin", "c": "NICE CKS · NHS", "s": "hair-loss"}, {"t": "Hand &amp; Wrist: East Sussex pathway", "h": "index.html#local-hand-wrist", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-hand-wrist"}, {"t": "Headache assessment and migraine", "h": "chart2.html#migraine", "g": "neuro", "c": "NICE CG150", "s": "migraine"}, {"t": "Headache: red flags, diagnosis and treatment", "h": "chart7.html#headache", "g": "neuro", "c": "NICE CG150 · NG12", "s": "headache"}, {"t": "Heart failure", "h": "chart.html#heart-failure", "g": "heart", "c": "NG106", "s": "heart-failure"}, {"t": "Heavy menstrual bleeding", "h": "chart11.html#heavy-periods", "g": "women", "c": "NICE NG88", "s": "heavy-periods"}, {"t": "Hip: East Sussex pathway", "h": "index.html#local-hip", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-hip"}, {"t": "Hypertension", "h": "hypertension.html#hypertension", "g": "heart", "c": "NICE NG136", "s": "hypertension"}, {"t": "Hyponatraemia: assessment and first management", "h": "chart8.html#hyponatraemia", "g": "metabolic", "c": "NICE CKS", "s": "hyponatraemia"}, {"t": "Impetigo", "h": "chart2.html#impetigo", "g": "skin", "c": "NICE NG153", "s": "impetigo"}, {"t": "Insomnia: adult assessment and treatment", "h": "chart3.html#insomnia", "g": "mental", "c": "NICE CKS + TA922", "s": "insomnia"}, {"t": "Iron deficiency anaemia: adult work-up", "h": "chart3.html#anaemia", "g": "metabolic", "c": "NICE CKS + NG12", "s": "anaemia"}, {"t": "Irritable bowel syndrome", "h": "chart2.html#ibs", "g": "gut", "c": "NICE CG61", "s": "ibs"}, {"t": "Joint pain: patterns, red flags and referral", "h": "chart4.html#joint-pain", "g": "msk", "c": "NICE NG100 + NG65 + NG219 + NG226 · CKS", "s": "joint-pain"}, {"t": "Knee pain", "h": "chart.html#knee", "g": "msk", "c": "NICE CKS", "s": "knee"}, {"t": "Knee: East Sussex pathway", "h": "index.html#local-knee", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-knee"}, {"t": "Low back pain and sciatica", "h": "chart.html#back-pain", "g": "msk", "c": "NICE NG59", "s": "back-pain"}, {"t": "Lower urinary tract symptoms in men", "h": "chart12.html#luts-men", "g": "men", "c": "NICE CG97", "s": "luts-men"}, {"t": "Lumps &amp; Bumps: East Sussex pathway", "h": "index.html#local-lumps-bumps", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-lumps-bumps"}, {"t": "Menopause", "h": "chart.html#menopause", "g": "women", "c": "NICE NG23", "s": "menopause"}, {"t": "Mental health review: depression follow-up and SMI physical health", "h": "chart7.html#mental-health-review", "g": "mental", "c": "NICE NG222 · NG215 · QOF · Sussex LCS", "s": "mental-health-review"}, {"t": "Nausea and vomiting in pregnancy", "h": "chart11.html#nausea-pregnancy", "g": "women", "c": "NICE NG201 · MHRA", "s": "nausea-pregnancy"}, {"t": "New skin lesion or lump: assessment and referral", "h": "chart8.html#skin-lesion", "g": "skin", "c": "NICE NG12 · CKS", "s": "skin-lesion"}, {"t": "Non-blanching rash and suspected meningitis", "h": "chart10.html#meningitis-rash", "g": "children", "c": "NICE NG240", "s": "meningitis-rash"}, {"t": "Osteoarthritis", "h": "chart.html#osteoarthritis", "g": "msk", "c": "NG226", "s": "osteoarthritis"}, {"t": "Osteoporosis: fracture risk assessment", "h": "chart3.html#osteoporosis", "g": "msk", "c": "NICE NG259", "s": "osteoporosis"}, {"t": "Overweight and obesity: adult management", "h": "chart3.html#obesity", "g": "metabolic", "c": "NG246 + weight-management TAs", "s": "obesity"}, {"t": "Pain management: chronic pain assessment and support", "h": "chart7.html#pain-management", "g": "neuro", "c": "NICE NG193 · CKS", "s": "pain-management"}, {"t": "Palpitations: triage, assessment and referral", "h": "chart7.html#palpitations", "g": "heart", "c": "NICE CKS", "s": "palpitations"}, {"t": "Physiotherapy: East Sussex pathway", "h": "index.html#local-physiotherapy", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-physiotherapy"}, {"t": "Pneumonia", "h": "chart.html#cough", "g": "resp", "c": "NICE NG250", "s": "cough"}, {"t": "Possible ADHD: referral and shared-care questions", "h": "chart4.html#adhd", "g": "mental", "c": "NICE NG87 · England choice", "s": "adhd"}, {"t": "Possible autism: referral and support", "h": "chart4.html#autism", "g": "mental", "c": "NICE CG142 + CG128 · England choice", "s": "autism"}, {"t": "PSA testing and suspected prostate cancer", "h": "chart12.html#prostate-psa", "g": "men", "c": "NICE NG12", "s": "prostate-psa"}, {"t": "Psoriasis", "h": "chart13.html#psoriasis", "g": "skin", "c": "NICE CG153", "s": "psoriasis"}, {"t": "Rectal bleeding and suspected bowel cancer", "h": "chart13.html#rectal-bleeding", "g": "gut", "c": "NICE NG12", "s": "rectal-bleeding"}, {"t": "Recurrent UTI prevention", "h": "chart2.html#recurrent-uti", "g": "urinary", "c": "NICE NG112", "s": "recurrent-uti"}, {"t": "SCA consultation and real-world admin", "h": "chart5.html#sca-consultation", "g": "consult", "c": "RCGP SCA · GMC · suggested practice rhythm", "s": "sca-consultation"}, {"t": "Scabies: patient and household", "h": "chart6.html#scabies", "g": "skin", "c": "NICE CKS · BASHH · NHS · BNF · UKHSA", "s": "scabies"}, {"t": "Shoulder &amp; Elbow: East Sussex pathway", "h": "index.html#local-shoulder-elbow", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-shoulder-elbow"}, {"t": "Shoulder pain", "h": "chart.html#shoulder", "g": "msk", "c": "NICE CKS", "s": "shoulder"}, {"t": "Sore throat", "h": "chart.html#sore-throat", "g": "ent", "c": "NICE NG84", "s": "sore-throat"}, {"t": "Spine: East Sussex pathway", "h": "index.html#local-spine", "g": "msk", "c": "East Sussex MSK · area-specific", "s": "local-spine"}, {"t": "Stopping smoking", "h": "chart13.html#smoking", "g": "lifestyle", "c": "NICE NG209", "s": "smoking"}, {"t": "Suspected dementia: assessment and support", "h": "chart3.html#dementia", "g": "older", "c": "NICE NG97", "s": "dementia"}, {"t": "Suspected DVT or pulmonary embolism", "h": "chart9.html#dvt-pe", "g": "urgent", "c": "NICE NG158", "s": "dvt-pe"}, {"t": "Suspected sepsis (aged 16 or over)", "h": "chart9.html#sepsis-adult", "g": "urgent", "c": "NICE NG253", "s": "sepsis-adult"}, {"t": "Suspected stroke or TIA", "h": "chart9.html#tia-stroke", "g": "urgent", "c": "NICE NG128", "s": "tia-stroke"}, {"t": "The polysymptomatic patient: assess, prioritise, review", "h": "chart5.html#polysymptomatic", "g": "consult", "c": "NHS · NICE NG56 / NG193 / NG206 / NG12 · GMC", "s": "polysymptomatic"}, {"t": "Thyroid disease", "h": "chart.html#thyroid", "g": "metabolic", "c": "NG145", "s": "thyroid"}, {"t": "Tinnitus: triage, referral and support", "h": "chart7.html#tinnitus", "g": "ent", "c": "NICE NG155 · CKS", "s": "tinnitus"}, {"t": "Trigeminal neuralgia: diagnosis and carbamazepine pathway", "h": "chart8.html#trigeminal-neuralgia", "g": "neuro", "c": "NICE CKS · BNF", "s": "trigeminal-neuralgia"}, {"t": "Type 2 diabetes", "h": "chart.html#t2dm", "g": "metabolic", "c": "NICE NG28", "s": "t2dm"}, {"t": "UTI in non-pregnant women", "h": "chart.html#uti", "g": "urinary", "c": "NICE NG109", "s": "uti"}, {"t": "UTI in under 16s", "h": "chart10.html#uti-child", "g": "children", "c": "NICE NG224 · NG109", "s": "uti-child"}, {"t": "Vaginal discharge: assessment and routing", "h": "chart3.html#vaginal-discharge", "g": "women", "c": "NICE CKS + NG12", "s": "vaginal-discharge"}];
  var d=document,body=d.body;

  /* ---- 1. pathway search in the top bar ---- */
  var form=d.querySelector('.sh-search'),q=form&&form.querySelector('input'),list=form&&form.querySelector('.sh-results');
  function norm(s){return (s||'').toLowerCase().replace(/&amp;/g,'&').replace(/[^a-z0-9&]+/g,' ').trim();}
  DATA.forEach(function(r){r.k=norm(r.t+' '+(GROUPS[r.g]||'')+' '+r.c+' '+r.s);});
  function render(){
    var v=norm(q.value);if(!v){list.hidden=true;return;}
    var parts=v.split(' '),hits=DATA.filter(function(r){return parts.every(function(p){return r.k.indexOf(p)>-1;});});
    hits.sort(function(a,b){return (norm(a.t).indexOf(parts[0])===0?0:1)-(norm(b.t).indexOf(parts[0])===0?0:1);});
    list.innerHTML='';
    if(!hits.length){var li=d.createElement('li');li.className='r-none';li.textContent='No pathway matches. Press Enter to search the full directory.';list.appendChild(li);}
    hits.slice(0,12).forEach(function(r){
      var li=d.createElement('li'),a=d.createElement('a');a.href=r.h;
      var t=d.createElement('span');t.className='r-t';t.innerHTML=r.t;
      var g=d.createElement('span');g.className='r-g';g.textContent=(GROUPS[r.g]||'')+(r.c?' · '+r.c.replace(/&amp;/g,'&'):'');
      a.appendChild(t);a.appendChild(g);li.appendChild(a);list.appendChild(li);
    });
    list.hidden=false;
  }
  if(form&&q&&list){
    q.addEventListener('input',render);
    q.addEventListener('keydown',function(e){
      if(e.key==='ArrowDown'){var a=list.querySelector('a');if(a){e.preventDefault();a.focus();}}
      if(e.key==='Escape'){q.value='';render();}
    });
    form.addEventListener('submit',function(e){var a=list.querySelector('a');if(a&&!list.hidden){e.preventDefault();location.href=a.href;close();}});
    list.addEventListener('keydown',function(e){
      var links=[].slice.call(list.querySelectorAll('a')),i=links.indexOf(d.activeElement);
      if(e.key==='ArrowDown'&&i<links.length-1){e.preventDefault();links[i+1].focus();}
      if(e.key==='ArrowUp'){e.preventDefault();(i>0?links[i-1]:q).focus();}
      if(e.key==='Escape'){e.preventDefault();q.focus();close();}
    });
    list.addEventListener('click',function(e){if(e.target.closest('a'))setTimeout(close,0);});
    d.addEventListener('click',function(e){if(!form.contains(e.target))close();});
  }
  function close(){if(list){list.hidden=true;}}

  /* ---- 2. route view: page header shrinks so the pathway comes first ---- */
  function routeState(){
    var k=decodeURIComponent(location.hash.slice(1)),hit=null;
    if(k){d.querySelectorAll('section.condition').forEach(function(s){if(s.id===k)hit=s;});}
    body.classList.toggle('route-active',!!hit);
    if(hit)spy(hit);
  }

  /* ---- 3. steps toolbar label ---- */
  d.querySelectorAll('.route').forEach(function(r){
    var n=r.querySelectorAll(':scope > .chart > .flow-box').length,bar=r.querySelector(':scope > .expcontrols');
    if(bar&&n)bar.setAttribute('data-count',n+(n===1?' step':' steps'));
  });

  /* ---- 4. readable step text: split long paragraphs at sentence ends and before ALL-CAPS labels.
          Only whitespace between sentences changes; every word stays the same (checked by test). ---- */
  var ABBR=/(?:\b(?:e\.g|i\.e|etc|vs|approx|incl|cf|Dr|St|No|Fig|pp?|al|ca))\.$/i;
  var LABEL=/^[A-Z][A-Z0-9\/&'’\-]+(?:\s+[A-Z0-9\/&'’\-]+)*(?:\s*\([^)]{0,90}\))?\s*:/;
  var CONFLICT=/^(SOURCE CONFLICT|SAFETY CONFLICT|UNRESOLVED)\b/;
  function sentences(t){
    var out=[],start=0,re=/[.?!]\)?\s+(?=[A-Z(‘"])/g,m;
    while((m=re.exec(t))){var seg=t.slice(start,m.index+1);if(ABBR.test(seg))continue;
      var end=m.index+m[0].replace(/\s+$/,'').length;out.push(t.slice(start,end));start=m.index+m[0].length;}
    out.push(t.slice(start));return out.filter(function(s){return s.trim();});
  }
  function isLabel(s){var m=s.match(LABEL);return !!(m&&/[A-Z]{3}/.test(m[0])&&m[0].replace(/\(.*$/,'').replace(/[^A-Z]/g,'').length>=4);}
  function fmt(p){
    if(p.children.length||p.dataset.fmt)return;
    var t=p.textContent;if(t.length<320&&!LABEL.test(t)&&!/SOURCE CONFLICT|SAFETY CONFLICT/.test(t))return;
    var ss=sentences(t),paras=[],cur=null;
    ss.forEach(function(s){
      var lab=isLabel(s),con=CONFLICT.test(s);
      if(!cur||lab||con||(!cur.con&&cur.len>380&&cur.parts.length>=2)){cur={parts:[],len:0,lab:lab,con:con};paras.push(cur);}
      cur.parts.push(s);cur.len+=s.length;
    });
    if(paras.length<2&&!paras[0].lab&&!paras[0].con)return;
    var frag=d.createDocumentFragment();
    paras.forEach(function(g){
      var np=d.createElement('p'),txt=g.parts.join(' ');np.dataset.fmt='1';
      if(g.con)np.className='conflict';
      var m=g.con?txt.match(/^(SOURCE CONFLICT|SAFETY CONFLICT|UNRESOLVED)/):(g.lab?txt.match(LABEL):null);
      if(m){var b=d.createElement('strong');b.className='lbl';b.textContent=m[0];np.appendChild(b);np.appendChild(d.createTextNode(txt.slice(m[0].length)));}
      else np.textContent=txt;
      frag.appendChild(np);
    });
    p.parentNode.replaceChild(frag,p);
  }
  d.querySelectorAll('.flow-box .detail > p').forEach(fmt);

  /* ---- 5. steps rail: whole row jumps; current step highlighted ---- */
  d.addEventListener('click',function(e){
    var li=e.target.closest&&e.target.closest('.learn-top .kp li');
    if(li&&!e.target.closest('button')){var b=li.querySelector('.kp-jump');if(b)b.click();}
    var j=e.target.closest&&e.target.closest('.kp-jump');
    if(j){var box=d.getElementById(j.getAttribute('data-jump'));if(box){box.classList.add('is-current');setTimeout(function(){box.classList.remove('is-current');},1600);}}
  });
  var obs=null;
  function spy(route){
    if(!('IntersectionObserver' in window))return;
    if(obs)obs.disconnect();
    var items={};route.querySelectorAll('.learn-top .kp-jump').forEach(function(b){items[b.getAttribute('data-jump')]=b.closest('li');});
    obs=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){
      Object.keys(items).forEach(function(k){items[k].classList.toggle('is-current',k===en.target.id);});}});},{rootMargin:'-25% 0px -65% 0px'});
    route.querySelectorAll(':scope > .chart > .flow-box').forEach(function(b){obs.observe(b);});
  }
  /* on phones and tablets the step outline starts closed so the flowchart is near the top */
  if(window.matchMedia&&window.matchMedia('(max-width:1099px)').matches){
    d.querySelectorAll('.route > .learn-top > details[open]').forEach(function(x){x.open=false;});
  }

  /* ---- 6. print: open every step of the visible pathway ---- */
  var opened=[];
  window.addEventListener('beforeprint',function(){opened=[];d.querySelectorAll('.route:not([hidden]) .flow-box:not([open])').forEach(function(x){x.open=true;opened.push(x);});});
  window.addEventListener('afterprint',function(){opened.forEach(function(x){x.open=false;});});

  window.addEventListener('hashchange',routeState);routeState();
})();
