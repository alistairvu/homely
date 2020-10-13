import { user } from "./userdata.js";

window.reportUser = function reportUser() {
  if (confirm("Choose a button")) {
    alert("Report sent!");
  } else {
    alert("Cancel done!");
  }
};

let userBody = document.getElementById("list-users");
for (let i = 0; i < user.length; i++) {
  const userNum = user[i];
  let displayUser = `<tr>
    <th scope="row">${i + 1}</th>
    <td>${userNum.name}</td>
    <td>${userNum.id}</td>
    <td>
      <button type="button" class="btn btn-danger " onclick="reportUser()">Report!</button>
    </td>
      </tr>`;
  userBody.innerHTML += displayUser;
}