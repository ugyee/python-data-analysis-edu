import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourseDetails } from '@/data/mockData';
import { useCourseStore } from '@/store/courseStore';
import { useAchievementStore } from '@/store/achievementStore';
import { useAuthStore } from '@/store/authStore';
import { Clock, BookOpen, Play, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';

export function CourseDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const course = mockCourseDetails[id || ''];
  const { userProgress, completeLesson } = useCourseStore();
  const { unlockAchievement, addPoints } = useAchievementStore();
  const { isAuthenticated } = useAuthStore();

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen bg-soft-bg pt-24 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-soft-text mb-4">课程不存在</h2>
            <Link to="/courses" className="text-orange-400 hover:text-orange-300">
              返回课程列表
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const progress = userProgress[id || ''] || { completedLessons: [], progress: 0 };
  const totalLessons = course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);

  const handleStartLearning = (lessonId: string) => {
    if (!isAuthenticated) return;
    
    const isFirstLesson = progress.completedLessons.length === 0;
    completeLesson(id || '', lessonId);
    
    if (isFirstLesson) {
      unlockAchievement('first-lesson');
      addPoints(10);
    }
  };

  const getNextLesson = () => {
    for (const chapter of course.chapters) {
      for (const lesson of chapter.lessons) {
        if (!progress.completedLessons.includes(lesson.id)) {
          return lesson;
        }
      }
    }
    return course.chapters[0]?.lessons[0];
  };

  const nextLesson = getNextLesson();

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                  <p className="text-white/80">{course.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-soft-muted">
                  <BookOpen size={18} />
                  <span>{totalLessons} 课时</span>
                </div>
                <div className="flex items-center gap-2 text-soft-muted">
                  <Clock size={18} />
                  <span>{course.duration} 分钟</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    course.difficulty === 'beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : course.difficulty === 'intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {course.difficulty === 'beginner' ? '入门' : course.difficulty === 'intermediate' ? '进阶' : '高级'}
                </span>
              </div>

              <div className="bg-white rounded-3xl shadow-soft p-6 mb-8">
                <h2 className="text-xl font-semibold text-soft-text mb-4">课程大纲</h2>
                <div className="space-y-4">
                  {course.chapters.map((chapter, chapterIndex) => (
                    <div key={chapter.id} className="border border-primary-100 rounded-2xl overflow-hidden">
                      <div className="bg-primary-50 px-4 py-3">
                        <h3 className="font-medium text-soft-text">
                          第{chapterIndex + 1}章：{chapter.title}
                        </h3>
                      </div>
                      <div className="divide-y divide-primary-100">
                        {chapter.lessons.map((lesson) => {
                          const isCompleted = progress.completedLessons.includes(lesson.id);
                          return (
                            <Link
                              key={lesson.id}
                              to={`/learn/${id}/${lesson.id}`}
                              onClick={() => handleStartLearning(lesson.id)}
                              className="flex items-center justify-between px-4 py-3 hover:bg-primary-50 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                {isCompleted ? (
                                  <CheckCircle size={18} className="text-green-400" />
                                ) : (
                                  <Play size={18} className="text-soft-muted group-hover:text-orange-400" />
                                )}
                                <span className={isCompleted ? 'text-soft-muted' : 'text-soft-text'}>
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-soft-muted">
                                <span className="text-sm">{lesson.duration}分钟</span>
                                <ChevronRight size={16} className="group-hover:text-orange-400" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-soft p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-soft-muted">学习进度</span>
                    <span className="text-orange-400 font-medium">{progress.progress}%</span>
                  </div>
                  <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all"
                      style={{ width: `${progress.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-soft-muted mt-2">
                    已完成 {progress.completedLessons.length} / {totalLessons} 课时
                  </p>
                </div>

                <Link
                  to={`/learn/${id}/${nextLesson?.id}`}
                  onClick={() => handleStartLearning(nextLesson?.id || '')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  <Play size={18} />
                  {progress.progress > 0 ? '继续学习' : '开始学习'}
                </Link>

                {!isAuthenticated && (
                  <p className="text-sm text-soft-muted text-center mt-4">
                    <Link to="/login" className="text-orange-400 hover:text-orange-300">
                      登录
                    </Link>
                    后可记录学习进度
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
