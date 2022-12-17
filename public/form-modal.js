let signUpButton = document.getElementById("sign-up-button");
let formModal = document.getElementById("form-modal");
let formFields = document.querySelectorAll(".form-field");

signUpButton.addEventListener("click", function () {
  formModal.classList.replace("dn", "flex");
});

formModal.addEventListener("click", function (event) {
  if (event.target === formModal) {
    formModal.classList.replace("flex", "dn");
  }
});

formFields.forEach((field) => {
  field.addEventListener("click", function () {
    field.children[1].focus();
  });
});
