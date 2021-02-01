// normal way
function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(20);

// another way
const doubleIt = function(num) {
    return num * 2;

}

// advanced in Es6 features
const doubleIt = num => num * 2; //arrow function

// for multiple parameter
const add = (x, y) => num * 2;
// no parameter
const add = () => 5;

// multiline arrow function
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const dif = num1 + num2;
    const result = sum * dif;
    return result;
}