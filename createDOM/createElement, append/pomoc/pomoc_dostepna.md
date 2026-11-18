# Pomoc dostępna: Tworzenie i wstawianie węzłów DOM

Wersja materiału dydaktycznego przygotowana z myślą o uczniach preferujących jednoznaczny, dosłowny przekaz instruktażowy.

---

## 1. Słowniczek pojęć tego działu

- **Węzeł (Node):** Podstawowy obiekt w drzewie strony internetowej. Węzłem jest każdy znacznik HTML, tekst wewnątrz znacznika oraz komentarz.
- **Element:** Węzeł reprezentujący znacznik HTML, na przykład `<div>`, `<p>` lub `<button>`. Posiada klasy CSS, atrybuty oraz może zawierać inne elementy w środku.
- **Rodzic (Parent):** Element, który zawiera w swoim wnętrzu inny element. Na przykład lista `<ul>` jest rodzicem dla elementów `<li>`.
- **Dziecko (Child):** Element znajdujący się wewnątrz elementu nadrzędnego. Na przykład `<li>` jest dzieckiem listy `<ul>`.
- **`document.createElement()`:** Polecenie języka JavaScript, które tworzy w pamięci komputera nowy, pusty element HTML.
- **`textContent`:** Właściwość służąca do bezpiecznego wpisywania tekstu do wnętrza elementu. Tekst ten jest wyświetlany dosłownie i nie tworzy nowych znaczników HTML.
- **`appendChild()`:** Polecenie, które wstawia przygotowany element na sam koniec wskazanego elementu rodzica.
- **`append()`:** Nowoczesne polecenie, które pozwala wstawić na koniec rodzica jeden lub kilka elementów naraz, a także zwykły tekst.
- **`prepend()`:** Polecenie, które wstawia element na sam początek wskazanego rodzica, przed wszystkimi jego dotychczasowymi dziećmi.
- **`insertBefore()`:** Polecenie, które wstawia nowy element bezpośrednio przed wskazanym elementem-dzieckiem rodzica.
- **`dataset` / `data-*`:** Sposób zapisu danych roboczych na elemencie, np. `el.dataset.koszt = '1450'` tworzy atrybut `data-koszt="1450"`.
- **`classList.toggle()`:** Przełącza klasę CSS (dodaje, jeśli jej brakuje; usuwa, jeśli już jest).
- **`DocumentFragment`:** Niewidoczne opakowanie w pamięci, do którego można dołączać wiele elementów przed wstawieniem ich na stronę.

---

## 2. Kolejność pracy z każdym zadaniem

1. Otwórz plik `instrukcja.md` znajdujący się w katalogu zadania. Przeczytaj dokładnie opis celu oraz sekcję z danymi do wpisania.
2. Otwórz plik roboczy `script.js` w swoim edytorze kodu. Odszukaj komentarz `// Twoje rozwiazanie` wskazujący miejsce zapisu skryptu.
3. Jeśli zadanie wymaga modyfikacji struktury HTML, otwórz plik `index.html`. Pracuj wyłącznie w miejscach oznaczonych komentarzem `<!-- KROK N: ... -->`.
4. Zapisz wprowadzone zmiany w plikach skrótem klawiszowym Ctrl + S. Otwórz plik `index.html` w przeglądarce internetowej i przetestuj działanie przycisku.
5. Otwórz narzędzia deweloperskie klawiszem F12 i wybierz zakładkę *Console*. Upewnij się, że w konsoli nie wyświetlają się czerwone komunikaty o błędach.
6. Dopiero po samodzielnej próbie wykonania zadania otwórz podkatalog `rozwiazanie/`. Porównaj swój kod z plikiem referencyjnym.

---

## 3. Schemat tworzenia nowego elementu w 4 krokach

Każde dynamiczne dodanie elementu do strony wykonujesz zawsze według tego samego schematu:

### Krok 1: Wyszukaj element rodzica w dokumencie
```javascript
const rodzic = document.querySelector('#lista-zamowien');
```

### Krok 2: Utwórz nowy element w pamięci
Podaj samą nazwę znacznika w cudzysłowie, bez ostrych nawiasów:
```javascript
const nowyElement = document.createElement('li');
```

### Krok 3: Ustaw tekst, klasy i atrybuty
Wypełnij element danymi zanim pokażesz go na stronie:
```javascript
nowyElement.textContent = 'Pakiet serwisowy standard';
nowyElement.classList.add('element-listy');
```

### Krok 4: Dołącz element do rodzica
Wybierz metodę montażu w zależności od tego, gdzie ma pojawić się element:
```javascript
// Na końcu rodzica:
rodzic.appendChild(nowyElement);

// Albo na początku rodzica:
// rodzic.prepend(nowyElement);

// Albo przed wskazanym elementem referencyjnym:
// rodzic.insertBefore(nowyElement, elementReferencyjny);
```

### Krok dodatkowy (gdy potrzeba): zapisz dane w `dataset`
```javascript
nowyElement.dataset.koszt = '1450';
nowyElement.dataset.kod = 'ALERT-2026';
```

### Krok dodatkowy (gdy potrzeba): nasłuchiwacz przed montażem
```javascript
nowyElement.addEventListener('click', () => {
  nowyElement.classList.toggle('zrealizowane');
});
```

### Masowe dodawanie: `DocumentFragment`
```javascript
const fragment = document.createDocumentFragment();
// ... twórz elementy i: fragment.appendChild(li);
rodzic.appendChild(fragment); // jedno wstawienie do DOM
```

---

## 4. Zasady dostępności cyfrowej (a11y) przy tworzeniu węzłów

Gdy tworzysz nowe elementy za pomocą języka JavaScript, pamiętaj o zasadach dostępności dla osób korzystających z czytników ekranu:

1. **Atrybut `alt` dla obrazów:** Jeżeli tworzysz element `<img>`, zawsze ustaw właściwość `alt` z krótkim opisem grafiki, na przykład `obraz.alt = 'Logo serwisu IT-Partner'`.
2. **Etykiety kontrolek formularza:** Jeśli generujesz pole tekstowe `<input>`, utwórz również znacznik `<label>` i połącz je atrybutami `htmlFor` oraz `id`.
3. **Przyciski funkcyjne:** Do elementów klikalnych zawsze używaj znacznika `<button type="button">`, a nie znacznika `<div>` czy `<span>`. Przycisk jest domyślnie dostępny z poziomu klawiatury za pomocą klawisza Tab i Enter.
4. **Czytelny kontrast i hierarchia:** Nie twórz tekstu o barwie zlewającej się z tłem. Zachowaj kolejność nagłówków, nie przeskakując z `<h2>` od razu do `<h5>`.
