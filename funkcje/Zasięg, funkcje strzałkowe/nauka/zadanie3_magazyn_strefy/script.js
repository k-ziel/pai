// System Logistyczny MagazynCentralny
// Szablon zadania: funkcja strzałkowa z ciałem blokowym i demonstracja przesłaniania

const LIMIT_WAGI_KG = 800;
const LIMIT_WYSOKOSCI_CM = 200;

const wagaLadunku = 650;
const wysokoscLadunku = 180;

// Globalny status
const statusZlecenia = "W trakcie weryfikacji";

// Twoje rozwiazanie
// KROK 1: Zdefiniuj funkcję strzałkową przypiszStrefeMagazynu(wagaKg, wysokoscCm) z ciałem blokowym { ... }.
// Zastosuj zmienną lokalną i instrukcje if/else zgodnie z instrukcją.
let przypiszStrefeMagazynu = (wagaKg, wysokoscCm) => {
  let strefa = "Strefa A (Regał standardowy)"
  if (wagaKg > LIMIT_WAGI_KG || wysokoscCm > LIMIT_WYSOKOSCI_CM) {
    strefa = "Strefa C (Składowanie posadzkowe)"
  } else if (wagaKg > 500) {
    strefa = "Strefa B (Regał wzmocniony)"
  }
  return strefa
}

// KROK 2: Shadowing w if(true): nowa const statusZlecenia wewnątrz bloku.
// Skopiuj wartość do zewnętrznego statusWewnetrzny przed zamknięciem bloku.
let statusWewnetrzny = ""
if (true) {
  let statusZlecenia = "Autoryzacja magazynowa zakończona"
  statusWewnetrzny = statusZlecenia
}

// KROK 3: Dopuszczenie do regału wysokiego + raport wg szablonu z instrukcji
// → document.getElementById("wynik").textContent.
let strefaMagazynu = przypiszStrefeMagazynu(wagaLadunku, wysokoscLadunku);
let dopuszczenie = wysokoscLadunku <= LIMIT_WYSOKOSCI_CM ? "TAK" : "NIE (nadwymiar)"
 
let podsumowanie = `=== System Logistyczny MagazynCentralny ===
Karta rejestracji ładunku paletowego
-----------------------------------------
Parametry ładunku: waga ${wagaLadunku} kg, wysokość ${wysokoscLadunku} cm
Weryfikacja strefy składowania: ${strefaMagazynu}
Dopuszczenie do regału wysokiego: ${dopuszczenie}
-----------------------------------------
Status wewnątrz bloku weryfikacji: ${statusWewnetrzny}
Status globalny zlecenia: ${statusZlecenia}`
 
document.getElementById("wynik").textContent = podsumowanie
 