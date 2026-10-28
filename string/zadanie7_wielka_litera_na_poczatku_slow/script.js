const slowa = prompt("Daj mi zdanie serek");
const tablica = slowa.split(" ");
const slowo = [];

tablica.forEach((e) => {
  slowo.push(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
});

document.getElementById("wynik").textContent = slowo.join(" ");
