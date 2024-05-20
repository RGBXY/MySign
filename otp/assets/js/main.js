document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll(".otp-input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      if (this.value.length >= this.maxLength) {
        var nextInput = this.nextElementSibling;
        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    });

    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && this.value.length === 0) {
        var previousInput = this.previousElementSibling;
        if (previousInput !== null) {
          previousInput.focus();
        }
      }
    });
  }
});
