# Teoria: Dynamiczne tworzenie i montowanie węzłów DOM

> ✦ **Materiały wspomagane AI** — treść działu powstała z udziałem narzędzi AI
> według programu i standardów INF.03; przed zajęciami weryfikuje ją nauczyciel.

---

## 1. Cykl życia węzła DOM: Pamięć RAM a Widok Dokumentu

W dotychczasowych działach manipulowaliśmy elementami, które istniały w strukturze dokumentu HTML od momentu wczytania strony (`document.getElementById()`, `document.querySelector()`). Gdy modyfikowaliśmy ich właściwość `textContent` lub klasy w `classList`, przeglądarka aktualizowała istniejące węzły.

W nowoczesnych aplikacjach internetowych większość elementów powstaje jednak w sposób w pełni dynamiczny — w odpowiedzi na akcje użytkownika, takie jak dodanie pozycji do koszyka, wprowadzenie wpisu do dziennika czy załadowanie danych z tabeli. 

Proces powstawania nowego elementu w drzewie DOM składa się zawsze z trzech niezależnych kroków:
1. **Utworzenie węzła w pamięci operacyjnej (RAM)** (węzeł jest tzw. elementem "odpiętym", ang. *detached node* — istnieje w zmiennej JavaScript, lecz użytkownik go jeszcze nie widzi).
2. **Pełna konfiguracja elementu** (nadanie bezpiecznego tekstu, klas CSS, atrybutów, stylów oraz podpięcie funkcji obsługi zdarzeń).
3. **Fizyczny montaż w aktywnym drzewie DOM** (wskazanie elementu nadrzędnego, do którego nowy węzeł zostaje dołączony).

---

## 2. Podstawowa fabryka elementów: `document.createElement()`

Podstawowym mechanizmem kreacji elementów w języku JavaScript jest metoda `document.createElement(tagName)`. Jako argument przyjmuje ona ciąg znaków określający nazwę znacznika HTML (np. `'div'`, `'li'`, `'p'`, `'span'`, `'button'`, `'article'`). Wielkość liter nie ma znaczenia, lecz przyjętym i zalecanym standardem jest zapis małymi literami.

```javascript
// Krok 1: Utworzenie pustego elementu <li> w pamięci operacyjnej
const nowaPozycja = document.createElement('li');

// Krok 2: Nadanie bezpiecznej treści i klasy wizualnej
nowaPozycja.textContent = 'Usługa serwisowa: Wymiana podzespołów';
nowaPozycja.classList.add('element-listy');

// Krok 3: Montaż w istniejącej liście <ul> w drzewie dokumentu
const listaUslug = document.querySelector('#lista-uslug');
listaUslug.appendChild(nowaPozycja);
```

> **Po co to jest:**
> Metoda `document.createElement()` tworzy w pełni funkcjonalny, czysty obiekt węzła DOM reprezentujący znacznik HTML. Pozwala programiście zbudować element o dowolnym stopniu złożoności w pamięci skryptu przed pokazaniem go użytkownikowi na ekranie.

> **Typowa pomyłka:**
> Podawanie w argumencie nawiasów trójkątnych, np. `document.createElement('<li>')`. Prawidłowy zapis to sama nazwa znacznika bez ostrych nawiasów: `document.createElement('li')`. Przekazanie `'<li>'` zwykle tworzy nieprawidłowy, nieużyteczny znacznik — dlatego zawsze podajemy samą nazwę, np. `'li'`.

---

## 2a. Atrybuty danych: `element.dataset` (`data-*`)

Przy tworzeniu węzłów często musimy przechować wartość pomocniczą (kod zgłoszenia, kwotę liczbową, identyfikator rekordu), której nie chcemy wyciągać z widocznego tekstu na ekranie. Służą do tego atrybuty HTML `data-*`, dostępne w JavaScript przez właściwość `element.dataset`.

