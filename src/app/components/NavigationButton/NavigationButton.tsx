import React from 'react';
import { useRouter } from 'next/router';

interface NavigationButtonProps {
  label: string;
  targetPage: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ label, targetPage }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(targetPage);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg"
    >
      {label}
    </button>
  );
};

export default NavigationButton;
