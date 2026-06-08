import { CheckCircle2 } from 'lucide-react';

interface LearningProgressProps {
  completedLessons: number;
  totalLessons: number;
  currentLessonTitle: string;
}

export function LearningProgress({ completedLessons, totalLessons, currentLessonTitle }: LearningProgressProps) {
  const progress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-soft p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-green-500" />
          <span className="font-semibold text-soft-text">学习进度</span>
        </div>
        <span className="text-sm font-medium text-primary-600">
          {completedLessons} / {totalLessons} 课时
        </span>
      </div>
      
      <div className="relative h-3 bg-primary-100 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-soft-muted">当前: {currentLessonTitle}</span>
        <span className="text-sm font-semibold text-primary-600">{progress}%</span>
      </div>
    </div>
  );
}
