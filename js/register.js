import { accounts } from "./accounts.js";

const register = document.getElementById("register-box");
const newUserName = document.getElementById("name");
const newPassword = document.getElementById("pass");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("mail");
const fullName = document.getElementById("full-name");
const createBtn = document.getElementById("create-btn");

function registerAcc() {
  const newUser = {
    name: newUserName.value,
    pass: newPassword.value,
    id: accounts.length + 1,
    role: "user",
  };
  localStorage.setItem(`${newUser.name}`, JSON.stringify(newUser));
}

createBtn.addEventListener("click", registerAcc);
