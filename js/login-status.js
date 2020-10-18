if (localStorage.getItem("login-status") == null) {
  localStorage.setItem("login-status", 0);
}

let loginStat = localStorage.getItem("login-status");

if (loginStat > 0 && document.getElementById("login-btn") != null) {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.innerHTML = "LOG OUT";
  loginBtn.onclick = () => {
    localStorage.setItem("login-status", 0);
    window.location.href = "./index.html";
  };
}
