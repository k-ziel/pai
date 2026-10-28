// Twoje rozwiazanie

rok = Number(prompt("Wpisz rok (liczba)"))
miesiac = Number(prompt("Wpisz miesiac (liczba)"))
dzien = Number(prompt("Wpisz dzien (liczba)"))

data = new Date(rok, miesiac -1, dzien)

document.getElementById("wynik").textContent = "Rok: " + data.getFullYear() + 
"\nMiesiąc (kalendarz): " + data.getMonth() +
"\nDzień: " + data.getDate()