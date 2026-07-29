// Click a paper figure to view it full size in an overlay, rather than
// navigating away to the image file. Falls back to a plain link without JS.
(function () {
  var overlay, overlayImg;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    var close = document.createElement('button');
    close.className = 'lightbox-close';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';

    overlayImg = document.createElement('img');
    overlayImg.alt = '';

    overlay.appendChild(close);
    overlay.appendChild(overlayImg);
    overlay.addEventListener('click', hide);
    document.body.appendChild(overlay);
  }

  function show(src, alt) {
    if (!overlay) build();
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
  }

  function hide() {
    if (overlay) overlay.classList.remove('is-open');
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('.pub-fig a');
    if (!link || e.metaKey || e.ctrlKey || e.shiftKey) return; // let cmd-click open a tab
    e.preventDefault();
    show(link.getAttribute('href'), e.target.alt);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hide();
  });
})();
