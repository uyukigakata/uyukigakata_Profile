'use client'

import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { useRouter } from 'next/navigation';
import React from 'react';


const WriteUserChoicePage = () => {
  const router = useRouter();

  // 書くボタンがクリックされた時のページ遷移
  const handleWriteClick = () => {
    router.push('/writing');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* ヘッダー部分 */}
      <div className="flex justify-between w-full px-4 py-2">
      </div>

      {/* あて先記入 */}
      <div className="bg-white text-gray-800 text-lg font-bold p-4 rounded-lg shadow-md mb-4">
        あて先記入
      </div>

      {/* 封筒の部分 */}
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-64 h-48">
        <p className="text-center text-gray-800">SELECT</p>
        <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
          
        </div>
      </div>
      <NavigationButton 
        label="書く" 
        targetPage="/writing" 
      />
    </div>
  );
};

export default WriteUserChoicePage;
