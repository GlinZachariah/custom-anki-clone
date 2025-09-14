import React, { useState, useMemo } from 'react';
import { Category, QuizQuestion, CategoryData } from '../types';
import Quiz from './Quiz';

interface QuizViewProps {
  category: Category;
  onBack: () => void;
  quizQuestions: QuizQuestion[];
  categoryData: Record<Category, CategoryData>;
  onViewChange?: (view: 'flashcards' | 'quiz') => void;
}

const QuizView: React.FC<QuizViewProps> = ({ category, onBack, quizQuestions, categoryData, onViewChange }) => {
  const categoryQuestions = useMemo(
    () => quizQuestions.filter(question => question.category === category),
    [quizQuestions, category]
  );

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    // Quiz completed - could add any completion logic here if needed
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

  return (
    <div className="quiz-view">
      <div className="view-header">
        <h2>{categoryData[category].name} - Quiz</h2>
      </div>
      
      <Quiz
        questions={categoryQuestions}
        onComplete={handleQuizComplete}
        onBack={onBack}
        onViewChange={onViewChange}
        categoryName={categoryData[category].name}
        categoryDescription={categoryData[category].description}
      />
    </div>
  );
};

export default QuizView;