var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var employeeNum = parseInt(lines.shift());
var workHours = parseInt(lines.shift());
var hourValue = parseFloat(lines.shift());

var salary = workHours * hourValue;

console.log(`NUMBER = ${employeeNum}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);