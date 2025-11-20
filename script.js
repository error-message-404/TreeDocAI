function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

function openFullscreen() {
  let v = document.getElementById("v");
  v.hidden = false;
  v.play();
  v.requestFullscreen();
}
