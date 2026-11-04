// FitCatering — System Zamówień Dietetycznych
// Szablon zadania integrującego: funkcje strzałkowe, parametry domyślne, raport

const STAWKA_DZIENNA = 75;

// KROK 1: Pobranie liczby dni przez prompt poza ciałem funkcji
const wejscieDni = prompt("Podaj liczbę dni pakietu dietetycznego:", "5");
let dni = parseInt(wejscieDni, 10);
if (isNaN(dni) || dni < 1) {
  dni = 1;
}

// Twoje rozwiazanie
// KROK 2: Zdefiniuj jednoargumentową funkcję strzałkową obliczRabatDlugoterminowy(dni).
// Zwróć 0.10 gdy dni >= 14, w przeciwnym razie 0.
let obliczRabatDlugoterminowy = dni => (dni >= 14 ? 0.10 : 0)

// KROK 3: Zdefiniuj wieloargumentową funkcję strzałkową obliczCeneCateringu(dni, stawkaZaDzien, kosztDostawyDzien = 12).
// Wylicz koszt posiłków, uwzględnij rabat i dodaj koszt dostawy.
let obliczCeneCateringu = (dni, stawkaZaDzien, kosztDostawyDzien = 12) => {
  let kosztWyzywienia = dni * stawkaZaDzien
  let kwotaRabatu = kosztWyzywienia * obliczRabatDlugoterminowy(dni)
  let kosztDostawy = dni * kosztDostawyDzien
  return kosztWyzywienia - kwotaRabatu + kosztDostawy
}

// KROK 4: Zdefiniuj funkcję z ciałem blokowym okreslStatusPakietu(dni) klasyfikującą pakiet.
let okreslStatusPakietu = dni => {
  if (dni >= 20) {
    return "Pakiet miesięczny (Premium)"
  } else if (dni >= 10) {
    return "Pakiet standardowy (Średni)"
  }
  return "Pakiet próbny (Krótki)"
};

// KROK 5: Wywołaj funkcje, sformatuj raport do 'raport' i przypisz do document.getElementById("wynik").textContent.
let kosztBazowy = dni * STAWKA_DZIENNA
let stopaRabatu = obliczRabatDlugoterminowy(dni)
let kwotaRabatu = kosztBazowy * stopaRabatu
let kosztDostawy = dni * 12
let kosztCalkowity = obliczCeneCateringu(dni, STAWKA_DZIENNA)
let status = okreslStatusPakietu(dni)
 
let podsumowanie = `=== FitCatering — System Zamówień Dietetycznych ===
Szczegóły pakietu dietetycznego
-----------------------------------------
Liczba dni diety: ${dni}
Stawka dzienna menu: ${STAWKA_DZIENNA} PLN
Koszt bazowy wyżywienia: ${kosztBazowy.toFixed(2)} PLN
Zastosowany rabat: ${Math.round(stopaRabatu * 100)}% (-${kwotaRabatu.toFixed(2)} PLN)
Koszt dostawy (12.00 PLN/dzień): ${kosztDostawy.toFixed(2)} PLN
-----------------------------------------
Koszt całkowity zamówienia z dostawą: ${kosztCalkowity.toFixed(2)} PLN
Status programu: ${status}
Informacja: Posiłki dostarczane codziennie w godzinach 5:00-7:00.`
 
document.getElementById("wynik").textContent = podsumowanie