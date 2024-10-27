import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const questions = [
  {
    question: "Qual filósofo romano é conhecido por suas reflexões sobre a vida e a ética estoica?",
    options: ["Platão", "Marco", "Sêneca", "Epicuro"],
    answer: "Marco"
  },
  {
    question: "Qual pensador apresenta um conceito sobre o 'além do homem' como uma meta de superação?",
    options: ["Kant", "Nietzsche", "Descartes", "Hegel"],
    answer: "Nietzsche"
  },
  {
    question: "Qual autor argumenta que a vida é fundamentalmente marcada pelo sofrimento?",
    options: ["Hume", "Schopenhauer", "Rousseau", "Voltaire"],
    answer: "Schopenhauer"
  },
  {
    question: "Quem propôs a ideia de que a autocompreensão é essencial para o crescimento pessoal?",
    options: ["Aristóteles", "Sócrates", "Epicuro", "Stoicos"],
    answer: "Sócrates"
  },
  {
    question: "Qual filósofo existencialista discute a liberdade e a responsabilidade do indivíduo?",
    options: ["Hegel", "Sartre", "Foucault", "Camus"],
    answer: "Sartre"
  },
  {
    question: "Qual autor explora a política e a natureza do poder, enfatizando a necessidade de pragmatismo?",
    options: ["Platão", "Maquiavel", "Hobbes", "Rousseau"],
    answer: "Maquiavel"
  },
  {
    question: "Qual obra filosófica clássica aborda a ideia de justiça em uma sociedade ideal?",
    options: ["A Moral", "A Política", "A Sociedade", "A Justiça"],
    answer: "A Justiça"
  },
  {
    question: "Qual narrativa existencial foca na alienação e no sentimento de desconexão do protagonista?",
    options: ["O Processo", "O Estrangeiro", "O Falcão", "A Metamorfose"],
    answer: "O Estrangeiro"
  },
  {
    question: "Qual filósofo discute a indiferença do indivíduo diante da vida?",
    options: ["Nietzsche", "Sartre", "Camus", "Kierkegaard"],
    answer: "Camus"
  },
  {
    question: "Qual ideia central crítica a moralidade convencional e promove uma nova ética?",
    options: ["O altruísmo", "O niilismo", "O egoísmo", "O humanismo"],
    answer: "O niilismo"
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleOptionPress = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("Correto!");
      setCorrectAnswer("");
    } else {
      setFeedback("Errado! A resposta correta era: " + questions[currentQuestion].answer);
      setCorrectAnswer(questions[currentQuestion].answer);
    }
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setFeedback("");
    setCorrectAnswer("");
  };

  return (
    <View style={styles.container}>
      {!quizFinished ? (
        <>
          <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
          {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Pontuação: {score} de {questions.length}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Reiniciar Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45b1f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  question: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#45b1f5',
  },
  feedback: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  restartButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
});