(function () {
  var isDE = document.documentElement.lang === 'de';
  var text = isDE ? 'Diese Website verwendet Cookies. ' : 'This site uses cookies. ';
  var learnMore = isDE ? 'Mehr erfahren' : 'Learn more';
  var declineLabel = isDE ? 'Ablehnen' : 'Decline';
  var acceptLabel = isDE ? 'Akzeptieren' : 'Accept';

  var style = document.createElement('style');
  style.textContent =
    '#cookie-banner{position:fixed;bottom:1rem;left:1rem;z-index:9999;' +
    'background:rgba(20,20,20,0.97);border:1px solid rgba(245,245,220,0.15);' +
    'border-radius:10px;max-width:260px;padding:0.85rem 1rem;' +
    'display:flex;flex-direction:column;gap:0.5rem;' +
    'font-family:inherit;}' +
    '#cookie-banner.hidden{display:none;}' +
    '#cookie-banner p{color:#9ca3af;font-size:0.8rem;margin:0;}' +
    '#cookie-banner a{color:#9ca3af;text-decoration:underline;}' +
    '#cookie-banner .cookie-btns{display:flex;gap:0.5rem;}' +
    '#cookie-banner button{padding:0.4rem 1rem;border-radius:6px;font-size:0.75rem;' +
    'cursor:pointer;text-transform:uppercase;letter-spacing:0.5px;font-weight:700;' +
    'border:none;}' +
    '#cookie-banner .cookie-btn-decline{background:transparent;color:#f5f5dc;' +
    'border:1px solid rgba(245,245,220,0.3);}' +
    '#cookie-banner .cookie-btn-accept{background:#f5f5dc;color:#000;}';
  document.head.appendChild(style);

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML =
    '<p>' + text + '<a href="/datenschutz/">' + learnMore + '</a></p>' +
    '<div class="cookie-btns">' +
    '<button type="button" class="cookie-btn-decline">' + declineLabel + '</button>' +
    '<button type="button" class="cookie-btn-accept">' + acceptLabel + '</button>' +
    '</div>';
  document.body.appendChild(banner);

  var consent = localStorage.getItem('cookie_consent');
  if (consent) {
    banner.classList.add('hidden');
  }

  banner.querySelector('.cookie-btn-accept').addEventListener('click', function () {
    banner.classList.add('hidden');
    localStorage.setItem('cookie_consent', 'accepted');
    if (window.loadGoogleAnalytics) window.loadGoogleAnalytics();
  });
  banner.querySelector('.cookie-btn-decline').addEventListener('click', function () {
    banner.classList.add('hidden');
    localStorage.setItem('cookie_consent', 'declined');
  });
})();
