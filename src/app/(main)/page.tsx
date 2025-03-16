'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const BIRTH_YEAR = 2003;  // 生まれた年を設定
  const BIRTH_MONTH = 12;    // 生まれた月を設定
  const BIRTH_DAY = 4;     // 生まれた日を設定

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    let currentAge = today.getFullYear() - BIRTH_YEAR;

    // 誕生日が来ていなければ1歳引く
    if (
      today.getMonth() + 1 < BIRTH_MONTH ||
      (today.getMonth() + 1 === BIRTH_MONTH && today.getDate() < BIRTH_DAY)
    ) {
      currentAge--;
    }

    setAge(currentAge);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      {/* 背景画像 */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gray-700">
        <Image
          src="/LiveT.jpg"
          layout="fill"
          objectFit="cover"
          alt="背景画像"
          className="opacity-70"
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative flex flex-col items-center mt-48">
        {/* プロフィール画像 */}
        <Image
          src="/x.jpg"
          width={120}
          height={120}
          alt="プロフィール画像"
          className="rounded-full shadow-lg border-4 border-gray-300"
        />

        {/* 名前と大学情報 */}
        <h1 className="text-3xl font-bold text-white mt-4">yuu</h1>
        <h2 className="text-lg text-gray-300">金沢工業大学 | KIT</h2>
        <p className="text-sm text-gray-400 mb-6">工学部・情報工学科</p>

        {/* 基本情報カード */}
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-2">基本情報</h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              <strong>年齢:</strong> {age}歳
            
              <strong>好きな分野:</strong> 
                <div className="flex flex-wrap gap-2 mt-2">
                  {["web", "mobile", "セキュリティ"].map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                        {tech}
                      </span>
                    ))}
                </div>
              <strong>好きな技術:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "TypeScript", "Prisma", "Python", "Flutter", "セキュリティ"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                      {tech}
                    </span>
                  ))}
                </div>
              <strong>好きなツール:</strong> 
                <div className="flex flex-wrap gap-2 mt-2">
                  {["canva", "Figma", "VSC"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                      {tech}
                    </span>
                  ))}
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
