// Dark mode toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

});

// Dynamic year

document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (demo only)

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you, Sheyamala will get back to you soon!");

  form.reset();

});