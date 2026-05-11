import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { useCourseStore } from '@/store/courseStore';
import { mockCourses } from '@/data/mockData';
import { User, BookOpen, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

export function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { userProgress } = useCourseStore();
  const [startLearningState, setStartLearningState] = useState({ disabled: false, text: '' });

  const handleStartLearning = () => {
    setStartLearningState({ disabled: true, text: '⏳ 加载中...' });
    setTimeout(() => {
      alert('课程环境启动中，首次稍慢');
    }, 2000);
    navigate('/');
  };

  const totalCompletedLessons = Object.values(userProgress).reduce(
    (acc, progress) => acc + progress.completedLessons.length,
    0
  );

  const recentCourses = mockCourses
    .filter((course) => userProgress[course.id]?.progress > 0)
    .slice(0, 3);

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen bg-soft-bg pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-soft-text mb-4">请先登录</h2>
            <Link to="/login" className="text-orange-400 hover:text-orange-300">
              前往登录
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-soft-bg pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-soft-muted hover:text-soft-text transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>返回</span>
          </button>

          <div className="bg-white rounded-3xl shadow-soft p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <User className="text-white" size={40} />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-2xl font-bold text-soft-text">{user.name}</h1>
                <p className="text-soft-muted">{user.email}</p>
                <p className="text-sm text-soft-muted mt-1">
                  加入于 {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-3xl shadow-soft p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <BookOpen className="text-blue-400" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-soft-text">{totalCompletedLessons}</div>
                  <div className="text-sm text-soft-muted">完成课时</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-soft p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Clock className="text-green-400" size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-soft-text">0</div>
                  <div className="text-sm text-soft-muted">学习天数</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-soft-text">最近学习</h2>
            </div>
            {recentCourses.length > 0 ? (
              <div className="space-y-3">
                {recentCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-3xl shadow-soft hover:border-orange-500/50 transition-colors group"
                  >
                    <img
                      src={course.coverImage}
                      alt={course.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-soft-text group-hover:text-orange-400 transition-colors truncate">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-primary-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                            style={{ width: `${userProgress[course.id]?.progress || 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-soft-muted">
                          {userProgress[course.id]?.progress || 0}%
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="text-soft-muted group-hover:text-orange-400" size={18} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-3xl shadow-soft text-center">
                <p className="text-soft-muted mb-4">还没有学习记录</p>
                <button
                  onClick={handleStartLearning}
                  disabled={startLearningState.disabled}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {startLearningState.text || '开始学习'}
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={logout}
              className="px-6 py-2 text-soft-muted hover:text-red-400 transition-colors"
            >
              退出登录
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
