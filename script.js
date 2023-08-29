// alert("connected");
const userForm = document.getElementById("userForm");
const membersTable = document.getElementById("membersList");
const submit = document.getElementById("submit");
const background = document.getElementById("bg");
const textColor = document.getElementById("textColor");
const width = document.getElementById("width");
const settings = document.getElementsByClassName("set")[0];
const settingsModal = document.getElementById("settings");

let formData = new FormData(userForm);
let geekForm = document.forms["users"];


const setBackgroundColor = (event) => {
    membersTable.style.backgroundColor = event.target.value;
}

const setTextColor = (event) => {
    membersTable.style.color = event.target.value;
}

const setWidth = (event) => {
   membersTable.style.width = event.target.value;   
}

const showSettings = () => {
   settingsModal.classList.toggle("show")
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
background.addEventListener("change", setBackgroundColor);
textColor.addEventListener("change", setTextColor);
width.addEventListener("change", setWidth);
settings.addEventListener("click", showSettings);