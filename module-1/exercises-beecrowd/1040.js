var input = require('fs').readFileSync('./dev/stdin', 'utf8');
// Input can be divided by spaces or new lines
var lines = input.split(/\s+/);

let N1 = parseFloat(lines.shift());
let N2 = parseFloat(lines.shift());
let N3 = parseFloat(lines.shift());
let N4 = parseFloat(lines.shift());

var average = (N1*2 + N2*3 + N3*4 + N4*1) / 10;
console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) {
    console.log("Aluno aprovado.");
} else if (average <= 4.9) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    
    let exam = parseFloat(lines.shift());
    console.log(`Nota do exame: ${exam.toFixed(1)}`);
    
    let newAverage = (average+exam)/2;
    
    if (newAverage >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    
    console.log(`Media final: ${newAverage.toFixed(1)}`);
}