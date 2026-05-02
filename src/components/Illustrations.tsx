export function HeroIllustration() {
  return (
    <div className="relative w-full h-64 sm:h-80">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent-lavender/30 to-transparent" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md">
        <div className="relative">
          <div className="absolute -top-16 left-8 w-16 h-16 rounded-full bg-accent-yellow/40 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-12 right-12 w-10 h-10 rounded-full bg-accent-pink/30 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -top-8 left-1/3 w-12 h-12 rounded-full bg-primary-200/40 animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="flex justify-center items-end gap-4">
            <div className="relative">
              <div className="w-20 h-24 bg-gradient-to-b from-primary-300 to-primary-400 rounded-t-full relative">
                <div className="absolute top-8 left-3 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-8 right-3 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-soft-text rounded-full" />
                <div className="absolute top-12 left-1 w-3 h-2 bg-accent-pink/50 rounded-full" />
                <div className="absolute top-12 right-1 w-3 h-2 bg-accent-pink/50 rounded-full" />
              </div>
              <div className="w-24 h-10 bg-gradient-to-b from-primary-500 to-primary-600 rounded-2xl relative -top-1 -left-2 flex items-center justify-center">
                <div className="w-12 h-6 bg-primary-400/50 rounded-lg" />
              </div>
            </div>

            <div className="relative">
              <div className="w-24 h-28 bg-gradient-to-b from-accent-pink to-accent-orange rounded-t-full relative">
                <div className="absolute top-10 left-4 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-10 right-4 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-soft-text rounded-full" />
                <div className="absolute top-14 left-2 w-4 h-2 bg-accent-pink/50 rounded-full" />
                <div className="absolute top-14 right-2 w-4 h-2 bg-accent-pink/50 rounded-full" />
              </div>
              <div className="w-28 h-12 bg-gradient-to-b from-accent-yellow to-accent-orange rounded-2xl relative -top-1 -left-2 flex items-center justify-center">
                <div className="w-14 h-7 bg-accent-yellow/50 rounded-lg" />
              </div>
            </div>

            <div className="relative">
              <div className="w-20 h-24 bg-gradient-to-b from-accent-green to-accent-yellow rounded-t-full relative">
                <div className="absolute top-8 left-3 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-8 right-3 w-4 h-4 bg-white rounded-full">
                  <div className="absolute top-1 right-1 w-2 h-2 bg-soft-text rounded-full" />
                </div>
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-soft-text rounded-full" />
                <div className="absolute top-12 left-1 w-3 h-2 bg-accent-pink/50 rounded-full" />
                <div className="absolute top-12 right-1 w-3 h-2 bg-accent-pink/50 rounded-full" />
              </div>
              <div className="w-24 h-10 bg-gradient-to-b from-primary-500 to-primary-400 rounded-2xl relative -top-1 -left-2 flex items-center justify-center">
                <div className="w-12 h-6 bg-primary-400/50 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-16 h-20">
            <div className="w-8 h-10 bg-accent-orange rounded-t-full absolute top-0 left-1/2 -translate-x-1/2" />
            <div className="w-16 h-12 bg-accent-yellow rounded-2xl absolute top-8 left-0 shadow-lg">
              <div className="absolute top-2 left-2 w-12 h-8 bg-soft-card rounded">
                <div className="flex flex-wrap gap-1 p-1">
                  <div className="w-2 h-2 bg-primary-300 rounded-sm" />
                  <div className="w-2 h-2 bg-accent-pink rounded-sm" />
                  <div className="w-2 h-2 bg-accent-green rounded-sm" />
                  <div className="w-2 h-2 bg-accent-yellow rounded-sm" />
                  <div className="w-2 h-2 bg-primary-400 rounded-sm" />
                  <div className="w-2 h-2 bg-accent-orange rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 120" fill="none">
        <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 75C1200 70 1320 50 1380 40L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#mountain1)" />
        <path d="M0 120L60 110C120 100 240 80 360 90C480 100 600 130 720 130C840 130 960 100 1080 90C1200 80 1320 90 1380 95L1440 100V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#mountain2)" />
        <defs>
          <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="120">
            <stop offset="0%" stopColor="#C6B9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E8E4FF" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="120">
            <stop offset="0%" stopColor="#A8E6CF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E8E4FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function SpaceRocketIllustration() {
  return (
    <div className="relative w-full h-48">
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="w-32 h-40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-accent-orange" style={{ borderBottomWidth: '24px' }} />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-primary-300 to-primary-500 rounded-t-full">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent-sky rounded-full border-4 border-primary-200">
              <div className="absolute top-1 left-1 w-3 h-3 bg-white/50 rounded-full" />
            </div>
            <div className="absolute top-16 left-2 w-4 h-6 bg-accent-orange rounded-l-lg" />
            <div className="absolute top-16 right-2 w-4 h-6 bg-accent-orange rounded-r-lg" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-accent-orange to-accent-yellow rounded-b-lg">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-accent-yellow to-accent-pink rounded-b-2xl animate-pulse-soft" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-16 right-12 w-3 h-3 bg-accent-yellow rounded-full animate-float" style={{ animationDelay: '0.3s' }} />
      <div className="absolute top-20 left-16 w-2 h-2 bg-accent-pink rounded-full animate-float" style={{ animationDelay: '0.6s' }} />
      <div className="absolute top-12 right-8 w-3 h-3 bg-primary-300 rounded-full animate-float" style={{ animationDelay: '0.9s' }} />
    </div>
  );
}

export function SimpleCharacter() {
  return (
    <div className="relative w-20 h-24">
      <div className="w-16 h-18 bg-gradient-to-b from-primary-300 to-primary-400 rounded-t-full relative mx-auto">
        <div className="absolute top-6 left-2 w-3 h-3 bg-white rounded-full">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-soft-text rounded-full" />
        </div>
        <div className="absolute top-6 right-2 w-3 h-3 bg-white rounded-full">
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-soft-text rounded-full" />
        </div>
        <div className="absolute top-11 left-1/2 -translate-x-1/2 w-4 h-1.5 border-b border-soft-text rounded-full" />
        <div className="absolute top-9 left-0.5 w-2 h-1.5 bg-accent-pink/50 rounded-full" />
        <div className="absolute top-9 right-0.5 w-2 h-1.5 bg-accent-pink/50 rounded-full" />
      </div>
      <div className="w-20 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-xl relative -top-0.5 flex items-center justify-center">
        <div className="w-10 h-5 bg-primary-400/50 rounded-md" />
      </div>
    </div>
  );
}
