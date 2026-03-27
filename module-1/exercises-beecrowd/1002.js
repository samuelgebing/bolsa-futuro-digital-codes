// linux --> /dev/stdin
// windows --> ./dev/stdin
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
// READING THE RAY VALUE FROM THE INPUT (dev/stdin) AND CONVERTING IT TO A NUMBER
let ray = Number(lines[0]);
let area = n * ray * ray; 
// ray^2 = ray * ray

console.log(`A=${area.toFixed(4)}`);