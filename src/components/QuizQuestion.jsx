function QuizQuestion({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  onAnswerSelect, 
  onNext, 
  showResult 
}) {
  return (
    <div className="question-container">
      <div className="question-text">
        <span className="question-number">{questionNumber}/{totalQuestions}</span> {question.question}
      </div>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option ${
              selectedAnswer === index ? 'selected' : ''
            } ${
              showResult && index === question.correctAnswer ? 'correct' : ''
            } ${
              showResult && selectedAnswer === index && selectedAnswer !== question.correctAnswer 
                ? 'incorrect' 
                : ''
            }`}
            onClick={() => onAnswerSelect(index)}
            disabled={showResult}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="button-group">
        <button
          className="btn-next"
          onClick={onNext}
          disabled={selectedAnswer === null || showResult}
        >
          {showResult ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default QuizQuestion
