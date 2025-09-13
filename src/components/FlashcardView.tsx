import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import { flashcards, categoryData } from '../data';
import Flashcard from './Flashcard';

interface FlashcardViewProps {
  category: Category;
  onBack: () => void;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ category, onBack }) => {
  const categoryFlashcards = useMemo(
    () => flashcards.filter(card => card.category === category),
    [category]
  );

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  const handleNext = () => {
    if (currentCardIndex < categoryFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setCardFlipped(false); // Reset card to show question
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setCardFlipped(false); // Reset card to show question
    }
  };

  const handleCardSelect = (index: number) => {
    setCurrentCardIndex(index);
    setCardFlipped(false); // Reset card to show question
  };

  if (categoryFlashcards.length === 0) {
    return (
      <div className="flashcard-view">
        <div className="view-header">
          <h2>No flashcards available for {categoryData[category].name}</h2>
          <button className="back-button" onClick={onBack}>
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

  const currentCard = categoryFlashcards[currentCardIndex];

  return (
    <div className="flashcard-view">
      <div className="view-header">
        <h2>
          {categoryData[category].name} - Flashcards
        </h2>
        <div className="progress-info">
          Card {currentCardIndex + 1} of {categoryFlashcards.length}
        </div>
      </div>

      <div className="flashcard-container">
        <Flashcard 
          card={currentCard} 
          isFlipped={cardFlipped}
          onFlip={setCardFlipped}
        />
      </div>

      <div className="navigation-controls">
        <button 
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          ← Previous
        </button>
        
        <div className="card-indicators-container">
          {(() => {
            const indicatorsPerRow = 10;
            const totalCards = categoryFlashcards.length;
            const rows = [];
            
            for (let i = 0; i < totalCards; i += indicatorsPerRow) {
              const rowIndicators = categoryFlashcards.slice(i, i + indicatorsPerRow).map((_, localIndex) => {
                const globalIndex = i + localIndex;
                return (
                  <button
                    key={globalIndex}
                    className={`indicator ${globalIndex === currentCardIndex ? 'active' : ''}`}
                    onClick={() => handleCardSelect(globalIndex)}
                  >
                    {globalIndex + 1}
                  </button>
                );
              });
              
              rows.push(
                <div key={i} className="card-indicators-row">
                  {rowIndicators}
                </div>
              );
            }
            
            return rows;
          })()}
        </div>
        
        <button 
          className="nav-button"
          onClick={handleNext}
          disabled={currentCardIndex === categoryFlashcards.length - 1}
        >
          Next →
        </button>
      </div>

      <div className="view-actions">
        <button className="secondary-button" onClick={onBack}>
          Back to Categories
        </button>
        <button 
          className="primary-button"
          onClick={() => {
            setCurrentCardIndex(0);
            setCardFlipped(false); // Reset card to show question
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default FlashcardView;