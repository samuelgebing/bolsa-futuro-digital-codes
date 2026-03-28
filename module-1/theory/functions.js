// Function declaration
function greeting() {
    console.log("Hello, welcome to the course!");
}

// Function expression
greeting();

function square(num) {
    return num * num; // without this line or the return keyword, the function will return "undefined" by default
}

console.log(square(5)); // 25

// functions can have hoisting
// which means they can be called before they are defined in the code
console.log(double(3)); // 7
function double(num) {
    return num * 2;
}

//IMPORTANT: function expressions in variables are not hoisted
// console.log(add(2, 3)); // ReferenceError: Cannot access 'add' before initialization
const add = function(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// recursive function (a function that calls itself)
const factorial = function fac(n) {
 return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(5)); // 120

// arrow function (a shorter syntax for function expressions)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

const greet = name => console.log(`Hello, ${name}!`);
greet("Alice"); // Hello, Alice!

const sum = (a, b) => a+b;
console.log(sum(10, 15)); // 25

// IMPORTANT: return keyword is not needed in arrow functions 
// if the function body is a single expression, 
// but it is needed if the function body has multiple statements 
// or if you want to return an object literal (because of the curly braces)
const getPerson = (name, age) => ({ name: name, age: age });
console.log(getPerson("Bob", 30)); // { name: 'Bob', age: 30 }

const calculate = (a, b) => {
    const result = a + b;
    return result; 
}
calculate(5, 10); // 15

// exercise: change the above function to return any operation you want (subtraction, multiplication, division) and test it with different numbers
const calculate2 = (a, b, operation) => {
    switch(operation) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
            break;
        default:
            return "Valid operations are: add, subtract, multiply, divide";
            break;
    }
    // SWITCH IN TERNARY OPERATOR
    // return operation === 'add' ? a + b :
    //        operation === 'subtract' ? a - b :
    //        operation === 'multiply' ? a * b :
    //        operation === 'divide' ? a / b :
    //        "Valid operations are: add, subtract, multiply, divide";
}
console.log(calculate2(5, 10, "multiply")); // 50
console.log(calculate2(5, 10, "divide")); // 0.5
console.log(calculate2(5, 10, "subtract")); // -5
console.log(calculate2(5, 10, "add")); // 15
console.log(calculate2(5, 10, "modulo")); // Valid operations are: add, subtract, multiply, divide  