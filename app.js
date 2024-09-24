const display = document.querySelector('#display');

function appendToDisplay(input) {
    display.value += input
}

function Calclate() {
    try {
        display.value = eval(display.value);
    } catch(reee) {
        display.value = 'Error'
    }
}

function ClearDisplay() {
    display.value = ''
}