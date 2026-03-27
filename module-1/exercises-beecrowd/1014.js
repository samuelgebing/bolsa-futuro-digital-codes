var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

// distance in Km
var X = parseInt(lines.shift());
// spent fuel total
var Y = parseFloat(lines.shift());

var consumption = X / Y.toFixed(1);

console.log(`${consumption.toFixed(3)} km/l`);