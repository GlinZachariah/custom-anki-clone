export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: Category;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: Category;
}

export type Category = 'basics' | 'intermediate' | 'expert';

export interface CategoryData {
  name: string;
  color: string;
  description: string;
}