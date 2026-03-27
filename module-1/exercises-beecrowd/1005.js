var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let grade1 = Number(lines[0]);
let grade2 = Number(lines[1]);

let average = (grade1 * 3.5 + grade2 * 7.5) / 11;

console.log(`MEDIA = ${average.toFixed(5)}`);