var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);
let D = Number(lines[3]);

console.log(`DIFERENCA = ${A*B-C*D}`);