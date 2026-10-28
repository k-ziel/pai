// Twoje rozwiazanie

przycisk = document.querySelector("#btnFix")
alert = document.querySelector("#alert")
title = document.querySelector("#statusTitle")
text = document.querySelector("#statusText")



przycisk.addEventListener("click", function() {
    alert.classList.remove("error")
    alert.classList.add("success")
    title.innerHTML = "System sprawny"
    text.innerHTML = "Nie wykryto żadnych problemów"
})
