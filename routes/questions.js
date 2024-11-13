const express = require('express');
const fs = require('fs');
const router = express.Router();

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
    const correctCount = answers.filter((answer, index) => 
        answer.toLowerCase() === correctAnswers[index].toLowerCase()
    ).length;

    const totalQuestions = correctAnswers.length;
    const percentage = (correctCount / totalQuestions) * 100;

    // Retornar a resposta
    res.json({
        correctCount,
        percentage
    });
});

module.exports = router;