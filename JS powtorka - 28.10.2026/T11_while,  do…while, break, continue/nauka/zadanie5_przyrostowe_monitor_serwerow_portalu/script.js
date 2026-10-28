// Zadanie 5 (Przyrostowe): Monitor klastra serwerów portalu IT-Partner
// Uzupełnij kod procedury diagnostycznej z użyciem pętli while, continue i break.

wynik = document.querySelector(".wynik")

const LICZBA_WEZLOW = 5;

let wezel = 0;
let zweryfikowaneWezly = 0;

// Twoje rozwiazanie
// TODO: KROK 1 — Skonstruuj pętlę while, która wykonuje się dopóki wezel < LICZBA_WEZLOW.

while (wezel < LICZBA_WEZLOW) {
    wezel++

        
    konserwacja_html = `<p style="color: #d97706;">Węzeł nr 2 znajduje się w trybie konserwacji — pomijanie procedury weryfikacji produkcyjnej.</p>`
    wezel_poprawny_html = `<p>Węzeł klastra IT-Partner nr ${wezel} — diagnostyka procesora i usług sieciowych zakończona pomyślnie (status: OK).</p>`
    awaria_html = "<p style=\"color: #dc2626;\"><strong>Węzeł nr 5 zgłasza krytyczne przeciążenie pamięci RAM — natychmiastowe przerwanie diagnostyki klastra.</strong></p>"
    podsumowanie_html = `<p><strong>Raport diagnostyczny portalu IT-Partner: pomyślnie zweryfikowano ${zweryfikowaneWezly} węzłów roboczych klastra.</strong></p>`


    if(wezel === 2) {
        wynik.innerHTML += konserwacja_html
        continue
    }
    if(wezel === 5) {
        wynik.innerHTML += awaria_html
        break
    }
    
    zweryfikowaneWezly++
    wynik.innerHTML += wezel_poprawny_html
    
}
document.write(podsumowanie_html)


// TODO: KROK 2 — Na początku iteracji zwiększ wezel o 1.

// TODO: KROK 3 — Jeśli wezel === 2, wypisz informację o trybie konserwacji i użyj continue:
// `<p style="color: #d97706;">Węzeł nr 2 znajduje się w trybie konserwacji — pomijanie procedury weryfikacji produkcyjnej.</p>`

// TODO: KROK 4 — Jeśli wezel === 5, wypisz informację o awarii i przerwij pętlę za pomocą break:
// `<p style="color: #dc2626;"><strong>Węzeł nr 5 zgłasza krytyczne przeciążenie pamięci RAM — natychmiastowe przerwanie diagnostyki klastra.</strong></p>`

// TODO: KROK 5 — W standardowym przypadku zwiększ zweryfikowaneWezly o 1 i wypisz status OK:
// `<p>Węzeł klastra IT-Partner nr ${wezel} — diagnostyka procesora i usług sieciowych zakończona pomyślnie (status: OK).</p>`

// TODO: KROK 6 — Poza pętlą wypisz podsumowanie raportu diagnostycznego:
// `<p><strong>Raport diagnostyczny portalu IT-Partner: pomyślnie zweryfikowano ${zweryfikowaneWezly} węzłów roboczych klastra.</strong></p>`
