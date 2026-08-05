(function () {
  var root = document.querySelector('.csff');
  if (!root) return;

  var items = root.querySelectorAll('.csff__reveal');
  if (!items.length) return;

  // Only opt into the hidden-until-revealed state once JS is confirmed running.
  root.classList.add('csff--js');

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  items.forEach(function (el) { io.observe(el); });
})();