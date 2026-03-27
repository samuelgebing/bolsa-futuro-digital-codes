var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(/\s+/);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

if (B > A) {
    let temp = A;
    A = B;
    B = temp;
} 

if (C > A) {
    let temp = A;
    A = C;
    C = temp;
}

// not necessary to order B and C to verify the types

// triangle types:

if (A >= (B+C)) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (A*A == (B*B + C*C)) {
        console.log("TRIANGULO RETANGULO");
    } else if (A*A > (B*B + C*C)) {
        console.log("TRIANGULO OBTUSANGULO");
    } else if (A*A < (B*B + C*C)) {
        console.log("TRIANGULO ACUTANGULO");
    } 
    
    if (A == B && A == C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A == B && A != C) {
        console.log("TRIANGULO ISOSCELES");
    } else if (A == C && A != B) {
        console.log("TRIANGULO ISOSCELES");
    } else if (B == C && B != A) {
        console.log("TRIANGULO ISOSCELES");
    }
}