```javascript
const pozycja = document.createElement('li');
pozycja.classList.add('pozycja-uslugi');

// Zapis: data-koszt="1450" oraz data-kod="ALERT-2026"
pozycja.dataset.koszt = '1450';
pozycja.dataset.kod = 'ALERT-2026';

pozycja.textContent = 'Diagnostyka sieci LAN';
document.querySelector('#lista-uslug').appendChild(pozycja);

// Odczyt (np. przy sumowaniu kosztów):
const kwota = parseFloat(pozycja.dataset.koszt); // 1450
const kod = pozycja.dataset.kod;                 // 'ALERT-2026'
```

Nazwa po `data-` w HTML mapuje się na właściwość camelCase w `dataset`:
- `data-koszt` → `element.dataset.koszt`
- `data-kod-zgloszenia` → `element.dataset.kodZgloszenia`

> **Po co to jest:**
> `dataset` pozwala bezpiecznie powiązać dane robocze z węzłem DOM bez parsowania napisów typu `"Koszt: 1450.00 PLN"`. To standardowy wzorzec przy listach, koszykach i podsumowaniach.

> **Typowa pomyłka:**
> Próba zapisu `element.dataset.data-koszt = ...` (z myślnikiem w nazwie właściwości). W JavaScript używamy `element.dataset.koszt` — bez przedrostka `data-` i bez myślników.

---

## 3. Węzły tekstowe: `document.createTextNode()`

Każdy tekst w drzewie DOM jest reprezentowany przez osobny węzeł tekstowy (*TextNode*). Chociaż w codziennej pracy najczęściej przypisujemy tekst za pomocą właściwości `element.textContent`, język JavaScript pozwala na jawne utworzenie węzła tekstowego za pomocą `document.createTextNode(tekst)`.

```javascript
const akapit = document.createElement('p');
const tekstWewnetrzny = document.createTextNode('Operacja zakończona sukcesem.');

// Dołączenie węzła tekstowego do wnętrza znacznika <p>
akapit.appendChild(tekstWewnetrzny);
document.querySelector('#komunikaty').appendChild(akapit);
```

> **Po co to jest:**
> `document.createTextNode()` służy do manualnego tworzenia fragmentów tekstu, np. gdy chcemy dołączyć czysty tekst obok istniejącego elementu bez nadpisywania całej zawartości kontenera. W 95% typowych zastosowań przypisanie `element.textContent = '...'` jest jednak wygodniejsze i bardziej czytelne.

> **Typowa pomyłka:**
> Próba ustawiania klas lub stylów na węźle tekstowym (np. `tekstWewnetrzny.classList.add(...)`). Węzeł tekstowy nie jest elementem HTML (*Element*) — nie posiada stylów ani klas, przechowuje wyłącznie znaki. Style nadajemy znacznikowi nadrzędnemu.

---

## 4. Metody montażu węzłów: `appendChild()` vs `append()`

Gdy element jest gotowy w pamięci, musimy zdecydować, w którym miejscu struktury DOM ma się pojawić. Przeglądarka udostępnia dwie podstawowe metody montażu na końcu kontenera: klasyczną `appendChild()` oraz nowoczesną `append()`.

### Metoda klasyczna: `parentElement.appendChild(childNode)`
- Przyjmuje **dokładnie jeden** argument będący obiektem węzła (*Node*).
- Zawsze wstawia węzeł jako **ostatnie dziecko** wskazanego rodzica.
- Zwraca wstawiony węzeł, co umożliwia przypisanie go do zmiennej.
- Nie pozwala na przekazanie zwykłego tekstu jako napisu (przekazanie napisu zgłosi błąd `TypeError`).

### Nowoczesna metoda: `parentElement.append(...nodesOrDOMStrings)`
- Może przyjąć **wiele argumentów** oddzielonych przecinkami.
- Przyjmuje zarówno obiekty węzłów, jak i zwykłe ciągi znaków (ciągi znaków są automatycznie konwertowane na węzły tekstowe).
- Wstawia wszystkie przekazane elementy na końcu kontenera rodzica w jednym kroku.
- Nie zwraca żadnej wartości (`undefined`).

