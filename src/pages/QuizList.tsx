import { Link, useNavigate } from 'react-router-dom';
import { mockQuizzes } from '@/data/mockData';
import { FileQuestion, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

export function QuizList() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-soft-bg pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-soft-muted hover:text-soft-text mb-4 transition-colors"
            >
              <ArrowLeft size={20} />
              返回
            </button>
            <h1 className="text-3xl font-bold text-soft-text mb-2">在线测评</h1>
            <p className="text-soft-muted">检验学习成果，发现知识盲点</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="group block bg-white rounded-3xl border border-slate-200/50 hover:border-purple-400/50 transition-all hover:shadow-soft p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FileQuestion className="text-white" size={24} />
                  </div>
                  {quiz.completed && (
                    <CheckCircle className="text-green-400" size={20} />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-soft-text mb-2 group-hover:text-purple-500 transition-colors">
                  {quiz.title}
                </h3>
                <div className="flex items-center gap-4 text-soft-muted text-sm">
                  <div className="flex items-center gap-1">
                    <FileQuestion size={14} />
                    <span>{quiz.questionCount} 题</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{quiz.duration} 分钟</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
