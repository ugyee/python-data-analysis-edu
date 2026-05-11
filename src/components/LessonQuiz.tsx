import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { QuizQuestion } from '@/types';

interface LessonQuizProps {
  questions: QuizQuestion[];
}

export function LessonQuiz({ questions }: LessonQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string | number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleAnswerChange = (questionId: string, answer: string | number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    const newResults: Record<string, boolean> = {};
    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      let isCorrect = false;
      
      if (q.type === 'choice') {
        isCorrect = userAnswer === q.correctAnswer;
      } else {
        isCorrect = String(userAnswer).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
      }
      
      newResults[q.id] = isCorrect;
    });
    setResults(newResults);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setResults({});
  };

  const correctCount = Object.values(results).filter(Boolean).length;
  const score = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="space-y-6">
      {submitted && (
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-primary-700">测验结果</h3>
              <p className="text-sm text-primary-600 mt-1">
                答对 {correctCount}/{questions.length} 题，得分：{score}分
              </p>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              score >= 80 ? 'bg-green-100' : score >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <span className={`text-2xl font-bold ${
                score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {score}
              </span>
            </div>
          </div>
          <div className="mt-3 h-2 bg-primary-200 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      )}

      {questions.map((question, index) => (
        <div 
          key={question.id}
          className={`bg-white rounded-xl p-5 shadow-soft ${
            submitted ? (results[question.id] ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500') : ''
          }`}
        >
          <div className="flex items-start gap-3 mb-4">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
              submitted 
                ? (results[question.id] ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
                : 'bg-primary-100 text-primary-700'
            }`}>
              {index + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  question.type === 'choice' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {question.type === 'choice' ? '选择题' : '实操题'}
                </span>
                {submitted && (
                  results[question.id] ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle size={14} />
                      正确
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-600 text-sm">
                      <XCircle size={14} />
                      错误
                    </span>
                  )
                )}
              </div>
              <p className="text-soft-text font-medium">{question.question}</p>
            </div>
          </div>

          {question.type === 'choice' && question.options && (
            <div className="space-y-3">
              {question.options.map((option, optIndex) => {
                const isSelected = answers[question.id] === optIndex;
                const isCorrect = optIndex === question.correctAnswer;
                const showResult = submitted;
                
                return (
                  <label 
                    key={optIndex}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                      showResult
                        ? isCorrect 
                          ? 'bg-green-50 border-2 border-green-300' 
                          : isSelected 
                            ? 'bg-red-50 border-2 border-red-300'
                            : 'bg-slate-50 border-2 border-transparent'
                        : isSelected
                          ? 'bg-primary-50 border-2 border-primary-300'
                          : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={optIndex}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(question.id, optIndex)}
                      disabled={submitted}
                      className="w-4 h-4 accent-primary-500"
                    />
                    <span className={`font-mono text-sm w-5 text-center ${
                      showResult && isCorrect ? 'text-green-600 font-bold' : 'text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + optIndex)}
                    </span>
                    <span className={showResult && isCorrect ? 'text-green-700 font-medium' : 'text-soft-text'}>
                      {option}
                    </span>
                    {showResult && isCorrect && (
                      <CheckCircle size={16} className="text-green-500 ml-auto" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle size={16} className="text-red-500 ml-auto" />
                    )}
                  </label>
                );
              })}
            </div>
          )}

          {question.type === 'practical' && (
            <div>
              <input
                type="text"
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                disabled={submitted}
                className={`w-full px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all ${
                  submitted
                    ? results[question.id]
                      ? 'border-green-300 bg-green-50'
                      : 'border-red-300 bg-red-50'
                    : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100'
                }`}
                placeholder="请输入答案..."
              />
              {submitted && (
                <div className={`mt-3 p-3 rounded-lg ${
                  results[question.id] ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  <p className={`text-sm font-medium ${
                    results[question.id] ? 'text-green-700' : 'text-red-700'
                  }`}>
                    正确答案：<code className="bg-white px-2 py-0.5 rounded">{question.correctAnswer}</code>
                  </p>
                </div>
              )}
            </div>
          )}

          {submitted && (
            <div className="mt-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <span className="font-medium">解析：</span>
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center gap-3 pt-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:shadow-lg transition-all"
          >
            提交答案
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-all"
          >
            <RefreshCw size={18} />
            重新答题
          </button>
        )}
      </div>
    </div>
  );
}
