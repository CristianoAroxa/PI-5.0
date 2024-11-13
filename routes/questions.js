const express = require('express');
const fs = require('fs');
const router = express.Router();

let correctCount = 0;
let percentage = 0;

// Rota para verificar as respostas
router.post('/check-answers', (req, res) => {
    const { answers } = req.body;

    if (!answers) {
        return res.status(400).json({ error: 'Respostas são necessárias' });
    }

    // Carregar as perguntas e respostas corretas do arquivo JSON
    const questions = JSON.parse(fs.readFileSync('data/questions.json'));
    const correctAnswers = questions.map(q => q.correctAnswer); // Extrai as respostas corretas

    // Comparação e cálculo, ignorando capitalização
    correctCount = answers.filter((answer, index) => 
        answer.toLowerCase() === correctAnswers[index].toLowerCase()
    ).length;

    const totalQuestions = correctAnswers.length;
    percentage = (correctCount / totalQuestions) * 100;

    // Retornar a resposta
    res.json({
        correctCount,
        percentage
    });
});

// Rota GET para retornar correctCount e percentage
router.get('/results', (req, res) => {
    res.json({
        correctCount,
        percentage: `${percentage.toFixed(2)}%` // Formata a porcentagem com 2 casas decimais e adiciona o sinal de %
    });
});

module.exports = router;