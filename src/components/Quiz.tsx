import React, { useState, useMemo, useEffect } from 'react';
import { QuizQuestion } from '../types';
import { randomizeQuizQuestions, RandomizedQuizQuestion } from '../utils/quizRandomizer';
import QuizSummaryModal from './QuizSummaryModal';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, totalQuestions: number) => void;
  onBack: () => void;
  onViewChange?: (view: 'flashcards' | 'quiz') => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete, onBack, onViewChange }) => {
  // Randomize questions once when component mounts
  const randomizedQuestions = useMemo(() => randomizeQuizQuestions(questions), [questions]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showPerfectAnimation, setShowPerfectAnimation] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showStartupPopup, setShowStartupPopup] = useState(true);
  const [showFinishPopup, setShowFinishPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(false);

  const currentQuestion = randomizedQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === randomizedQuestions.length - 1;

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
        return acc + (answer === randomizedQuestions[index].correctAnswer ? 1 : 0);
      }, 0);

      console.log('🏁 Last question completed!', {
        score,
        total: randomizedQuestions.length,
        isLastQuestion,
        currentQuestionIndex
      });

      // Show finish popup before results
      setShowFinishPopup(true);
      setTimerActive(false);

      // Show perfect score animation if they got 100%
      if (score === randomizedQuestions.length) {
        setShowPerfectAnimation(true);
        setTimeout(() => {
          setShowPerfectAnimation(false);
        }, 3000);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setFeedbackMessage('');
      setTimeLeft(10);
    }
  };

  const handleShowResult = () => {
    setShowResult(!showResult);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return acc + (answer === randomizedQuestions[index].correctAnswer ? 1 : 0);
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
    return Math.round((calculateScore() / randomizedQuestions.length) * 100);
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
    setShowSummaryModal(false);
    setShowStartupPopup(true);
    setShowFinishPopup(false);
    setTimeLeft(10);
    setTimerActive(false);
  };

  const handleModalRetry = () => {
    handleResetQuiz();
  };

  const handleModalExit = () => {
    setShowSummaryModal(false);
    onBack();
  };

  const handleModalClose = () => {
    setShowSummaryModal(false);
  };

  const handleDismissAnimation = () => {
    setShowPerfectAnimation(false);
  };

  const handleStartQuiz = () => {
    setShowStartupPopup(false);
    setTimerActive(true);
    setTimeLeft(10);
  };

  const handleShowResults = () => {
    setShowFinishPopup(false);
    setQuizCompleted(true);
    setShowSummaryModal(true);

    // Now call onComplete after showing results
    const finalScore = answers.reduce((acc, answer, index) => {
      return acc + (answer === randomizedQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
    onComplete(finalScore, randomizedQuestions.length);
  };

  const handleTimeoutAnswer = () => {
    // Handle timeout - mark as incorrect (-1) and move to next
    const newAnswers = [...answers, -1]; // -1 indicates timeout/no answer
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const score = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === randomizedQuestions[index].correctAnswer ? 1 : 0);
      }, 0);

      setShowFinishPopup(true);
      setTimerActive(false);

      if (score === randomizedQuestions.length) {
        setShowPerfectAnimation(true);
        setTimeout(() => {
          setShowPerfectAnimation(false);
        }, 3000);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setFeedbackMessage('');
      setTimeLeft(10);
    }
  };

  // Timer effect
  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (timerActive && timeLeft === 0 && !showFeedback) {
      handleTimeoutAnswer();
    }
  }, [timerActive, timeLeft, showFeedback]);

  // Keyboard event handler for navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle keyboard events when quiz is active (not completed)
      if (quizCompleted) return;

      if (event.code === 'Space') {
        event.preventDefault();
        // Only proceed if an answer is selected (button is enabled)
        if (selectedAnswer !== null) {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedAnswer, quizCompleted]);

  // Show startup popup before first question
  if (showStartupPopup) {
    return (
      <div className="startup-popup-overlay">
        <div className="startup-popup">
          <h2>🎯 Ready to Start Quiz?</h2>
          <div className="popup-content">
            <p>You're about to begin the quiz with <strong>{randomizedQuestions.length}</strong> questions.</p>

            <div className="popup-features">
              <h3>⏰ Timer Challenge</h3>
              <ul>
                <li>⏱️ Each question has a 10-second timer</li>
                <li>🚀 Answer quickly or the question will be marked incorrect</li>
                <li>✨ Immediate feedback after each answer</li>
                <li>📊 Progress tracking throughout</li>
                <li>⌨️ Keyboard shortcuts available (Space = Next)</li>
              </ul>
            </div>

            <div className="quiz-actions">
              <button className="primary-button" onClick={handleStartQuiz}>
                🚀 Start Timed Quiz
              </button>
              <button className="secondary-button" onClick={onBack}>
                ← Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show finish popup before quiz results
  if (showFinishPopup) {
    const finalScore = answers.reduce((acc, answer, index) => {
      return acc + (answer === randomizedQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
    const percentage = Math.round((finalScore / randomizedQuestions.length) * 100);

    return (
      <div className="startup-popup-overlay">
        <div className="startup-popup">
          <h2>🎉 Quiz Completed!</h2>
          <div className="popup-content">
            <p>Great job! You've completed the timed quiz with all <strong>{randomizedQuestions.length}</strong> questions.</p>

            <div className="popup-features">
              <div className="score-preview">
                <h3>📊 Your Final Score</h3>
                <div className="score-stats">
                  <div className="stat-item">
                    <span className="stat-value">{finalScore}/{randomizedQuestions.length}</span>
                    <span className="stat-label">Correct Answers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{percentage}%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                </div>
                <p className="score-message-preview">{percentage === 100 ? "Perfect! 🌟" : percentage >= 90 ? "Excellent! 🎉" : percentage >= 70 ? "Good job! 👍" : percentage >= 50 ? "Not bad! 👌" : "Keep practicing! 📚"}</p>
              </div>
            </div>

            <div className="quiz-actions">
              <button className="primary-button" onClick={handleShowResults}>
                📋 View Detailed Results
              </button>
              <button className="secondary-button" onClick={handleResetQuiz}>
                🔄 Retry Quiz
              </button>
              <button
                className="secondary-button"
                onClick={() => onViewChange ? onViewChange('flashcards') : onBack()}
              >
                📚 Study Again (Flashcards)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const isPerfectScore = getScorePercentage() === 100;
    console.log('🎯 Quiz completed - rendering completion screen', {
      quizCompleted,
      showSummaryModal,
      isPerfectScore,
      score: calculateScore(),
      total: randomizedQuestions.length
    });

    // For now, just show the modal immediately
    return (
      <QuizSummaryModal
        isOpen={true}
        score={calculateScore()}
        totalQuestions={randomizedQuestions.length}
        onRetry={handleModalRetry}
        onExit={handleModalExit}
        onClose={handleModalClose}
      />
    );

    /* Old complex structure - keeping commented for reference
    return (
      <>
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
              You answered {calculateScore()} out of {randomizedQuestions.length} questions correctly
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
              {randomizedQuestions.map((question, index) => {
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

        <QuizSummaryModal
          isOpen={showSummaryModal}
          score={calculateScore()}
          totalQuestions={randomizedQuestions.length}
          onRetry={handleModalRetry}
          onExit={handleModalExit}
          onClose={handleModalClose}
        />
      </>
    );
    */
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestionIndex + 1) / randomizedQuestions.length) * 100}%` }}
          />
        </div>
        <div className="progress-info">
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {randomizedQuestions.length}
          </span>
          {timerActive && (
            <div className={`timer-display ${timeLeft <= 3 ? 'timer-warning' : ''}`}>
              <span className="timer-icon">⏱️</span>
              <span className="timer-text">{timeLeft}s</span>
            </div>
          )}
          {answers.length > 0 && (
            <span className="current-score">
              Current Score: {getCurrentScore()}/{answers.length} ({getCurrentScorePercentage()}%)
            </span>
          )}
          <div className="keyboard-hints">
            <small>⌨️ Space: Next Question (when answer selected) | ⏰ {timeLeft}s remaining</small>
          </div>
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
          title={selectedAnswer === null ? 'Select an answer first' : 'Next question (Space)'}
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;