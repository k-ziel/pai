// Twoje rozwiazanie

przycisk = document.querySelector("#btnCheck")
rezultat_tekst = document.querySelector("#result")
magic_box = document.querySelector("#magicBox")

ile_klas = magic_box.classList.length
jakie_klasy = magic_box.classList.value

przycisk.addEventListener("click", function() {
    rezultat_tekst.innerHTML = "Liczba klas: " + ile_klas + "<br>Lista klas: " + jakie_klasy
})