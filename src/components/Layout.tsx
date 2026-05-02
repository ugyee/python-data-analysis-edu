import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { RightPanel } from './RightPanel';

interface LayoutProps {
  children: ReactNode;
  showRightPanel?: boolean;
}

export function Layout({ children, showRightPanel = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-soft-bg">
      <Sidebar />
      <main className="pt-16 min-h-screen">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showRightPanel ? 'lg:mr-80' : ''}`}>
          {children}
        </div>
      </main>
      {showRightPanel && <RightPanel />}
    </div>
  );
}
