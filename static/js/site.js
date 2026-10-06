const copyButton = document.querySelector('#copy-citation');
const status = document.querySelector('#copy-status');
const citation = document.querySelector('#bibtex-code');

copyButton.addEventListener('click', async () => {
  const text = citation.textContent.trim();
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    copyButton.querySelector('span').textContent = 'Copied';
    status.textContent = 'BibTeX copied to clipboard.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';
  }
});

const topButton = document.querySelector('.back-to-top');
const updateTopButton = () => topButton.classList.toggle('visible', window.scrollY > 600);
window.addEventListener('scroll', updateTopButton, { passive: true });
updateTopButton();
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  document.querySelector('h1').focus({ preventScroll: true });
});
