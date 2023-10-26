// document.addEventListener("submit", function () {
document.getElementById("button").addEventListener("click", function () {
    // event.preventDefault(); // Зупиняємо форму від надсилання
    const firstnameInput = document.getElementById("firstname");

    const name = document.getElementById("firstname").value;
    const middlename = document.getElementById("middlename").value;
    const surname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    // alert(lastname);

    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.className = "checkbox-list";
    let copyElement = document.createElement("div");
    let deleteElement = document.createElement("div");

    const surnameElement = document.createElement("div");
    surnameElement.className = "surname-list";
    surnameElement.textContent = surname;

    const nameElement = document.createElement("div");
    nameElement.className = "name-list";
    nameElement.textContent = name;

    let middlenameElement = document.createElement("div");
    middlenameElement.className = "middle-list";
    middlenameElement.textContent = middlename;

    let emailElement = document.createElement("div");
    emailElement.className = "email-list";
    emailElement.textContent = email;

    let phoneElement = document.createElement("div");
    phoneElement.className = "phone-list";
    phoneElement.textContent = phone;

    let passwordElement = document.createElement("div");
    passwordElement.className = "password-list";
    passwordElement.textContent = password;

    let tabledateElement = document.createElement("div");
    tabledateElement.className = "tabledate-list";
    tabledateElement.textContent = date;

    let tablegenderElement = document.createElement("div");
    tablegenderElement.className = "tablegender-list";
    tablegenderElement.textContent = gender;


    let checkboxContainer = document.querySelector(".checkbox");
    checkboxContainer.appendChild(checkboxElement);
    let copyContainer = document.querySelector(".copy");
    copyContainer.appendChild(copyElement);
    let deleteContainer = document.querySelector(".delete");
    deleteContainer.appendChild(deleteElement);
    let surnameContainer = document.querySelector(".surname");
    surnameContainer.appendChild(surnameElement);
    let nameContainer = document.querySelector(".name");
    nameContainer.appendChild(nameElement);
    let middlenameContainer = document.querySelector(".middlename");
    middlenameContainer.appendChild(middlenameElement);
    let emailContainer = document.querySelector(".email");
    emailContainer.appendChild(emailElement);
    let phoneContainer = document.querySelector(".phone");
    phoneContainer.appendChild(phoneElement);
    let passwordContainer = document.querySelector(".password");
    passwordContainer.appendChild(passwordElement);
    let tabledateContainer = document.querySelector(".tabledate");
    tabledateContainer.appendChild(tabledateElement);
    let tablegenderContainer = document.querySelector(".tablegender");
    tablegenderContainer.appendChild(tablegenderElement);


    document.getElementById("firstname").value = '';
    document.getElementById("middlename").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("password").value ='';
    document.getElementById("password-repeat").value = '';
    document.getElementById("date").value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("file").value ='';



});
