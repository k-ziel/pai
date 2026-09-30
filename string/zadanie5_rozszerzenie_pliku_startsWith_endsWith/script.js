// Twoje rozwiązanie

nazwa_pliku = prompt("Jak sie nazywa plik?");

if (nazwa_pliku.endsWith(".txt") || nazwa_pliku.endsWith(".pdf")) {
  nazwa = nazwa_pliku.slice(0, nazwa_pliku.lastIndexOf("."));
  document.getElementById("wynik").textContent =
    'Bezpieczny: Tak, nazwa pliku to "' + nazwa + '"';
} else if (nazwa_pliku.endsWith(".exe")) {
  nazwa = nazwa_pliku.slice(0, nazwa_pliku.lastIndexOf("."));
  document.getElementById("wynik").textContent =
    'Bezpieczny: Nie, nazwa pliku to "' + nazwa + '"';
}
