import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTopicContext } from '../contexts/TopicContext';
import { Category, CategoryData, Flashcard, QuizQuestion } from '../types';
import { getTopicData } from '../utils/dataLoader';
import CategorySelector from './CategorySelector';
import FlashcardView from './FlashcardView';
import QuizView from './QuizView';

const TopicApp: React.FC = () => {
  const { topicName } = useParams<{ topicName: string }>();
  const navigate = useNavigate();
  const { setCurrentTopic } = useTopicContext();

  const [currentView, setCurrentView] = useState<'categories' | 'flashcards' | 'quiz'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<Category>('basics');
  const [topicData, setTopicData] = useState<{
    categoryData: Record<Category, CategoryData>;
    flashcards: Flashcard[];
    quizQuestions: QuizQuestion[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topicName) {
      setCurrentTopic(topicName);
    }
  }, [topicName, setCurrentTopic]);

  // Support React, Java, Spring, and API topics
  useEffect(() => {
    if (topicName && !['react', 'java', 'spring', 'api'].includes(topicName)) {
      navigate('/learn');
      return;
    }
  }, [topicName, navigate]);

  // Load topic data
  useEffect(() => {
    const loadData = async () => {
      if (!topicName) return;

      try {
        setLoading(true);
        const data = await getTopicData(topicName);
        setTopicData(data);
      } catch (error) {
        console.error('Failed to load topic data:', error);
        navigate('/learn');
      } finally {
        setLoading(false);
      }
    };

    loadData();
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
        {loading ? (
          <div className="loading-container">
            <h2>Loading {getTopicDisplayName(topicName)} content...</h2>
          </div>
        ) : topicData ? (
          <>
            {currentView === 'categories' && (
              <CategorySelector
                onCategorySelect={handleCategorySelect}
                onViewChange={handleViewChange}
                selectedCategory={selectedCategory}
                categoryData={topicData.categoryData}
                topicName={topicName}
              />
            )}

            {currentView === 'flashcards' && (
              <FlashcardView
                category={selectedCategory}
                onBack={handleBackToCategories}
                flashcards={topicData.flashcards}
                categoryData={topicData.categoryData}
              />
            )}

            {currentView === 'quiz' && (
              <QuizView
                category={selectedCategory}
                onBack={handleBackToCategories}
                quizQuestions={topicData.quizQuestions}
                categoryData={topicData.categoryData}
              />
            )}
          </>
        ) : (
          <div className="error-container">
            <h2>Failed to load topic data</h2>
            <button onClick={handleExitToLearn}>Back to Topics</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default TopicApp;