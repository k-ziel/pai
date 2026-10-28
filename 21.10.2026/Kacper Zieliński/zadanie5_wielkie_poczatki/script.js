// Twoje rozwiązanie

zdanie = String(prompt("Wpisz kilka słów oddzielonych spacjami"))

slowa = zdanie.split(" ")

gotowe = []

slowa.forEach(e => {
    gotowe.push(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
});

document.getElementById("wynik").textContent = gotowe.join(" ")