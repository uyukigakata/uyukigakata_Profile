// MainLayout.tsx
'use client'

import { useState, useEffect } from "react";
import NavList from "@/components/SideMenu/NavList/NavList";
import NavFooter from "@/components/SideMenu/NavFooter/NavFooter";

// ローディングアニメーションコンポーネント
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 flex items-center justify-center z-50">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-300 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-emerald-300 rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute inset-2 border-4 border-teal-300 rounded-full animate-spin border-t-transparent" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute inset-4 border-4 border-emerald-200 rounded-full animate-spin border-t-transparent"></div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          Portfolio
        </h1>
        <p className="text-emerald-200 text-lg animate-fade-in">
          読み込み中...
        </p>
        
        <div className="w-64 h-1 bg-emerald-800 rounded-full mx-auto mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full animate-loading-bar"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-loading-bar {
          animation: loading-bar 2.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* ヘッダー (ナビゲーションバー) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-emerald-200 shadow-lg">
        <NavList />
      </header>

      {/* メインコンテンツエリア */}
      <main className="pt-20 min-h-screen">
        {children}
      </main>

      {/* フッター */}
      <NavFooter />
      
      <style jsx global>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes card-appear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-card-appear {
          animation: card-appear 0.5s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #059669, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;