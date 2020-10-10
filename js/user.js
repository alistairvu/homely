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
    console.log(userNum);
    let displayUser = `<tr>
                <td>${userNum.name}</td>
                <td>${userNum.id}</span></td>
            </tr>`;
    userBody.innerHTML += displayUser;
  }
}

viewUsers();
