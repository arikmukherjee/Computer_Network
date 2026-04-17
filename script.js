const toggle = document.getElementById("themeToggle");
const body = document.body;
const text = toggle.querySelector(".toggle-text");
const icon = toggle.querySelector(".toggle-icon");

function applyTheme(mode) {
  if (mode === "dark") {
    body.classList.add("dark");
    text.textContent = "Dark";
    icon.textContent = "☾";
  } else {
    body.classList.remove("dark");
    text.textContent = "Light";
    icon.textContent = "☀";
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  applyTheme(body.classList.contains("dark") ? "light" : "dark");
});