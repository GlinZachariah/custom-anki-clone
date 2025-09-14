import React from 'react';

interface QuizSummaryModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onExit: () => void;
  onClose: () => void;
}

const QuizSummaryModal: React.FC<QuizSummaryModalProps> = ({
  isOpen,
  score,
  totalQuestions,
  onRetry,
  onExit,
  onClose
}) => {
  console.log('📱 QuizSummaryModal render', { isOpen, score, totalQuestions });
  if (!isOpen) {
    console.log('❌ Modal not open, returning null');
    return null;
  }
  console.log('✅ Modal is open, rendering...');

  const percentage = Math.round((score / totalQuestions) * 100);

  const getGrade = () => {
    if (percentage >= 95) return 'A+';
    if (percentage >= 90) return 'A';
    if (percentage >= 85) return 'A-';
    if (percentage >= 80) return 'B+';
    if (percentage >= 75) return 'B';
    if (percentage >= 70) return 'B-';
    if (percentage >= 65) return 'C+';
    if (percentage >= 60) return 'C';
    if (percentage >= 55) return 'C-';
    if (percentage >= 50) return 'D';
    return 'F';
  };

  const getGradeColor = () => {
    const grade = getGrade();
    if (grade.startsWith('A')) return '#4CAF50'; // Green
    if (grade.startsWith('B')) return '#2196F3'; // Blue
    if (grade.startsWith('C')) return '#FF9800'; // Orange
    if (grade.startsWith('D')) return '#FF5722'; // Deep Orange
    return '#F44336'; // Red for F
  };

  const getEncouragementMessage = () => {
    if (percentage === 100) return "🎉 Perfect Score! Outstanding work!";
    if (percentage >= 90) return "🌟 Excellent! You've mastered this topic!";
    if (percentage >= 80) return "👏 Great job! You have a solid understanding!";
    if (percentage >= 70) return "👍 Good work! You're on the right track!";
    if (percentage >= 60) return "📚 Keep studying! You're making progress!";
    return "💪 Don't give up! Practice makes perfect!";
  };

  const getPerformanceIcon = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🎯";
    if (percentage >= 70) return "📈";
    if (percentage >= 60) return "📖";
    return "🔄";
  };

  return (
    <div className="quiz-summary-modal-overlay" onClick={onClose}>
      <div className="quiz-summary-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>

        <div className="modal-header">
          <div className="performance-icon">{getPerformanceIcon()}</div>
          <h2>Quiz Complete!</h2>
        </div>

        <div className="grade-section">
          <div className="grade-display" style={{ borderColor: getGradeColor() }}>
            <div className="grade-letter" style={{ color: getGradeColor() }}>
              {getGrade()}
            </div>
            <div className="grade-percentage">
              {percentage}%
            </div>
          </div>

          <div className="score-breakdown">
            <div className="score-text">
              {score} out of {totalQuestions} questions correct
            </div>
            <div className="encouragement-message">
              {getEncouragementMessage()}
            </div>
          </div>
        </div>

        <div className="performance-bar">
          <div className="performance-bar-fill"
               style={{
                 width: `${percentage}%`,
                 backgroundColor: getGradeColor()
               }}>
          </div>
          <div className="performance-bar-label">
            Performance: {percentage}%
          </div>
        </div>

        <div className="modal-actions">
          <button
            className="retry-button primary-button"
            onClick={onRetry}
          >
            🔄 Retry Quiz
          </button>
          <button
            className="exit-button secondary-button"
            onClick={onExit}
          >
            📚 Back to Topics
          </button>
        </div>

        <div className="modal-footer">
          <p>Great job on completing the quiz! Choose your next step above.</p>
        </div>
      </div>
    </div>
  );
};

export default QuizSummaryModal;