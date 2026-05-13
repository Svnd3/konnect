const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), index * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

reveals.forEach((el) => observer.observe(el));

function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item.open")
    .forEach((i) => i.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}
