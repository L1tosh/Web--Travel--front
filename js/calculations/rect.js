const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const perimeter = document.getElementById('perimeter');
const area = document.getElementById('area');
const diagonal = document.getElementById('diagonal');

function calculatePerimeter() {
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    perimeter.textContent = 2  * (length + width);

}
function calculateArea() {
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    area.textContent = length * width;
}
function calculateDiagonal() {
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    diagonal.textContent = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
}

function calculate() {
    if(isValid(parseFloat(lengthInput.value), parseFloat(widthInput.value))) {
        calculatePerimeter();
        calculateArea();
        calculateDiagonal();
    }
}
function isValid(length, width){
        return length !== 0 && !isNaN(length) && width !== 0 && !isNaN(width);
}


lengthInput.addEventListener('input', calculate);
widthInput.addEventListener('input', calculate);

