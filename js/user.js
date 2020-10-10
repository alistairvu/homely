const user = [
  {
    name: "User1",
    id: 1,
  },
  {
    name: "User2",
    id: 2,
  },
  {
    name: "User3",
    id: 3,
  },
  {
    name: "User4",
    id: 4,
  },
];

function viewUsers() {
  let userBody = document.getElementById("list-users");
  for (let i = 0; i < user.length; i++) {
    const userNum = user[i];
    let displayUser = `<tr>
    <th scope="row">${i+1}</th>
    <td>${user.name}</td>
    <td>${user.id}</td>
    <td>
      <button type="button" class="btn btn-danger">Report!</button>
    </td>
      </tr>`;
    userBody.innerHTML += displayUser;
  }
}

viewUsers();
