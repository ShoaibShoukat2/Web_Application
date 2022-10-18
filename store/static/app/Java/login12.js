const form = document.getElementById("signup_form");
const errorMessage1 = document.getElementById("errorMessage1");
const errorMessage2 = document.getElementById("errorMessage2");
const errorMessage3 = document.getElementById("errorMessage3");
const errorMessage4 = document.getElementById("errorMessage4");
const errorMessage5 = document.getElementById("errorMessage5");

const email = document.getElementById("user_email");
const check3 = document.getElementById("check_circle3");
const exclam3 = document.getElementById("exclam_circle3");

const password = document.getElementById("user_password");
const check4 = document.getElementById("check_circle4");
const exclam4 = document.getElementById("exclam_circle4");

form.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue == "") {
    email.classList.add("error");
    exclam3.classList.add("error");
    errorMessage3.classList.add("showeErrorMessage");
    errorMessage3.innerHTML = "email cannot be blank";
  } else if (emailValue) {
    email.classList.add("success");
    check3.classList.add("success");
    email.classList.remove("error");
    exclam3.classList.remove("error");
    errorMessage3.classList.remove("showeErrorMessage");
  }

  if (passwordValue == "") {
    password.classList.add("error");
    exclam4.classList.add("error");
    errorMessage4.classList.add("showeErrorMessage");
    errorMessage4.innerHTML = "password cannot be blank";
  } else if (passwordValue) {
    password.classList.add("success");
    check4.classList.add("success");

    password.classList.remove("error");
    exclam4.classList.remove("error");
    errorMessage4.classList.remove("showeErrorMessage");
  }
});
