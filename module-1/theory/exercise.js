/* IN-CLASS ACTIVITY
* 2026-03-14
* File 1
*/

let a = 10;
let b = 20;
let c; // phase 2

c = a; // phase 2
a = b;
// b = a; phase 1
b = c; // phase 2
console.log(`A = ${a}`); 
console.log(`B = ${b}`); 

// ADVANCED FORM:
[a,b] = [b,a]; // this is called destructuring assignment, it allows us to swap values of two variables without using a temporary variable
console.log(`A = ${a}`); 
console.log(`B = ${b}`); 

/* OUTPUTS: 
* phase 1:
* A = 20
* B = 20
*
* phase 2:
* A = 20
* B = 10
*
* ADVANCED:
* A = 10
* B = 20
*/

// How to swap values of two variables without using a temporary variable?
// Answer: "phase 2"