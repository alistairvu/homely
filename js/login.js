import { accounts } from "./accounts.js";

let username = document.getElementById("username");
let password = document.getElementById("password");
let submitbtn = document.getElementById("submit-btn");

console.log(accounts);

function formLogIn() {
  let matches = accounts.filter((x) => x.name == username.value);
  const match = matches[0];
  if (password.value == match.pass) {
    switch (match.role) {
      case "admin":
        alert("Hello, admin!");
        break;
      case "user":
        alert("Welcome, user");
        break;
    }
  } else {
    alert("Wrong password!");
  }
}

submitbtn.addEventListener("click", formLogIn);
