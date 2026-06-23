function QuizResults({ score, totalQuestions, onRestart, answers }) {
  const percentage = (score / totalQuestions) * 100

  const getMessage = () => {
    if (percentage === 100) {
      return { text: 'Perfect Score! 🎉', className: 'message-excellent' }
    } else if (percentage >= 80) {
      return { text: 'Excellent! 🌟', className: 'message-excellent' }
    } else if (percentage >= 60) {
      return { text: 'Good Job! 👍', className: 'message-good' }
    } else {
      return { text: 'Keep Learning! 📚', className: 'message-fair' }
    }
  }

  const message = getMessage()

  return (
    <div className="quiz-container">
      <div className="results-container">
        <h2>Quiz Completed!</h2>
        
        <div className={`result-message ${message.className}`}>
          {message.text}
        </div>

        <div className="score">
          {score}/{totalQuestions}
        </div>

        <div className="score-text">
          Your Score: {percentage.toFixed(1)}%
        </div>

        <div className="result-details">
          <div className="result-detail-item">
            <span className="detail-label">Correct Answers:</span>
            <span className="detail-value">{score}</span>
          </div>
          <div className="result-detail-item">
            <span className="detail-label">Wrong Answers:</span>
            <span className="detail-value">{totalQuestions - score}</span>
          </div>
          <div className="result-detail-item">
            <span className="detail-label">Accuracy:</span>
            <span className="detail-value">{percentage.toFixed(1)}%</span>
          </div>
        </div>

        <button className="btn-restart" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  )
}

export default QuizResults
