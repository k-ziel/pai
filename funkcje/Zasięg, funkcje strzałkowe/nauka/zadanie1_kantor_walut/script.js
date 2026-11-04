// Kantor Internetowy WalutaOnline
// Moduł kalkulacji walutowej z użyciem funkcji strzałkowych

// Stała kursowa
const KURS_EUR = 4.32;
const kwotaEur = 150;

// Twoje rozwiazanie
// KROK 1: Zdefiniuj funkcję strzałkową przeliczEurNaPln przyjmującą jeden parametr kwotaEur.
// Zastosuj zapis skrócony z niejawnym zwracaniem wyniku (bez klamer i bez słowa return).
let przeliczEurNaPln = kwotaEur => kwotaEur * KURS_EUR;

// KROK 2: Zdefiniuj funkcję strzałkową obliczProwizje przyjmującą kwotę w PLN.
// Funkcja ma obliczać i zwracać 1.5% prowizji (mnożnik 0.015).
let obliczProwizje = kwotaPln => kwotaPln * 0.015;

// KROK 3: Oblicz brutto, prowizję i netto; zbuduj raport wg szablonu z instrukcji
// i przypisz go do document.getElementById("wynik").textContent.
let brutto = przeliczEurNaPln(kwotaEur);
let prowizja = obliczProwizje(brutto);
let netto = brutto - prowizja;
 
let podsumowanie = `=== Kantor Internetowy WalutaOnline ===
Kwota transakcji: ${kwotaEur} EUR
Przelicznik kursowy: ${KURS_EUR.toFixed(2)} PLN/EUR
-----------------------------------------
Równowartość brutto: ${brutto.toFixed(2)} PLN
Prowizja operacyjna kantoru: ${prowizja.toFixed(2)} PLN
Kwota netto do wypłaty: ${netto.toFixed(2)} PLN
Status: Transakcja zrealizowana pomyślnie.`;
 
document.getElementById("wynik").textContent = podsumowanie;