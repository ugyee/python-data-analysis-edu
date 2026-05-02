import { Link, useNavigate } from 'react-router-dom';
import { mockPractices } from '@/data/mockData';
import { Code, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

export function PracticeList() {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '入门';
      case 'intermediate':
        return '进阶';
      case 'advanced':
        return '高级';
      default:
        return difficulty;
    }
  };

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
            <h1 className="text-3xl font-bold text-soft-text mb-2">编程练习</h1>
            <p className="text-soft-muted">通过实践巩固所学知识，提升编程能力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPractices.map((practice) => (
              <Link
                key={practice.id}
                to={`/practice/${practice.id}`}
                className="group block bg-white rounded-3xl border border-slate-200/50 hover:border-orange-500/50 transition-all hover:shadow-soft p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Code className="text-white" size={24} />
                  </div>
                  {practice.completed && (
                    <CheckCircle className="text-green-400" size={20} />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-soft-text mb-2 group-hover:text-orange-500 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-soft-muted text-sm mb-4">{practice.category}</p>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      practice.difficulty
                    )}`}
                  >
                    {getDifficultyLabel(practice.difficulty)}
                  </span>
                  <div className="flex items-center gap-1 text-soft-muted text-sm">
                    <Clock size={14} />
                    <span>约15分钟</span>
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
