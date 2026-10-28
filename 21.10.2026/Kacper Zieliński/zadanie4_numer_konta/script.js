// Twoje rozwiązanie

nr_konta = String(prompt("Podaj nr. konta")).trim()


tablica = []

nr_konta_bez_spacji = nr_konta.split(" ").join("")

for (let i = 0; i < nr_konta_bez_spacji.length; i = i + 4) {
    tablica.push(nr_konta_bez_spacji.slice(i, i+4))
}


document.getElementById("wynik").textContent = tablica.join(" ")