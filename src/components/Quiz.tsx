import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPerfectAnimation, setShowPerfectAnimation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Show immediate feedback
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setFeedbackMessage('Correct! 🎉');
    } else {
      setFeedbackMessage(`Incorrect. The correct answer is: ${currentQuestion.options[currentQuestion.correctAnswer]}`);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      setQuizCompleted(true);
      // Show perfect score animation if they got 100%
      if (score === questions.length) {
        setShowPerfectAnimation(true);
        // Auto-hide animation after 3 seconds
        setTimeout(() => {
          setShowPerfectAnimation(false);
        }, 3000);
      }
      onComplete(score, questions.length);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setFeedbackMessage('');
    }
  };

  const handleShowResult = () => {
    setShowResult(!showResult);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getCurrentScore = () => {
    return calculateScore();
  };

  const getCurrentScorePercentage = () => {
    if (answers.length === 0) return 0;
    return Math.round((getCurrentScore() / answers.length) * 100);
  };

  const getScorePercentage = () => {
    return Math.round((calculateScore() / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage === 100) return "Perfect! Congratulations! 🌟";
    if (percentage >= 90) return "Excellent! 🎉";
    if (percentage >= 70) return "Good job! 👍";
    if (percentage >= 50) return "Not bad! 👌";
    return "Keep practicing! 📚";
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
    setShowFeedback(false);
    setFeedbackMessage('');
    setIsCorrect(false);
    setShowPerfectAnimation(false);
  };

  const handleDismissAnimation = () => {
    setShowPerfectAnimation(false);
  };

  if (quizCompleted) {
    const isPerfectScore = getScorePercentage() === 100;
    
    return (
      <div className="quiz-completed">
        {isPerfectScore && showPerfectAnimation && (
          <div className="perfect-score-animation" onClick={handleDismissAnimation}>
            <div className="stars-container">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`star star-${i + 1}`}>⭐</div>
              ))}
            </div>
            <div className="perfect-message">🎉 CONGRATULATIONS! 🎉</div>
            <div className="perfect-subtitle">You got 100%!</div>
            <div className="dismiss-hint">Click anywhere to continue</div>
          </div>
        )}
        
        <div className="quiz-results">
          <h2>Quiz Results</h2>
          <div className="score-display">
            <div className={`score-circle ${isPerfectScore ? 'perfect' : ''}`}>
              <span className="score-number">{getScorePercentage()}%</span>
            </div>
            <p className="score-message">{getScoreMessage()}</p>
            <p className="score-details">
              You answered {calculateScore()} out of {questions.length} questions correctly
            </p>
          </div>

          <div className="quiz-actions">
            <button className="primary-button" onClick={handleResetQuiz}>
              Try Again
            </button>
            <button className="secondary-button" onClick={handleShowResult}>
              {showResult ? 'Hide Details' : 'Show Details'}
            </button>
            <button className="secondary-button" onClick={onBack}>
              ← Back to Categories
            </button>
          </div>

          {showResult && (
            <div className="detailed-results">
              <h3>Detailed Results</h3>
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="result-header">
                      <span className="question-number">Q{index + 1}</span>
                      <span className={`result-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>
                    <p className="result-question">{question.question}</p>
                    <div className="result-answers">
                      <p className="user-answer">
                        Your answer: {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="correct-answer">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="progress-info">
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          {answers.length > 0 && (
            <span className="current-score">
              Current Score: {getCurrentScore()}/{answers.length} ({getCurrentScorePercentage()}%)
            </span>
          )}
        </div>
      </div>

      <div className="quiz-question">
        <h3>{currentQuestion.question}</h3>
        
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'quiz-option';
            
            if (showFeedback && selectedAnswer !== null) {
              if (index === currentQuestion.correctAnswer) {
                optionClass += ' correct';
              } else if (index === selectedAnswer && !isCorrect) {
                optionClass += ' incorrect';
              }
            } else if (selectedAnswer === index) {
              optionClass += ' selected';
            }
            
            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showFeedback && index === currentQuestion.correctAnswer && (
                  <span className="correct-indicator">✓</span>
                )}
                {showFeedback && index === selectedAnswer && !isCorrect && (
                  <span className="incorrect-indicator">✗</span>
                )}
              </button>
            );
          })}
        </div>
        
        {showFeedback && (
          <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            <p>{feedbackMessage}</p>
          </div>
        )}
      </div>

      <div className="quiz-controls">
        <button className="secondary-button" onClick={onBack}>
          ← Back to Categories
        </button>
        <button 
          className="primary-button"
          onClick={handleNext}
          disabled={selectedAnswer === null}
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;