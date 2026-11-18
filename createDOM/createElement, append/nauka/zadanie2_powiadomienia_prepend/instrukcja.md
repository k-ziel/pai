# Zadanie 2: Strumień alertów logistycznych z metodą prepend()

## Cel
Celem zadania jest opanowanie mechanizmu wstawiania nowych elementów na sam początek kontenera za pomocą metody `prepend()`, a także parametryzacji węzłów za pomocą atrybutów danych `dataset` oraz klas priorytetu CSS. Po poprawnym wykonaniu zadania każdy nowy alert dyspozytorski pojawia się na samej górze tablicy operacyjnej jako najświeższy wpis.

Mechanizm wstawiania na początek listy (`prepend`) jest powszechnie stosowany w systemach czasu rzeczywistego. Identyczną technikę spotkasz na portalach społecznościowych (gdzie nowe posty i komentarze doklejane są na górze osi czasu), w systemach bankowości elektronicznej (najnowsze transakcje na czele historii konta) oraz w konsolach monitoringu serwerów (najświeższe logi błędów).

## Wskazówki aktywizujące
1. Przejrzyj w pliku `teoria.md` sekcję o `prepend()` / `insertBefore()` oraz sekcję o `element.dataset`. Czym różni się zachowanie `prepend()` od `appendChild()`?
2. Jak odczytać i zapisać atrybut danych `data-kod` na elemencie w języku JavaScript? Pamiętaj o właściwości `element.dataset.kod`.
3. Wypróbuj w konsoli przeglądarki wywołanie: `kontener.prepend(document.createElement('div'))` na dowolnej stronie, aby zaobserwować, jak nowy element wyprzedza dotychczasowe dzieci kontenera.

## Treść do wpisania
W skrypcie należy zastosować następujące dosłowne etykiety i wartości:
- Treść domyślna nowego alertu: `"Nowy alert logistyczny: Opóźnienie na trasie tranzytowej S8"`
- Treść znacznika priorytetu: `"PILNE"`
- Klasa wizualna alertu: `"karta-alertu"`
- Klasa znacznika priorytetu: `"etykieta-priorytet"`
- Wartość atrybutu dataset kodu zgłoszenia: `"ALERT-2026"`
- Identyfikator kontenera alertów: `"#panel-alertow"`
- Identyfikator przycisku akcji: `"#btn-wyslij-alert"`
- Identyfikator pola treści: `"#tresc-alertu"`

## Wymagania
1. Pobierz referencje do pola `#tresc-alertu`, przycisku `#btn-wyslij-alert` oraz kontenera `#panel-alertow`.
2. Zarejestruj zdarzenie `click` na przycisku `#btn-wyslij-alert`.
3. Pobierz tekst z pola formularza metodą `trim()`. Jeżeli pole jest puste, przypisz treść domyślną: `"Nowy alert logistyczny: Opóźnienie na trasie tranzytowej S8"`.
4. Utwórz element nadrzędny alertu `<div>` za pomocą `document.createElement('div')` i nadaj mu klasę `"karta-alertu"`.
5. Zapisz atrybut danych na elemencie: `alertDiv.dataset.kod = 'ALERT-2026'`.
6. Utwórz znacznik `<span>` dla etykiety priorytetu za pomocą `document.createElement('span')`, nadaj mu klasę `"etykieta-priorytet"` i wpisz tekst `"PILNE"`.
7. Utwórz znacznik akapitu `<p>` dla treści komunikatu, przypisując do niego pobrany tekst za pomocą `textContent`.
8. Za pomocą metody `alertDiv.append(spanEtykieta, pTresc)` zmontuj wnętrze alertu.
9. Wstaw gotowy alert na sam początek listy w `#panel-alertow` za pomocą metody `prepend()`.
10. Zresetuj wartość pola formularza do pustego ciągu znaków i ustaw na nim fokus (`focus()`).

## Przykład
- **Stan początkowy:** W panelu dyspozytorskim widoczne są dwa wcześniejsze alerty.
- **Akcja użytkownika:** Uczeń wpisuje w polu `"Awaria naczepy chłodniczej w węźle A2"` i klika "Wyślij alert dyspozytorski".
- **Efekt:** Nowa karta z czerwoną etykietą `PILNE` i wpisanym tekstem pojawia się na samej górze kontenera `#panel-alertow` jako pierwszy element, spychając wcześniejsze komunikaty w dół.
