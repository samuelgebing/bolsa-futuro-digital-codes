// server.js
const http = require("http"); // módulo nativo do Node para criar servidores

const PORT = 3000; // porta onde o servidor vai "escutar"

const server = http.createServer((req, res) => {
    // Configura o tipo de resposta como texto
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
 
    // Roteamento simples por URL
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Bem-vindo ao meu primeiro servidor Node.js!");
    } else if (req.url === "/sobre") {
        res.statusCode = 200;
        res.end("Esta é a rota /sobre. Servidor simples em Node.js 🙂");
    } else {
        res.statusCode = 404;
        res.end("Rota não encontrada.");
    }
});

server.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});
