import { Achievement } from '@/types';

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'sm' | 'md' | 'lg';
}

export function AchievementBadge({ achievement, size = 'md' }: AchievementBadgeProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-2xl flex items-center justify-center transition-all ${
        achievement.unlocked
          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/50 shadow-lg shadow-amber-500/20'
          : 'bg-slate-800/50 border-2 border-slate-700/50 opacity-50 grayscale'
      }`}
    >
      <span className={achievement.unlocked ? '' : 'opacity-50'}>{achievement.icon}</span>
      {achievement.unlocked && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div
      className={`p-4 rounded-xl border transition-all ${
        achievement.unlocked
          ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
          : 'bg-slate-800/30 border-slate-700/30 opacity-60'
      }`}
    >
      <div className="flex items-center gap-4">
        <AchievementBadge achievement={achievement} />
        <div className="flex-1">
          <h4 className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-slate-400'}`}>
            {achievement.name}
          </h4>
          <p className="text-sm text-slate-500">{achievement.description}</p>
          {achievement.unlockedAt && (
            <p className="text-xs text-amber-400 mt-1">
              获得于 {new Date(achievement.unlockedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
