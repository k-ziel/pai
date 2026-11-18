// Zadanie 4: Zintegrowany generator kart ofertowych
const inputNazwa = document.querySelector('#nazwa-oferty');
const inputOpis = document.querySelector('#opis-oferty');
const btnDodaj = document.querySelector('#btn-dodaj-oferte');
const katalogOfert = document.querySelector('#katalog-ofert');

// Obsługa kliknięcia na przycisku karty początkowej
const poczatkowyPrzycisk = document.querySelector('.karta-oferty .btn-wybierz');
if (poczatkowyPrzycisk) {
  poczatkowyPrzycisk.addEventListener('click', (e) => {
    e.target.closest('.karta-oferty').classList.toggle('oferta-wybrana');
  });
}

btnDodaj.addEventListener('click', () => {
  // Twoje rozwiazanie:
  // KROK 1: Pobierz wartości z inputNazwa i inputOpis (użyj trim()).
  //         Jeśli puste, użyj domyślnych:
  //         nazwa: "Ergonomiczny fotel biurowy Ergo-Plus"
  //         opis: "Konstrukcja z podparciem lędźwiowym i regulacją 4D podłokietników"
  // KROK 2: Utwórz element <article> i nadaj mu klasę "karta-oferty"
  // KROK 3: Utwórz <h3>, przypisz textContent = nazwa, a kolor stylu style.color = "#38bdf8"
  // KROK 4: Utwórz <p>, przypisz textContent = opis
  // KROK 5: Utwórz <span>, dodaj klasę "cena-oferty", textContent = "Cena: 1 290 PLN"
  // KROK 6: Utwórz <button type="button">, klasa "btn-wybierz", textContent = "Wybierz ofertę"
  // KROK 7: Podepnij pod ten przycisk zdarzenie 'click' przełączające klasę "oferta-wybrana" na tworzonym artykule
  // KROK 8: Połącz potomków wewnątrz karty za pomocą metody append(h3, p, span, button)
  // KROK 9: Wstaw kartę do katalogOfert metodą appendChild()
  // KROK 10: Wyczyść pola formularza i ustaw fokus na inputNazwa
});
