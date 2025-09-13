import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TopicContextType {
  currentTopic: string | null;
  setCurrentTopic: (topic: string | null) => void;
}

const TopicContext = createContext<TopicContextType | undefined>(undefined);

export const useTopicContext = (): TopicContextType => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopicContext must be used within a TopicProvider');
  }
  return context;
};

interface TopicProviderProps {
  children: ReactNode;
}

export const TopicProvider: React.FC<TopicProviderProps> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState<string | null>(null);

  const value: TopicContextType = {
    currentTopic,
    setCurrentTopic,
  };

  return (
    <TopicContext.Provider value={value}>
      {children}
    </TopicContext.Provider>
  );
};