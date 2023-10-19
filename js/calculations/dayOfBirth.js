const dateOfBirthInput = document.getElementById('date');
const dayOfBirth = document.getElementById('dayOfBirth');

function getDay(date, daysOfWeek){
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const index = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor(31 * m / 12)) % 7;

    return daysOfWeek[index];
}
function calculateDayOfWeek() {
    const dateOfBirth = new Date(dateOfBirthInput.value);
    const currentDate = new Date();
    if(dateOfBirth > currentDate){
        dayOfBirth.textContent = "Введіть, будь ласка, коректну дату народження";
    }
    else{
        const daysOfWeek = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п'ятницю", "суботу"];
        const dayOfWeek = getDay(dateOfBirth, daysOfWeek);
        dayOfBirth.textContent = "Ви народилися у " + dayOfWeek;
    }

}
dateOfBirthInput.addEventListener('input', calculateDayOfWeek);