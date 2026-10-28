// Twoje rozwiązanie

zdanie = prompt("Wpisz jakies zdanie")

slowo = prompt("Wpisz jakies slowo")

if(String(zdanie.toLowerCase()).includes(String(slowo.toLowerCase())) == true) {
    document.getElementById("wynik").textContent = "Tak"
} else {
    document.getElementById("wynik").textContent = "Nie"
}