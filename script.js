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
  icons.forEach(icon => {
    icon.style.filter = document.body.classList.contains("dark-button") ? "invert(1)" : "invert(0)";
  });
};