# Zadanie 4: Zintegrowany generator kart ofertowych

## Cel
Celem zadania jest zintegrowanie wiedzy z zadań 1, 2 i 3 poprzez zbudowanie kompletnego, wielopoziomowego komponentu karty oferty biurowej w pamięci DOM. Uczeń łączy tworzenie hierarchii węzłów (`<article>`, `<h3>`, `<p>`, `<span>`, `<button>`), bezpieczne przypisywanie tekstu (`textContent`), nadawanie klas (`classList`), stylizację dynamiczną (`element.style`) oraz bezpośrednią rejestrację zdarzenia interaktywnego wyboru oferty.

Integracja dynamicznego tworzenia złożonych kart elementów z obsługą zdarzeń stanowi trzon nowoczesnego frontendu. Dokładnie ten wzorzec odpowiada za renderowanie kafelków produktów w sklepach e-commerce, kafelków z planami abonamentowymi w serwisach SaaS oraz dynamicznych wyników wyszukiwania ofert hotelowych i biletów lotniczych.

## Wskazówki aktywizujące
1. Zwróć uwagę na strukturę hierarchii: najpierw twórz elementy potomne (`<h3>`, `<p>`, `<span>`, `<button>`), a następnie dołączaj je do elementu nadrzędnego `<article>` za pomocą `karta.append(...)`.
2. Jak zapewnić, aby kliknięcie przycisku "Wybierz ofertę" zmieniało wygląd całej karty? Zarejestruj zdarzenie `click` na przycisku i w jego ciele przełącz klasę `oferta-wybrana` na karcie nadrzędnej.
3. Sprawdź w sekcji 6 pliku `teoria.md`, dlaczego przypisanie nazwy oferty przez `textContent` chroni aplikację przed atakiem XSS.

## Treść do wpisania
W skrypcie należy zastosować następujące dosłowne etykiety i teksty:
- Nazwa domyślna oferty: `"Ergonomiczny fotel biurowy Ergo-Plus"`
- Opis domyślny oferty: `"Konstrukcja z podparciem lędźwiowym i regulacją 4D podłokietników"`
- Etykieta ceny: `"Cena: 1 290 PLN"`
- Etykieta przycisku akcji: `"Wybierz ofertę"`
- Klasa główna karty: `"karta-oferty"`
- Klasa ceny: `"cena-oferty"`
- Klasa przycisku wyboru: `"btn-wybierz"`
- Kolor nagłówka (inline): `"#38bdf8"`
- Klasa stanu zaznaczenia: `"oferta-wybrana"`
- Identyfikator siatki katalogu: `"#katalog-ofert"`
- Identyfikator przycisku generowania: `"#btn-dodaj-oferte"`
- Identyfikator pola nazwy: `"#nazwa-oferty"`
- Identyfikator pola opisu: `"#opis-oferty"`

## Wymagania
1. Pobierz referencje do pól formularza `#nazwa-oferty`, `#opis-oferty`, przycisku `#btn-dodaj-oferte` oraz kontenera `#katalog-ofert`.
2. Zarejestruj zdarzenie `click` na przycisku `#btn-dodaj-oferte`.
3. Pobierz wartości z pól tekstowych za pomocą metody `trim()`. Dla **każdego** pustego pola osobno zastosuj odpowiadającą mu wartość domyślną (pusta nazwa nie wymusza domyślnego opisu i odwrotnie):
   - dla nazwy: `"Ergonomiczny fotel biurowy Ergo-Plus"`
   - dla opisu: `"Konstrukcja z podparciem lędźwiowym i regulacją 4D podłokietników"`
4. Utwórz kontener główny `<article>` za pomocą `document.createElement('article')` i nadaj mu klasę `"karta-oferty"`.
5. Utwórz nagłówek `<h3>`, przypisz do niego nazwę oferty przez `textContent` i ustaw kolor tekstu przez `naglowek.style.color = '#38bdf8'`.
6. Utwórz akapit `<p>` dla opisu i przypisz do niego pobrany opis oferty przez `textContent`.
7. Utwórz znacznik `<span>` dla ceny, nadaj mu klasę `"cena-oferty"` oraz treść `"Cena: 1 290 PLN"`.
8. Utwórz przycisk `<button type="button">`, nadaj mu klasę `"btn-wybierz"` oraz tekst `"Wybierz ofertę"`.
9. Zarejestruj zdarzenie `click` na utworzonym przycisku: kliknięcie ma przełączać klasę `"oferta-wybrana"` na karcie nadrzędnej `<article>` za pomocą `karta.classList.toggle('oferta-wybrana')`.
10. Zmontuj strukturę: dołącz nagłówek, opis, cenę i przycisk do wnętrza karty `<article>` za pomocą `karta.append(h3, p, spanCena, btnWybierz)`.
11. Dołącz gotową kartę do kontenera `#katalog-ofert` za pomocą `appendChild()`.
12. Zresetuj wartości obu pól formularza i ustaw fokus na polu nazwy oferty.

## Przykład
- **Stan początkowy:** W katalogu ofert widoczna jest jedna przykładowa karta mebla biurowego.
- **Akcja użytkownika:** Uczeń wpisuje nazwę `"Biurko z elektryczną regulacją wysokości"`, opis `"Zakres regulacji 65-130 cm, blat dębowy"` i klika "Dodaj ofertę do katalogu", a następnie klika przycisk "Wybierz ofertę" na nowej karcie.
- **Efekt:** W siatce pojawia się nowa karta z jasnoniebieskim nagłówkiem, opisem i ceną. Po kliknięciu przycisku cała karta otrzymuje podświetloną szmaragdową ramkę i zielone tło (klasa `.oferta-wybrana`).
