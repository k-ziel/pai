// Twoje rozwiazanie

edytuj = document.querySelector("#edit-btn");
przyciski_formularz = document.querySelectorAll("#profile-form input");

edytuj.addEventListener("click", function () {
  przyciski_formularz.forEach((element) => {
    if (element.disabled) {
      element.disabled = false;
      edytuj.innerText = "Zapisz Zmiany";
    } else {
      element.disabled = true;
      edytuj.innerText = "Edytuj Dane";
    }
  });
});
