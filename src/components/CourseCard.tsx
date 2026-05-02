import { Link } from 'react-router-dom';
import { Course } from '@/types';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const difficultyColors = {
  beginner: { bg: 'bg-accent-green/20', text: 'text-green-600', label: '入门' },
  intermediate: { bg: 'bg-accent-yellow/30', text: 'text-yellow-600', label: '进阶' },
  advanced: { bg: 'bg-accent-pink/30', text: 'text-pink-500', label: '高级' },
};

const categoryColors: Record<string, string> = {
  '数据处理': 'from-blue-400 to-purple-400',
  '数据分析': 'from-purple-400 to-pink-400',
  '数据挖掘': 'from-pink-400 to-orange-400',
  '数据可视化': 'from-cyan-400 to-blue-400',
  '机器学习': 'from-green-400 to-cyan-400',
};

export function CourseCard({ course }: CourseCardProps) {
  const difficultyStyle = difficultyColors[course.difficulty];
  const gradientClass = categoryColors[course.category] || 'from-purple-400 to-pink-400';

  return (
    <Link
      to={`/courses/${course.id}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-36 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyStyle.bg} ${difficultyStyle.text}`}>
            {difficultyStyle.label}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-soft-text mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
          {course.title}
        </h3>
        <p className="text-sm text-soft-muted mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between text-xs text-soft-muted">
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.totalLessons} 课时</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration} 分钟</span>
          </div>
        </div>
        
        <div className="flex items-center justify-end text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity mt-4">
          <span>查看详情</span>
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
