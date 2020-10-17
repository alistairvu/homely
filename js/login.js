import { accounts } from "./accounts.js"

let login = document.getElementById('login-box');
let username = document.getElementById('username');
let password = document.getElementById('password');
let submitbtn = document.getElementById('submit-btn');

function formLogIn (){
for(let i = 0; i<accounts.length; i++ ){
    if(username == accounts[i].name && password == accounts[i].password){
        if(accounts[i].role =='admin'){
            alert('hi admin')
        }else if(accounts[i].role== 'user'){
            alert(`Wellcome: ${accounts[i]}.name`)
        }
    }
}
}
  
  