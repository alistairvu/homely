if (localStorage.getItem("login-status") == null) {
  localStorage.setItem("login-status", 0);
}

let loginStat = localStorage.getItem("login-status");
console.log(loginStat);

if (loginStat > 0) {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.innerHTML = "LOG OUT";
  loginBtn.onclick = () => {
    localStorage.setItem("login-status", 0);
    console.log(loginStat);
  };
}

if (loginStat == 0 && document.getElementById("login-btn") != null) {
  const loginBtn = document.getElementById("login-btn");
  loginBtn.innerHTML = "LOG IN";
}

if (
  loginStat > 0 &&
  loginStat < 1000 &&
  document.getElementById("call-to-action") != null
) {
  document.getElementById("call-to-action").innerHTML = `
  Click <a href="./user-page.html"style=" color:white">here</a> to view your listings.<br>
  Or, click <a href="./listing-upload.html" style ="color :white">here</a> to browse our listings.`;
}

if (loginStat === 1000 && document.getElementById("call-to-action") != null) {
  document.getElementById("call-to-action").innerHTML = `
  Click <a href="./admin-page.html">here</a> to manage users.<br>`;
}
