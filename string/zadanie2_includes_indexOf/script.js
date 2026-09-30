// Twoje rozwiązanie

zdanie = prompt("zdanie");
slowo = prompt("slowo");

if (zdanie.toLowerCase().includes(slowo.toLowerCase())) {
  document.getElementById("wynik").textContent =
    "Zawiera, indeks " +
    zdanie.toLowerCase().indexOf(slowo.toLowerCase()) +
    ".";
}
