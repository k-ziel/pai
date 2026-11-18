// Zadanie 1: Prosta funkcja obliczeniowa — Wypożyczalnia sprzętu wodnego
// Twoje rozwiazanie

// Dane wejściowe:
const stawkaZaGodzine = 40;
const godzinyKlient1 = 4;
const godzinyKlient2 = 2;

// KROK 1: Zadeklaruj funkcję obliczKosztWynajmu(godziny, stawkaGodzinowa)
// Funkcja ma przyjmować 2 parametry i zwracać iloczyn za pomocą słowa kluczowego return.
function obliczKosztWynajmu(godziny, stawkaGodzinowa) {
    return godziny * stawkaGodzinowa
}

let kosztKlient1 = obliczKosztWynajmu(godzinyKlient1, stawkaZaGodzine)
let kosztKlient2 = obliczKosztWynajmu(godzinyKlient2, stawkaZaGodzine)

kosztCalkowity = kosztKlient1 + kosztKlient2

let podsumowanie = `Raport wypożyczalni sprzętu wodnego Przystań Fala\n` +
`Klient 1 - Czas wynajmu: ${godzinyKlient1} godz., Należność ${kosztKlient1}.00 PLN\n` +
`Klient 2 - Czas wynajmu: ${godzinyKlient2} godz., Należność ${kosztKlient2}.00 PLN\n` +
`Łączny utarg dzienny wynosi dokładnie ${kosztCalkowity}.00 PLN`

console.log(podsumowanie)

document.getElementById("wynik").textContent = podsumowanie

// KROK 2: Wywołaj funkcję dla obu klientów i zapisz wyniki do zmiennych:
// let kosztKlient1 = ...
// let kosztKlient2 = ...


// KROK 3: Oblicz sumę kosztów i przygotuj raport tekstowy:
// let podsumowanie = ...


// KROK 4: Wypisz raport do elementu #wynik oraz do konsoli:
// document.getElementById("wynik").textContent = ...
// console.log(...)
