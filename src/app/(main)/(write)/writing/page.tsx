import NavigationButton from '@/components/NavigationButton/NavigationButton';
import React from 'react';

const WritingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">手紙を書く</h1>
      <textarea
        className="w-3/4 h-64 p-4 border border-gray-300 rounded-lg"
        placeholder="ここに手紙を書く..."
      />
      <NavigationButton label='送信' targetPage='/'/>
    </div>
  );
};

export default WritingPage


