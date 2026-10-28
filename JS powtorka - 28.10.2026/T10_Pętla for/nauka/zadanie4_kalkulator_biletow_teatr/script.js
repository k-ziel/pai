// Zadanie 4: Kalkulator zamówień biletów teatralnych
// Połącz pętlę for, instrukcję if/else oraz sumator.

const LICZBA_BILETOW = Number(prompt("Podaj liczbę rezerwowanych biletów teatralnych:", "5"));
const CENA_STANDARDOWA = 45;
const CENA_RABATOWA = 35;

let koszt;

// TODO: KROK 1 — Zadeklaruj zmienną lacznyKosztZamowienia i przypisz jej wartość 0.

let lacznyKosztZamowienia = 0;

for (let bilet = 1; bilet <= LICZBA_BILETOW; bilet++) {
    if(bilet <= 3) {
        koszt = CENA_STANDARDOWA
        document.write(`<p>Bilet na spektakl wieczorny nr ${bilet} — Cena standardowa: 45 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>`)
    } else {
        koszt = CENA_RABATOWA
        document.write(`<p>Bilet na spektakl wieczorny nr ${bilet} — Cena z rabatem grupowym: 35 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>`)
    }
    lacznyKosztZamowienia+=koszt


}

document.write(`<p><strong>Całkowity koszt rezerwacji biletów teatralnych wynosi: ${lacznyKosztZamowienia} zł</strong></p>`)

// TODO: KROK 2 — Skonstruuj pętlę for ze zmienną bilet od 1 do LICZBA_BILETOW (krok: +1).

// TODO: KROK 3 — W ciele pętli:
// - Jeśli bilet <= 3: kosztBiletu = CENA_STANDARDOWA
// - W przeciwnym razie: kosztBiletu = CENA_RABATOWA
// - Dodaj kosztBiletu do sumatora lacznyKosztZamowienia (przed wypisem, aby stan rachunku był aktualny).
// - Wypisz z numerem biletu, stawką oraz aktualnym stanem rachunku:
//   standardowa: `<p>Bilet na spektakl wieczorny nr ${bilet} — Cena standardowa: 45 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>`
//   rabatowa:    `<p>Bilet na spektakl wieczorny nr ${bilet} — Cena z rabatem grupowym: 35 zł — Aktualny stan rachunku: ${lacznyKosztZamowienia} zł</p>`

// TODO: KROK 4 — Poza pętlą wypisz podsumowanie z łączną kwotą:
// `<p><strong>Całkowity koszt rezerwacji biletów teatralnych wynosi: ${lacznyKosztZamowienia} zł</strong></p>`
