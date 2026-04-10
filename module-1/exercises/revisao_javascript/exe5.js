function numeroPerfeito(num) {
    let soma = 0;
    let i = 1;
    while (i < num) {
        if (num % i === 0) {
            soma += i;
        }
        i++;
    }

    return (soma === num) ? "Número perfeito" : "Número não perfeito";
}

console.log(numeroPerfeito(6)); // Output: Número perfeito
console.log(numeroPerfeito(28)); // Output: Número perfeito
console.log(numeroPerfeito(12)); // Output: Número não perfeito