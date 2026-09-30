// Twoje rozwiązanie

nr_kon = prompt("Podaj numer konta");

nr_konta = nr_kon.replaceAll(" ", "").trim();

document.getElementById("wynik").textContent = nr_konta.padStart(
  26 - nr_konta.length,
  0,
);
