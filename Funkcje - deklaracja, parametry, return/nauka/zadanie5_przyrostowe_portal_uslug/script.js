// Zadanie 5: Przyrostowe Capstone — Portal Usługowo-Handlowy IT-Partner
// Twoje rozwiazanie

// Dane zlecenia technologicznego:
const nazwaUslugi = "Wdrożenie i konfiguracja serwera w chmurze";
const godzinyRealizacji = 8;
const stawkaGodzinowa = 120;
const kodKuponu = "START20";

// KROK 1: Zadeklaruj funkcję obliczWyceneUslugi(liczbaGodzin, stawkaGodzinowa = 120)
// Funkcja zwraca iloczyn godzin i stawki; przy wartościach <= 0 zwraca 0.

function obliczWyceneUslugi(liczbaGodzin, stawkaGodzinowa = 120) {
    if(liczbaGodzin >= 0 || stawkaGodzinowa >= 0) {
        return 0
    }
    return liczbaGodzin * stawkaGodzinowa
}

function wyznaczUpustPromocyjny(kwotaNetto, kodKuponu) {
    switch (kodKuponu) {
        case "START20":
            return kwotaNetto = kwotaNetto * 0.8
        case "IT10":
            return kwotaNetto = kwotaNetto * 0.9
        default:
            return kwotaNetto, false
    }
}


function obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23) {
    return (netto - rabat) * (1 + stawkaVat)
}

function formatujZloty(kwota, symbol = "PLN") {
    return `${kwota.toFixed(2)}*/ ${symbol}`
}

let netto = obliczWyceneUslugi(godzinyRealizacji, stawkaGodzinowa)

podsumowanie = `Portal Usługowo-Handlowy IT-Partner — Specyfikacja Zlecenia
Usługa: Wdrożenie i konfiguracja serwera w chmurze
Czas realizacji: ${godzinyRealizacji} godz. wg stawki: ${formatujZloty(stawkaGodzinowa)}/godz.
Wartość bazowa netto: ${formatujZloty(netto)}
`

document.getElementById("wynik").textContent = podsumowanie

console.log(podsumowanie)

// KROK 2: Zadeklaruj funkcję wyznaczUpustPromocyjny(kwotaNetto, kodKuponu)
// Funkcja zwraca kwotę rabatu: dla "START20" 20% netto, dla "IT10" 10% netto, inaczej 0.


// KROK 3: Zadeklaruj funkcję obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23)
// Wzór: (netto - rabat) * (1 + stawkaVat)


// KROK 4: Zadeklaruj funkcję pomocniczą formatujZloty(wartosc)


// KROK 5: Wywołaj funkcje, przygotuj specyfikację i wypisz do #wynik oraz konsoli.
