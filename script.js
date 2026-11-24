const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function setMenuState(isOpen) {
  navLinks.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !navLinks.classList.contains("open");
    setMenuState(isOpen);
  });

  // Close the mobile navigation after a section link is selected.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });
}

// Keep the footer year current.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
