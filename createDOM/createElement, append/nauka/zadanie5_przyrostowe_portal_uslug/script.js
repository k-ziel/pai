// Zadanie 5 (Przyrostowe Capstone): Dynamiczny generator pozycji kosztorysowych portalu
const inputNazwa = document.querySelector('#nazwa-uslugi');
const inputKoszt = document.querySelector('#koszt-uslugi');
const btnDodaj = document.querySelector('#btn-dodaj-pozycje');
const btnPakiet = document.querySelector('#btn-pakiet-startowy');
const listaUslug = document.querySelector('#lista-uslug');
const elPodsumowanie = document.querySelector('#podsumowanie');

// Funkcja aktualizująca łączne podsumowanie kosztów
function aktualizujPodsumowanie() {
  const pozycje = listaUslug.querySelectorAll('.pozycja-uslugi');
  let suma = 0;
  pozycje.forEach(p => {
    const wartosc = parseFloat(p.dataset.koszt);
    if (!isNaN(wartosc)) {
      suma += wartosc;
    }
  });
  elPodsumowanie.textContent = `Łączny koszt wybranych usług: ${suma.toFixed(2)} PLN`;
}

// 1. Dodawanie pojedynczej pozycji
btnDodaj.addEventListener('click', () => {

  nazwa = inputNazwa.value.trim()
  if(nazwa = '') {
    nazwa = "Diagnostyka i audyt bezpieczeństwa sieci LAN"
  }
  koszt = parseFloat(inputKoszt.value.trim())
  if(isNaN(koszt)) {
    koszt = 1450
  }

  li = document.createElement("li")
  li.classList.add(pozycja-uslugi)
  li.dataset.koszt = koszt

  span1 = document.createElement('span')
  span1.classList.add("nazwa")
  span1.textContent = nazwa

  span2 = document.createElement('span')
  span2.classList.add("koszt-wartosc")
  span2.textContent = `Koszt: ${koszt.toFixed(2)} PLN`


  // Twoje rozwiazanie:
  // KROK 1: Pobierz nazwę usługi i koszt (parseFloat).
  //         Jeśli puste/błędne, użyj domyślnych: nazwa: "Diagnostyka i audyt bezpieczeństwa sieci LAN", koszt: 1450
  // KROK 2: Utwórz <li> z klasą "pozycja-uslugi" i atrybutem dataset.koszt = koszt
  // KROK 3: Utwórz <span class="nazwa"> z nazwą usługi (textContent)
  // KROK 4: Utwórz <span class="koszt-wartosc"> z tekstem `Koszt: ${koszt.toFixed(2)} PLN`
  // KROK 5: Zmontuj li metodą append() i wstaw do listaUslug
  // KROK 6: Wywołaj aktualizujPodsumowanie()
  // KROK 7: Wyczyść pola formularza i ustaw fokus na inputNazwa
});

// 2. Wczytywanie pakietu startowego z DocumentFragment
btnPakiet.addEventListener('click', () => {
  // Twoje rozwiazanie:
  // KROK 1: Utwórz DocumentFragment za pomocą document.createDocumentFragment()
  // KROK 2: Przygotuj tablicę 3 obiektów: [ { nazwa: "Konfiguracja serwera plików NAS", koszt: 650 }, ... ]
  // KROK 3: Przeiteruj pętlą po tablicy, twórz elementy <li> i dołączaj je do fragmentu (fragment.appendChild)
  // KROK 4: Po pętli wstaw fragment do listaUslug (listaUslug.appendChild(fragment))
  // KROK 5: Wywołaj aktualizujPodsumowanie()
});
