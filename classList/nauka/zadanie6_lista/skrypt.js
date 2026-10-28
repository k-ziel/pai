// Twoje rozwiazanie

przycisk = document.querySelector("#btnEven")
lista = document.querySelectorAll("#shoppingList li")

let x = 0
przycisk.addEventListener("click", function() {
    lista.forEach(element => {
        if(x%2==0) {
            element.classList.add("highlight")
        }
        x++
    });
})