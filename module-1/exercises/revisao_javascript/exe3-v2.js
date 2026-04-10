function calcularIRPF(base) {
    console.log("\nBase de cálculo: " + base.toFixed(2));
    let imposto = 0;
    let reducao = 0;

    // alíquota
    if (base <= 2428.80) {
        //console.log("Isento de IRPF");
    } else if (base <= 2826.65) {
        // console.log("Alíquota de 7.5%");
        // console.log("Valor a ser pago: " + (base * 0.075).toFixed(2));
        // console.log("Valor a ser pago após a dedução: " + (base * 0.075 -182.16).toFixed(2));
        imposto = base * 0.075-182.16;
    } else if (base <= 3751.05) {
        // console.log("Alíquota de 15%");
        // console.log("Valor a ser pago: " + (base * 0.15).toFixed(2));
        // console.log("Valor a ser pago após a dedução: " + (base * 0.15 -394.16).toFixed(2));
        imposto = base * 0.15 - 394.16;
    } else if (base <= 4664.68) {
        // console.log("Alíquota de 22.5%");
        // console.log("Valor a ser pago: " + (base * 0.225).toFixed(2));
        // console.log("Valor a ser pago após a dedução: " + (base * 0.225 -675.49).toFixed(2));
        imposto = base * 0.225 - 675.49;
    } else {
        // console.log("Alíquota de 27.5%");
        // console.log("Valor a ser pago: " + (base * 0.275).toFixed(2));
        // console.log("Valor a ser pago após a dedução: " + (base * 0.275 -908.73).toFixed(2));
        imposto = base * 0.275 - 908.73;
    }
    console.log("Valor a ser pago antes da dedução: " + imposto.toFixed(2));

    // Rendimentos tributáveis
    if (base <= 5000) {
        imposto = 0;
    } else if (base <= 7350) {
        imposto = imposto - (978.62 - 0.133145*base);
    }
    console.log("IRPF após a dedução: " + imposto.toFixed(2));
}

calcularIRPF(2428.79);
calcularIRPF(2826.65);
calcularIRPF(3751.05);
calcularIRPF(4664.68);
calcularIRPF(4999);
calcularIRPF(5000);
calcularIRPF(5001);
calcularIRPF(7350);
calcularIRPF(7351);