import { accounts } from "./accounts.js";

const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

function formLogIn() {
  let matches = accounts.filter((x) => x.name == username.value);
  let match = {};
  console.log(matches.length);
  if (matches.length != 0) {
    match = matches[0];
  } else {
    match = localStorage.getItem(`${username.value}`);
    console.log(match)
    if (match === null) {
      alert("Wrong username!");
      return;
    }
    match = JSON.parse(match);
  }
  console.log(match);
  if (password.value == match.pass) {
    switch (match.role) {
      case "admin":
        alert("Hello, admin!");
        localStorage.setItem("login-status", match.id);
        window.location.href = "./admin-page.html";
        break;
      case "user":
        alert(`Welcome, ${match.name}`);
        localStorage.setItem("login-status", match.id);
        window.location.href = "./index.html";
        break;
    }
  } else {
    alert("Wrong password!");
  }
}

submitBtn.addEventListener("click", formLogIn);
