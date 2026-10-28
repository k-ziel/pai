// Twoje rozwiazanie


rok_dead = Number(prompt("Podaj rok (liczba) deadlinu"))
miesiac_dead = Number(prompt("Podaj miesiąc (liczba) deadlinu"))
dzien_dead = Number(prompt("Podaj dzień (liczba) deadlinu"))

data_dead = new Date(rok_dead, miesiac_dead - 1, dzien_dead)

rok_dzis = Number(prompt("Podaj rok (liczba), ktory jest dzisiaj"))
miesiac_dzis = Number(prompt("Podaj miesiąc (liczba), ktory jest dzisiaj"))
dzien_dzis = Number(prompt("Podaj dzień (liczba), ktory jest dzisiaj"))

data_dzis = new Date(rok_dzis, miesiac_dzis - 1, dzien_dzis)

msDoba = 1000 * 60 * 60 * 24

roznica_dni = Math.round((data_dead.getTime() - data_dzis.getTime()) / msDoba )

if(roznica_dni > 0) {
    stat = "w terminie"
} else {
    if (roznica_dni < 0) {
    stat = "po terminie"
    } else {
        stat = "oddanie dzisiaj"
    }
}

switch (Number(data_dead.getDay())) {
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

document.getElementById("wynik").textContent = "Deadline: " + String(data_dead.getDate()).padStart(2, "0") + "." + 
String((data_dead.getMonth() + 1)).padStart(2, "0") + "." + 
data_dead.getFullYear() + ", " + tekst + "\nDni: " + roznica_dni + " " + stat