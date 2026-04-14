// Importando o Express
const express = require("express");

// Criando a aplicação
const app = express();

app.use(express.json());
app.post("/usuarios", (req, res) => {
    const usuario = req.body; // corpo da requisição
    res.json({ mensagem: "Usuário criado!", dados: usuario });
});

app.get("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Buscando o usuário de ID: ${id}`);
});

app.get("/pedidos/:id", (req, res) => {
    const id = req.params.id;
    const { detalhado } = req.query;
    if (detalhado === "true") {
        res.send(`Exibindo detalhes completos do pedido ${id}`);
    } else {
        res.send(`Exibindo resumo do pedido ${id}`);
    }
});

// Definindo a rota principal ("/")
app.get("/", (req, res) => {
    res.send("Olá, mundo! 🚀 Meu primeiro servidor com Express!");
});

// Listar produtos
app.get("/produtos", (req, res) => {
    res.send("Listando todos os produtos...");
});

/*
app.get("/produtos", (req, res) => {
    //const { categoria, precoMaximo } = req.query;
    const categoria = req.query.categoria;
    const precoMaximo = req.query.precoMaximo;
    res.send(
        `Listando produtos da categoria: ${categoria}, com preço até
R$${precoMaximo}`
    );
});
*/

// Criar produto
app.post("/produtos", (req, res) => {
    res.send("Produto criado com sucesso!");
});

// Atualizar produto
app.put("/produtos/:id", (req, res) => {
    res.send(`Produto ${req.params.id} atualizado!`);
});

// Deletar produto
app.delete("/produtos/:id", (req, res) => {
    res.send(`Produto ${req.params.id} deletado!`);
});

// middleware de autenticação
function autenticar(req, res, next) {
    const autorizado = true; // simulação
    if (autorizado) {
        next(); // pode continuar
    } else {
        res.status(403).send("Acesso negado!");
    }
}
app.get("/dashboard", autenticar, (req, res) => {
    res.send("Bem-vindo ao painel restrito!");
});



// Iniciando o servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})