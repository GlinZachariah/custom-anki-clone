import { CategoryData, Flashcard, QuizQuestion, Category } from '../types';

// Dynamic imports for topic data
export const loadTopicData = async (topic: string) => {
  switch (topic) {
    case 'react':
      return await import('../topics/react/data');
    case 'java':
      return await import('../topics/java/data');
    case 'spring':
      return await import('../topics/spring/data');
    default:
      throw new Error(`Unsupported topic: ${topic}`);
  }
};

export const getTopicData = async (topic: string): Promise<{
  categoryData: Record<Category, CategoryData>;
  flashcards: Flashcard[];
  quizQuestions: QuizQuestion[];
}> => {
  const module = await loadTopicData(topic);
  return {
    categoryData: module.categoryData,
    flashcards: module.flashcards,
    quizQuestions: module.quizQuestions,
  };
};