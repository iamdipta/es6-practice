function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}

const total = add(15, 17);

//shortcut way
function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
// best way
const total = add(15);

function add(num1, num2 = 20) { //if unexpected input occur from user then set the default value
    return num1 + num2; //default parameter use kora jabe .....
}

const total = add(15, 17);