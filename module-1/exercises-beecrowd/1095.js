var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var I = 1;
var J = 60;

while (J >= 0) {
    console.log(`I=${I} J=${J}`);
    I += 3;
    J -= 5;
}