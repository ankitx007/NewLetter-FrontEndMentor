document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.querySelector("#email");
  var subscribeButton = document.querySelector("#subscribe");
  var inValidEmailLabel = document.querySelector("#inValidEmail");
  var successMessage = document.querySelector(".success-message");
  var signUpForm = document.querySelector(".sign-up-form");
  var card = document.querySelector(".card");
  var dismissButton = document.querySelector("#dismiss");

  subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();
    var emailValue = emailInput.value;

    if (isValidEmail(emailValue)) {
      inValidEmailLabel.style.display = "none";
      displaySuccessMessage(emailValue);
    } else {
      inValidEmailLabel.style.display = "block";
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function displaySuccessMessage(email) {
    var successMessageEmail = successMessage.querySelector("strong");
    successMessageEmail.textContent = email;
    successMessage.style.display = "flex";
    signUpForm.style.display = "none";
    card.style.width = "30vw";
    console.log("Yha tak aa gya bro");
  }

  dismissButton.addEventListener("click", function () {
    successMessage.style.display = "none";
    signUpForm.style.display = "grid";
    card.style.width = "";
  });
});
