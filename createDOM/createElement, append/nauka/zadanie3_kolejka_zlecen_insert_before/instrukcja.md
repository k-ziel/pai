# Zadanie 3: Zlecenia serwisowe z insertBefore() i interakcją

## Cel
Celem zadania jest opanowanie precyzyjnego pozycjonowania węzła za pomocą metody `parentElement.insertBefore(newNode, referenceNode)` oraz bezpośredniej rejestracji nasłuchiwania zdarzeń `addEventListener` na nowo wygenerowanym elemencie przed jego wpięciem do DOM. Po poprawnym wykonaniu zadania nowe zlecenie ekspresowe zostaje wstawione dokładnie przed pierwszym zleceniem standardowym, a kliknięcie dodanego zlecenia przełącza jego stan wizualny.

Wstawianie elementu w ściśle określonym miejscu kolejki oraz dynamiczne uzbrajanie elementów w obsługę zdarzeń to codzienność programisty frontendowego. Taki mechanizm występuje m.in. w odtwarzaczach muzycznych (funkcja „Odtwórz jako następne” wstawiająca utwór przed resztą playlisty), w systemach obsługi klienta (kolejkowanie zgłoszeń z priorytetem VIP) oraz na tablicach zadań Kanban (wstawianie zadania pomiędzy istniejącymi kartami).

## Wskazówki aktywizujące
1. Przypomnij sobie z pliku `teoria.md` sekcję 5 (*parentElement.insertBefore*) oraz sekcję 9 (*Rejestracja zdarzeń na nowo utworzonych elementach*).
2. Pamiętaj, że `insertBefore()` przyjmuje najpierw nowy węzeł, a jako drugi argument węzeł, przed którym wstawiamy.
3. Czy można wywołać `nowyElement.addEventListener('click', ...)` zanim element zostanie dołączony do dokumentu? Sprawdź w teorii: tak, element w pamięci jest pełnoprawnym obiektem.

## Treść do wpisania
W skrypcie należy zastosować następujące dosłowne etykiety i teksty:
- Nazwa zlecenia domyślnego: `"Ekspres: Wymiana modułu bębna światłoczułego"`
- Klasa wizualna zlecenia ekspresowego: `"zlecenie-ekspres"`
- Klasa stanu zrealizowanego: `"zrealizowane"`
- Atrybut pomocniczy title: `"Kliknij, aby oznaczyć realizację"`
- Identyfikator kontenera kolejki: `"#kolejka-zlecen"`
- Identyfikator węzła referencyjnego: `"#zlecenie-standard"`
- Identyfikator przycisku: `"#btn-wstaw-ekspres"`
- Identyfikator pola wejściowego: `"#opis-zlecenia"`

## Wymagania
1. Pobierz referencje do elementów: pola tekstowego `#opis-zlecenia`, przycisku `#btn-wstaw-ekspres`, kontenera `#kolejka-zlecen` oraz elementu referencyjnego `#zlecenie-standard`.
2. Zarejestruj zdarzenie `click` na przycisku `#btn-wstaw-ekspres`.
3. W funkcji obsługi zdarzenia pobierz tekst z pola formularza metodą `trim()`. Jeżeli pole jest puste, ustaw treść domyślną: `"Ekspres: Wymiana modułu bębna światłoczułego"`.
4. Utwórz nowy element `<li>` za pomocą `document.createElement('li')`.
5. Przypisz pobraną treść do `textContent` nowego elementu.
6. Dodaj klasę `"zlecenie-ekspres"` za pomocą `classList.add()`.
7. Ustaw atrybut podpowiedzi: `nowyElement.title = 'Kliknij, aby oznaczyć realizację'`.
8. Zarejestruj nasłuchiwacz zdarzenia `click` na nowo utworzonym elemencie, który za pomocą `classList.toggle('zrealizowane')` przełącza klasę ukończenia zlecenia.
9. Wstaw element do kontenera `#kolejka-zlecen` dokładnie przed elementem `#zlecenie-standard` za pomocą metody `insertBefore()`.
10. Wyczyść pole tekstowe i ustaw na nim fokus.

## Przykład
- **Stan początkowy:** Na liście serwisowej widoczne jest jedno zlecenie standardowe z identyfikatorem `#zlecenie-standard`.
- **Akcja użytkownika:** Uczeń wpisuje `"Awaria zasilacza drukarki laserowej"`, klika przycisk "Wstaw zlecenie ekspresowe", a następnie klika nowo dodany element na liście.
- **Efekt:** Nowe zlecenie z żółtym obramowaniem pojawia się nad zleceniem standardowym, a po jego kliknięciu zyskuje przekreślenie i zielone podświetlenie (klasa `.zrealizowane`).
