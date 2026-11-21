/* v7: progressive enhancement only. Without JavaScript all content is still readable; copy and jump buttons stay hidden. */
(function(){
  var status=document.getElementById('link-copy-status');
  document.querySelectorAll('[data-js]').forEach(function(e){e.hidden=false});
  function say(msg){if(!status)return;status.textContent='';setTimeout(function(){status.textContent=msg;},30);}
  function fallback(btn,url){
    var li=btn.closest('li')||btn.parentNode;var inp=li.querySelector('.copy-fallback');
    if(!inp){inp=document.createElement('input');inp.type='text';inp.readOnly=true;inp.className='copy-fallback';inp.setAttribute('aria-label','Link to copy: '+(btn.getAttribute('data-name')||''));li.appendChild(inp);}
    inp.value=url;inp.focus();inp.select();say('Copy not available here. The link is selected in the box; copy it manually.');
  }
  document.addEventListener('click',function(ev){var sk=ev.target.closest&&ev.target.closest('[data-skip]');if(sk){ev.preventDefault();var mn=document.getElementById('main');if(mn){mn.focus({preventScroll:true});mn.scrollIntoView();}return;}
    var b=ev.target.closest&&ev.target.closest('.copy-link');
    if(b){var url=b.getAttribute('data-url'),name=b.getAttribute('data-name')||'link';
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(url).then(function(){say('Link copied: '+name)},function(){fallback(b,url)});}
      else{fallback(b,url);}
      return;}
    var j=ev.target.closest&&ev.target.closest('.kp-jump');
    if(j){var d=document.getElementById(j.getAttribute('data-jump'));if(d){d.open=true;var s=d.querySelector('summary');d.scrollIntoView({block:'start'});if(s)s.focus({preventScroll:true});}}
  });
  function focusRoute(){var k=decodeURIComponent(location.hash.slice(1));if(!k)return;var sec=document.getElementById(k);if(!sec||sec.hidden)return;var h=sec.querySelector('h2');if(h){h.setAttribute('tabindex','-1');h.focus({preventScroll:true});}}
  window.addEventListener('hashchange',focusRoute);
  /* initial load: do not steal focus from the skip link on first tab; only move focus when arriving on a route link */
  if(document.referrer&&location.hash)focusRoute();
})();
