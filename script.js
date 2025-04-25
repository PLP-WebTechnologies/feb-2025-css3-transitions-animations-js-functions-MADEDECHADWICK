const animateBtn = document.getElementById("animateBtn");
const saveBtn = document.getElementById("savePreferenceBtn");

// Animate button on click
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");

  // Remove the class after animation completes to allow re-triggering
  setTimeout(() => {
    animateBtn.classList.remove("animate");
  }, 500);
});

// Save user preference to localStorage
saveBtn.addEventListener("click", () => {
  const currentTheme = document.body.style.backgroundColor === "white" ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "white" : "#121212";
  document.body.style.backgroundColor = newTheme;

  localStorage.setItem("preferredTheme", newTheme);
  alert(`Saved theme: ${newTheme}`);
});

// Load preference from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme) {
    document.body.style.backgroundColor = savedTheme;
  }
});
