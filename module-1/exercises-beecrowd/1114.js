var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var hasAccess = false;

while (hasAccess === false) {
    let password = lines.shift();
    
    if (password != 2002) {
        console.log("Senha Invalida");
    } else {
        console.log("Acesso Permitido");
        hasAccess = true;
    }
}