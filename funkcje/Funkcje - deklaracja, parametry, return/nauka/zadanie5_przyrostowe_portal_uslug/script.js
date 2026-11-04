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
  if (liczbaGodzin <= 0 || stawkaGodzinowa <= 0) {
    return 0;
  }
  return liczbaGodzin * stawkaGodzinowa
}

// KROK 2: Zadeklaruj funkcję wyznaczUpustPromocyjny(kwotaNetto, kodKuponu)
// Funkcja zwraca kwotę rabatu: dla "START20" 20% netto, dla "IT10" 10% netto, inaczej 0.
function wyznaczUpustPromocyjny(kwotaNetto, kodKuponu) {
  if (kwotaNetto <= 0) {
    return 0;
  }
  if (kodKuponu === "START20") {
    return kwotaNetto * 0.8
  }
  if (kodKuponu === "IT10") {
    return kwotaNetto * 0.9
  }
  return 0;
}

// KROK 3: Zadeklaruj funkcję obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23)
// Wzór: (netto - rabat) * (1 + stawkaVat)
function obliczKwoteDoZaplaty(netto, rabat, stawkaVat = 0.23) {
  return (netto - rabat) * (1 + stawkaVat)
}

// KROK 4: Zadeklaruj funkcję pomocniczą formatujZloty(wartosc)
function formatujZloty(wartosc) {
  return `${wartosc.toFixed(2)} PLN`
}

// KROK 5: Wywołaj funkcje, przygotuj specyfikację i wypisz do #wynik oraz konsoli.

let wartoscNetto = obliczWyceneUslugi(godzinyRealizacji, stawkaGodzinowa);
let upust = wyznaczUpustPromocyjny(wartoscNetto, kodKuponu);
let naleznoscBrutto = obliczKwoteDoZaplaty(wartoscNetto, upust);
 
let podsumowanie = `Portal Usługowo-Handlowy IT-Partner — Specyfikacja Zlecenia
Usługa: ${nazwaUslugi}
Czas realizacji: ${godzinyRealizacji} godz. wg stawki: ${formatujZloty(stawkaGodzinowa)}/godz.
Wartość bazowa netto: ${formatujZloty(wartoscNetto)}
Kupon rabatowy ${kodKuponu} — naliczony upust: ${formatujZloty(upust)}
Należność końcowa brutto (z 23% VAT): ${formatujZloty(naleznoscBrutto)}`;
 
document.getElementById("wynik").textContent = podsumowanie;
console.log(podsumowanie);