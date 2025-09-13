import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTopicContext } from '../contexts/TopicContext';
import { Category } from '../types';
import CategorySelector from './CategorySelector';
import FlashcardView from './FlashcardView';
import QuizView from './QuizView';

const TopicApp: React.FC = () => {
  const { topicName } = useParams<{ topicName: string }>();
  const navigate = useNavigate();
  const { setCurrentTopic } = useTopicContext();

  const [currentView, setCurrentView] = useState<'categories' | 'flashcards' | 'quiz'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<Category>('basics');

  useEffect(() => {
    if (topicName) {
      setCurrentTopic(topicName);
    }
  }, [topicName, setCurrentTopic]);

  // Only support React for now
  useEffect(() => {
    if (topicName && topicName !== 'react') {
      navigate('/learn');
      return;
    }
  }, [topicName, navigate]);

  const handleBackToCategories = () => {
    setCurrentView('categories');
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleViewChange = (view: 'flashcards' | 'quiz') => {
    setCurrentView(view);
  };

  const handleExitToLearn = () => {
    navigate('/learn');
  };

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

  if (!topicName) {
    return (
      <div className="error-page">
        <h2>Topic not found</h2>
        <button onClick={() => navigate('/learn')}>Back to Learn</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>{getTopicDisplayName(topicName)} Anki Flashcards</h1>
          <button className="exit-button" onClick={handleExitToLearn} title="Back to Topics">
            ✕
          </button>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'categories' && (
          <CategorySelector
            onCategorySelect={handleCategorySelect}
            onViewChange={handleViewChange}
            selectedCategory={selectedCategory}
          />
        )}

        {currentView === 'flashcards' && (
          <FlashcardView
            category={selectedCategory}
            onBack={handleBackToCategories}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            category={selectedCategory}
            onBack={handleBackToCategories}
          />
        )}
      </main>
    </div>
  );
};

export default TopicApp;