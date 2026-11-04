// Wypożyczalnia Pojazdów AutoRent Express
// Szablon kalkulatora rezerwacji z parametrem domyślnym

// KROK 1: Pobranie liczby dób przez prompt poza ciałem funkcji
const wejscieDoby = prompt("Podaj liczbę dób wynajmu pojazdu:", "3");
let doby = parseInt(wejscieDoby, 10);
if (isNaN(doby) || doby < 1) {
  doby = 1;
}

const STAWKA_DOBOWA = 180;

// Twoje rozwiazanie
// KROK 2: Zdefiniuj funkcję strzałkową obliczKosztWynajmu(doby, stawkaDoba, ubezpieczenieDoba = 35).
// Oblicz i zwróć sumę kosztu bazowego (doby * stawkaDoba) oraz ubezpieczenia (doby * ubezpieczenieDoba).
const obliczKosztWynajmu = (doby, stawkaDoba, ubezpieczenieDoba = 35) => {
  let kosztBazowy = doby * stawkaDoba
  let kosztUbezpieczenia = doby * ubezpieczenieDoba
  return kosztBazowy + kosztUbezpieczenia
};

// KROK 3: Zdefiniuj funkcję strzałkową pomocniczą formatujKwote(kwota) zwracającą sformatowany tekst.
let formatujKwote = kwota => `${kwota.toFixed(2)} PLN`

// KROK 4: Oblicz koszt całkowity (wywołaj obliczKosztWynajmu bez trzeciego argumentu),
// sformatuj wielowierszowy raport i przypisz do document.getElementById("wynik").textContent.
let kosztCalkowity = obliczKosztWynajmu(doby, STAWKA_DOBOWA)
let kosztPodstawowy = doby * STAWKA_DOBOWA
let stawkaUbezpieczenia = 35
let kosztUbezpieczenia = doby * stawkaUbezpieczenia
 
let podsumowanie = `=== Wypożyczalnia Pojazdów AutoRent Express ===
Podsumowanie rezerwacji pojazdu
-----------------------------------------
Liczba dób najmu: ${doby}
Stawka dobowa pojazdu: ${STAWKA_DOBOWA} PLN
Koszt podstawowy floty: ${formatujKwote(kosztPodstawowy)}
Pakiet ubezpieczenia: ${formatujKwote(stawkaUbezpieczenia)}/doba (standard)
Koszt ubezpieczenia (${doby} dób): ${formatujKwote(kosztUbezpieczenia)}
-----------------------------------------
Łączny koszt rezerwacji brutto: ${formatujKwote(kosztCalkowity)}
Status: Rezerwacja oczekuje na potwierdzenie.`
 
document.getElementById("wynik").textContent = podsumowanie