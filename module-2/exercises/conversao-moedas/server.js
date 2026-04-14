// 1) Importando o Express
const express = require("express");

// 2) Criando a aplicação
const app = express();

// 3) Definindo a porta
const PORT = 3000;

// 4) Rota inicial
app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo à API de Conversão de Moedas!" });
});

// 5) Rota de conversão
// Exemplo: http://localhost:3000/conversao?valor=100&moeda=USD
app.get("/conversao", (req, res) => {
    const valor = Number(req.query.valor); // transforma em número
    const moeda = req.query.moeda?.toUpperCase(); // garante maiúsculas
    let taxa;
    let nomeMoeda;
    // Decide a taxa conforme a moeda informada
    if (moeda === "USD") {
        taxa = 0.20; // 1 real = 0,20 dólar
        nomeMoeda = "dólares";
    } else if (moeda === "EUR") {
        taxa = 0.18; // 1 real = 0,18 euro
        nomeMoeda = "euros";
    } else if (moeda === "GBP") {
        taxa = 0.15; // 1 real = 0,15 libra
        nomeMoeda = "libras";
    } else {
        // caso moeda não seja suportada
        return res.json({
            erro: "Moeda não suportada. Use USD, EUR ou GBP."
        });
    }
    // cálculo
    const convertido = valor * taxa;
    // resposta em JSON
    res.json({
        valorEmReais: valor,
        moedaDestino: moeda,
        valorConvertido: convertido.toFixed(2)
    });
});

// 6) Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});