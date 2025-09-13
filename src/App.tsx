import React, { useState } from 'react';
import { Category } from './types';
import FlashcardView from './components/FlashcardView';
import QuizView from './components/QuizView';
import CategorySelector from './components/CategorySelector';
import './App.css';

type ViewMode = 'home' | 'flashcards' | 'quiz';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('basics');

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Anki Flashcards</h1>
        {currentView !== 'home' && (
          <button className="back-button" onClick={handleBackToHome}>
            ← Back to Home
          </button>
        )}
      </header>

      <main className="app-main">
        {currentView === 'home' && (
          <CategorySelector
            onCategorySelect={handleCategorySelect}
            onViewChange={handleViewChange}
            selectedCategory={selectedCategory}
          />
        )}

        {currentView === 'flashcards' && (
          <FlashcardView
            category={selectedCategory}
            onBack={handleBackToHome}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            category={selectedCategory}
            onBack={handleBackToHome}
          />
        )}
      </main>
    </div>
  );
};

export default App;