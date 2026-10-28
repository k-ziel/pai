// Twoje rozwiazanie

rok = Number(prompt("Wpisz rok (liczba)"))
miesiac = Number(prompt("Wpisz miesiac (liczba)"))
dzien = Number(prompt("Wpisz dzien (liczba)"))

n = Number(prompt("Przesun date!!!"))

let data = new Date(rok, miesiac - 1, dzien);

let data_nowa = new Date(data.getTime()); 

data_nowa.setDate(data_nowa.getDate() + n);



document.getElementById("wynik").textContent = (String(data_nowa.getDate()).padStart(2, "0") + "." +
String(data_nowa.getMonth() + 1).padStart(2, "0") + "." +
String(data_nowa.getFullYear())) + "\n" + (String(data.getDate()).padStart(2, "0") + "." +
String(data.getMonth() + 1).padStart(2, "0") + "." +
String(data.getFullYear()))