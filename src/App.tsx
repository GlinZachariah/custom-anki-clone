import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TopicProvider } from './contexts/TopicContext';
import LearnPage from './components/LearnPage';
import TopicApp from './components/TopicApp';
import './App.css';

const App: React.FC = () => {
  return (
    <TopicProvider>
      <Router>
        <Routes>
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/topics/:topicName" element={<TopicApp />} />
          <Route path="/" element={<Navigate to="/learn" replace />} />
          <Route path="*" element={<Navigate to="/learn" replace />} />
        </Routes>
      </Router>
    </TopicProvider>
  );
};

export default App;