window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3D36B20E51');
document.addEventListener('click', function (e) {
  var a = e.target.closest('a');
  if (!a || !a.href) return;
  if (a.href.indexOf('wa.me') !== -1 || a.href.indexOf('whatsapp') !== -1) {
    gtag('event', 'whatsapp_click', { event_category: 'engagement', event_label: a.href });
  }
});
