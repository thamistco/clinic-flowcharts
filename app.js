/* Directory search and clinical-area filter (UI redesign, 21 Nov 2026). */
(function(){
const cards=[...document.querySelectorAll('#pathways article')];
const groups=[...document.querySelectorAll('#pathways .group')];
const search=document.querySelector('#search');
let area='all';
const q0=new URLSearchParams(location.search).get('q');
if(q0)search.value=q0;
function filter(){
  const q=search.value.toLowerCase().trim();const parts=q.split(/\s+/).filter(Boolean);let n=0;
  cards.forEach(c=>{const hay=(c.dataset.search+' '+c.dataset.groupLabel+' '+c.querySelector('h4').textContent).toLowerCase();const match=parts.every(p=>hay.includes(p))&&(area==='all'||c.dataset.group===area);c.hidden=!match;if(match)n++});
  groups.forEach(g=>{g.hidden=!g.querySelector('article:not([hidden])')});
  document.querySelector('#count').textContent=`${n} of ${cards.length} entries`;
  document.querySelector('#empty').hidden=n>0;
}
search.addEventListener('input',filter);
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  area=b.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});
  filter();
}));
filter();
if(q0)document.querySelector('#pathways').scrollIntoView();
document.querySelector('#copy').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(document.querySelector('#template').textContent);status.textContent='Headings copied.'}catch{status.textContent='Copy unavailable. Select the headings above and copy them manually.'}});
})();
