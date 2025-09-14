import { QuizQuestion } from '../types';

export interface RandomizedQuizQuestion extends Omit<QuizQuestion, 'correctAnswer'> {
  correctAnswer: number;
  originalCorrectAnswer: number;
  randomizedOptions: string[];
  optionMapping: number[];
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Randomizes the order of options in a quiz question
 * @param question The original quiz question
 * @returns A randomized version of the question with updated correct answer index
 */
export const randomizeQuestionOptions = (question: QuizQuestion): RandomizedQuizQuestion => {
  // Create array of indices to track original positions
  const indices = question.options.map((_, index) => index);
  const shuffledIndices = shuffleArray(indices);

  // Create randomized options array
  const randomizedOptions = shuffledIndices.map(index => question.options[index]);

  // Find the new position of the correct answer
  const newCorrectAnswerIndex = shuffledIndices.indexOf(question.correctAnswer);

  return {
    ...question,
    options: randomizedOptions,
    correctAnswer: newCorrectAnswerIndex,
    originalCorrectAnswer: question.correctAnswer,
    randomizedOptions,
    optionMapping: shuffledIndices
  };
};

/**
 * Randomizes options for all questions in a quiz
 * @param questions Array of quiz questions
 * @returns Array of randomized quiz questions
 */
export const randomizeQuizQuestions = (questions: QuizQuestion[]): RandomizedQuizQuestion[] => {
  return questions.map(question => randomizeQuestionOptions(question));
};

/**
 * Shuffles the order of questions themselves (optional feature)
 * @param questions Array of quiz questions
 * @returns Shuffled array of quiz questions
 */
export const shuffleQuestions = <T extends QuizQuestion>(questions: T[]): T[] => {
  return shuffleArray(questions);
};