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

/* TEACHER'S SOLUTION:
let n1 = Number(lines[0]);
let n2 = Number(lines[1]);
let n3 = Number(lines[2]);

if (n1>=n2 && n1>=n3) {
    A = n1;
    if (n2>n3) {
        B = n2;
        C = n3;
    } else {
        B = n3;
        C = n2;
    }
} else if (n2>=n1 && n2>=n3) {
    A = n2;
    if (n1>n3) {
        B = n1;
        C = n3;
    } else {
        B = n3;
        C = n1;
    }
} else if (n3>=n1 && n3>=n2) {
    A = n3;
    if (n1>n2) {
        B = n1;
        C = n2;
    } else {
        B = n2;
        C = n1;
    }
}

*/

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