```javascript
const kontener = document.querySelector('#panel-powiadomien');

// 1. Zastosowanie appendChild() - dokładnie jeden węzeł
const powiadomienie1 = document.createElement('div');
powiadomienie1.textContent = 'Powiadomienie standardowe';
kontener.appendChild(powiadomienie1);

// 2. Zastosowanie append() - wiele węzłów i tekst w jednej instrukcji
const ikona = document.createElement('span');
ikona.classList.add('ikona-ostrzezenia');
ikona.textContent = '⚠ ';

const komunikat = document.createElement('strong');
komunikat.textContent = 'Uwaga!';

// append wstawia element, napis i kolejny węzeł na raz:
kontener.append(ikona, komunikat, ' Wymagana weryfikacja danych.');
```

> **Po co to jest:**
> Obie metody służą do osadzania przygotowanych elementów w interfejsie. Metoda `appendChild()` to uniwersalny standard wspierany we wszystkich wersjach przeglądarek i egzaminach CKE, podczas gdy `append()` zapewnia większą elastyczność i zwięzłość kodu przy wstawianiu wielu elementów jednocześnie.

> **Typowa pomyłka:**
> Wywołanie `kontener.appendChild('Napis')` zamiast `kontener.append('Napis')`. Metoda `appendChild` bezwzględnie wymaga obiektu węzła i zgłosi błąd w konsoli: `Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'`.

---

## 5. Precyzyjne pozycjonowanie węzłów: `prepend()` oraz `insertBefore()`

Nie zawsze nowy element powinien trafić na sam koniec kontenera. Często interfejs wymaga umieszczenia nowego powiadomienia na samej górze listy lub wstawienia wiersza tabeli pomiędzy dwoma istniejącymi rekordami.

### Wstawianie na początek: `parentElement.prepend(...nodesOrDOMStrings)`
Metoda `prepend()` działa analogicznie do `append()`, lecz wstawia przekazane elementy na samym początku kontenera — przed jego pierwszym istniejącym dzieckiem.

```javascript
const listaZgloszen = document.querySelector('#lista-zgloszen');
const pilneZgloszenie = document.createElement('li');
pilneZgloszenie.classList.add('priorytet-wysoki');
pilneZgloszenie.textContent = 'Nowe zgłoszenie awaryjne #1042';

// Pojawi się na samej górze listy jako pierwsze <li>
listaZgloszen.prepend(pilneZgloszenie);
```

### Wstawianie przed wskazanym elementem: `parentElement.insertBefore(newNode, referenceNode)`
Metoda `insertBefore()` pozwala na precyzyjne umieszczenie nowego węzła przed wskazanym węzłem referencyjnym.
- `newNode`: element, który chcemy wstawić.
- `referenceNode`: istniejący element-dziecko rodzica, przed którym ma wylądować nowy węzeł. Jeżeli przekażemy `null`, element zostanie wstawiony na samym końcu (identycznie jak w `appendChild`).

```javascript
const kontenerKrokow = document.querySelector('#kroki-procesu');
const krokKoncowy = document.querySelector('#krok-podsumowanie');

const krokPosredni = document.createElement('div');
krokPosredni.classList.add('krok');
krokPosredni.textContent = 'Krok 2: Potwierdzenie zamówienia';

// Wstawienie nowego kroku tuż przed krokiem podsumowania
kontenerKrokow.insertBefore(krokPosredni, krokKoncowy);
```

> **Po co to jest:**
> Metody `prepend()` i `insertBefore()` gwarantują pełną kontrolę nad kolejnością elementów w drzewie DOM, co jest kluczowe w dziennikach zdarzeń, sortowaniu list oraz formularzach wieloetapowych.

> **Typowa pomyłka:**
> Odwrócenie kolejności argumentów w `insertBefore()`. Pamiętaj: pierwszy argument to **nowy** element (`newNode`), a drugi to element **referencyjny** (`referenceNode`), przed którym wstawiamy. Zamiana miejscami spowoduje błąd `NotFoundError`.

---

## 6. Bezpieczeństwo: `createElement` + `textContent` a ochrona przed podatnością XSS

Jednym z najważniejszych zagadnień bezpieczeństwa aplikacji internetowych jest ochrona przed atakami typu **XSS (Cross-Site Scripting)**. Do ataku dochodzi wtedy, gdy nieprzefiltrowane dane wprowadzone przez użytkownika (np. w polu tekstowym) zostaną zinterpretowane przez przeglądarkę jako wykonywalny kod HTML lub JavaScript.

