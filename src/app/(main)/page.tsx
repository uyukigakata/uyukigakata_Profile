"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import profileData from "@/data/profile.json";

export default function Home() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    let currentAge = today.getFullYear() - profileData.birthYear;

    // 誕生日が来ていなければ1歳引く
    if (
      today.getMonth() + 1 < profileData.birthMonth ||
      (today.getMonth() + 1 === profileData.birthMonth && today.getDate() < profileData.birthDay)
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
          fill
          style ={{ objectFit: 'cover' }}
          alt="Description"
          className="opacity-70"
          priority
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
        <h1 className="text-3xl font-bold text-white mt-4">{profileData.name}</h1>
        <h2 className="text-lg text-gray-300">{profileData.university}</h2>
        <p className="text-sm text-gray-400 mb-6">{profileData.department}</p>

        {/* 基本情報カード */}
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-2">基本情報</h2>
          <ul className="text-gray-300 space-y-2">
            <li>
              <strong>年齢:</strong> {age}歳
            </li>
            <li>
              <strong>好きな分野:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.interests.map((interest) => (
                  <span key={interest} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                    {interest}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <strong>好きな技術:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <strong>好きなツール:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                    {tool}
                  </span>
                ))}
              </div>
            </li>
            <li>
              <strong>Discorde:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.contact.map((contact) => (
                  <span key={contact} className="px-4 py-2 bg-gray-700 text-white rounded-full shadow">
                    {contact}
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
