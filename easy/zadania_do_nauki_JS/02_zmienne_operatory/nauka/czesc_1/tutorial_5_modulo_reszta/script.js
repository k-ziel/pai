// Użyj % do obliczenia reszty

const dzieci = Number(prompt("Ile jest dzieci do podzielenia cukerkow"));
const curkierki = Number(prompt("Ile masz cukierkow"));

let ile_dac = Math.floor(curkierki / dzieci);
let ile_zostalo = curkierki % dzieci;

document.write(
  "Masz dac kazdemu dziecku " +
    ile_dac +
    " cukierków, a tobie zostanie " +
    ile_zostalo +
    " cukierków",
);
