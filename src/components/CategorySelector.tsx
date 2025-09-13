import React from 'react';
import { Category, CategoryData } from '../types';

interface CategorySelectorProps {
  onCategorySelect: (category: Category) => void;
  onViewChange: (view: 'flashcards' | 'quiz') => void;
  selectedCategory: Category;
  categoryData: Record<Category, CategoryData>;
  topicName: string;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategorySelect,
  onViewChange,
  selectedCategory,
  categoryData,
  topicName
}) => {
  const categories: Category[] = ['basics', 'intermediate', 'expert'];

  const getTopicDisplayName = (topic: string): string => {
    const topicNames: { [key: string]: string } = {
      react: 'React',
      java: 'Java',
      spring: 'Spring',
      api: 'API',
      sql: 'SQL',
      kubernetes: 'Kubernetes',
      kafka: 'Kafka',
    };
    return topicNames[topic] || topic;
  };

  return (
    <div className="category-selector">
      <div className="welcome-section">
        <h2>Welcome to {getTopicDisplayName(topicName)} Learning!</h2>
        <p>Master {getTopicDisplayName(topicName)} fundamentals with interactive flashcards and quizzes</p>
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