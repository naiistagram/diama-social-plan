document.addEventListener('DOMContentLoaded', function () {
  var tog = document.getElementById('navTog');
  var links = document.getElementById('navLinks');

  if (tog && links) {
    tog.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      tog.classList.toggle('open', open);
      tog.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        tog.classList.remove('open');
        tog.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
