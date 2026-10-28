// Twoje rozwiazanie

przycisk = document.querySelector("#btnLike")
ikona = document.querySelector("#icon")
tekst = document.querySelector("#text")


przycisk.addEventListener("click", function() {
    przycisk.classList.toggle("liked")
    
    if(przycisk.classList.contains("liked")) {
        ikona.textContent  = "♥"
        tekst.innerHTML = "Lubisz to"
    } else {
        ikona.textContent  = "♡"
        tekst.innerHTML = "Polub to"
    }
})

