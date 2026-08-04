// ReviewNest — shared site script

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var overlay = document.querySelector('.nav-overlay');
  var close = document.querySelector('.nav-close');

  function openNav() {
    nav.classList.add('open');
    overlay.classList.add('open');
  }
  function closeNav() {
    nav.classList.remove('open');
    overlay.classList.remove('open');
  }
  if (toggle) toggle.addEventListener('click', openNav);
  if (close) close.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Highlight current page in nav
  var links = document.querySelectorAll('.main-nav a');
  var path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (a) {
    if (a.getAttribute('href') === path) a.style.color = 'var(--color-accent)';
  });
});

/*
  AFFILIATE LINK NOTE FOR SITE OWNER:
  Every "Check Price" / "View Deal" button uses a real <a href="..."> link.
  To update a link, open the HTML file, find the button, and replace the
  href value (marked with REPLACE-WITH-AFFILIATE-LINK) with your real
  affiliate URL from the merchant's affiliate program (e.g. Amazon Associates).
  rel="nofollow sponsored noopener" is already applied for SEO/compliance —
  keep that attribute when you paste your new link.
*/
