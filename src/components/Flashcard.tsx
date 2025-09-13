import React from 'react';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped?: boolean;
  onFlip?: (flipped: boolean) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ 
  card, 
  isFlipped = false, 
  onFlip 
}) => {
  const handleFlip = () => {
    if (onFlip) {
      onFlip(!isFlipped);
    }
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
      <div className="flashcard-inner" onClick={handleFlip}>
        <div className="flashcard-front">
          <div className="card-content">
            <h3>Question</h3>
            <p>{card.question}</p>
            <div className="flip-hint">
              Click to reveal answer
            </div>
          </div>
        </div>
        
        <div className="flashcard-back">
          <div className="card-content">
            <h3>Answer</h3>
            <p>{card.answer}</p>
            <div className="flip-hint">
              Click to see question
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-controls">
        <button 
          className="flip-button"
          onClick={handleFlip}
        >
          {isFlipped ? 'Show Question' : 'Show Answer'}
        </button>
      </div>
    </div>
  );
};

export default Flashcard;