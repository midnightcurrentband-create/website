function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    document.getElementById("nav").classList.remove("active");
  });
});
