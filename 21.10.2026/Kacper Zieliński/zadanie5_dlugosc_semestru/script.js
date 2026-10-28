// Twoje rozwiazanie

rok_pocz = Number(prompt("Podaj rok (liczba) poczatku semestru"))
miesiac_pocz = Number(prompt("Podaj miesiąc (liczba) poczatku semestru"))
dzien_pocz = Number(prompt("Podaj dzień (liczba) poczatku semestru"))

data_pocz = new Date(rok_pocz, miesiac_pocz - 1, dzien_pocz)

rok_kon = Number(prompt("Podaj rok (liczba) konca semestru"))
miesiac_kon = Number(prompt("Podaj miesiąc (liczba) konca semestru"))
dzien_kon = Number(prompt("Podaj dzień (liczba) konca semestru"))

data_kon = new Date(rok_kon, miesiac_kon - 1, dzien_kon)

msDoba = 1000 * 60 * 60 * 24

roznica_dni = Math.round((data_kon.getTime() - data_pocz.getTime()) / msDoba )

document.getElementById("wynik").textContent = "Dni: " + roznica_dni