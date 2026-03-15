/* IN-CLASS ACTIVITY
* 2026-03-14
* File 2
*/

// Math Operators in JavaScript
let x = 10;
x += 5; // x = x + 5 --> 15
x -= 3; // x = x - 3 --> 12
x *= 2; // x = x * 2 --> 24
x /= 4; // x = x / 4 --> 6
x %= 5; // x = x % 5 --> 1 (remainder of 6 divided by 5 is 1)

console.log(x); // Output: 1

// Comparison Operators in JavaScript
// REVIEW

// Conditional (Ternary) Operators in JavaScript
let age = 18;

// Using if-else statement
if(age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
// Output: You are an adult.

// Using ternary operator
let canVote = (age >= 18) ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: Yes, you can vote!

let temperature = 25;

if(temperature > 30) {
    console.log("It's a hot day!");
} else if(temperature < 15) {
    console.log("It's a cold day!");
} else {
    console.log("It's a comfortable day!");
}
// Output: It's a comfortable day!

// GENERATED CODE (same logic as above but using nested ternary operator):
let weatherMessage = (temperature > 30)
    ? "It's a hot day!"
    : (temperature < 15)
        ? "It's a cold day!"
        : "It's a comfortable day!";
console.log(weatherMessage); // Output: It's a comfortable day!
