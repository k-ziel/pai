// Zadanie 4: Zadanie integrujące — Centrum spedycyjno-logistyczne
// Twoje rozwiazanie

// KROK 1: Pobranie wagi przesyłki poza funkcjami (prompt z wartością domyślną)
let wagaInput = prompt("Podaj wagę przesyłki w kilogramach:", "15");
let wagaKg = parseFloat(wagaInput);
const strefa = 2;
const czyStalyKlient = true;

// KROK 2: Zadeklaruj funkcję obliczOplateWagowa(wagaKg, stawkaZaKg = 4)
// Zastosuj klauzulę strażniczą dla wagi <= 0.
function obliczOplateWagowa(wagaKg, stawkaZaKg = 4) {
  if (wagaKg <= 0) {
    return 0
  }
  return wagaKg * stawkaZaKg
}

// KROK 3: Zadeklaruj funkcję wyznaczDoplateStrefowa(nrStrefy)
// Zastosuj instrukcję switch lub if/else dla stref 1, 2, 3.
function wyznaczDoplateStrefowa(nrStrefy) {
  switch (nrStrefy) {
    case 1:
      return 15
    case 2:
      return 25
    case 3:
      return 40
    default:
      return 15
  }
}

// KROK 4: Zadeklaruj funkcję obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true)
// Zastosuj 10% rabatu dla stałego klienta.
function obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true) {
  suma = oplataWagowa + doplataStrefowa
  if (stalyKlient == true) {
    return suma * 0.9
  }
  return suma
}

// KROK 5: Zadeklaruj funkcję pomocniczą formatujWalute(kwota, symbol = "PLN")
function formatujWalute(kwota, symbol = "PLN") {
  return `${kwota.toFixed(2)} ${symbol}`
}

// KROK 6: Wywołaj funkcje, przygotuj list przewozowy i wypisz do #wynik oraz konsoli.
let oplataWagowa = obliczOplateWagowa(wagaKg)
let doplataStrefowa = wyznaczDoplateStrefowa(strefa)
let kosztKoncowy = obliczKosztKoncowy(oplataWagowa, doplataStrefowa, czyStalyKlient)
let oszczednosc = (oplataWagowa + doplataStrefowa) - kosztKoncowy
 
let podsumowanie = `List przewozowy przesyłki kurierskiej — Trans-Pol Logistyka
Waga przesyłki towarowej: ${wagaKg.toFixed(2)} kg (opłata wagowa: ${formatujWalute(oplataWagowa)})
Dopłata za doręczenie w strefie ${strefa}: ${formatujWalute(doplataStrefowa)}
Przyznany rabat stałego klienta: 10% (oszczędność: ${formatujWalute(oszczednosc)})
Ostateczny koszt doręczenia przesyłki: ${formatujWalute(kosztKoncowy)}`
 
document.getElementById("wynik").textContent = podsumowanie
console.log(podsumowanie)