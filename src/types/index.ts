export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  points: number;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  coverImage: string;
  totalLessons: number;
  duration: number;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz';
  duration: number;
  content?: string;
  practice?: PracticeExercise;
}

export interface PracticeExercise {
  title: string;
  description: string;
  initialCode: string;
  expectedOutput: string;
  hints: string[];
  solution?: string;
}

export interface CourseDetail extends Course {
  learningObjectives?: string[];
  quizQuestions?: QuizQuestion[];
  chapters: Chapter[];
}

export interface Practice {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  completed: boolean;
}

export interface PracticeDetail extends Practice {
  description: string;
  initialCode: string;
  testCases: { input: string; expectedOutput: string }[];
  hints: string[];
}

export interface Quiz {
  id: string;
  title: string;
  questionCount: number;
  duration: number;
  completed: boolean;
}

export interface QuizQuestion {
  id: string;
  type: 'choice' | 'practical';
  question: string;
  options?: (string | number)[];
  correctAnswer?: string | number;
  explanation?: string;
}

export interface QuizDetail extends Quiz {
  questions: QuizQuestion[];
}

export interface QuizResult {
  score: number;
  total: number;
  results: {
    questionId: string;
    correct: boolean;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatar?: string;
  points: number;
}

export interface UserProgress {
  completedLessons: string[];
  progress: number;
}
