// Twoje rozwiązanie

tekst = prompt("Podaj swoje imie i nazwisko:");

pro_tekst = tekst.trim();
document.write(
  "Witaj " + pro_tekst[0].toUpperCase() + pro_tekst.slice(1).toLowerCase(),
);
