/******************************
 * Footer year (safe)
 ******************************/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/******************************
 * Hero typed text (safe)
 * Requires: <span id="typed"></span>
 ******************************/
(function runTyped() {
  const el = document.getElementById('typed');
  if (!el) return; // no hero typed element on this page

  const messages = [
    "Geospatial data science student @ DSU",
    "I build clean, readable maps",
    "ArcGIS Pro • Remote Sensing • Python"
  ];

  let m = 0, i = 0, deleting = false;

  function type() {
    const text = messages[m];
    el.textContent = text.slice(0, i);

    if (!deleting && i < text.length) { i++; setTimeout(type, 50); return; }
    if (!deleting && i === text.length) { deleting = true; setTimeout(type, 1200); return; }
    if (deleting && i > 0) { i--; setTimeout(type, 28); return; }
    if (deleting && i === 0) { deleting = false; m = (m + 1) % messages.length; setTimeout(type, 140); return; }
  }
  type();
})();

/******************************
 * Project filters (multi-tag)
 * Buttons: .btn-filter[data-filter="all|web|school|..."]
 * Cards:   .project-card[data-category="school web"] // space, comma, or pipe separated
 ******************************/
(function setupFilters() {
  const filterBtns = document.querySelectorAll('.btn-filter');
  const cards = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !cards.length) return;

  const parseTags = (val) =>
    (val || '')
      .toLowerCase()
      .split(/[\s,|]+/)   // supports "a b", "a,b", "a|b"
      .filter(Boolean);

  function applyFilter(filter) {
    const f = (filter || 'all').toLowerCase();
    cards.forEach(card => {
      const tags = parseTags(card.dataset.category);
      const show = f === 'all' || tags.includes(f);
      card.style.display = show ? '' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // Initialize with the button that already has .active, else 'all'
  const activeBtn = document.querySelector('.btn-filter.active');
  applyFilter(activeBtn ? activeBtn.dataset.filter : 'all');
})();

/******************************
 * Make entire project card clickable
 ******************************/
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      // If the user clicked a button/link inside the card, don’t override.
      if (e.target.closest("a, button")) return;

      const link = card.querySelector(".btn-primary");
      if (link && link.href) {
        window.location.href = link.href;
      }
    });
  });
});
