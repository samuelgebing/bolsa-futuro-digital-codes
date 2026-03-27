var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var salary = parseFloat(lines.shift());

if (salary <= 2000) {
    console.log("Isento");
} else if (salary <= 3000) {
    // remove the tax free value
    salary = salary-2000;
    
    // calculate the tax
    let tax = salary*0.08;
    
    console.log(`R$ ${tax.toFixed(2)}`);
} else if (salary <= 4500) {
    // remove the tax free + 8% tax values
    salary = salary-3000;
    
    // calculate the tax
    // considering all value for 8% tax + rest for 18%
    let tax = 1000*0.08 + salary*0.18;
    
    console.log(`R$ ${tax.toFixed(2)}`);
} else {
    // remove the tax free and the 8% + 18% taxes values
    salary = salary-4500;
    
    // calculate the tax
    // considering all value for 8% and 18% taxes + rest for 28%
    let tax = 1000*0.08 + 1500*0.18 + salary*0.28;
    
    console.log(`R$ ${tax.toFixed(2)}`);
}