function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var moon = document.getElementById("moon");
moon.onclick = function () {
  document.body.classList.toggle("dark-button");
  if (document.body.classList.contains("dark-button")) {
    moon.src = "assets/SUN.svg";
  } else {
    moon.src = "assets/MOON.svg";
  }
};

var mo = document.getElementById("mo");
mo.onclick = function () {
  document.body.classList.toggle("dark-button");
  if (document.body.classList.contains("dark-button")) {
    mo.src = "assets/SUN.svg";
    
  } else {
    mo.src = "assets/MOON.svg";
  }
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-button");
    const icons = document.querySelectorAll(".social-container .icon");
    icons.forEach(icon => {
      icon.style.filter = document.body.classList.contains("dark-button") ? "invert(1)" : "invert(0)";
    });
  }