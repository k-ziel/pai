// Zadanie 2: Dozowanie płynu nabłyszczającego w myjni samochodowej
// Uzupełnij kod pętli do...while z użyciem prompt() zgodnie z instrukcją.


wynik = document.querySelector(".wynik")
const DAWKA_WOSKU = 15;
const WYMAGANE_MINIMUM = 45;

let objetoscWosku = 0;
let cykl = 0;
let zgoda;

// Twoje rozwiazanie
// TODO: KROK 1 — Zbuduj pętlę do...while.
// W ciele pętli zwiększ cykl o 1 oraz dodaj DAWKA_WOSKU do objetoscWosku.

do {
    cykl++
    
    objetoscWosku+=DAWKA_WOSKU
    
    komunikat_tekst = `<p>Dozownik myjni — cykl nr ${cykl} — wstrzyknięto 15 ml płynu nabłyszczającego. Aktualny stan w zbiorniku: ${objetoscWosku} ml.</p>`
    wynik.innerHTML+=komunikat_tekst

    zgoda = prompt("Czy dozować kolejną dawkę wosku do komory? (tak/nie):", "tak");


} while (zgoda === "tak" && objetoscWosku < WYMAGANE_MINIMUM);

podsumowanie_tekst = "<p><strong>Wymagana dawka ochronna wosku została osiągnięta. Rozpoczynanie suszenia karoserii.</strong></p>"
document.write(podsumowanie_tekst)


// TODO: KROK 2 — Wypisz komunikat wewnątrz pętli za pomocą document.write():
// `<p>Dozownik myjni — cykl nr ${cykl} — wstrzyknięto 15 ml płynu nabłyszczającego. Aktualny stan w zbiorniku: ${objetoscWosku} ml.</p>`

// TODO: KROK 3 — Pobierz decyzję operatora przez prompt() z wartością domyślną "tak":
// zgoda = prompt("Czy dozować kolejną dawkę wosku do komory? (tak/nie):", "tak");

// TODO: KROK 4 — Ustaw warunek pętli while: zgoda === "tak" && objetoscWosku < WYMAGANE_MINIMUM (pamiętaj o średniku po nawiasie!).

// TODO: KROK 5 — Poza pętlą wypisz podsumowanie:
// `<p><strong>Wymagana dawka ochronna wosku została osiągnięta. Rozpoczynanie suszenia karoserii.</strong></p>`
