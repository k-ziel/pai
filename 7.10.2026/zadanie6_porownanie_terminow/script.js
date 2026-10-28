// Twoje rozwiazanie

rok = Number(prompt("Wpisz rok (liczba)"))
miesiac = Number(prompt("Wpisz miesiac (liczba)"))
dzien = Number(prompt("Wpisz dzien (liczba)"))

data = new Date(rok, miesiac -1, dzien)



document.getElementById("wynik").textContent = (String(data.getDate()).padStart(2, "0") + "." +
String(data.getMonth() + 1).padStart(2, "0") + "." +
String(data.getFullYear()))