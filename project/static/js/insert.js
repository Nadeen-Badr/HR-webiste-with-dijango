const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

      function onAddWebsite(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const id = document.getElementById("id").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const address = document.getElementById("address").value;
        const telephone = document.getElementById("telephone").value;
        const av = document.getElementById("av").value;
        const ac = document.getElementById("ac").value;
        const maritalStatus = document.getElementById("ms").value;
        const Gender = document.getElementById("gn").value;
        const dOfBirth = document.getElementById("dBirth").value;
        tbodyEl.innerHTML += `
            <tr>  
                <td>${name}</td>
                <td>${id}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${address}</td>
                <td>${telephone}</td>
                <td>${av}</td>
                <td>${ac}</td>
                <td>${maritalStatus}</td>
                <td>${Gender}</td>
                <td>${dOfBirth}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }
      
      formEl.addEventListener("submit", onAddWebsite);
      tableEl.addEventListener("click", onDeleteRow);
/*******Validation********
var name = document.getElementById('name').value;
var id = document.getElementById('id').value;
var E_mail = document.getElementById('email').value;
var address = document.getElementById('telephone').value;
var passowrd = document.getElementById('passowrd').value;
var address = document.getElementById("address").valye;
var AvailableVacationDays = document.getElementById('av').value;
var ActualApprovedVacationDays = document.getElementById('ac').value;
var MaritalStatus = document.getElementById('ms').value;
var Gender = document.getElementById('gn').value;
var DateOfBirth = document.getElementById('dBirth').value;

if (name=="" || name== null)
{
    alert ("this field is required");
    return false;
}

if (id <=0 || id == null)
{
    alert ("please enter the id");
    return false;
}
if (password == null)
{
    alert ("please enter the employee password");
    return false;
}
if (address == null) {
    alert ("please enter the employee`s address");
    return false;
}
if (E_mail == null) {
    alert ("please enter the employee`s email");
    return false;
}
if (AvailableVacationDays <=0 || AvailableVacationDays == null) {
    alert ("please enter the employee`s AvailableVacationDays");
    return false;
}
if (ActualApprovedVacationDays <=0 || ActualApprovedVacationDays == null) {
    alert ("please enter the employee`s AvailableVacationDays");
    return false;
}
if (MaritalStatus == null) {
    alert ("please enter the employee`s MaritalStatus");
    return false;
}
if (Gender == null) {
    alert ("please enter the employee`s Gender");
    return false;
}
if (DateOfBirth == null) {
    alert ("please enter the employee`s DateOfBirth");
    return false;
}
*/