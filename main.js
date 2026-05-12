/******************************
 * Footer year (safe)
 ******************************/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/******************************
 * Render Projects Dynamically
 ******************************/
const projectGrid = document.getElementById("project-grid");

function renderProjects(projectArray) {

  if (!projectGrid) return;

  projectGrid.innerHTML = "";

  projectArray.forEach(project => {

    // Create technology badges
    const techBadges = (project.technologies || [])
      .map(tech =>
        `<span class="badge bg-secondary me-1">${tech}</span>`
      )
      .join("");

    // Convert category array into string
    const categoryString = project.category.join(" ");

    // Create project card
    const card = `
      <div
        class="col-md-6 col-lg-4 project-card"
        data-category="${categoryString}"
      >

        <div class="card h-100 border-0 shadow-sm">

          <img
            src="${project.image}"
            class="card-img-top"
            alt="${project.title}"
            loading="lazy"
          />

          <div class="card-body d-flex flex-column text-center">

            <h5 class="card-title mb-2">
              ${project.title}
            </h5>

            <p class="text-secondary small mb-3">
              ${project.description}
            </p>

            <div class="mb-3">
              ${techBadges}
            </div>

            <div class="d-flex gap-2 justify-content-center mt-auto">

              <a
                class="btn btn-sm btn-primary"
                href="${project.projectLink}"
              >
                View Project
              </a>

              <a
                class="btn btn-sm btn-outline-dark"
                href="${project.githubLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>
        </div>
      </div>
    `;

    projectGrid.innerHTML += card;
  });
}

renderProjects(projects);

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

  if (!filterBtns.length) return;

  function applyFilter(filter) {

    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {

      const categories =
        (card.dataset.category || "").split(" ");

      const show =
        filter === 'all' ||
        categories.includes(filter);

      card.style.display = show ? '' : 'none';
    });
  }

  filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      filterBtns.forEach(b =>
        b.classList.remove('active')
      );

      btn.classList.add('active');

      applyFilter(btn.dataset.filter);
    });
  });

  applyFilter('all');

})();

/******************************
 * Make entire project card clickable
 ******************************/

document.addEventListener("click", (e) => {

  const card = e.target.closest(".project-card");

  if (!card) return;

  // Ignore button/link clicks
  if (e.target.closest("a, button")) return;

  const link = card.querySelector(".btn-primary");

  if (link && link.href) {
    window.location.href = link.href;
  }
});
