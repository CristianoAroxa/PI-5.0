describe('POST /api/check-answers', () => {
  it('deve retornar a contagem correta de respostas e a porcentagem', async () => {
    const answers = ['resposta1', 'resposta2', 'resposta3'];
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
    expect(response.body).toHaveProperty('error', 'As respostas devem ser um array de strings.');
  });

  it('deve retornar 400 se as respostas não forem um array de strings', async () => {
    const invalidAnswers = [
      { answer: 'resposta1' }, // Objeto em vez de string
      123,                     // Número em vez de string
      null,                    // null em vez de string
      'resposta4'             // String válida para verificar misturas
    ];

    const response = await request(app)
      .post('/api/check-answers')
      .send({ answers: invalidAnswers });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'As respostas devem ser um array de strings.');
  });

  // Você pode adicionar mais testes para verificar diferentes cenários
});