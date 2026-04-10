function calcularIRPF(base) {
    console.log("\nBase de cálculo: " + base.toFixed(2));
    // alíquota
    if (base <= 2428.80) {
        console.log("Isento de IRPF");
    } else if (base <= 2826.65) {
        console.log("Alíquota de 7.5%");
        // console.log("Valor a ser pago: " + (base * 0.075).toFixed(2));
        console.log("Valor a ser pago após a dedução: " + (base * 0.075 -182.16).toFixed(2));
    } else if (base <= 3751.05) {
        console.log("Alíquota de 15%");
        // console.log("Valor a ser pago: " + (base * 0.15).toFixed(2));
        console.log("Valor a ser pago após a dedução: " + (base * 0.15 -394.16).toFixed(2));
    } else if (base <= 4664.68) {
        console.log("Alíquota de 22.5%");
        // console.log("Valor a ser pago: " + (base * 0.225).toFixed(2));
        console.log("Valor a ser pago após a dedução: " + (base * 0.225 -675.49).toFixed(2));
    } else {
        console.log("Alíquota de 27.5%");
        // console.log("Valor a ser pago: " + (base * 0.275).toFixed(2));
        console.log("Valor a ser pago após a dedução: " + (base * 0.275 -908.73).toFixed(2));
    }

    // Rendimentos tributáveis
    // Falta passar algum valor para o cálculo dessa parte do IRPF
}

calcularIRPF(2428.79);
calcularIRPF(2826.65);
calcularIRPF(3751.05);
calcularIRPF(4664.68);
calcularIRPF(4999);
calcularIRPF(5000);