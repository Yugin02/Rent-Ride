document.querySelector(".back").addEventListener("click", function () {
  window.location.href = "../html/home.html";
});
document.querySelector(".go-login").addEventListener("click", function () {
  const form = document.querySelector(".signup-form");
  const form1 = document.querySelector(".login-form");
  const form2 = document.querySelector("form");
  form.style.visibility = "hidden";
  form1.style.visibility = "visible";
});
document.querySelector(".go-signup").addEventListener("click", function () {
  const form = document.querySelector(".login-form");
  const form1 = document.querySelector(".signup-form");
  const form2 = document.querySelector("form");
  form.style.visibility = "hidden";
  form1.style.visibility = "visible";
});
