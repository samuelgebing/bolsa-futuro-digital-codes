var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var informations = [];
informations[0] = lines[0].split(" ");
informations[1] = lines[1].split(" ");

let amount = informations[0][1]*informations[0][2] + informations[1][1]*informations[1][2];
console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`);