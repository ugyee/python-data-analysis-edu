import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { 
  Home, 
  BookOpen, 
  Code, 
  FileQuestion, 
  User, 
  LogIn, 
  ArrowLeft,
  Menu, 
  X 
} from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', icon: Home, label: '首页', active: location.pathname === '/' },
    { to: '/courses', icon: BookOpen, label: '课程', active: location.pathname.startsWith('/courses') || location.pathname.startsWith('/learn') },
    { to: '/practice', icon: Code, label: '练习', active: location.pathname.startsWith('/practice') },
    { to: '/quiz', icon: FileQuestion, label: '测评', active: location.pathname.startsWith('/quiz') },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-100/50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {!isHome && (
              <button
                onClick={() => navigate(-1)}
                className="p-2 text-soft-muted hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-soft-gradient flex items-center justify-center shadow-soft group-hover:shadow-soft-lg transition-all">
                <span className="text-white font-bold text-lg">Py</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-soft-text font-semibold text-lg">数据分析</span>
                <span className="text-soft-muted text-sm ml-1">学习平台</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    link.active
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-soft-muted hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-soft-text hover:text-primary-600 hover:bg-primary-50 transition-all"
                >
                  <User size={18} />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-soft-muted hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  退出
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-soft-gradient text-white font-medium shadow-soft hover:shadow-soft-lg transition-all"
              >
                <LogIn size={18} />
                <span>登录</span>
              </Link>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-soft-muted hover:text-primary-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-100/50">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    link.active
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-soft-muted hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 border-t border-primary-100/50">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-soft-text hover:bg-primary-50"
                  >
                    <User size={20} />
                    <span>{user?.name}</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-soft-muted hover:text-red-500"
                  >
                    退出登录
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-soft-gradient text-white"
                >
                  <LogIn size={20} />
                  <span>登录</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
