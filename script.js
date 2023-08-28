// alert("connected");
const userForm = document.getElementById("userForm");
const membersTable = document.getElementById("membersList");
const submit = document.getElementById("submit");
const background = document.getElementById("bg");

let formData = new FormData(userForm);
let geekForm = document.forms["users"];


const getColor = (event) => {
    membersTable.style.backgroundColor = event.target.value;
}


const submitForm = (event) => {
    event.preventDefault();
    let data = new FormData(geekForm);
    let newMemberRow = membersTable.insertRow();
    for(let [key, value] of data){
        newMemberRow.insertCell().innerHTML = data.get(key);
    }
}

userForm.addEventListener("submit", submitForm);
background.addEventListener("change", getColor, false);