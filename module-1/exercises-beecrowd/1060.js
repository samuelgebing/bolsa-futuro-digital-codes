var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var countPositive = 0;
var n;

for (let i = 1; i <= 6; i++) {
    n = parseFloat(lines.shift());
    if (n > 0) {
        countPositive++;
    }
}

console.log(`${countPositive} valores positivos`);