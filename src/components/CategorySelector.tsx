import React from 'react';
import { Category } from '../types';
import { categoryData } from '../topics/react/data';

interface CategorySelectorProps {
  onCategorySelect: (category: Category) => void;
  onViewChange: (view: 'flashcards' | 'quiz') => void;
  selectedCategory: Category;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategorySelect,
  onViewChange,
  selectedCategory
}) => {
  const categories: Category[] = ['basics', 'intermediate', 'expert'];

  return (
    <div className="category-selector">
      <div className="welcome-section">
        <h2>Welcome to React Learning!</h2>
        <p>Master React fundamentals with interactive flashcards and quizzes</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const data = categoryData[category];
          return (
            <div
              key={category}
              className={`category-card ${selectedCategory === category ? 'selected' : ''}`}
              style={{ borderColor: data.color }}
              onClick={() => onCategorySelect(category)}
            >
              <div className="category-header" style={{ backgroundColor: data.color }}>
                <h3>{data.name}</h3>
              </div>
              <div className="category-content">
                <p>{data.description}</p>
                <div className="category-actions">
                  <button
                    className="action-button flashcard-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCategorySelect(category);
                      onViewChange('flashcards');
                    }}
                  >
                    📚 Study Flashcards
                  </button>
                  <button
                    className="action-button quiz-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCategorySelect(category);
                      onViewChange('quiz');
                    }}
                  >
                    🎯 Take Quiz
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="selected-category-info">
        <h3>Selected: {categoryData[selectedCategory].name}</h3>
        <p>{categoryData[selectedCategory].description}</p>
        <div className="quick-actions">
          <button
            className="primary-button"
            onClick={() => onViewChange('flashcards')}
          >
            Start Flashcards
          </button>
          <button
            className="secondary-button"
            onClick={() => onViewChange('quiz')}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;