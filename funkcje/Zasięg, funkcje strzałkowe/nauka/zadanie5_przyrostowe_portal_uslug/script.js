// Portal Usługowo-Handlowy IT-Partner — Moduł Wyceny Serwisowej
// Zadanie przyrostowe: funkcje strzałkowe, parametry domyślne, raport

const STAWKA_ROBOCZOGODZINY = 120;
const godzinySerwisu = 6;
const czyKlientBiznesowy = true;

// Twoje rozwiazanie
// KROK 1: Zdefiniuj funkcję strzałkową obliczStopeRabatu(isBiznes).
// Zwróć 0.15 dla klienta biznesowego lub 0.05 dla klienta indywidualnego.
let obliczStopeRabatu = isBiznes => (isBiznes ? 0.15 : 0.05)

// KROK 2: Zdefiniuj funkcję obliczKosztZlecenia(godziny, stawkaGodz, oplataDojazd = 50).
// Oblicz koszt bazowy, odejmij rabat i dolicz opłatę za dojazd.
const obliczKosztZlecenia = (godziny, stawkaGodz, oplataDojazd = 50) => {
  let kosztRobocizny = godziny * stawkaGodz
  let rabat = kosztRobocizny * obliczStopeRabatu(czyKlientBiznesowy)
  return kosztRobocizny - rabat + oplataDojazd
}

// KROK 3: Zdefiniuj funkcję z ciałem blokowym okreslCzasReakcjiSLA(godziny).
// Wyznacz czas reakcji SLA w zależności od liczby roboczogodzin.
const okreslCzasReakcjiSLA = godziny => {
  let czasReakcji
  if (godziny >= 8) {
    czasReakcji = "Tryb standardowy (realizacja do 48h)"
  } else if (godziny >= 4) {
    czasReakcji = "Tryb przyspieszony (realizacja do 24h)"
  } else {
    czasReakcji = "Tryb ekspresowy (realizacja do 12h)"
  }
  return czasReakcji
}

// KROK 4: Oblicz wartości końcowe i sformatuj raport do 'raport',
// a następnie przypisz go do document.getElementById("wynik").textContent.
let kosztRobocizny = godzinySerwisu * STAWKA_ROBOCZOGODZINY
let stopaRabatu = obliczStopeRabatu(czyKlientBiznesowy)
let kwotaRabatu = kosztRobocizny * stopaRabatu
let oplataDojazd = 50
let kosztKoncowy = obliczKosztZlecenia(godzinySerwisu, STAWKA_ROBOCZOGODZINY)
let sla = okreslCzasReakcjiSLA(godzinySerwisu)
 
let podsumowanie = `=== Portal Usługowo-Handlowy IT-Partner — Moduł Wyceny Serwisowej ===
Kalkulacja kosztorysowa zlecenia serwisowego
-----------------------------------------
Liczba roboczogodzin serwisu: ${godzinySerwisu} h
Stawka roboczogodziny: ${STAWKA_ROBOCZOGODZINY} PLN
Wartość robocizny: ${kosztRobocizny.toFixed(2)} PLN
Rabat klienta partnerskiego: ${Math.round(stopaRabatu * 100)}% (-${kwotaRabatu.toFixed(2)} PLN)
Opłata ryczałtowa za dojazd: ${oplataDojazd.toFixed(2)} PLN (stawka bazowa)
-----------------------------------------
Całkowity kosztorys zlecenia: ${kosztKoncowy.toFixed(2)} PLN
Gwarantowany czas reakcji SLA: ${sla}
Status wyceny: Zatwierdzona do realizacji`
 
document.getElementById("wynik").textContent = podsumowanie