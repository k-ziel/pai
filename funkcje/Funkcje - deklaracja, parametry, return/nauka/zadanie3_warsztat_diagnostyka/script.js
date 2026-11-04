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

// KROK 2: Zadeklaruj funkcję obliczPodatekVat(kwotaNetto, stawkaVat = 0.23)
// Parametr stawkaVat ma mieć domyślną wartość 0.23. Funkcja zwraca iloczyn.
function obliczPodatekVat(kwotaNetto, stawkaVat = 0.23) {
  return kwotaNetto * stawkaVat
}

// KROK 3: Zadeklaruj funkcję formatujCene(kwota, waluta = "PLN")
// Funkcja ma zaokrąglać kwotę do 2 miejsc po przecinku (toFixed(2)) i dołączać walutę.
function formatujCene(kwota, waluta = "PLN") {
  return `${kwota.toFixed(2)} ${waluta}`
}

// KROK 4: Oblicz kwotę brutto, przygotuj raport i wypisz do #wynik oraz konsoli.
let sumaNetto = obliczSumeNetto(cenaRobocizny, cenaCzesci)
let podatekVat = obliczPodatekVat(sumaNetto)
let kwotaBrutto = sumaNetto + podatekVat

let podsumowanie = `Kosztorys naprawy pojazdu — Warsztat Auto-Centrum
Koszt robocizny serwisowej: ${formatujCene(cenaRobocizny)}
Koszt części zamiennych: ${formatujCene(cenaCzesci)}
Suma netto: ${formatujCene(sumaNetto)}, Podatek VAT (23%): ${formatujCene(podatekVat)}
Łączna kwota do zapłaty brutto: ${formatujCene(kwotaBrutto)}`

document.getElementById("wynik").textContent = podsumowanie;
console.log(podsumowanie);