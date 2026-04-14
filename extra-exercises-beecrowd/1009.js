var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let fixedSalary = Number(lines[1]);
let sales = Number(lines[2]);

let finalSalary = fixedSalary + sales*0.15;

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);