let passwordInput = document.querySelector("#password");
let showHidePassword = document.querySelector("#show-hide-password");
showHidePassword.addEventListener("click", (e) => {
  showHidePassword.classList.toggle("show");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
