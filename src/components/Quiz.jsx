import { useState } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'
import { quizData } from '../data/quizData'

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [answers, setAnswers] = useState([])

  const handleAnswerSelect = (index) => {
    if (!showResult) {
      setSelectedAnswer(index)
    }
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer
    
    setAnswers([
      ...answers,
      {
        question: quizData[currentQuestion].question,
        selected: quizData[currentQuestion].options[selectedAnswer],
        correct: quizData[currentQuestion].options[quizData[currentQuestion].correctAnswer],
        isCorrect
      }
    ])

    if (isCorrect) {
      setScore(score + 1)
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizComplete(true)
      }
    }, 1500)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
    setAnswers([])
  }

  if (quizComplete) {
    return (
      <QuizResults 
        score={score} 
        totalQuestions={quizData.length}
        onRestart={handleRestart}
        answers={answers}
      />
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Master</h1>
        <p>Test Your Knowledge</p>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
        ></div>
      </div>

      <QuizQuestion
        question={quizData[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={quizData.length}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        showResult={showResult}
      />
    </div>
  )
}

export default Quiz
