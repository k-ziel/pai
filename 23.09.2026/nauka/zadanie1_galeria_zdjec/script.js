// Twoje rozwiazanie

zdjecie = document.querySelector("#main-image");
btn = document.querySelectorAll(".btn");

btn.forEach((przycisk) => {
  przycisk.addEventListener("click", function () {
    zdjecie.src = this.getAttribute("data-src");
  });
});
