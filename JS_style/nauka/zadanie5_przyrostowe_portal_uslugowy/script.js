// Zadanie 5 (Przyrostowe): Portal Usługowo-Handlowy IT-Partner — Personalizacja Klienta
// Twoje rozwiazanie: Zaimplementuj pełną dynamiczną personalizację stylów karty oraz procedurę resetu

const kolorAkcentu = document.querySelector("#kolor-akcentu");
const suwakFontPortalu = document.querySelector("#suwak-font-portalu");
const suwakPromien = document.querySelector("#suwak-promien");
const suwakPrzezroczystosc = document.querySelector("#suwak-przezroczystosc");
const btnResetPersonalizacji = document.querySelector("#btn-reset-personalizacji");

const kartaUslugiPortal = document.querySelector("#karta-uslugi-portal");
const tytulUslugiPortal = document.querySelector("#tytul-uslugi-portal");
const komunikatPortalu = document.querySelector("#komunikat-portalu");

// KROK 1: Obsługa zmiany koloru tła karty usługi
if (kolorAkcentu && kartaUslugiPortal) {
    kolorAkcentu.addEventListener("input", () => {
        kartaUslugiPortal.style.backgroundColor = kolorAkcentu.value
        komunikatPortalu.innerHTML = "Status konfiguracji: Zastosowano niestandardowe style klienta"
        // TODO: Ustaw kartaUslugiPortal.style.backgroundColor
        // TODO: Zaktualizuj komunikatPortalu
    });
}

// KROK 2: Obsługa skalowania rozmiaru nagłówka
if (suwakFontPortalu && tytulUslugiPortal) {
    suwakFontPortalu.addEventListener("input", () => {
        komunikatPortalu.innerHTML = "Status konfiguracji: Zastosowano niestandardowe style klienta"
        tytulUslugiPortal.style.fontSize = `${suwakFontPortalu.value}px`
        // TODO: Ustaw tytulUslugiPortal.style.fontSize z jednostką px
        // TODO: Zaktualizuj komunikatPortalu
    });
}

// KROK 3: Obsługa zaokrąglenia narożników
if (suwakPromien && kartaUslugiPortal) {
    suwakPromien.addEventListener("input", () => {
        komunikatPortalu.innerHTML = "Status konfiguracji: Zastosowano niestandardowe style klienta"
        kartaUslugiPortal.style.borderRadius = `${suwakPromien.value}px`
        // TODO: Ustaw kartaUslugiPortal.style.borderRadius z jednostką px
        // TODO: Zaktualizuj komunikatPortalu
    });
}

// KROK 4: Obsługa przezroczystości (wartość bezwymiarowa)
if (suwakPrzezroczystosc && kartaUslugiPortal) {
    suwakPrzezroczystosc.addEventListener("input", () => {
        kartaUslugiPortal.style.opacity =  suwakPrzezroczystosc.value
        komunikatPortalu.innerHTML = "Status konfiguracji: Zastosowano niestandardowe style klienta"

        // TODO: Ustaw kartaUslugiPortal.style.opacity
        // TODO: Zaktualizuj komunikatPortalu
    });
}

// KROK 5: Reset stylów liniowych
if (btnResetPersonalizacji && kartaUslugiPortal && tytulUslugiPortal) {
    btnResetPersonalizacji.addEventListener("click", () => {
        kartaUslugiPortal.style.backgroundColor = ""
        tytulUslugiPortal.style.fontSize = ""
        kartaUslugiPortal.style.borderRadius = ""
        kartaUslugiPortal.style.opacity = ""

        kolorAkcentu.value = "#1e3a8a"
        suwakFontPortalu.value = 18
        suwakPromien.value = 8
        suwakPrzezroczystosc.value = 1

        komunikatPortalu.innerHTML = "Status konfiguracji: Ustawienia domyślne portalu IT-Partner"

        // TODO: Przypisz pusty ciąg "" do wszystkich zmienionych stylów liniowych
        // TODO: Przywróć wartości domyślne kontrolek formularza
        // TODO: Zaktualizuj komunikatPortalu
    });
}
