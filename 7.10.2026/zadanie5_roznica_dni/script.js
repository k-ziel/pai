// Twoje rozwiazanie

rok = Number(prompt("Wpisz rok (liczba)"))
miesiac = Number(prompt("Wpisz miesiac (liczba)"))
dzien = Number(prompt("Wpisz dzien (liczba)"))

rok2 = Number(prompt("Wpisz rok (liczba)"))
miesiac2 = Number(prompt("Wpisz miesiac (liczba)"))
dzien2 = Number(prompt("Wpisz dzien (liczba)"))


data = new Date(rok, miesiac -1, dzien)
data2 = new Date(rok2, miesiac2 -1, dzien2)

roznica = Math.round(data.getTime() - data2.getTime()) / (1000 * 60 * 60 * 24);


document.getElementById("wynik").textContent = (

(String(data.getDate()).padStart(2, "0") + "." +
String(data.getMonth() + 1).padStart(2, "0") + "." +
String(data.getFullYear())) + 

"\n" + 

(String(data2.getDate()).padStart(2, "0") + "." +
String(data2.getMonth() + 1).padStart(2, "0") + "." +
String(data2.getFullYear())) + 

"\n" + 

roznica

)