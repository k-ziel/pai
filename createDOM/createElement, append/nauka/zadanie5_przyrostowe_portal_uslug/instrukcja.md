# Zadanie 5 (Przyrostowe Capstone): Dynamiczny generator pozycji kosztorysowych portalu

## Cel
Celem zadania przyrostowego jest zwieńczenie działu poprzez implementację wydajnego modułu generowania pozycji kosztorysowych w Portalu Usługowo-Handlowym IT-Partner. Uczeń wykorzystuje lekki kontener `document.createDocumentFragment()` do jednorazowego, optymalnego montażu wielu pozycji w drzewie DOM, konfiguruje strukturę węzłów z cenami i atrybutami `data-koszt` oraz aktualizuje zbiorcze podsumowanie kosztów w kontenerze `#podsumowanie`.

Masowe generowanie elementów w oparciu o `DocumentFragment` to standard branżowy przy tworzeniu modułów zestawień finansowych i koszyków zamówień. Dokładnie ten wzorzec optymalizacyjny jest stosowany w systemach ERP i CRM przy wyświetlaniu setek pozycji magazynowych, w kalkulatorach leasingowych generujących harmonogramy spłat oraz w panelach fakturowania B2B.

## Wskazówki aktywizujące
1. Przypomnij sobie z pliku `teoria.md` sekcję o `document.createDocumentFragment()` oraz sekcję o atrybutach `dataset` / `data-*`. Dlaczego dodawanie elementów do fragmentu przed wpięciem do DOM jest szybsze niż wielokrotne `appendChild` do listy na stronie?
2. Jak policzyć sumę kosztów? Gotowa funkcja w starterze odczytuje `p.dataset.koszt` z każdego elementu `.pozycja-uslugi` — dlatego przy tworzeniu pozycji musisz zapisać liczbę w `li.dataset.koszt`.
3. Pamiętaj, że zadanie Capstone korzysta z jasnej palety barw Portalu Usługowo-Handlowego IT-Partner.

## Treść do wpisania
W skrypcie należy zastosować następujące dosłowne etykiety i wartości:
- Usługa domyślna: `"Diagnostyka i audyt bezpieczeństwa sieci LAN"`
- Koszt domyślny usługi: `1450`
- Format tekstu kosztu (szablon): `` `Koszt: ${koszt.toFixed(2)} PLN` ``
- Atrybut danych na pozycji: `li.dataset.koszt = String(koszt)` (w DOM: `data-koszt`)
- Klasa pierwszego spana z nazwą: `"nazwa"`
- Klasa wyróżnienia kosztu: `"koszt-wartosc"`
- Klasa elementu listy: `"pozycja-uslugi"`
- Prefiks podsumowania: `"Łączny koszt wybranych usług: "` (przyrostek `" PLN"`)
- Identyfikator listy usług: `"#lista-uslug"`
- Identyfikator pola podsumowania: `"#podsumowanie"`
- Identyfikator pola nazwy usługi: `"#nazwa-uslugi"`
- Identyfikator pola kosztu usługi: `"#koszt-uslugi"`
- Identyfikator przycisku dodawania: `"#btn-dodaj-pozycje"`
- Identyfikator przycisku generowania pakietu: `"#btn-pakiet-startowy"`
- Pakiet startowy (dokładnie te 3 pozycje):
  - `"Konfiguracja serwera plików NAS i macierzy RAID"` — `650`
  - `"Wdrożenie polityki kopii zapasowych w chmurze"` — `480`
  - `"Zdalne wsparcie techniczne Helpdesk (pakiet 10h)"` — `950`

## Wymagania
1. Pobierz referencje do kontrolek: `#nazwa-uslugi`, `#koszt-uslugi`, `#btn-dodaj-pozycje`, `#btn-pakiet-startowy`, `#lista-uslug` oraz `#podsumowanie`.
2. Funkcja pomocnicza `aktualizujPodsumowanie()` **jest już zaimplementowana w starterze** — nie pisz jej od nowa. Sumuje ona wartości `dataset.koszt` wszystkich elementów `.pozycja-uslugi` i wypisuje wynik w `#podsumowanie` z prefiksem `"Łączny koszt wybranych usług: "` oraz przyrostkiem `" PLN"`. Ty tylko **wywołujesz** tę funkcję po każdej zmianie listy.
3. Zarejestruj zdarzenie `click` na przycisku `#btn-dodaj-pozycje`:
   - Pobierz nazwę usługi (`trim()`) i koszt (z konwersją `parseFloat()`).
   - Jeśli nazwa jest pusta — użyj `"Diagnostyka i audyt bezpieczeństwa sieci LAN"`. Jeśli koszt jest `NaN` lub mniejszy od 0 — użyj `1450`. Oba warunki sprawdzaj **niezależnie**.
   - Utwórz element `<li>` z klasą `"pozycja-uslugi"` i ustaw `li.dataset.koszt = String(koszt)`.
   - Utwórz `<span>` z klasą `"nazwa"` i nazwą usługi przez `textContent`.
   - Utwórz drugi `<span>` z klasą `"koszt-wartosc"` i tekstem `` `Koszt: ${koszt.toFixed(2)} PLN` ``.
   - Zmontuj element `<li>` za pomocą `append()` i dołącz do `#lista-uslug`.
   - Wywołaj `aktualizujPodsumowanie()`.
   - Wyczyść oba pola formularza i ustaw fokus na polu nazwy usługi.
4. Zarejestruj zdarzenie `click` na przycisku `#btn-pakiet-startowy`, który generuje pakiet 3 gotowych usług z wykorzystaniem `document.createDocumentFragment()`:
   - Utwórz wirtualny fragment za pomocą `document.createDocumentFragment()`.
   - Przygotuj tablicę 3 obiektów usług IT-Partner z dokładnymi nazwami i kosztami z sekcji „Treść do wpisania”.
   - W pętli twórz elementy `<li>` (klasa `"pozycja-uslugi"`, `dataset.koszt`, span `"nazwa"`, span `"koszt-wartosc"` z `toFixed(2)`) i dołączaj je do fragmentu za pomocą `fragment.appendChild(li)`.
   - Po pętli wykonaj pojedynczy montaż fragmentu w DOM: `listaUslug.appendChild(fragment)`.
   - Wywołaj `aktualizujPodsumowanie()`.

## Przykład
- **Stan początkowy:** W portalu widoczna jest lista z jedną usługą bazową i podsumowaniem kosztów opiewającym na 850.00 PLN.
- **Akcja użytkownika:** Uczeń klika przycisk "Wczytaj pakiet startowy IT-Partner".
- **Efekt:** Trzy nowe pozycje zostają błyskawicznie wstawione do listy `#lista-uslug` w ramach jednej operacji renderowania (`DocumentFragment`), a pole `#podsumowanie` natychmiast aktualizuje sumaryczny koszt całego zlecenia (850 + 650 + 480 + 950 = 2930.00 PLN).
