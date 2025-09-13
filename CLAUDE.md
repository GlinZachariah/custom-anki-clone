# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Anki Flashcards application built with TypeScript. The app allows users to study React concepts through flashcards and quizzes across three difficulty categories: basics, intermediate, and expert.

## Development Commands

- `npm start` - Start the development server
- `npm run build` - Build the production app
- `npm test` - Run tests with Jest
- `npm run eject` - Eject from Create React App (use with caution)

## Architecture

The application follows a component-based React architecture:

- **App.tsx**: Main application component that manages routing between three views (home, flashcards, quiz)
- **types.ts**: Core TypeScript interfaces including `Flashcard`, `QuizQuestion`, `Category`, and `CategoryData`
- **data.ts**: Contains flashcard and quiz question data, organized by category
- **components/**: Reusable UI components
  - `CategorySelector`: Home screen for selecting categories and view modes
  - `FlashcardView`: Flashcard study interface
  - `QuizView`: Quiz interface with multiple choice questions
  - `Flashcard`: Individual flashcard component with flip animation
  - `Quiz`: Quiz logic and question rendering

## Key Patterns

- State management uses React hooks (useState) at the App level
- Category data is centralized in `data.ts` with type-safe category definitions
- Components receive props for navigation callbacks (`onBack`, `onViewChange`)
- CSS styling is component-based with a main `App.css` file

## Technology Stack

- React 18 with TypeScript
- Create React App setup
- Jest for testing
- ESLint with react-app configuration

## Development Workflow

**IMPORTANT**: After completing any code changes or new features, always commit the changes to git. This ensures proper version control and tracking of all modifications. Use descriptive commit messages that explain what was changed and why.