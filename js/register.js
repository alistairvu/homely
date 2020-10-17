import { accounts } from "./accounts.js";

const newUserName = document.getElementById("name");
const newPassword = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("mail");
const fullName = document.getElementById("full-name");
const createBtn = document.getElementById("create-btn");

function securePassword() {
  let pass = newPassword.value;
  if (pass.length <= 8) {
    return false;
  }
}

function checkPassword() {
  if (confirmPassword.value != newPassword.value) {
    return false;
  }
  return true;
}

function registerAcc() {
  if (!securePassword()) {
    alert("Password not secure enough!");
    return;
  }
  if (!checkPassword()) {
    alert("Passwords do not match!");
    return;
  }
  const newUser = {
    name: newUserName.value,
    pass: newPassword.value,
    id: accounts.length + 1,
    role: "user",
  };
  localStorage.setItem(`${newUser.name}`, JSON.stringify(newUser));
}

createBtn.addEventListener("click", registerAcc);
