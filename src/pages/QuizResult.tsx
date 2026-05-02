import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { mockQuizDetails, mockQuizAnswers } from '@/data/mockData';
import { Trophy, CheckCircle, XCircle, RotateCcw, Home, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

export function QuizResult() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = mockQuizDetails[id || ''];
  const quizAnswers = mockQuizAnswers[id || ''];
  const answers = location.state?.answers || {};

  const result = useMemo(() => {
    if (!quiz || !quizAnswers) return null;

    let correctCount = 0;
    const results = quiz.questions.map((q) => {
      const userAnswer = answers[q.id] || '';
      const correctAnswer = quizAnswers[q.id]?.correctAnswer || '';
      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        question: q.question,
        correct: isCorrect,
        userAnswer,
        correctAnswer,
        explanation: quizAnswers[q.id]?.explanation || '',
      };
    });

    return {
      score: correctCount,
      total: quiz.questions.length,
      percentage: Math.round((correctCount / quiz.questions.length) * 100),
      results,
    };
  }, [quiz, quizAnswers, answers]);

  if (!quiz || !result) {
    return (
      <Layout>
        <div className="min-h-screen bg-soft-bg pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-soft-text mb-4">无法加载结果</h2>
            <button onClick={() => navigate(-1)} className="text-purple-500 hover:text-purple-600">
              返回测评列表
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const getScoreColor = () => {
    if (result.percentage >= 80) return 'text-green-500';
    if (result.percentage >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreMessage = () => {
    if (result.percentage === 100) return '太棒了！满分通过！';
    if (result.percentage >= 80) return '表现优秀！继续保持！';
    if (result.percentage >= 60) return '及格了，但还有提升空间';
    return '需要继续努力，加油！';
  };

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

          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Trophy className="text-white" size={40} />
            </div>
            <h1 className="text-3xl font-bold text-soft-text mb-2">测评完成</h1>
            <p className="text-soft-muted">{quiz.title}</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/50 p-6 sm:p-8 mb-8 shadow-soft">
            <div className="text-center mb-6">
              <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
                {result.score} / {result.total}
              </div>
              <div className="text-soft-muted">{result.percentage}% 正确率</div>
              <p className="text-soft-text mt-4">{getScoreMessage()}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-soft-bg rounded-2xl p-4">
                <div className="text-2xl font-bold text-soft-text">{result.total}</div>
                <div className="text-sm text-soft-muted">总题数</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-green-500">{result.score}</div>
                <div className="text-sm text-green-500/80">答对</div>
              </div>
              <div className="bg-red-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-red-500">{result.total - result.score}</div>
                <div className="text-sm text-red-500/80">答错</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-soft-text">答案解析</h2>
            {result.results.map((r, index) => (
              <div
                key={r.questionId}
                className={`bg-white rounded-2xl border p-4 ${
                  r.correct ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {r.correct ? (
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  ) : (
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  )}
                  <div>
                    <span className="text-sm text-soft-muted">第 {index + 1} 题</span>
                    <p className="text-soft-text">{r.question}</p>
                  </div>
                </div>
                
                <div className="ml-8 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-soft-muted">你的答案:</span>
                    <span className={r.correct ? 'text-green-500' : 'text-red-500'}>
                      {r.userAnswer || '未作答'}
                    </span>
                  </div>
                  {!r.correct && (
                    <div className="flex gap-2">
                      <span className="text-soft-muted">正确答案:</span>
                      <span className="text-green-500">{r.correctAnswer}</span>
                    </div>
                  )}
                  <div className="mt-2 p-3 bg-soft-bg rounded-xl">
                    <span className="text-soft-muted">解析: </span>
                    <span className="text-soft-text">{r.explanation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/quiz"
              className="flex items-center gap-2 px-6 py-2 text-soft-muted hover:text-soft-text transition-colors"
            >
              <Home size={18} />
              返回列表
            </Link>
            <Link
              to={`/quiz/${id}`}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md"
            >
              <RotateCcw size={18} />
              重新测评
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
