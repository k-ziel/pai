// Twoje rozwiazanie

przycisk = document.querySelector("#btnHighlight")
laptop = document.querySelector("#card")

przycisk.addEventListener("click", function() {
    laptop.classList.add("featured")
})

