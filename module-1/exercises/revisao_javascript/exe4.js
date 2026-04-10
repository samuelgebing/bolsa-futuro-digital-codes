function fatorial(numero) {
    numero = numero.toFixed(0); // Arredondar para inteiro
    if (numero < 0) {
        return "Número inválido. O fatorial não é definido para números negativos.";
    }
    else if (numero === 0 || numero === 1) {
        return 1;
    }

    let total = 1;
    while (numero > 0) {
        total *= numero;
        numero--;
    }
    return total;
}

console.log(fatorial(-5)); // Retorna "Número inválido. O fatorial não é definido para números negativos."
console.log(fatorial(2.05)); // Retorna 2 
console.log(fatorial(0)); // Retorna 1
console.log(fatorial(1)); // Retorna 1
console.log(fatorial(5)); // Retorna 120