import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Topic {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
}

const topics: Topic[] = [
  { id: 'react', name: 'React', enabled: true, description: 'Learn React fundamentals, hooks, and advanced patterns' },
  { id: 'java', name: 'Java', enabled: true, description: 'Master Java programming language and OOP concepts' },
  { id: 'spring', name: 'Spring', enabled: false, description: 'Spring Framework and Spring Boot development' },
  { id: 'api', name: 'API', enabled: false, description: 'REST APIs, GraphQL, and API design principles' },
  { id: 'sql', name: 'SQL', enabled: false, description: 'Database queries, joins, and optimization' },
  { id: 'kubernetes', name: 'Kubernetes', enabled: false, description: 'Container orchestration and K8s deployments' },
  { id: 'kafka', name: 'Kafka', enabled: false, description: 'Event streaming and message queues' },
];

const LearnPage: React.FC = () => {
  const navigate = useNavigate();

  const handleTopicClick = (topicId: string) => {
    navigate(`/topics/${topicId}`);
  };

  return (
    <div className="learn-page">
      <div className="learn-header">
        <h1>Choose Your Learning Path</h1>
        <p>Select a topic to start learning with interactive flashcards and quizzes</p>
      </div>

      <div className="topics-container">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`topic-button ${topic.enabled ? 'enabled' : 'disabled'}`}
            onClick={() => topic.enabled && handleTopicClick(topic.id)}
          >
            <div className="topic-content">
              <h3 className="topic-name">{topic.name}</h3>
              <p className="topic-description">{topic.description}</p>
              {!topic.enabled && <span className="coming-soon">Coming Soon</span>}
            </div>
            <div className="topic-arrow">
              {topic.enabled ? '→' : '🔒'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;