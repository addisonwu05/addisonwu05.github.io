// Topic filter for the paper list. Entries sit in one fixed run and carry their
// own topic, so filtering removes rows without ever reordering them. The choice
// lives in the URL hash, so index.html#data opens straight onto that topic and
// back/forward step through filters. Without JS nothing is hidden and the full
// list still reads top to bottom.
(function () {
  var nav = document.querySelector('.filters');
  if (!nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[data-filter]'));
  var entries = Array.prototype.slice.call(document.querySelectorAll('.pub[data-topic]'));

  function apply(name) {
    entries.forEach(function (entry) {
      entry.hidden = name !== 'all' && entry.getAttribute('data-topic') !== name;
    });
    links.forEach(function (link) {
      var on = link.getAttribute('data-filter') === name;
      link.classList.toggle('is-active', on);
      if (on) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function fromHash() {
    var wanted = (window.location.hash || '').slice(1);
    var known = links.some(function (link) {
      return link.getAttribute('data-filter') === wanted;
    });
    apply(known ? wanted : 'all');
  }

  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
