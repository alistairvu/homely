const user = [
  {
    name: "User1",
    password: "blabla",
    id: 1,
  },
  {
    name: "User2",
    password: "blabla",
    id: 2,
  },
  {
    name: "User3",
    password: "blabla",
    id: 3,
  },
  {
    name: "User4",
    password: "blabla",
    id: 4,
  },
];

function viewUsers() {
  let userBody = document.getElementById("list-users");
  for (let i = 0; i < user.length; i++) {
    const userNum = user[i];
    let displayUser = `<tr>
    <th scope="row">${i+1}</th>
    <td>${userNum.name}</td>
    <td>${userNum.id}</td>
    <td>
      <button type="button" class="btn btn-danger " onclick = "reportUser()">Report!</button>
    </td>
      </tr>`;
    userBody.innerHTML += displayUser;
  }
}

viewUsers();
