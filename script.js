// alert("connected");
const userForm = document.getElementById("userForm");
const membersTable = document.getElementById("membersList");
const submit = document.getElementById("submit");

let formData = new FormData(userForm);

const submitForm = (event) => {
   event.preventDefault();
   let userForm = document.forms["users"];
   let data = new FormData(userForm);
   let newMemberRow = membersTable.insertRow();
   for(let [key, value] of data){
      newMemberRow.insertCell().innerHTML = data.get(key);
   }
}

userForm.addEventListener("submit", submitForm);
