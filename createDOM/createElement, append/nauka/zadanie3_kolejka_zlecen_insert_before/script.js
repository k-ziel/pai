// Zadanie 3: Zlecenia serwisowe z insertBefore() i interakcją
const inputOpis = document.querySelector('#opis-zlecenia');
const btnWstawEkspres = document.querySelector('#btn-wstaw-ekspres');
const kolejkaZlecen = document.querySelector('#kolejka-zlecen');
const zlecenieStandard = document.querySelector('#zlecenie-standard');

// Obsługa kliknięcia na elemencie początkowym
zlecenieStandard.addEventListener('click', () => {
  zlecenieStandard.classList.toggle('zrealizowane');
});

btnWstawEkspres.addEventListener('click', () => {
  // Twoje rozwiazanie:
  // KROK 1: Pobierz tekst z inputOpis z metodą trim().
  //         Jeśli pusty, użyj: "Ekspres: Wymiana modułu bębna światłoczułego"
  // KROK 2: Utwórz nowy element <li> za pomocą document.createElement('li')
  // KROK 3: Ustaw textContent nowego elementu
  // KROK 4: Dodaj klasę "zlecenie-ekspres" za pomocą classList.add()
  // KROK 5: Ustaw atrybut title = "Kliknij, aby oznaczyć realizację"
  // KROK 6: Podepnij pod nowy element nasłuchiwacz zdarzenia 'click' przełączający klasę "zrealizowane"
  // KROK 7: Wstaw element do kolejkaZlecen przed elementem zlecenieStandard metodą insertBefore()
  // KROK 8: Wyczyść inputOpis i ustaw fokus
});
