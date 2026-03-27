var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var numbers = [
    parseInt(lines.shift()),
    parseInt(lines.shift()),
    parseInt(lines.shift()),
    parseInt(lines.shift()),
    parseInt(lines.shift())
];

var even = 0;
var odd = 0;
var positive = 0;
var negative = 0;

for (let i = 0; i <= numbers.length - 1; i++ ) {
    if (numbers[i] > 0) {
        positive++;
    } else if (numbers[i] < 0) {
        negative++;
    }
    
    if (numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);