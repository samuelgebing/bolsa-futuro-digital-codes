// linux --> /dev/stdin
// windows --> ./dev/stdin-30
// ACCESSING AND READING A TEXT FILE
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
// SAVING THE TEXT ON THE input VARIABLE
var lines = input.split('\n');

console.log("Hello World!");