// Twoje rozwiazanie

przycisk = document.querySelector("#btnToggle")
kontener = document.querySelector("#mainContent")

przycisk.addEventListener("click", function() {
    if(kontener.classList.toggle("dark-mode")) {
        przycisk.innerHTML = "Tryb Jasny"
    } else {
        przycisk.innerHTML = "Tryb Nocny"
    }
})