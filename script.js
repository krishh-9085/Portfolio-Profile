function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.body.classList.add("dark-button"); // Start in dark mode

var moon = document.getElementById("moon");
var kr = document.getElementById("kr");
moon.src = "assets/SUN.svg"; // Set the moon icon to sun initially

moon.onclick = function () {
  document.body.classList.toggle("dark-button");
  if (document.body.classList.contains("dark-button")) {
    moon.src = "assets/SUN.svg"; // Keep sun icon when in dark mode
    kr.src = "assets/logo_dark.png"; // Use dark logo
  } else {
    moon.src = "assets/MOON.svg"; // Change to moon icon when switching to light mode
    kr.src = "assets/fevicon.png"; // Use light logo
  }
};

var sun = document.getElementById("sun");
var kr_ham = document.getElementById("kr_ham");
sun.onclick = function () {
  document.body.classList.toggle("dark-button"); // Switch to light mode

  if (document.body.classList.contains("dark-button")) {
    sun.src = "assets/SUN.svg";
    kr_ham.src = "assets/logo_dark.png";
  } else {
    sun.src = "assets/MOON.svg";
    kr_ham.src = "assets/fevicon.png";
  }
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-button");
  const icons = document.querySelectorAll(".social-container .icon");
  icons.forEach((icon) => {
    icon.style.filter = document.body.classList.contains("dark-button")
      ? "invert(1)"
      : "invert(0)";
  });
};

// Ensure the page fades in when it fully loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Add scroll event listener for fade-in on scroll
// Apply fade-in effect to elements when they come into view on scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    // Check if element is in the viewport
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});
function applyHoverEffect(element) {
  // Add a 'hover' class when the button is clicked
  element.classList.add('hover-effect');

  // Remove it after a short delay to simulate hover behavior
  setTimeout(() => {
    element.classList.remove('hover-effect');
  }, 300); // Adjust delay based on your preference
}
