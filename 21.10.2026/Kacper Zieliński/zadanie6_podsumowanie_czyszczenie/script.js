// Twoje rozwiązanie

miasto = String(prompt("Wpisz nazwe miasta")).trim()

if(miasto.charAt(0) == miasto.charAt(0).toUpperCase()) {
    czyWielka = "Tak"
} else {
    czyWielka = "Nie"
}

dlugosc = miasto.length

document.getElementById("wynik").textContent = "Nazwa: " + miasto +
"\nWielka litera na początku: " + czyWielka + "\nDługość: " + dlugosc