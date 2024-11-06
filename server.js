const express = require('express');
const bodyParser = require('body-parser');
const questionsRoute = require('./routes/questions');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar a rota de perguntas
app.use('/api', questionsRoute);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});