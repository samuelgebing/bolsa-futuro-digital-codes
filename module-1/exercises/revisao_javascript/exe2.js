function calcularIdade(dataNascimento) {
    const dia = dataNascimento.substring(0, 2);
    const mes = dataNascimento.substring(3, 5);
    const ano = dataNascimento.substring(6, 10);
    // console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);

    const dataAtual = new Date().toLocaleDateString('pt-BR');
    // const dataAtual = "15/12/2026"; // Data fixa para teste
    //console.log(`Data atual: ${dataAtual}`);
    const diaAtual = dataAtual.substring(0, 2);
    const mesAtual = dataAtual.substring(3, 5);
    const anoAtual = dataAtual.substring(6, 10);
    // console.log(`Dia atual: ${diaAtual}, Mês atual: ${mesAtual}, Ano atual: ${anoAtual}`);

    let idade = anoAtual - ano;
    if (mesAtual < mes) {
        idade--;
    } else if (mesAtual === mes && diaAtual < dia) {
        idade--;
    }
    
    return idade;
}

console.log(calcularIdade("16/11/2000")); // Retorna 24