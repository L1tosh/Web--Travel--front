const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox) {
        table.deleteRow(checkbox.closest("tr").rowIndex);
    });
});