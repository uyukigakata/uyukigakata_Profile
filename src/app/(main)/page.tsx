"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import profileData from "@/data/profile.json";

export default function Home() {
  const [age, setAge] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    const today = new Date();
    let currentAge = today.getFullYear() - profileData.birthYear;

    if (
      today.getMonth() + 1 < profileData.birthMonth ||
      (today.getMonth() + 1 === profileData.birthMonth && today.getDate() < profileData.birthDay)
    ) {
      currentAge--;
    }

    setAge(currentAge);
    
    // パーティクルの位置を生成（クライアントサイドでのみ）
    const generatedParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3 + 1}s`,
      duration: `${3 + Math.random() * 2}s`
    }));
    setParticles(generatedParticles);
    
    // ページロード後にアニメーションを開始
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-emerald-200 rounded-full opacity-20 animate-pulse transition-opacity duration-1000 ${
              isLoaded ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* プロフィール画像 */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse transition-opacity duration-1000 ${
              isLoaded ? 'opacity-20' : 'opacity-0'
            }`}></div>
            <Image
              className="rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
              src="/x.jpg"
              alt="プロフィール画像"
              fill
            />
          </div>
        </div>

        {/* 名前と大学情報 */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            {profileData.name}
          </h1>
          <p className="text-xl text-emerald-700 mb-2 font-semibold">
            {profileData.university}
          </p>
          <p className="text-lg text-emerald-600">
            {profileData.department}
          </p>
        </div>

        {/* 基本情報カード */}
        <div className={`glass-card rounded-3xl shadow-2xl p-8 transition-all duration-1000 delay-400 transform ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            基本情報
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 年齢 */}
            <div className={`bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-2xl transition-all duration-800 delay-600 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">年齢</h3>
              <p className="text-2xl font-bold text-emerald-600">{age}歳</p>
            </div>

            {/* 好きな分野 */}
            <div className={`bg-gradient-to-r from-teal-100 to-emerald-100 p-6 rounded-2xl transition-all duration-800 delay-700 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">好きな分野</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, index) => (
                  <span
                    key={index}
                    className={`bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 transform ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* 好きな技術 */}
            <div className={`bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-2xl transition-all duration-800 delay-800 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">好きな技術</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 transform ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Discord */}
            <div className={`bg-gradient-to-r from-teal-100 to-emerald-100 p-6 rounded-2xl transition-all duration-800 delay-900 transform ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">Contact</h3>
              <div className="space-y-2">
                {profileData.contact.map((contact, index) => (
                  <p
                    key={index}
                    className={`text-emerald-700 font-medium bg-white/50 px-3 py-2 rounded-lg transition-all duration-500 transform ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  >
                    {contact}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #059669, #0d9488);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
      `}</style>
    </div>
  );
}