// Twoje rozwiazanie

rok = Number(prompt("Podaj rok (liczba)"))

miesiac = Number(prompt("Podaj miesiąc (liczba)"))

dzien = Number(prompt("Podaj dzień (liczba)"))

data = new Date(rok, miesiac - 1, dzien)

document.getElementById("wynik").textContent = String(data.getDate()).padStart(2, "0") + "." + 
String((data.getMonth() + 1)).padStart(2, "0") + "." + 
data.getFullYear()