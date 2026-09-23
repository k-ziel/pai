// Twoje rozwiazanie

unlock_btn = document.querySelector("#unlock-btn");
send_btn = document.querySelector("#submit-btn");

unlock_btn.addEventListener("click", function () {
  if (send_btn.disabled) {
    send_btn.disabled = false;
  }
});
