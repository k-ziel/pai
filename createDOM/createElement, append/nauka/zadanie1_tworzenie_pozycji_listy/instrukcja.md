# Zadanie 1: Dynamiczne dodawanie pozycji do spisu magazynowego

## Cel
Celem zadania jest opanowanie bazowego mechanizmu tworzenia nowego elementu DOM w pamięci operacyjnej za pomocą `document.createElement('li')`, przypisania mu bezpiecznej treści za pomocą `textContent` oraz dołączenia go na końcu listy magazynowej za pomocą `appendChild()`. Po poprawnym wykonaniu zadania kliknięcie przycisku powoduje natychmiastowe dopisanie nowego podzespołu do widocznej listy.

Umiejętność dynamicznego tworzenia i wstawiania pojedynczego elementu jest kluczowym fundamentem aplikacji internetowych. Dokładnie ten sam mechanizm stosuje się przy dodawaniu produktów do koszyka w sklepach e-commerce, dopisywaniu nowej wiadomości na czacie oraz tworzeniu kolejnych pozycji na liście zadań w aplikacjach biurowych.

## Wskazówki aktywizujące
1. Przypomnij sobie z pliku `teoria.md` sekcję 2 (*Podstawowa fabryka elementów: document.createElement()*). Pamiętaj, że do metody przekazujemy samą nazwę znacznika bez nawiasów ostrych.
2. Jaką właściwość należy wybrać, aby wpisać do elementu tekst pobrany z formularza bez ryzyka wykonania znaczników HTML?
3. Otwórz konsolę DevTools (F12) i sprawdź wynik polecenia: `document.createElement('li')` — zauważ, że węzeł istnieje w pamięci, mimo że nie jest jeszcze widoczny na stronie.

## Treść do wpisania
W skrypcie należy zastosować następujące dosłowne etykiety i teksty:
- Nazwa domyślna nowego towaru: `"Przewód miedziany YDYp 3x2.5 mm²"`
- Dodatkowa klasa stylu pozycji: `"pozycja-towaru"`
- Identyfikator kontenera listy: `"#lista-towarow"`
- Identyfikator przycisku akcji: `"#btn-dodaj"`
- Identyfikator pola wejściowego: `"#nazwa-towaru"`

## Wymagania
1. Pobierz referencje do elementów: pola tekstowego `#nazwa-towaru`, przycisku `#btn-dodaj` oraz listy `#lista-towarow`.
2. Zarejestruj zdarzenie `click` na przycisku `#btn-dodaj` za pomocą metody `addEventListener`.
3. W funkcji obsługi zdarzenia pobierz wartość wpisaną w polu tekstowym i usuń zbędne spacje krańcowe za pomocą metody `trim()`. Jeśli pole jest puste, ustaw jako nazwę domyślną `"Przewód miedziany YDYp 3x2.5 mm²"`.
4. Utwórz nowy element `<li>` za pomocą `document.createElement('li')`.
5. Ustaw treść nowego elementu za pomocą właściwości `textContent`.
6. Nadaj elementowi klasę CSS `"pozycja-towaru"` za pomocą `classList.add()`.
7. Dołącz element na końcu listy docelowej za pomocą metody `appendChild()`.
8. Po pomyślnym dodaniu wyczyść zawartość pola tekstowego i przywróć na nim fokus za pomocą metody `focus()`.

## Przykład
- **Stan początkowy:** Na ekranie widoczna jest lista z dwiema pozycjami początkowymi oraz pole formularza z przyciskiem "Dodaj do spisu".
- **Akcja użytkownika:** Uczeń wpisuje w polu tekst `"Kabel solarny 4 mm²"` i klika przycisk "Dodaj do spisu".
- **Efekt:** Na końcu listy pojawia się nowy element zawierający dokładnie napis `Kabel solarny 4 mm²` z obramowaniem i tłem zdefiniowanym w klasie `.pozycja-towaru`, a pole tekstowe staje się puste i gotowe do wpisania kolejnej pozycji.
