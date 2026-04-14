// 1) Importando o Express
const express = require("express");

// 2) Criando a aplicação
const app = express();

// 3) Definindo a porta
const PORT = 3000;

// 4) Rota inicial
app.get("/", (req, res) => {
    res.json({ message: "Bem-vindo à API de Juros Compostos!" });
});

// Rota básica de juros compostos
// Exemplo: http://localhost:3000/juros?capital=1000&taxa=0.01&meses=12
app.get("/juros", (req, res) => {
    // Ler e validar os parâmetros da query
    const capital = Number(req.query.capital);
    const taxa = Number(req.query.taxa);
    const meses = Number(req.query.meses);

    // Calcular o montante usando a fórmula de juros compostos
    const montante = capital * Math.pow(1 + taxa, meses); // mesmo que capital * (1 + taxa) ^ meses

    // Retornar o resultado em formato JSON
    res.json({ 
        "capital": capital,
        "taxa": taxa,
        "meses": meses,
        "montante": montante.toFixed(2)
    });
});

// 6) Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});