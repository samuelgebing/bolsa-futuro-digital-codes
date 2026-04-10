var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = Number(lines[0]);
let Y = Number(lines[1]);

let PROD = X*Y;
console.log(`PROD = ${PROD}`);