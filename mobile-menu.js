const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".mobile-menu-toggle");
const siteNavigation = document.querySelector("#main-navigation");

function setMobileMenu(open) {
  if (!siteHeader || !menuToggle) return;

  siteHeader.classList.toggle("mobile-nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

if (siteHeader && menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    setMobileMenu(!siteHeader.classList.contains("mobile-nav-open"));
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMobileMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setMobileMenu(false);
  });
}
