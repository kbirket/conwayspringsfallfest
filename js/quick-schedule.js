(function () {
  var button = document.querySelector('[data-quick-schedule-open]');
  var panel = document.getElementById('csff-quick-schedule');
  var backdrop = document.querySelector('[data-quick-schedule-backdrop]');
  if (!button || !panel || !backdrop) return;

  var closeButton = panel.querySelector('[data-quick-schedule-close]');
  var lastFocus = null;

  function openPanel() {
    lastFocus = document.activeElement;
    panel.hidden = false;
    backdrop.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeButton) closeButton.focus();
  }

  function closePanel() {
    panel.hidden = true;
    backdrop.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  button.addEventListener('click', function () {
    if (panel.hidden) openPanel(); else closePanel();
  });
  if (closeButton) closeButton.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
  });
})();
