import { accounts } from "./accounts.js";

const newUserName = document.getElementById("name");
const newPassword = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPassword");
const createBtn = document.getElementById("create-btn");

function checkDuplicate() {
  let matches = accounts.filter((x) => x.name == newUserName.value);
  if (matches.length > 0) {
    return false;
  }
  matches = localStorage.getItem(`${newUserName.value}`);
  if (matches != null) {
    return false;
  }
  return true;
}

function securePassword() {
  let pass = newPassword.value;
  if (pass.length <= 8) {
    return false;
  }
  return /[0-9]/.test(pass) && /[A-Z]/.test(pass) && /[a-z]/.test(pass);
}

function checkPassword() {
  if (confirmPassword.value != newPassword.value) {
    document.getElementById(
      "password-match"
    ).innerHTML = `<em style="font-size:11px">Passwords do not match.</em>`;
    return false;
  }
  return true;
}

confirmPassword.onkeypress = checkPassword();

function getMaxID() {
  if (localStorage.getItem("max-id") === null) {
    localStorage.setItem("max-id", accounts.length - 1);
  }
  localStorage.setItem("max-id", parseInt(localStorage.getItem("max-id")) + 1);
  return parseInt(localStorage.getItem("max-id"));
}

function registerAcc() {
  if (!checkDuplicate()) {
    alert("Username already in use!");
    return;
  }
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
    id: getMaxID(),
    role: "user",
  };
  localStorage.setItem(`${newUser.name}`, JSON.stringify(newUser));
  alert("Registration successful! Please log in.");
  window.location.href = "./login.html";
}

createBtn.addEventListener("click", registerAcc);
