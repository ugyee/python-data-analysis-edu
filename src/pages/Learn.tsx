import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourseDetails } from '@/data/mockData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, ChevronRight, Home, BookOpen, ArrowLeft, BookText, Code, Lightbulb, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { LessonQuiz } from '@/components/LessonQuiz';
import { LearningProgress } from '@/components/LearningProgress';
import { useState } from 'react';

export function Learn() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const course = mockCourseDetails[courseId || ''];
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!course) {
    return (
      <Layout showCodeRunner layoutType="learn">
        <div className="h-full overflow-y-auto bg-slate-900 rounded-2xl">
          <div className="p-4">
            <div className="flex items-center gap-2 text-slate-400 mb-4">
              <ArrowLeft size={16} />
              <span>课程不存在</span>
            </div>
          </div>
        </div>
        <div className="h-full overflow-y-auto bg-soft-bg rounded-2xl flex items-center justify-center">
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

  const allLessons = course.chapters.flatMap((ch) => ch.lessons);
  const currentLessonIndex = allLessons.findIndex((l) => l.id === lessonId);
  const currentLesson = allLessons[currentLessonIndex];
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const currentChapter = course.chapters.find((ch) =>
    ch.lessons.some((l) => l.id === lessonId)
  );

  if (!currentLesson) {
    return (
      <Layout showCodeRunner layoutType="learn">
        <aside className="h-full overflow-y-auto bg-slate-900 rounded-2xl">
          <div className="p-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={16} />
              返回
            </button>
            <h3 className="font-semibold text-white mb-4">{course.title}</h3>
          </div>
        </aside>
        <main className="h-full overflow-y-auto bg-soft-bg rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-soft-text mb-4">课时不存在</h2>
            <Link to={`/courses/${courseId}`} className="text-orange-400 hover:text-orange-300">
              返回课程详情
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderLessonContent = () => {
    const content = currentLesson.content || '';
    const sections = content.split(/(?=## .*)/g).filter(s => s.trim());
    
    return sections.map((section, index) => {
      const match = section.match(/^##\s+(.+)/);
      const sectionTitle = match ? match[1] : `章节 ${index + 1}`;
      const sectionContent = section.replace(/^##\s+.+\n/, '');
      
      const codeBlockMatch = sectionContent.match(/```python\n([\s\S]*?)```/);
      const hasCode = !!codeBlockMatch;
      
      return (
        <div key={index} className="mb-6">
          {/* 概念讲解卡片 */}
          <div className="bg-white rounded-2xl shadow-soft p-5 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <BookText size={20} className="text-primary-600" />
              <h2 className="text-lg font-semibold text-soft-text">{sectionTitle}</h2>
            </div>
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {sectionContent}
              </ReactMarkdown>
            </div>
            
            {/* 代码块单独展示 */}
            {hasCode && codeBlockMatch && (
              <div className="mt-4 bg-slate-900 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <button
                    onClick={() => handleCopyCode(codeBlockMatch[1], index)}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle size={14} className="text-green-400" />
                        <span className="text-green-400">已复制</span>
                      </>
                    ) : (
                      <>
                        <Code size={14} />
                        <span>复制代码</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{codeBlockMatch[1]}</code>
                </pre>
              </div>
            )}
          </div>

          {/* "试一试"练习区域 */}
          {currentLesson.practice && (
            <div className="bg-gradient-to-br from-primary-50 to-purple-50/30 rounded-2xl p-5 border border-primary-100">
              <div className="flex items-center gap-2 mb-4">
                <Code size={20} className="text-primary-600" />
                <h3 className="font-semibold text-soft-text">💻 试一试：{currentLesson.practice.title}</h3>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <Lightbulb size={14} className="text-primary-600" />
                  </span>
                  <span className="text-sm font-medium text-soft-muted">练习目标</span>
                </div>
                <p className="text-soft-text pl-8">{currentLesson.practice.description}</p>
              </div>

              <div className="bg-slate-900 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <button
                    onClick={() => handleCopyCode(currentLesson.practice.initialCode, index + 100)}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === index + 100 ? (
                      <>
                        <CheckCircle size={14} className="text-green-400" />
                        <span className="text-green-400">已复制</span>
                      </>
                    ) : (
                      <>
                        <Code size={14} />
                        <span>复制代码</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{currentLesson.practice.initialCode}</code>
                </pre>
              </div>

              <div className="bg-white rounded-xl p-4 border border-primary-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-soft-muted">📊 预期输出</span>
                </div>
                <pre className="text-sm text-soft-text bg-slate-50 rounded-lg p-3">
                  {currentLesson.practice.expectedOutput}
                </pre>
              </div>

              {currentLesson.practice.hints && currentLesson.practice.hints.length > 0 && (
                <div className="mt-4 bg-amber-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb size={16} className="text-amber-600" />
                    <span className="text-sm font-medium text-amber-700">💡 提示</span>
                  </div>
                  <ul className="text-sm text-amber-800 space-y-1 pl-6">
                    {currentLesson.practice.hints.map((hint, i) => (
                      <li key={i}>{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <Layout showCodeRunner layoutType="learn">
      {/* 左侧大纲 */}
      <aside className="h-full overflow-y-auto bg-slate-900 rounded-2xl">
        <div className="p-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={16} />
            返回
          </button>
          <h3 className="font-semibold text-white mb-4">{course.title}</h3>
          <div className="space-y-2">
            {course.chapters.map((chapter, chapterIndex) => (
              <div key={chapter.id}>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                  第{chapterIndex + 1}章 {chapter.title}
                </div>
                <div className="space-y-1 mb-4">
                  {chapter.lessons.map((lesson) => {
                    const isActive = lesson.id === lessonId;
                    return (
                      <Link
                        key={lesson.id}
                        to={`/learn/${courseId}/${lesson.id}`}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                          isActive
                            ? 'bg-orange-500/20 text-orange-400'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <BookOpen size={14} />
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* 中间内容 */}
      <main className="h-full overflow-y-auto bg-soft-bg rounded-2xl">
        <div className="p-5">
          {/* 面包屑导航 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-soft-muted mb-2 flex-wrap">
              <Link to="/" className="hover:text-soft-text transition-colors flex items-center gap-1">
                <Home size={14} />
                <span>首页</span>
              </Link>
              <ChevronRight size={14} />
              <Link to={`/courses/${courseId}`} className="hover:text-soft-text transition-colors">
                {course.title}
              </Link>
              <ChevronRight size={14} />
              <span className="text-soft-muted/60">{currentLesson.title}</span>
            </div>
            <h1 className="text-2xl font-bold text-soft-text">{currentLesson.title}</h1>
            {currentChapter && (
              <p className="text-soft-muted text-sm mt-1">{currentChapter.title}</p>
            )}
          </div>

          {/* 测验类型 */}
          {currentLesson.type === 'quiz' && course.quizQuestions ? (
            <div className="bg-white rounded-2xl shadow-soft p-5 mb-6">
              <LessonQuiz questions={course.quizQuestions} />
            </div>
          ) : (
            <>
              {/* 学习进度提示（固定在顶部） */}
              <LearningProgress
                completedLessons={currentLessonIndex + 1}
                totalLessons={allLessons.length}
                currentLessonTitle={currentLesson.title}
              />

              {/* 概念讲解 + 试一试练习（交替出现） */}
              {renderLessonContent()}
            </>
          )}

          {/* 底部导航按钮 */}
          <div className="flex items-center justify-between pt-4 border-t border-primary-100">
            <div>
              {prevLesson ? (
                <Link
                  to={`/learn/${courseId}/${prevLesson.id}`}
                  className="flex items-center gap-2 px-4 py-2 text-soft-muted hover:text-soft-text transition-colors"
                >
                  <ChevronLeft size={18} />
                  上一节
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="flex items-center gap-3">
              {nextLesson ? (
                <Link
                  to={`/learn/${courseId}/${nextLesson.id}`}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  下一节
                  <ChevronRight size={18} />
                </Link>
              ) : (
                <Link
                  to={`/courses/${courseId}`}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  完成课程
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
