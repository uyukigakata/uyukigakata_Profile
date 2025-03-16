'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaPen } from 'react-icons/fa6';

const BlogPage = () => {
  const router = useRouter(); // useRouterのフックを使用

  const handlePenClick = () => {
    // ページ遷移
    router.push('/writeuserchoice');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
        <div className="absolute text-center">
          <p className="text-xl font-bold text-gray-800">あたらしく</p>
          <p className="text-3xl font-bold text-gray-800">書く</p>
          {/* ペンアイコンをクリックで状態遷移 */}
          <FaPen className="w-10 h-10 mx-auto mt-2 cursor-pointer" onClick={handlePenClick} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
