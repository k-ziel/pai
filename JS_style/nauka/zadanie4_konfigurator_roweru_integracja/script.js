// Zadanie 4: Manufaktura Rowerowa VeloCity — Konfigurator Ramy
// Twoje rozwiazanie: Połącz modyfikację kolorów, właściwości z jednostką px oraz przezroczystości

const kolorRamy = document.querySelector("#kolor-ramy");
const suwakProfil = document.querySelector("#suwak-profil");
const suwakPolysk = document.querySelector("#suwak-polysk");
const btnResetRower = document.querySelector("#btn-reset-rower");
const kartaRower = document.querySelector("#karta-rower");

const podsumowanieKolor = document.querySelector("#podsumowanie-kolor");
const podsumowanieProfil = document.querySelector("#podsumowanie-profil");
const podsumowaniePolysk = document.querySelector("#podsumowanie-polysk");

// KROK 1: Zarejestruj zdarzenie "input" na kolorRamy
// Ustaw kartaRower.style.backgroundColor na kolorRamy.value
if (kolorRamy) {
    kolorRamy.addEventListener("input", () => {
        kartaRower.style.backgroundColor = kolorRamy.value
        podsumowanieKolor.innerHTML = `Kolor ramy: ${kolorRamy.value}`
        // TODO: Zmień styl liniowy backgroundColor
        // TODO: Zaktualizuj treść w podsumowanieKolor
    });
}

// KROK 2: Zarejestruj zdarzenie "input" na suwakProfil
// Ustaw kartaRower.style.borderWidth na wartość w pikselach (np. `${suwakProfil.value}px`)
if (suwakProfil) {
    suwakProfil.addEventListener("input", () => {
        kartaRower.style.borderWidth = `${suwakProfil.value}px`
        podsumowanieProfil.innerHTML = `Grubość ramy: ${suwakProfil.value}px`
        // TODO: Zmień styl liniowy borderWidth z jednostką px
        // TODO: Zaktualizuj treść w podsumowanieProfil
    });
}

// KROK 3: Zarejestruj zdarzenie "input" na suwakPolysk
// Ustaw kartaRower.style.opacity na wartość bezwymiarową suwakPolysk.value
if (suwakPolysk) {
    suwakPolysk.addEventListener("input", () => {
        kartaRower.style.opacity = suwakPolysk.value
        podsumowaniePolysk.innerHTML = `Połysk lakieru: ${Math.round(suwakPolysk.value * 100)}%`
        // TODO: Zmień styl liniowy opacity
        // TODO: Zaktualizuj treść w podsumowaniePolysk
    });
}

// KROK 4: Zarejestruj zdarzenie "click" na btnResetRower
// Wyczyść style liniowe przypisując pusty ciąg "", przywróć domyślne wartości kontrolek
if (btnResetRower) {
    btnResetRower.addEventListener("click", () => {
        kartaRower.style.backgroundColor = "#0284c7"
        kolorRamy.value = "#0284c7"
        podsumowanieKolor.innerHTML = `Kolor ramy: #0284c7 (Błękit miejski)`

        kartaRower.style.borderWidth = `4px`
        suwakProfil.value = 4
        podsumowanieProfil.innerHTML = `Grubość ramy: ${suwakProfil.value}px`

        suwakPolysk.value = 1
        kartaRower.style.opacity = 1
        podsumowaniePolysk.innerHTML = `Połysk lakieru: ${suwakPolysk.value * 100}%`

        // TODO: Wyzeruj style liniowe kartaRower
        // TODO: Przywróć wartości domyślne kontrolek formularza
    });
}
