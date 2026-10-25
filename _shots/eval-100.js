window.ARC.progress.set('log-001', 100);
window.ARC.progress.refresh();
var el = document.querySelector('.toc-item .t-title');
var cs = getComputedStyle(el);
var st = document.querySelector('.toc-item .t-state');
return { title: el.textContent, color: cs.color, className: el.className, stateText: st.textContent };
