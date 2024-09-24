const display = document.querySelector('#display');

function appendToDisplay(input) {
    display.value += input
}

function Calclate() {
    display.value = eval(display.value);
}

function ClearDisplay() {
    
}