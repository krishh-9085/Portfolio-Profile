function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Check the system theme on load and set the initial mode
function setInitialTheme() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkMode) {
    document.body.classList.add("dark-button");
    moon.src = "assets/SUN.svg";
    kr.src = "assets/logo_dark.png";
    kr_ham.src = "assets/logo_dark.png";
  } else {
    document.body.classList.remove("dark-button");
    moon.src = "assets/MOON.svg";
    kr.src = "assets/fevicon.png";
    kr_ham.src = "assets/fevicon.png";
  }
}

// Listen for system theme changes and update the mode dynamically
function watchSystemTheme() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      // System switched to dark mode
      document.body.classList.add("dark-button");
      moon.src = "assets/SUN.svg";
      kr.src = "assets/logo_dark.png";
      kr_ham.src = "assets/logo_dark.png";
    } else {
      // System switched to light mode
      document.body.classList.remove("dark-button");
      moon.src = "assets/MOON.svg";
      kr.src = "assets/fevicon.png";
      kr_ham.src = "assets/fevicon.png";
    }
  });
}

document.body.classList.add("dark-button"); // Start in dark mode by default

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
  // Add transition effect to navbar on mode switch
  document.querySelector('nav').classList.add('transitioning');
  setTimeout(() => {
    document.querySelector('nav').classList.remove('transitioning');
  }, 300); // Match the duration of the CSS transition
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
  // Add transition effect to navbar on mode switch
  document.querySelector('nav').classList.add('transitioning');
  setTimeout(() => {
    document.querySelector('nav').classList.remove('transitioning');
  }, 300); // Match the duration of the CSS transition
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-button");
  const icons = document.querySelectorAll(".social-container .icon");
  icons.forEach((icon) => {
    icon.style.filter = document.body.classList.contains("dark-button")
      ? "invert(1)"
      : "invert(0)";
  });

  // Add transition effect to navbar on mode switch
  document.querySelector('nav').classList.add('transitioning');
  setTimeout(() => {
    document.querySelector('nav').classList.remove('transitioning');
  }, 300); // Match the duration of the CSS transition
};

// Ensure the page fades in when it fully loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  setInitialTheme();
  watchSystemTheme();
});

// Add scroll event listener for fade-in on scroll
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
const roles = ["Machine Learning Developer", "Web Developer"];
let index = 0;

function typeText() {
  const dynamicText = document.getElementById("dynamic-text");

  // Clear text for typing animation
  dynamicText.textContent = "";

  // Loop through the roles array
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    dynamicText.textContent += roles[index][charIndex];
    charIndex++;

    // If the current role is fully typed
    if (charIndex === roles[index].length) {
      clearInterval(typingInterval);

      // Wait before deleting
      setTimeout(() => {
        deleteText();
      }, 2000); // Wait for 2 seconds before deleting
    }
  }, 100); // Typing speed
}

function deleteText() {
  const dynamicText = document.getElementById("dynamic-text");

  // Delete characters one by one
  let charIndex = roles[index].length;
  const deletingInterval = setInterval(() => {
    dynamicText.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;

    // If all characters are deleted
    if (charIndex === 0) {
      clearInterval(deletingInterval);

      // Move to the next role in the array
      index = (index + 1) % roles.length;

      // Wait before typing the next role
      setTimeout(() => {
        typeText();
      }, 500); // Short pause before typing the next role
    }
  }, 50); // Deleting speed
}

// Start the animation on page load
window.addEventListener("load", typeText);
