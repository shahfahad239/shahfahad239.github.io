const navbar = document.getElementById("navBar");
const viewSection = document.getElementById("view");

window.addEventListener("scroll", () => {
  const viewBottom = viewSection.offsetHeight;

  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
