// Zadanie 2: Strumień alertów logistycznych z metodą prepend()
const inputTresc = document.querySelector('#tresc-alertu');
const btnWyslij = document.querySelector('#btn-wyslij-alert');
const panelAlertow = document.querySelector('#panel-alertow');

btnWyslij.addEventListener('click', () => {

  tresc = inputTresc.value.trim()
  if(tresc == '') {
    tresc = "Nowy alert logistyczny: Opóźnienie na trasie tranzytowej S8"
  }
  alertDiv = document.createElement('div')
  alertDiv.classList.add('karta-alertu')
  alertDiv.dataset.kod = "ALERT-2026"

  span = document.createElement('span')
  span.classList.add('etykieta-priorytet')
  span.textContent = "PILNE"

  p = document.createElement('p')
  p.textContent = tresc


  alertDiv.append(span, p)
  panelAlertow.prepend(alertDiv)

  inputTresc.value = ''
  inputTresc.focus()

  

  // Twoje rozwiazanie:
  // KROK 1: Pobierz tekst z inputTresc z użyciem trim().
  //         Jeśli pusty, użyj: "Nowy alert logistyczny: Opóźnienie na trasie tranzytowej S8"
  // KROK 2: Utwórz element <div> za pomocą document.createElement('div') i dodaj mu klasę "karta-alertu"
  // KROK 3: Ustaw atrybut dataset.kod = "ALERT-2026"
  // KROK 4: Utwórz znacznik <span> za pomocą document.createElement('span'), dodaj klasę "etykieta-priorytet" i textContent = "PILNE"
  // KROK 5: Utwórz znacznik <p> za pomocą document.createElement('p') i przypisz do niego textContent pobrany z pola
  // KROK 6: Połącz elementy wewnątrz karty za pomocą metody append()
  // KROK 7: Wstaw kartę na sam początek panelAlertow za pomocą metody prepend()
  // KROK 8: Wyczyść pole tekstowe inputTresc i ustaw na nim fokus (focus())
});
