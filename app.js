let display = document.querySelector('#displayAll');
let equal = document.querySelector('#equal');



function displayData(input) {
    display.value += input;
}
function equale() {
    display.value = eval(display.value);
}
equal.addEventListener('click', equale);

function clearData() {
    display.value = '';
}
clear.addEventListener('click', clearData);