Rozważmy przypadek, w którym użytkownik wpisuje w polu formularza tekst zawierający znaczniki:
`<img src="puste" onerror="alert('Atak XSS!')">`

### 1. Podejście niebezpieczne — `innerHTML`:
```javascript
const wpisUzytkownika = poleTekstowe.value;
// BŁĄD BEZPIECZEŃSTWA: przeglądarka zinterpretuje napis jako HTML i wykona skrypt w onerror!
kontener.innerHTML += `<div class="komentarz">${wpisUzytkownika}</div>`;
```

### 2. Podejście bezpieczne — `createElement()` + `textContent`:
```javascript
const wpisUzytkownika = poleTekstowe.value;

const nowyKomentarz = document.createElement('div');
nowyKomentarz.classList.add('komentarz');
// BEZPIECZEŃSTWO: textContent traktuje cały ciąg jako czysty tekst.
// Żadne znaczniki ani atrybuty zdarzeń nie zostaną zinterpretowane!
nowyKomentarz.textContent = wpisUzytkownika;

kontener.appendChild(nowyKomentarz);
```

> **Po co to jest:**
> Stosowanie `document.createElement()` wraz z właściwością `textContent` skutecznie chroni przed interpretacją HTML i JavaScript pochodzących z danych użytkownika przy wstawianiu tekstu do DOM. Przeglądarka traktuje całą przekazaną wartość jako dane znakowe, a nie kod do sparsowania.

> **Typowa pomyłka:**
> Używanie `innerHTML` do wstrzykiwania pojedynczych elementów ze względu na złudną oszczędność linii kodu. Prowadzi to do niszczenia istniejących referencji DOM i odpinania podpiętych wcześniej nasłuchiwaczy zdarzeń na pozostałych elementach w kontenerze.

---

## 7. Optymalizacja wydajności: `document.createDocumentFragment()`

Gdy musimy wygenerować w pętli dużą liczbę elementów (np. 100 wierszy tabeli lub 50 kafelków katalogu produktów), wielokrotne wywoływanie `appendChild()` bezpośrednio na głównym kontenerze dokumentu powoduje za każdym razem ponowne przeliczanie układu strony (tzw. *reflow*) i odmalowywanie grafiki (*repaint*). Obciąża to procesor i prowadzi do przycinania animacji w przeglądarce.

Rozwiązaniem tego problemu jest **`DocumentFragment`** — niewidoczny, lekki kontener pomocniczy istniejący wyłącznie w pamięci RAM.

```javascript
const listaKlientow = document.querySelector('#lista-klientow');
const daneKlientow = ['Firma Alfa', 'Partner Beta', 'Serwis Gamma', 'Dystrybucja Delta'];

// Tworzymy fragment dokumentu w pamięci
const fragment = document.createDocumentFragment();

daneKlientow.forEach(nazwa => {
  const elementLi = document.createElement('li');
  elementLi.classList.add('klient-pozycja');
  elementLi.textContent = nazwa;
  
  // Dołączamy elementy do wirtualnego fragmentu w pamięci (brak operacji reflow w oknie!)
  fragment.appendChild(elementLi);
});

// Jednorazowy montaż w drzewie DOM - wszystkie elementy pojawiają się jednocześnie
listaKlientow.appendChild(fragment);
```

Gdy przekazujemy `DocumentFragment` do metody `appendChild()`, do drzewa DOM wstawiane są **wszystkie dzieci** tego fragmentu, natomiast sam fragment znika (ulega opróżnieniu).

> **Po co to jest:**
> `DocumentFragment` redukuje liczbę operacji renderowania przeglądarki do dokładnie jednej, bez względu na to, ile setek elementów generujemy w pętli.

> **Typowa pomyłka:**
> Próba stylowania samego fragmentu (np. `fragment.classList.add(...)`). `DocumentFragment` nie posiada reprezentacji graficznej ani stylów w CSS — jest jedynie logicznym opakowaniem transportowym w pamięci.

---

