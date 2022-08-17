let id = 0;

document.getElementById('add').addEventListener('click',() =>{
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML =`${createdDate.getMonth()+1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
    row.insertCell(1).innerHTML = document.getElementById('requesting-person').value;
    row.insertCell(2).innerHTML = document.getElementById('requesting-supervisor').value;
    row.insertCell(3).innerHTML = document.getElementById('department').value;
    // row.insertCell(4).innerHTML =document.getElementById('select').onclick = function() {
    //     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    //     for (var checkbox of checkboxes) {
    //         document.body.append(checkbox.value + ' ');
    //     }
    // }
    row.insertCell(4).innerHTML = document.getElementById('account-number').value;
    row.insertCell(5).innerHTML = document.getElementById('budget').value;
    row.insertCell(6).innerHTML = document.getElementById('new-deadline-date').value;
    row.insertCell(7).innerHTML = document.getElementById('apparel-type').value;
    row.insertCell(8).innerHTML = document.getElementById('apparel-color').value;
        // row.insertCell(9).innerHTML =document.getElementById('select').onclick = function() {
    //     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    //     for (var checkbox of checkboxes) {
    //         document.body.append(checkbox.value + ' ');
    //     }
    // }
    let actions = row.insertCell(9);
    actions.appendChild(createDeleteButton(id++));
    //below clears input boxs///
    document.getElementById('requesting-person').value = '';
    document.getElementById('requesting-supervisor').value =''; 
    document.getElementById('department').value='';
    document.getElementById('account-number').value='';
    document.getElementById('budget').value='';
    document.getElementById('new-deadline-date').value='';
    document.getElementById('apparel-type') .value='';
    document.getElementById('apparel-color').value='';
});

function createDeleteButton(id){
    let btn=document.createElement('button');
    btn.className ='btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick =() => {
        let elementToDelete =document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);// deletes line
    };
    return btn;
}

///Upload request to google sheets//

//send email to caroline for request///