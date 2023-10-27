const table = document.getElementById("data-table");
const deleteButton = document.getElementById("delete-button");
const duplicateButton = document.getElementById("duplicate-button");

deleteButton.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        table.deleteRow(checkbox.closest("tr").rowIndex);
    });
});

duplicateButton.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        const rowToDuplicate = checkbox.closest("tr");
        const clonedRow = rowToDuplicate.cloneNode(true);
        table.appendChild(clonedRow);
        clonedRow.querySelector('input[type="checkbox"]').checked = false;
    });
});

document.getElementById("data-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("firstname").value;
    const middlename = document.getElementById("middlename").value;
    const surname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    let arrForm = [name, middlename, surname, email, phone, password, date, gender];

    const row = table.insertRow(-1);
    const actionsCell = row.insertCell(0);
    const deleteCheckbox = document.createElement("input");
    deleteCheckbox.type = "checkbox";
    actionsCell.appendChild(deleteCheckbox);

    for (let i = 0; i < arrForm.length; i++) {
        const cell = row.insertCell(i + 1);
        cell.innerHTML = arrForm[i];
    }

    document.getElementById("firstname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
    document.getElementById("date").value = "";
    document.getElementById("password-repeat").value = "";
    document.getElementById("date").value = "";
    document.getElementById("file").value = "";
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    for (const input of genderInputs) {
        input.checked = false;
    }
});