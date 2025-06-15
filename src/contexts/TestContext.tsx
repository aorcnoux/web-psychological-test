
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Answer {
  questionId: number;
  selectedOption: number;
}

interface TestContextType {
  answers: Answer[];
  setAnswer: (questionId: number, selectedOption: number) => void;
  getAnswer: (questionId: number) => number | null;
  resetTest: () => void;
  totalQuestions: number;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const totalQuestions = 10;

  const setAnswer = (questionId: number, selectedOption: number) => {
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => 
          a.questionId === questionId 
            ? { ...a, selectedOption }
            : a
        );
      }
      return [...prev, { questionId, selectedOption }];
    });
  };

  const getAnswer = (questionId: number): number | null => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer ? answer.selectedOption : null;
  };

  const resetTest = () => {
    setAnswers([]);
  };

  return (
    <TestContext.Provider value={{
      answers,
      setAnswer,
      getAnswer,
      resetTest,
      totalQuestions
    }}>
      {children}
    </TestContext.Provider>
  );
};
