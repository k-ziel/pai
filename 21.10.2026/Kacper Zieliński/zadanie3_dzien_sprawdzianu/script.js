// Twoje rozwiazanie

rok = Number(prompt("Podaj rok (liczba)"))

miesiac = Number(prompt("Podaj miesiąc (liczba)"))

dzien = Number(prompt("Podaj dzień (liczba)"))

data = new Date(rok, miesiac - 1, dzien)


switch (Number(data.getDay())) {
    case 0:
        tekst = "niedziela";
        break;
    case 1:
        tekst = "poniedziałek";
        break;
    case 2:
        tekst = "wtorek";
        break;
    case 3:
        tekst = "środa";
        break;
    case 4:
        tekst = "czwartek";
        break;
    case 5:
        tekst = "piątek";
        break;
    case 6:
        tekst = "sobota";
        break;
    default:
        tekst = "nie poprawne";
        break;
}


document.getElementById("wynik").textContent = String(data.getDate()).padStart(2, "0") + "." + 
String((data.getMonth() + 1)).padStart(2, "0") + "." + 
data.getFullYear() + ", " + tekst