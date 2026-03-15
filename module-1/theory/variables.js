/* IN-CLASS ACTIVITY
* 2026-03-13
* File 2
*/

// var --> 1st things created on JS scripts
// let --> local variables

// Here the "let"s declare variables as global scope
let lastName = "Gebing"; // ; is optional in JS but is a good practice to use it
let age = 25

if(age > 18) {
    console.log("Welcome, Mr./Ms. " + lastName)
    name = "Samuel"; // this is a local variable, it is not declared with var or let, it is created on the fly and it is global, it can be accessed anywhere in the code
}
else {
    console.log("Sorry, " + lastName + ", unfortunately you are not old enough to enter this website")
    name = "Anderson"; // same as in if statement
}

console.log(`Welcome again, ${name} ${lastName}!`);

// REVIEW ALL THE VARIABLE TYPES --> 02 - Sintaxe Básica_Variáveis e Constantes.pdf & 4 - Sintaxe Básica_Operadores e Estruturas de Controle.pdf
