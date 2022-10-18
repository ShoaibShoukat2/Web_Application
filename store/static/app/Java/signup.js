const form = document.getElementById("signup_form");
const errorMessage1 = document.getElementById("errorMessage1");
const errorMessage2 = document.getElementById("errorMessage2");
const errorMessage3 = document.getElementById("errorMessage3");
const errorMessage4 = document.getElementById("errorMessage4");
const errorMessage5 = document.getElementById("errorMessage5");

const username = document.getElementById("user_name");
const exclam1 = document.getElementById("exclam_circle1");
const check1 = document.getElementById("check_circle1");

const phone = document.getElementById("user_phone");
const check2 = document.getElementById("check_circle2");
const exclam2 = document.getElementById("exclam_circle2");

const email = document.getElementById("user_email");
const check3 = document.getElementById("check_circle3");
const exclam3 = document.getElementById("exclam_circle3");

const password = document.getElementById("user_password");
const check4 = document.getElementById("check_circle4");
const exclam4 = document.getElementById("exclam_circle4");

const RePassword = document.getElementById("user_rePassword");
const check5 = document.getElementById("check_circle5");
const exclam5 = document.getElementById("exclam_circle5");

form.addEventListener("click", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = RePassword.value.trim();

  if (usernameValue == "") {
    username.classList.add("error");
    exclam1.classList.add("error");
    errorMessage1.classList.add("showeErrorMessage");
    errorMessage1.innerHTML = "username cannot be blank";
  } else if (usernameValue) {
    username.classList.add("success");
    check1.classList.add("success");
    username.classList.remove("error");
    exclam1.classList.remove("error");
    errorMessage1.classList.remove("showeErrorMessage");
  }

  if (phoneValue == "") {
    phone.classList.add("error");
    exclam2.classList.add("error");
    errorMessage2.classList.add("showeErrorMessage");
    errorMessage2.innerHTML = "phone cannot be blank";
  } else if (phoneValue) {
    phone.classList.add("success");
    check2.classList.add("success");

    phone.classList.remove("error");
    exclam2.classList.remove("error");
    errorMessage2.classList.remove("showeErrorMessage");
  }

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

  if (rePasswordValue == "") {
    RePassword.classList.add("error");
    exclam5.classList.add("error");
    errorMessage5.classList.add("showeErrorMessage");
    errorMessage5.innerHTML = "re-pass cannot be blank";
  } else if (rePasswordValue) {
    RePassword.classList.add("success");
    check5.classList.add("success");

    RePassword.classList.remove("error");
    exclam5.classList.remove("error");
    errorMessage5.classList.remove("showeErrorMessage");
  }
});
