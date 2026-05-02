const email = document.getElementById("email");
const error = document.getElementById("error");
const form = document.getElementById("form");
const icon = document.getElementById("error-icon");

form.addEventListener("submit", (e) => {
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.validity.valid
  ) {
    e.preventDefault();
    error.style.visibility = "visible";
    email.style.border = "2px solid hsl(0, 93%, 68%)";
    icon.style.display = "block";
  }
});
