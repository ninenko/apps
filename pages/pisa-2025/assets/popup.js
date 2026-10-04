/* F2: progressive enhancement for the (?) pop-ups (details.pop). Without JavaScript the pop-up still opens and closes
   from the keyboard (Enter / Space on the summary); this file adds Esc, one-open-at-a-time and click-outside. */
(function () {
  'use strict';
  var openPops = function () { return Array.prototype.slice.call(document.querySelectorAll('details.pop[open]')); };
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    var o = openPops();
    if (!o.length) return;
    var active = document.activeElement && document.activeElement.closest ? document.activeElement.closest('details.pop') : null;
    var focusTarget = active || o[0];
    o.forEach(function (d) { d.removeAttribute('open'); });
    var s = focusTarget.querySelector('summary');
    if (s) s.focus();
  });
  document.addEventListener('toggle', function (e) {
    var t = e.target;
    if (!t || !t.matches || !t.matches('details.pop') || !t.open) return;
    openPops().forEach(function (d) { if (d !== t) d.removeAttribute('open'); });
  }, true);
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('details.pop')) return;
    openPops().forEach(function (d) { d.removeAttribute('open'); });
  });
}());
