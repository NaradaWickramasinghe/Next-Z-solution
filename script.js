/* Next Z Solutions : script.js */
(function () {
  'use strict';

  var PHONE_WA = '94764893143';                 // 076 489 3143 in international format
  var EMAIL = 'nextzsolution88@gmail.com';
  var root = document.documentElement;

  /* ---------- Footer year ---------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  var themeBtn = document.getElementById('themeToggle');
  function syncThemeLabel() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  syncThemeLabel();
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('nz-theme', next); } catch (e) {}
    syncThemeLabel();
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Active nav link on scroll ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav ul a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });

    /* ---------- Scroll reveal ---------- */
    var targets = document.querySelectorAll('.section-head, .service, .why, .pillar, .about-copy, .info-row, .contact-form, .cta-inner');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contactForm');
  var fields = {
    name: form.elements.name, phone: form.elements.phone, email: form.elements.email,
    service: form.elements.service, message: form.elements.message
  };

  function setError(input, msg) {
    var wrap = input.closest('.field');
    var out = wrap.querySelector('.err');
    wrap.classList.toggle('invalid', !!msg);
    if (out) out.textContent = msg || '';
  }

  function validate() {
    var ok = true;
    setError(fields.name, ''); setError(fields.email, ''); setError(fields.service, ''); setError(fields.message, '');
    if (!fields.name.value.trim()) { setError(fields.name, 'Please enter your name.'); ok = false; }
    var em = fields.email.value.trim();
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setError(fields.email, 'Please enter a valid email address.'); ok = false; }
    if (!fields.service.value) { setError(fields.service, 'Please choose a service.'); ok = false; }
    if (!fields.message.value.trim()) { setError(fields.message, 'Please write a short message.'); ok = false; }
    if (!ok) {
      var first = form.querySelector('.invalid input, .invalid select, .invalid textarea');
      if (first) first.focus();
    }
    return ok;
  }

  function buildText() {
    var lines = [
      'Hello Next Z Solutions,',
      '',
      'Name: ' + fields.name.value.trim(),
      'Service: ' + fields.service.value
    ];
    if (fields.phone.value.trim()) lines.push('Phone: ' + fields.phone.value.trim());
    if (fields.email.value.trim()) lines.push('Email: ' + fields.email.value.trim());
    lines.push('', 'Message:', fields.message.value.trim());
    return lines.join('\n');
  }

  document.getElementById('sendWhatsapp').addEventListener('click', function () {
    if (!validate()) return;
    window.open('https://wa.me/' + PHONE_WA + '?text=' + encodeURIComponent(buildText()), '_blank', 'noopener');
  });

  document.getElementById('sendEmail').addEventListener('click', function () {
    if (!validate()) return;
    var subject = 'Website enquiry: ' + fields.service.value;
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildText());
  });

  form.addEventListener('submit', function (e) { e.preventDefault(); });
})();
