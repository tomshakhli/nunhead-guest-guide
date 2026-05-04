// Copy-to-clipboard for any element with .copy-btn and data-copy attribute
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.dataset.copy;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = '✓ ' + (btn.dataset.copiedLabel || 'Copied');
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 1500);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  });
});
