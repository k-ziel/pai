// Twoje rozwiązanie

pesel_bez = prompt("Wprowadz swój pesel: ");

pesel = pesel_bez.replaceAll(" ", "").trim();

document.getElementById("wynik").textContent;

data = pesel.slice(0, 6);
cyfry = pesel.slice(-4);

document.getElementById("wynik").textContent =
  "Data (YYMMDD): " + data + " Seria: " + cyfry;
