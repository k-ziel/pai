// Zadanie 4: Zadanie integrujące — Centrum spedycyjno-logistyczne
// Twoje rozwiazanie

// KROK 1: Pobranie wagi przesyłki poza funkcjami (prompt z wartością domyślną)
let wagaInput = prompt("Podaj wagę przesyłki w kilogramach:", "15");
let wagaKg = parseFloat(wagaInput);
const strefa = 2;
const czyStalyKlient = true;

// KROK 2: Zadeklaruj funkcję obliczOplateWagowa(wagaKg, stawkaZaKg = 4)
// Zastosuj klauzulę strażniczą dla wagi <= 0.

function obliczOplateWagowa(wagaKg, stawkaZaKg = 4) {
    if(wagaKg <= 0) {
        return 0
    } else {
        return wagaKg * stawkaZaKg
    }

}

function wyznaczDoplateStrefowa(nrStrefy) {
    switch (nrStrefy) {
        case 1:
            return 15
        case 2:
            return 25
        case 3:
            return 40
        default:
            return 15
    }
}

function obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true) {
    koszt = oplataWagowa + doplataStrefowa
    if(stalyKlient) {
        koszt = koszt * 0.9
    }
    return koszt
}

function formatujWalute(kwota, symbol = "PLN"/*, True = false*/) {
    // if(True){
    //     return `${kwota} ${symbol}`
    // }
    return `${kwota.toFixed(2)}*/ ${symbol}`
}

let doplataStrefowa = wyznaczDoplateStrefowa(strefa)
let oplataWagowa = obliczOplateWagowa(wagaKg) 

podsumowanie = `List przewozowy przesyłki kurierskiej — Trans-Pol Logistyka
Waga przesyłki towarowej: ${wagaKg}.00 kg (opłata wagowa: ${formatujWalute(oplataWagowa)})
Dopłata za doręczenie w strefie ${strefa}: ${formatujWalute(doplataStrefowa)}\n`


if(czyStalyKlient) {
    podsumowanie+=`Przyznany rabat stałego klienta: 10% (oszczędność: ${formatujWalute((oplataWagowa + doplataStrefowa) - obliczKosztKoncowy(oplataWagowa, doplataStrefowa, czyStalyKlient))})\n`
}

podsumowanie+=`Ostateczny koszt doręczenia przesyłki: ${formatujWalute(obliczKosztKoncowy(oplataWagowa, doplataStrefowa, czyStalyKlient))}`

document.getElementById("wynik").textContent = podsumowanie

console.log(podsumowanie)


// KROK 3: Zadeklaruj funkcję wyznaczDoplateStrefowa(nrStrefy)
// Zastosuj instrukcję switch lub if/else dla stref 1, 2, 3.


// KROK 4: Zadeklaruj funkcję obliczKosztKoncowy(oplataWagowa, doplataStrefowa, stalyKlient = true)
// Zastosuj 10% rabatu dla stałego klienta.


// KROK 5: Zadeklaruj funkcję pomocniczą formatujWalute(kwota, symbol = "PLN")


// KROK 6: Wywołaj funkcje, przygotuj list przewozowy i wypisz do #wynik oraz konsoli.
