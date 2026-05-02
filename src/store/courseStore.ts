import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Course, CourseDetail, UserProgress } from '@/types';

interface CourseState {
  courses: Course[];
  currentCourse: CourseDetail | null;
  userProgress: Record<string, UserProgress>;
  setCourses: (courses: Course[]) => void;
  setCurrentCourse: (course: CourseDetail | null) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  getProgress: (courseId: string) => UserProgress;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      courses: [],
      currentCourse: null,
      userProgress: {},
      setCourses: (courses) => set({ courses }),
      setCurrentCourse: (course) => set({ currentCourse: course }),
      completeLesson: (courseId, lessonId) =>
        set((state) => {
          const current = state.userProgress[courseId] || {
            completedLessons: [],
            progress: 0,
          };
          if (current.completedLessons.includes(lessonId)) {
            return state;
          }
          const completedLessons = [...current.completedLessons, lessonId];
          const course = state.courses.find((c) => c.id === courseId);
          const progress = course
            ? Math.round((completedLessons.length / course.totalLessons) * 100)
            : 0;
          return {
            userProgress: {
              ...state.userProgress,
              [courseId]: { completedLessons, progress },
            },
          };
        }),
      getProgress: (courseId) => {
        return get().userProgress[courseId] || { completedLessons: [], progress: 0 };
      },
    }),
    {
      name: 'course-storage',
    }
  )
);
