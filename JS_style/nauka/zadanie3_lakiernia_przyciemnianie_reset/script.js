// Zadanie 3: AutoDetailing Studio — Symulator Przyciemniania i Powłok
// Twoje rozwiazanie: Zaimplementuj obsługę właściwości bezwymiarowej opacity oraz resetu stylów liniowych

const suwakKrycie = document.querySelector("#suwak-krycie");
const btnFiltr = document.querySelector("#btn-filtr");
const btnReset = document.querySelector("#btn-reset");
const szybaPodglad = document.querySelector("#szyba-podglad");
const etykietaKrycia = document.querySelector("#etykieta-krycia");

let filtrWlaczony = false;

// KROK 1: Zarejestruj zdarzenie "input" na suwaku suwakKrycie
// Ustaw styl inline szybaPodglad.style.opacity bez jednostki
// Zaktualizuj etykietaKrycia (np. `Aktualna przejrzystość powłoki: ${Math.round(suwakKrycie.value * 100)}%`)
if (suwakKrycie) {
    suwakKrycie.addEventListener("input", () => {
        szybaPodglad.style.opacity = suwakKrycie.value
        etykietaKrycia.innerHTML = `Aktualna przejrzystość powłoki: ${Math.round(suwakKrycie.value * 100)}%`
        // TODO: Przypisz wartość suwaka do szybaPodglad.style.opacity
        // TODO: Zaktualizuj etykietaKrycia.textContent
    });
}

// KROK 2: Zarejestruj zdarzenie "click" na przycisku btnFiltr jako przełącznik (toggle)
if (btnFiltr) {
    btnFiltr.addEventListener("click", () => {
        filtrWlaczony = !filtrWlaczony
        if(filtrWlaczony) {
            btnFiltr.innerHTML = "Wyłącz filtr ceramiczny"
            szybaPodglad.style.backgroundColor = "#0f172a"
        } else {
            btnFiltr.innerHTML = "Zastosuj filtr ceramiczny"
            szybaPodglad.style.backgroundColor = ""
        }
        // TODO: filtrWlaczony = !filtrWlaczony
        // TODO: gdy true → backgroundColor = "#0f172a", tekst przycisku "Wyłącz filtr ceramiczny"
        // TODO: gdy false → backgroundColor = "", tekst przycisku "Zastosuj filtr ceramiczny"
    });
}

// KROK 3: Zarejestruj zdarzenie "click" na przycisku btnReset
// Przywróć wartości domyślne przez przypisanie pustego ciągu znaków "" do zmienionych stylów liniowych
if (btnReset) {
    btnReset.addEventListener("click", () => {
        szybaPodglad.style.opacity = ""
        szybaPodglad.style.backgroundColor = ""
        filtrWlaczony = false
        suwakKrycie.value = 1
        etykietaKrycia.innerHTML = "Aktualna przejrzystość powłoki: 100% (Fabryczna)"
        // TODO: Zresetuj szybaPodglad.style.opacity = ""
        // TODO: Zresetuj szybaPodglad.style.backgroundColor = ""
        // TODO: filtrWlaczony = false; przywróć tekst btnFiltr
        // TODO: Przywróć suwakKrycie.value = "1.00" i zaktualizuj etykietę informacyjną
    });
}
