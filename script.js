document.addEventListener("DOMContentLoaded", () => {
  // Highlight the active section
  const links = document.querySelectorAll(".menu-item a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".content").forEach(section => section.classList.add("hidden"));
      document.querySelector(link.getAttribute("href")).classList.remove("hidden");
    });
  });
});