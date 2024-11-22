import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";
import axios from "axios";
import ScreenComponent from "@/components/ScreenComponent";
import MenuHamburguer from "@/components/MenuHamburguer";

export default function ProvaScreen() {
  const [questions, setQuestions] = useState([
    {
      id: "1",
      question: "O que significa HTML?",
      options: [
        "A. HighText Machine Language",
        "B. HyperText Markup Language",
        "C. Hyperlink and Text Markup Language",
        "D. HyperText Markup Level",
      ],
      correctAnswer: "B",
      selectedOption: null,
    },
    {
      id: "2",
      question: "Qual é a tag HTML usada para criar um link?",
      options: ["A. <href>", "B. <a>", "C. <link>", "D. <url>"],
      correctAnswer: "B",
      selectedOption: null,
    },
    {
      id: "3",
      question: "Qual propriedade CSS é usada para alterar a cor do texto?",
      options: [
        "A. background-color",
        "B. text-color",
        "C. color",
        "D. font-color",
      ],
      correctAnswer: "C",
      selectedOption: null,
    },
    {
      id: "4",
      question: "Como você seleciona um elemento com a classe 'exemplo' em CSS?",
      options: ["A. exemplo", "B. *exemplo", "C. #exemplo", "D. .exemplo"],
      correctAnswer: "D",
      selectedOption: null,
    },
    {
      id: "5",
      question: "Qual é a função do método 'addEventListener' em JavaScript?",
      options: [
        "A. Criar um novo evento",
        "B. Remover um evento de um elemento",
        "C. Alterar um evento existente",
        "D. Adicionar um evento a um elemento",
      ],
      correctAnswer: "D",
      selectedOption: null,
    },
    {
      id: "6",
      question: "Qual é a forma correta de declarar uma variável em JavaScript?",
      options: [
        "A. variable nome;",
        "B. declare nome;",
        "C. var nome;",
        "D. v nome;",
      ],
      correctAnswer: "C",
      selectedOption: null,
    },
    {
      id: "7",
      question: "Qual tag HTML é usada para incluir um script JavaScript?",
      options: ["A. <javascript>", "B. <code>", "C. <script>", "D. <js>"],
      correctAnswer: "C",
      selectedOption: null,
    },
    {
      id: "8",
      question:
        "Qual é o método JavaScript usado para converter uma string em um número?",
      options: ["A. Number()", "B. toString()", "C. convertToNumber()", "D. parseInt()"],
      correctAnswer: "D",
      selectedOption: null,
    },
    {
      id: "9",
      question: "O que faz a propriedade CSS 'display: none;'?",
      options: [
        "A. Exibe o elemento",
        "B. Muda a cor do elemento",
        "C. Muda o tamanho do elemento",
        "D. Esconde o elemento",
      ],
      correctAnswer: "D",
      selectedOption: null,
    },
    {
      id: "10",
      question: "Qual é a estrutura correta de um documento HTML5?",
      options: [
        "A. <html><head></head><body></body></html>",
        "B. <!DOCTYPE html><html><head></head><body></body></html>",
        "C. <doctype html><html></html>",
        "D. <html><body></body></html>",
      ],
      correctAnswer: "B",
      selectedOption: null,
    },
  ]);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para o modal

  // Função para selecionar uma resposta
  const selectOption = (questionId, option) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedOption: option } : q
      )
    );
  };

  const checkAnswers = async () => {
    const unansweredQuestions = questions.filter((q) => !q.selectedOption);
    if (unansweredQuestions.length > 0) {
      setShowModal(true); // Exibir modal se houver perguntas sem respostas
      return;
    }

    const answers = questions.map((q) => q.selectedOption);
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/check-answers", { answers });
      console.log("Resposta da API:", response.data); // Exibe o resultado da requisição no console
      setResult(response.data);
    } catch (error) {
      console.error("Erro ao verificar respostas:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      <View style={styles.optionsContainer}>
        {item.options.map((option) => {
          const [letter, meaning] = option.split(". ");
          const isSelected = item.selectedOption === letter;
          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                isSelected && styles.selectedOption,
              ]}
              onPress={() => selectOption(item.id, letter)}
            >
              <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
                {letter}
              </Text>
              <Text style={[styles.optionMeaning, isSelected && styles.selectedOptionMeaning]}>
                ({meaning})
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
  
  

  return (
    <ScreenComponent style={styles.screen}>
<View style={styles.header}>
          {/* <Text style={styles.headerText}>Meus Cursos</Text> */}
          {/* <MenuHamburguer /> */}
        </View>
            <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />

    <TouchableOpacity style={styles.button} onPress={checkAnswers}>
      <Text style={styles.buttonText}>Verificar Respostas</Text>
    </TouchableOpacity>

    {loading && <ActivityIndicator size="large" color="#0000ff" />}
    {result && (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Respostas corretas: {result.correctCount} de {questions.length}
        </Text>
        <Text style={styles.resultText}>
          Porcentagem: {result.percentage.toFixed(2)}%
        </Text>
      </View>
    )}

    {/* Modal para perguntas em aberto */}
    <Modal
      visible={showModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Há perguntas em aberto! Responda todas antes de verificar.
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </ScreenComponent>
);
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  optionMeaning: {
    fontSize: 12,
    color: "#333",
    marginLeft: 5,
  },
  selectedOption: {
    backgroundColor: "#4CAF50", // Cor do botão ao ser selecionado
    borderWidth: 2,
    borderColor: "#388E3C",
  },
  selectedOptionText: {
    color: "#fff", // Texto em branco quando selecionado
    fontWeight: "bold",
  },
  selectedOptionMeaning: {
    color: "#fff", // Descrição também fica em branco quando selecionado
  },
  
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "rgba(149, 43, 149, 0.2)", // Mesma cor de fundo
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    flex: 1, // Isso ajuda a centralizar o título
  },
  listContainer: {
    paddingBottom: 20,
  },
  questionContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
  },
});
