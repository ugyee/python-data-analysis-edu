import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Achievement, LeaderboardEntry } from '@/types';

interface AchievementState {
  achievements: Achievement[];
  points: number;
  leaderboard: LeaderboardEntry[];
  setAchievements: (achievements: Achievement[]) => void;
  addPoints: (points: number) => void;
  unlockAchievement: (achievementId: string) => void;
  setLeaderboard: (leaderboard: LeaderboardEntry[]) => void;
}

const ACHIEVEMENT_DEFINITIONS: Achievement[] = [
  {
    id: 'first-lesson',
    name: '初学者',
    description: '完成第一节课',
    icon: '🎯',
    unlocked: false,
  },
  {
    id: 'first-course',
    name: '课程达人',
    description: '完成第一个课程',
    icon: '📚',
    unlocked: false,
  },
  {
    id: 'first-practice',
    name: '动手实践',
    description: '完成第一个练习',
    icon: '💻',
    unlocked: false,
  },
  {
    id: 'first-quiz',
    name: '测验新手',
    description: '完成第一次测评',
    icon: '📝',
    unlocked: false,
  },
  {
    id: 'perfect-quiz',
    name: '满分达人',
    description: '测评获得满分',
    icon: '🏆',
    unlocked: false,
  },
  {
    id: 'streak-7',
    name: '坚持一周',
    description: '连续学习7天',
    icon: '🔥',
    unlocked: false,
  },
  {
    id: 'points-100',
    name: '积分新手',
    description: '获得100积分',
    icon: '⭐',
    unlocked: false,
  },
  {
    id: 'points-500',
    name: '积分达人',
    description: '获得500积分',
    icon: '🌟',
    unlocked: false,
  },
];

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set) => ({
      achievements: ACHIEVEMENT_DEFINITIONS,
      points: 0,
      leaderboard: [],
      setAchievements: (achievements) => set({ achievements }),
      addPoints: (points) =>
        set((state) => {
          const newPoints = state.points + points;
          return { points: newPoints };
        }),
      unlockAchievement: (achievementId) =>
        set((state) => {
          const achievements = state.achievements.map((a) =>
            a.id === achievementId
              ? { ...a, unlocked: true, unlockedAt: new Date().toISOString() }
              : a
          );
          return { achievements };
        }),
      setLeaderboard: (leaderboard) => set({ leaderboard }),
    }),
    {
      name: 'achievement-storage',
    }
  )
);
