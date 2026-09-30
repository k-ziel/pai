// Twoje rozwiązanie

slowa = prompt("Daj mi zdanie serek");

tablica = slowa.split(" ");

slowo = [];

tablica.forEach((e) => {
  slowo.push = e[0].toUpperCase() + e.slice(1).toLowerCase();
});

document.getElementById("wynik").textContent = slowo.join(" ");
