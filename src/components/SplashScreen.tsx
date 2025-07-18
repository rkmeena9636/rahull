import React from 'react';
import { Code } from 'lucide-react';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        <div className="absolute inset-0 animate-ping">
          <div className="w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="relative animate-bounce">
          <Code className="w-16 h-16 text-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;