// Zadanie 1: Dynamiczne dodawanie pozycji do spisu magazynowego
// Pobierz referencje do elementów DOM
const inputNazwa = document.querySelector('#nazwa-towaru');
const btnDodaj = document.querySelector('#btn-dodaj');
const listaTowarow = document.querySelector('#lista-towarow');

btnDodaj.addEventListener('click', () => {
  nazwa = inputNazwa.value.trim()
  if(nazwa == '') {
    nazwa = "Przewód miedziany YDYp 3x2.5 mm²"
  }

  element = document.createElement('li')
  element.textContent = nazwa
  element.classList.add("pozycja-towaru")

  listaTowarow.appendChild(element)
  inputNazwa.value = ''
  inputNazwa.focus()


  // Twoje rozwiazanie:
  // KROK 1: Pobierz wartość z inputNazwa i usuń spacje metodą trim().
  //         Jeśli wartość jest pusta, użyj tekstu domyślnego: "Przewód miedziany YDYp 3x2.5 mm²"
  // KROK 2: Utwórz nowy element <li> za pomocą document.createElement('li')
  // KROK 3: Ustaw treść tekstową nowego elementu za pomocą textContent
  // KROK 4: Nadaj klasę "pozycja-towaru" za pomocą classList.add()
  // KROK 5: Wepnij element do listaTowarow za pomocą appendChild()
  // KROK 6: Wyczyść pole tekstowe i ustaw na nim kursor (focus())
});
