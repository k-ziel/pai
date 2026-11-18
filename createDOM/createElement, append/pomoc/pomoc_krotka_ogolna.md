# Pomoc krótka ogólna: Moduł T40

## 1. Struktura katalogu zadania a folder rozwiazanie/

Każde zadanie w module posiada przejrzystą strukturę katalogów:

| Lokalizacja | Rola pliku | Przeznaczenie |
|---|---|---|
| `index.html` (katalog zadania) | Szablon strukturalny HTML | Gotowy szkielet strony ze znacznikami i kontenerami dla ucznia |
| `style.css` (katalog zadania) | Arkusz stylów CSS | Przygotowane reguły wizualne i klasy stanowe |
| `script.js` (katalog zadania) | Skrypt roboczy ucznia | Plik z komentarzami instruktażowymi do samodzielnego uzupełnienia |
| `instrukcja.md` (katalog zadania) | Treść zadania | Wymagania merytoryczne i specyfikacja działania |
| `rozwiazanie/index.html` | Wzorzec referencyjny | Kompletny plik HTML do weryfikacji działania |
| `rozwiazanie/style.css` | Wzorzec referencyjny | Kompletny arkusz CSS |
| `rozwiazanie/script.js` | Wzorzec referencyjny | W 100% działający kod referencyjny, do którego zaglądasz po próbie |

---

## 2. Podręczna ściąga metod DOM (Tworzenie i montaż)

```javascript
// 1. Utworzenie nowego elementu
const el = document.createElement('div'); // sama nazwa znacznika bez ostrych nawiasów!

// 2. Bezpieczna treść i konfiguracja
el.textContent = 'Treść elementu';
el.classList.add('klasa-css');
el.id = 'unikalny-identyfikator';
el.style.backgroundColor = '#f0f4f8';
el.dataset.koszt = '1450'; // → atrybut data-koszt="1450"
el.dataset.kod = 'ALERT-2026';

// 3. Montaż na końcu kontenera
parentElement.appendChild(el); // dokładnie jeden węzeł
parentElement.append(el, 'Tekst uzupełniający'); // wiele węzłów lub stringi

// 4. Montaż na początku kontenera
parentElement.prepend(el);

// 5. Precyzyjne wstawianie przed wskazanym elementem
parentElement.insertBefore(el, referenceNode);

// 6. Fragment dokumentu (optymalizacja pętli)
const fragment = document.createDocumentFragment();
fragment.appendChild(el);
parentElement.appendChild(fragment); // jedno odrysowanie ekranu

// 7. Głębokie klonowanie wzorca
const kopia = wzorzecElement.cloneNode(true); // true = wraz z potomkami
```

---

## 3. Szybkie przypomnienia techniczne

1. **Narzędzia deweloperskie (F12):** Zakładka *Elements* pozwala natychmiast podejrzeć, czy nowo wygenerowany element pojawił się w drzewie DOM i jakie otrzymał klasy. W zakładce *Console* sprawdzasz ewentualne błędy wykonania skryptu.
2. **Kolejność operacji (Utwórz → Skonfiguruj → Wepnij):** Najpierw wywołaj `createElement()`, następnie nadaj mu `textContent`, klasy i nasłuchiwacze zdarzeń, a dopiero na końcu wykonaj `appendChild()` do rodzica.
3. **Pamiętaj o jednostkach w stylach:** Przy manipulacji `el.style` wartości liczbowe muszą zawierać jednostkę w ciągu znaków, np. `el.style.width = '120px'`.
4. **Odporność na XSS:** Nigdy nie wstawiaj danych wprowadzonych przez użytkownika przez `innerHTML`. Zawsze stosuj `textContent` — chroni to przed interpretacją HTML/JS przy wstawianiu tekstu.
5. **Dane robocze:** Kwoty i kody trzymaj w `element.dataset` (np. `li.dataset.koszt`), zamiast wyciągać je z widocznego napisu.
6. **Zapobieganie przeładowaniu strony:** Jeśli tworzysz przycisk wewnątrz elementu, pamiętaj o atrybucie `button.type = 'button'` lub użyciu `event.preventDefault()`, aby kliknięcie nie powodowało niepożądanego odświeżenia okna.
