// Zadanie 2: Funkcja z warunkiem i wczesnym wyjściem — Piekarnia rzemieślnicza
// Twoje rozwiazanie

let bochenkiInput = prompt("Podaj planowaną liczbę bochenków chleba:", "120");
let liczbaBochenkow = parseInt(bochenkiInput, 10); 

let tekst = document.getElementById("wynik")

function obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek = 500) {
    if(liczbaBochenkow <= 0) {
        return 0
    } else {
        return liczbaBochenkow * (gramNaBochenek / 1000)
    }
}

function okreslRozmiarPartii(liczbaBochenkow) {
    if(liczbaBochenkow <= 0) {
        partia = "Blędne dane partii"
    } else if(liczbaBochenkow >= 200) {
        partia  = "Partia hurtowa (piec przemysłowy)"
    } else if(liczbaBochenkow >50) {
        partia = "Partia standardowa (piec wsadowy)"
    } else {
        partia = "Partia próbna (piec rzemieślniczy)"
    }
}

okreslRozmiarPartii(liczbaBochenkow)

podsumowanie = `Raport produkcyjny piekarni rzemieślniczej Złoty Kłos\n` +
`Planowany wypiek pieczywa wynosi: ${liczbaBochenkow} bochenków\n` +
`Zapotrzebowanie na mąkę pszenną: ${obliczZapotrzebowanieMaki(liczbaBochenkow)}.00 kg\n` +
`Zakwalifikowany tryb wypieku: ${partia}`


console.log(podsumowanie)

tekst.textContent = podsumowanie

// KROK 1: Pobierz liczbę bochenków od użytkownika (funkcja prompt poza funkcjami!)
// let bochenkiInput = prompt("Podaj planowaną liczbę bochenków chleba:", "120");
// let liczbaBochenkow = parseInt(bochenkiInput, 10);


// KROK 2: Zadeklaruj funkcję obliczZapotrzebowanieMaki(liczbaBochenkow, gramNaBochenek = 500)
// Zastosuj klauzulę strażniczą (guard clause): jeśli liczbaBochenkow <= 0, zwróć 0.
// Oblicz wagę w kilogramach i zwróć wynik.


// KROK 3: Zadeklaruj funkcję okreslRozmiarPartii(liczbaBochenkow)
// Zwróć odpowiedni opis partii w zależności od wielkości zamówienia.


// KROK 4: Wywołaj funkcje, przygotuj raport i wypisz do #wynik oraz konsoli.
