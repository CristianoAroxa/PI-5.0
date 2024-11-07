const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const questionsRoute = require('../src/routes/questions'); // Ajuste o caminho conforme necessário

const app = express();
app.use(bodyParser.json());
app.use('/api', questionsRoute);

describe('POST /api/check-answers', () => {
  it('deve retornar a contagem correta de respostas e a porcentagem', async () => {
    const answers = ['resposta1', 'resposta2', 'resposta3']; // Substitua por respostas de teste
    const response = await request(app)
      .post('/api/check-answers')
      .send({ answers });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('correctCount');
    expect(response.body).toHaveProperty('percentage');
  });

  it('deve retornar 400 se as respostas não forem fornecidas', async () => {
    const response = await request(app)
      .post('/api/check-answers')
      .send({}); // Enviando um corpo vazio

    expect(response.statusCode).toBe(400);
  });

  // Você pode adicionar mais testes para verificar diferentes cenários
});