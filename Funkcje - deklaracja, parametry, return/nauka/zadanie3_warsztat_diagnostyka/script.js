// Zadanie 3: Parametry domyślne i formatowanie — Warsztat samochodowy
// Twoje rozwiazanie

// Dane kosztorysu:
const cenaRobocizny = 250;
const cenaCzesci = 400;

// KROK 1: Zadeklaruj funkcję obliczSumeNetto(cenaRobocizny, cenaCzesci)
// Funkcja ma zwracać sumę obu parametrów.

function obliczSumeNetto(cenaRobocizny, cenaCzesci) {
    return cenaRobocizny + cenaCzesci
}

function obliczPodatekVat(kwotaNetto, stawkaVat = 0.23) {
    return kwotaNetto * stawkaVat
}

function formatujCene(kwota, waluta = "PLN") {
    return `${kwota.toFixed(2)} ${waluta}`
}

podsumowanie = `Kosztorys naprawy pojazdu — Warsztat Auto-Centrum` +
`Koszt robocizny serwisowej: ${formatujCene(cenaRobocizny)}\n` +
`Koszt części zamiennych: ${formatujCene(cenaCzesci)}\n` +
`Suma netto: ${formatujCene(obliczSumeNetto(cenaRobocizny, cenaCzesci))}, Podatek VAT (23%): ${formatujCene(obliczPodatekVat(obliczSumeNetto(cenaRobocizny,cenaCzesci)))}\n` +
`Łączna kwota do zapłaty brutto: ${formatujCene(obliczSumeNetto(cenaRobocizny, cenaCzesci) + obliczPodatekVat(obliczSumeNetto(cenaRobocizny, cenaCzesci)))}`

document.getElementById("wynik").textContent = podsumowanie

console.log(podsumowanie)

// KROK 2: Zadeklaruj funkcję obliczPodatekVat(kwotaNetto, stawkaVat = 0.23)
// Parametr stawkaVat ma mieć domyślną wartość 0.23. Funkcja zwraca iloczyn.


// KROK 3: Zadeklaruj funkcję formatujCene(kwota, waluta = "PLN")
// Funkcja ma zaokrąglać kwotę do 2 miejsc po przecinku (toFixed(2)) i dołączać walutę.


// KROK 4: Oblicz kwotę brutto, przygotuj raport i wypisz do #wynik oraz konsoli.
