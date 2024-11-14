const express = require('express');
const bodyParser = require('body-parser');
const questionsRoute = require('./routes/questions');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();
const PORT = 3000;

//Middleware para cors
app.use(cors());

// Middleware para parsear JSON
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Usar a rota de perguntas
app.use('/api', questionsRoute);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});