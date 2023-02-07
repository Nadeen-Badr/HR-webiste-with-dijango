let tableEl = document.querySelector('table');
const urlParams = new URLSearchParams(window.location.search);
const namee = urlParams.get('name');
const fromDate = urlParams.get('fromDate');
const toDate = urlParams.get('toDate');
const reason = urlParams.get('reason');
if(namee!=null){
    tableEl.innerHTML += `
        <tr>
            <td> ${namee} </td>
            <td> ${fromDate} </td>
            <td> ${toDate} </td>
            <td> ${reason} </td>
            <td>
                <button class="approve" onclick="keep(this)">Approve</button>
                <button class="reject" onclick="remove(this)">Reject</button>
            </td>
        </tr>
    `;
}
function remove(button){
    let text = "Are you sure you want to reject this vacations?";
    if (confirm(text) == true) {
        var td = button.parentNode; 
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
    }
}
function keep(button){
    let text = "Are you sure you want to approve this vacations?";
    if (confirm(text) == true) {
        var td = button.parentNode; 
        td.remove();
    }
}