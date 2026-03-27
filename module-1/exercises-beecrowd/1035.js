var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(/\s+/);

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

// verify the "greaters"
if (B <= C || D <= A) {
    console.log("Valores nao aceitos");
} 
// verify the sums
else if (C+D <= A+B) {
    console.log("Valores nao aceitos");
} 
// verify the positives
else if (C < 0 || D < 0) {
    console.log("Valores nao aceitos");
} 
// verify the even
else if (A%2 !== 0) {
    console.log("Valores nao aceitos");
} 
// IF EVERYTHING IS CORRECT:
else {
    console.log("Valores aceitos");
}