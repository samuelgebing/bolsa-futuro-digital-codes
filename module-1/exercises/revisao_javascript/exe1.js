function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt((x2*x2 -2*x2*x1 + x1*x1) + (y2*y2 -2*y2*y1 + y1*y1));
}

console.log(calcularDistancia(0, 0, 2, 2)); // Retorna 2.8284271247461903
console.log(calcularDistancia(0, 0, 3, 4)); // Retorna 5
console.log(calcularDistancia(1, 2, 4, 6)); // Retorna 5
console.log(calcularDistancia(2, 3, 3, 4)); // Retorna 1.4142135623730951