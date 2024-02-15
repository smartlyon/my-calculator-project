let display = document.getElementById('screen-display');

function dot() {
    display.value +='.';
}

function zero() {
    if (display.value === '0') {
        display.value = '0'
    } else {
        display.value += '0';
    }
}

function one() {
    if (display.value === '0') {
        display.value = '1'
    } else {
        display.value += '1';
    }
}

function two() {
    if (display.value === '0') {
        display.value = '2'
    } else {
        display.value += '2';
    }
}

function three() {
    if (display.value === '0') {
        display.value = '3'
    } else {
        display.value += '3';
    }
}

function four() {
    if (display.value === '0') {
        display.value = '4'
    } else {
        display.value += '4';
    }
}

function five() {
    if (display.value === '0') {
        display.value = '5'
    } else {
        display.value += '5';
    }
}

function six() {
    if (display.value === '0') {
        display.value = '6'
    } else {
        display.value += '6';
    }
}

function seven() {
    if (display.value === '0') {
        display.value = '7'
    } else {
        display.value += '7';
    }
}

function eight() {
    if (display.value === '0') {
        display.value = '8'
    } else {
        display.value += '8';
    }
}

function nine() {
    if (display.value === '0') {
        display.value = '9'
    } else {
        display.value += '9';
    }
}

function plus() {
    if (display.value === '0') {
        display.value = '+'
    } else {
        display.value += '+';
    }
}

function minus() {
    if (display.value === '0') {
        display.value = '-'
    } else {
        display.value += '-';
    }
}

function multiply() {
    if (display.value === '0') {
        display.value = '*'
    } else {
        display.value += '*';
    }
}

function divide() {
    if (display.value === '0') {
        display.value = '/'
    } else {
        display.value += '/';
    }
}

function ac() {
    display.value = '0';
}

function sqrt() {
    display.value =  Math.sqrt(display.value);
}

function cap() {
    display.value += '**'
}

function equals() {
    let solve = eval(display.value);
    // console.log(solve);
    display.value = solve;
}











