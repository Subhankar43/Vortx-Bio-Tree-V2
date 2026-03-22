// Vortx Portfolio — script.js

// ─── Utility ─────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showToast(msg) {
  const toast = $('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ─── Share / Copy link arrows ─────────────────────────────
document.querySelectorAll('.link-arrow').forEach(arrow => {
  arrow.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const card = arrow.closest('.link-card');
    const href = card?.getAttribute('href');
    if (!href) return;
    const url = href.startsWith('http') ? href : window.location.origin + '/' + href;
    navigator.clipboard.writeText(url)
      .then(() => showToast('Link copied!'))
      .catch(() => showToast('Copy failed'));
  });
});

// ─── Share button (topbar) ────────────────────────────────
const shareBtn = $('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: 'Vortx', url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast('Page link copied!'))
        .catch(() => showToast('Copy failed'));
    }
  });
}