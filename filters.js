// Topic filter for the paper list. The filter lives in the URL hash so a link
// like index.html#data opens straight onto that topic, and back/forward work.
// Without JS nothing is hidden, so the full list still reads top to bottom.
(function () {
  var nav = document.querySelector('.filters');
  if (!nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[data-filter]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('section[data-topic]'));

  function apply(name) {
    sections.forEach(function (section) {
      section.hidden = name !== 'all' && section.getAttribute('data-topic') !== name;
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
