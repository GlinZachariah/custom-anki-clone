import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopicProvider } from './contexts/TopicContext';
import LearnPage from './components/LearnPage';
import TopicApp from './components/TopicApp';
import './App.css';

const App: React.FC = () => {
  return (
    <TopicProvider>
      <Router basename="/custom-anki-clone">
        <Routes>
          <Route path="/" element={<LearnPage />} />
          <Route path="/topics/:topicName" element={<TopicApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </TopicProvider>
  );
};

export default App;