const express = require('express');
const fs = require('fs');
const router = express.Router();

// Rota para verificar as respostas
router.post('/check-answers', (req, res) => {
    const { answers } = req.body;

    // Carregar as perguntas e respostas corretas do arquivo JSON
    const questions = JSON.parse(fs.readFileSync('data/questions.json'));
    const correctAnswers = questions.map(q => q.correctAnswer); // Extrai as respostas corretas

    // Comparação e cálculo
    const correctCount = answers.filter((answer, index) => answer === correctAnswers[index]).length;
    const totalQuestions = correctAnswers.length;
    const percentage = (correctCount / totalQuestions) * 100;

    // Retornar a resposta
    res.json({
        correctCount,
        percentage
    });
});

module.exports = router;