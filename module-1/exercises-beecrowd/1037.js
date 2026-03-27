var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines.shift());

// 0 <= n <= 25
if (0 <= n && n <= 25) {
    console.log("Intervalo [0,25]");
} 
// 25 < n <= 50
else if (25 < n && n <= 50) {
    console.log("Intervalo (25,50]");
}
// 50 < n <= 75
else if (50 < n && n <= 75) {
    console.log("Intervalo (50,75]");
}
// 75 < n <= 100
else if (75 < n && n <= 100) {
    console.log("Intervalo (75,100]");
}
// any other results
else {
    console.log("Fora de intervalo");
}