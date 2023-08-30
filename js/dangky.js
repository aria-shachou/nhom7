document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const errorMessages = document.getElementById("error-messages");

  form.addEventListener("submit", function (event) {
    errorMessages.innerHTML = "";

    const inputs = form.querySelectorAll("input, select, textarea");
    let hasErrors = false;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        hasErrors = true;
        input.classList.add("invalid");
        const errorMessage = document.createElement("div");
        errorMessage.textContent = input.validationMessage;
        errorMessages.appendChild(errorMessage);
      } else {
        input.classList.remove("invalid");
      }

      if (input.id === "ghiChu" && input.value.length > 200) {
        hasErrors = true;
        input.classList.add("invalid");
        const errorMessage = document.getElementById("error-messages");
        errorMessage.textContent = "Ghi chú không quá 200 ký tự";
      }
    });
    const checkboxes = document.querySelectorAll('input[name="soThich"]');
    let isChecked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      event.preventDefault();
      const errorMessage = document.getElementById("error-messages");
      errorMessage.textContent = "Chọn ít nhất 1 sở thích";
    }
    if (hasErrors) {
      event.preventDefault();
    }
  });
});
