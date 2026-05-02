import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mockQuizDetails, mockQuizAnswers } from '@/data/mockData';
import { useAchievementStore } from '@/store/achievementStore';
import { useAuthStore } from '@/store/authStore';
import { Clock, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

export function Quiz() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const quiz = mockQuizDetails[id || ''];
  const quizAnswers = mockQuizAnswers[id || ''];
  const { unlockAchievement, addPoints } = useAchievementStore();
  const { isAuthenticated } = useAuthStore();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [timeLeft, setTimeLeft] = useState(quiz?.duration ? quiz.duration * 60 : 600);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!quiz || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quiz, isSubmitted]);

  if (!quiz) {
    return (
      <Layout>
        <div className="min-h-screen bg-soft-bg pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-soft-text mb-4">测评不存在</h2>
            <button onClick={() => navigate(-1)} className="text-purple-500 hover:text-purple-600">
              返回测评列表
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];
  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    if (isAuthenticated) {
      unlockAchievement('first-quiz');
      addPoints(5);
      
      let correctCount = 0;
      Object.keys(answers).forEach((questionId) => {
        const answer = answers[questionId];
        const correctAnswer = quizAnswers?.[questionId]?.correctAnswer;
        if (answer === correctAnswer) {
          correctCount++;
        }
      });
      
      if (correctCount === quiz.questions.length) {
        unlockAchievement('perfect-quiz');
        addPoints(20);
      }
    }
    
    navigate(`/quiz/${id}/result`, {
      state: { answers, quizId: id },
    });
  };

  if (isSubmitted) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-soft-bg pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-soft-muted hover:text-soft-text mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            返回
          </button>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-soft-text">{quiz.title}</h1>
              <p className="text-soft-muted">
                第 {currentIndex + 1} / {quiz.questions.length} 题
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-soft">
              <Clock size={18} className={timeLeft < 60 ? 'text-red-400' : 'text-soft-muted'} />
              <span className={`font-mono text-lg ${timeLeft < 60 ? 'text-red-400' : 'text-soft-text'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="h-2 bg-white rounded-full overflow-hidden shadow-soft">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/50 p-6 sm:p-8 mb-6 shadow-soft">
            <div className="mb-6">
              <span className="text-sm text-purple-500 mb-2 block">单选题</span>
              <h2 className="text-xl text-soft-text">{currentQuestion.question}</h2>
            </div>

            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    answers[currentQuestion.id] === option
                      ? 'bg-purple-50 border-purple-400 text-soft-text'
                      : 'bg-soft-bg border-slate-200 text-soft-muted hover:border-purple-300'
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-sm mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="px-6 py-2 text-soft-muted hover:text-soft-text disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              上一题
            </button>

            {currentIndex === quiz.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
              >
                提交答案
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex(Math.min(quiz.questions.length - 1, currentIndex + 1))}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
              >
                下一题
                <ChevronRight size={18} />
              </button>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {quiz.questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-md'
                    : answers[q.id]
                    ? 'bg-green-50 text-green-600 border border-green-200'
                    : 'bg-white text-soft-muted border border-slate-200 shadow-soft'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {Object.keys(answers).length < quiz.questions.length && (
            <div className="mt-6 flex items-center gap-2 text-amber-500">
              <AlertCircle size={16} />
              <span className="text-sm">
                还有 {quiz.questions.length - Object.keys(answers).length} 题未作答
              </span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
