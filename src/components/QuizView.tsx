import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import { quizQuestions, categoryData } from '../topics/react/data';
import Quiz from './Quiz';

interface QuizViewProps {
  category: Category;
  onBack: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ category, onBack }) => {
  const categoryQuestions = useMemo(
    () => quizQuestions.filter(question => question.category === category),
    [category]
  );

  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizStarted(false);
  };

  if (categoryQuestions.length === 0) {
    return (
      <div className="quiz-view">
        <div className="view-header">
          <h2>No quiz questions available for {categoryData[category].name}</h2>
          <button className="back-button" onClick={onBack}>
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="quiz-view">
        <div className="view-header">
          <h2>{categoryData[category].name} - Quiz</h2>
        </div>

        <div className="quiz-intro">
          <div className="quiz-info-card">
            <h3>Quiz Information</h3>
            <div className="quiz-stats">
              <div className="stat">
                <span className="stat-number">{categoryQuestions.length}</span>
                <span className="stat-label">Questions</span>
              </div>
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Options each</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Correct answer</span>
              </div>
            </div>
            <p className="quiz-description">
              Test your knowledge of {categoryData[category].description.toLowerCase()} 
              with this interactive quiz. Choose the best answer for each question.
            </p>
            
            <div className="quiz-actions">
              <button className="primary-button" onClick={handleStartQuiz}>
                Start Quiz
              </button>
              <button className="secondary-button" onClick={onBack}>
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-view">
      <div className="view-header">
        <h2>{categoryData[category].name} - Quiz</h2>
      </div>
      
      <Quiz 
        questions={categoryQuestions}
        onComplete={handleQuizComplete}
        onBack={onBack}
      />
    </div>
  );
};

export default QuizView;