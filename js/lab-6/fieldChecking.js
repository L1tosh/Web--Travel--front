const firstnameError = document.getElementById("firstname-error");
const lastnameError = document.getElementById("lastname-error");
const middlenameError = document.getElementById("middlename-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const passwordRepeatError = document.getElementById("password-repeat-error");

const dateError = document.getElementById("date-error");
const genderError = document.getElementById("gender-error");
const fileError = document.getElementById("file-error");

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button")
    const form = document.querySelector("form");

    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const middlenameInput = document.getElementById("middlename");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const passwordRepeatInput = document.getElementById("password-repeat");

    const dateInput = document.getElementById("date");
    const maleInput = document.getElementById("male");
    const femaleInput = document.getElementById("female");
    const fileInput = document.getElementById("file");


    phoneInput.addEventListener("input", function() {
        let value = phoneInput.value.replace(/\D/g, ""); // Видаляємо всі нецифрові символи

        if (value.length <= 1) {
            phoneInput.value = "+38(0" + value;
        } else if (value.length <= 4) {
            phoneInput.value = "+38(0" + value.slice(3);
        } else if (value.length <= 8) {
            phoneInput.value = "+38(0" + value.slice(3, 5) + ")-" + value.slice(5, 8);
        } else if (value.length <= 10) {
            phoneInput.value = "+38(0" + value.slice(3, 5) + ")-" + value.slice(5, 8) + "-" + value.slice(8, 10);
        } else if (value.length <= 15) {
            phoneInput.value = "+38(0" + value.slice(3, 5) + ")-" + value.slice(5, 8) + "-" + value.slice(8, 10) + "-" + value.slice(10, 12);
        }
    });

    // form.addEventListener("submit", function (e) {
    button.addEventListener("click", function (e) {
        let valid = true;

        if (!/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ' ]+$/.test(firstnameInput.value)) {
            firstnameError.textContent = "Ім'я повинно містити лише літери та апострофи";
            firstnameError.style.display = "block";
            valid = false;
        } else {
            firstnameError.style.display = "none";
        }

        if (!/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ' ]+$/.test(lastnameInput.value)) {
            lastnameError.textContent = "Прізвище повинно містити лише літери та апострофи";
            lastnameError.style.display = "block";
            valid = false;
        } else {
            lastnameError.style.display = "none";
        }

        if (!/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ' ]+$/.test(middlenameInput.value)) {
            middlenameError.textContent = "По батькові повинно містити лише літери та апострофи";
            middlenameError.style.display = "block";
            valid = false;
        } else {
            middlenameError.style.display = "none";
        }

        if (!emailInput.value.includes("@")) {
            emailError.textContent = "Електронна пошта повинна містити символ @";
            emailError.style.display = "block";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        if (phoneInput.value.length < 18) {
            phoneError.textContent = "Невірно введений номер";
            phoneError.style.display = "block";
            valid = false;
        } else {
            phoneError.style.display = "none";
        }


        if (passwordInput.value.length < 8) {
            passwordError.textContent = "Пароль повинен містити принаймні 8 символів";
            passwordError.style.display = "block";
            valid = false;
        } else {
            passwordError.style.display = "none";
        }

        const currentDate = new Date();
        const selectedDate = new Date(dateInput.value);

        if (!dateInput.value) {
            dateError.textContent = "Поле дати народження не може бути порожнім.";
            dateError.style.display = "block";
            valid = false;
        } else if (selectedDate > currentDate) {
            dateError.textContent = "Такого не може бути...";
            dateError.style.display = "block";
            valid = false;
        } else if (currentDate.getFullYear() - selectedDate.getFullYear() > 100) {
            dateError.textContent = "Вам не може бути 100 років, я вам не вірю";
            dateError.style.display = "block";
            valid = false;
        } else if (currentDate.getFullYear() - selectedDate.getFullYear() < 18) {
            dateError.textContent = "Ви повині бути старше 18 років";
            dateError.style.display = "block";
            valid = false;
        } else {
            dateError.style.display = "none";
        }

        // Перевірка статі
        if (!maleInput.checked && !femaleInput.checked) {
            genderError.textContent = "Будь ласка, виберіть стать";
            genderError.style.display = "block";
            valid = false;
        } else {
            genderError.style.display = "none";
        }

        // Перевірка файлу
        const allowedExtensions = ["jpeg", "png", "jpg"];
        const fileName = fileInput.value.toLowerCase();
        const fileExtension = fileName.substr((fileName.lastIndexOf(".") + 1));
        if (!allowedExtensions.includes(fileExtension)) {
            fileError.textContent = "Файл повинен мати розширення .jpeg, .jpg або .png";
            fileError.style.display = "block";
            valid = false;
        } else {
            fileError.style.display = "none";
        }

        if (passwordInput.value !== passwordRepeatInput.value) {
            passwordRepeatError.textContent = "Паролі не співпадають";
            passwordRepeatError.style.display = "block";
            valid = false;
        } else {
            passwordRepeatError.style.display = "none";
        }

        if (!valid) {
            e.preventDefault();
        }

    });
});




