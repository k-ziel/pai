// Twoje rozwiazanie

rok = Number(prompt("Wpisz rok (liczba)"))
miesiac = Number(prompt("Wpisz miesiac (liczba)"))
dzien = Number(prompt("Wpisz dzien (liczba)"))

data = new Date(rok, miesiac -1, dzien)

switch (data.getDay()) {
    case 1:
        dzien_tygodnia = "Poniedziałek"
        break
    case 2:
        dzien_tygodnia = "Wtorek"
        break
    case 3:
        dzien_tygodnia = "Środa"
        break
    case 4:
        dzien_tygodnia = "Czwartek"
        break
    case 5:
        dzien_tygodnia = "Piątek"
        break
    case 6:
        dzien_tygodnia = "Sobota"
        break
    case 0:
        dzien_tygodnia = "Niedziela"
        break
    default:
        dzien_tygodnia = "Nie dziala!!!!!!!"
        break
}

document.getElementById("wynik").textContent = (String(data.getDate()).padStart(2, "0") + "." +
String(data.getMonth() + 1).padStart(2, "0") + "." +
String(data.getFullYear())) + ", " + dzien_tygodnia