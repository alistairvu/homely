import { accounts } from "./accounts.js";

const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");

function formLogIn() {
  let matches = accounts.filter((x) => x.name == username.value);
  let match = {};
  if (matches.length != 0) {
    match = match[0];
  } else {
    match = localStorage.getItem(`${username.value}`);
    if (match === null) {
      alert("Wrong username!");
      return;
    }
    match = JSON.parse(match);
  }
  if (password.value == match.pass) {
    switch (match.role) {
      case "admin":
        alert("Hello, admin!");
        window.location = "admin-page.html";
        break;
      case "user":
        alert("Welcome, user");
        window.location = "user-page.html";
        break;
    }
  } else {
    alert("Wrong password!");
  }
}

submitBtn.addEventListener("click", formLogIn);
