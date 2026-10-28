// Zadanie 1: Rozładunek towaru w magazynie centralnym
// Uzupełnij kod pętli while zgodnie z instrukcją.

wynik = document.querySelector(".wynik")


const PORCJA_KONTENEROW = 3;
let konteneryNaRampie = 12;
let numerKursu = 1;

while(konteneryNaRampie > 0) {
    zrealizowany_tekst = `<p>Kurs wózka widłowego nr ${numerKursu} — pobrano 3 kontenery. Pozostało w strefie przyjęć: ${konteneryNaRampie - PORCJA_KONTENEROW} szt.</p>`
    document.write(zrealizowany_tekst)

    konteneryNaRampie-=PORCJA_KONTENEROW
    numerKursu++

}
podsumowanie_tekst = "<p><strong>Wszystkie kontenery zostały pomyślnie przetransportowane do regałów wysokiego składowania.</strong></p>"
document.write(podsumowanie_tekst)

// Twoje rozwiazanie
// TODO: KROK 1 — Skonstruuj pętlę while, która wykonuje się dopóki konteneryNaRampie > 0.

// TODO: KROK 2 — Wewnątrz pętli wypisz komunikat za pomocą document.write():
// `<p>Kurs wózka widłowego nr ${numerKursu} — pobrano 3 kontenery. Pozostało w strefie przyjęć: ${konteneryNaRampie - PORCJA_KONTENEROW} szt.</p>`

// TODO: KROK 3 — Zmniejsz wartość konteneryNaRampie o PORCJA_KONTENEROW oraz zwiększ numerKursu o 1.

// TODO: KROK 4 — Poza pętlą wypisz podsumowanie:
// `<p><strong>Wszystkie kontenery zostały pomyślnie przetransportowane do regałów wysokiego składowania.</strong></p>`
