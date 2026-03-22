// Vortx Portfolio — Script

// ─── Share / Copy links ──────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg || 'Link copied!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// Arrow buttons on each card → copy card's href
document.querySelectorAll('.link-arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const card = arrow.closest('.link-card');
    const href = card?.getAttribute('href');
    if (href) {
      const fullUrl = href.startsWith('http') ? href : window.location.origin + '/' + href;
      navigator.clipboard.writeText(fullUrl).then(() => showToast('Link copied!')).catch(() => showToast('Copy failed'));
    }
  });
});

// Share button → copy current page URL
const shareBtn = document.getElementById('shareBtn');
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