## 8. Klonowanie węzłów: `element.cloneNode(deep)`

Jeżeli w strukturze HTML mamy przygotowany wzorzec (szablon) karty produktu, możemy utworzyć jego kopię za pomocą metody `cloneNode(deep)`.

Argument logiczny `deep`:
- `false` (płytkie klonowanie): kopiuje wyłącznie sam znacznik z atrybutami, bez żadnej zawartości tekstowej i bez elementów potomnych.
- `true` (głębokie klonowanie): kopiuje element wraz z całą podrzędną strukturą drzewa, wszystkimi potomkami i tekstami.

```javascript
// Pobieramy wzorcową kartę z HTML
const wzorzecKarty = document.querySelector('.karta-szablon');

// Wykonujemy głęboką kopię szablonu wraz z potomkami
const nowaKarta = wzorzecKarty.cloneNode(true);

// Usuwamy klasę szablonu i konfigurujemy dane
nowaKarta.classList.remove('karta-szablon');
nowaKarta.classList.add('karta-aktywna');
nowaKarta.querySelector('.karta-tytul').textContent = 'Nowa usługa sieciowa';

document.querySelector('#siatka-kart').appendChild(nowaKarta);
```

> **Po co to jest:**
> Metoda `cloneNode(true)` pozwala na błyskawiczne powielanie rozbudowanych szablonów HTML bez konieczności manualnego tworzenia każdego zagnieżdżonego znacznika przez `createElement()`.

> **Typowa pomyłka:**
> Pominięcie argumentu logicznego lub przekazanie `false` w sytuacji, gdy zależy nam na całej strukturze karty. Wtedy sklonowany zostanie jedynie pusty znacznik zewnętrzny bez nagłówków, ikon i przycisków wewnątrz.

---

## 9. Rejestracja zdarzeń na nowo utworzonych elementach

Element utworzony programistycznie za pomocą `document.createElement()` jest pełnoprawnym obiektem interfejsu. Oznacza to, że możemy podpiąć pod niego nasłuchiwacz zdarzeń `addEventListener` **zanim** w ogóle dołączymy go do drzewa strony:

```javascript
const przyciskAkcji = document.createElement('button');
przyciskAkcji.type = 'button';
przyciskAkcji.classList.add('btn-akcja');
przyciskAkcji.textContent = 'Szczegóły zlecenia';

// Podpinamy zdarzenie w pamięci jeszcze przed wpięciem do DOM
przyciskAkcji.addEventListener('click', (event) => {
  const cel = event.currentTarget;
  cel.classList.toggle('btn-wybrany');
  console.log('Kliknięto nowo utworzony przycisk:', cel.textContent);
});

document.querySelector('#pasek-narzedzi').appendChild(przyciskAkcji);
```

Alternatywnym, wysoce zalecanym wzorcem przy dużej liczbie dynamicznych pozycji jest **delegacja zdarzeń** na stałym elemencie nadrzędnym (np. kontenerze listy `#lista-pozycji`), gdzie sprawdzamy pochodzenie kliknięcia za pomocą `event.target.closest()`.

---

## 10. Podsumowanie dobrych praktyk i reguł bezpieczeństwa

1. **Konfiguruj przed montażem:** Zawsze ustawiaj klasy, atrybuty i treść nowego węzła przed wywołaniem `appendChild()` / `append()`.
2. **Nigdy nie łącz `innerHTML` z niesprawdzonymi danymi:** Zawsze stosuj `createElement()` + `textContent` dla danych pochodzących od użytkownika.
2a. **Dane robocze trzymaj w `dataset`:** Kwoty, kody i identyfikatory zapisuj jako `data-*` (`element.dataset...`), zamiast wyciągać je z widocznego tekstu.
3. **Pętle twórz z `DocumentFragment`:** Zamiast montować 50 razy w drzewie dokumentu, montuj 50 razy we fragmencie, a na końcu wykonaj pojedynczy `appendChild(fragment)`.
4. **Czystość kodu:** Nie używaj przestarzałych konstrukcji `var`, nie twórz zdarzeń liniowych w HTML i nie stosuj okien blokujących `alert()`/`prompt()`.
