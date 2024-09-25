'use client';

import { useState, useEffect } from 'react';

import NavList from './NavList/NavList';  // ログインしている場合のメニュー
import LoginSideBar from './LoginSideBar/LoginSideBar';
import { supabase } from '@/utils/supabase/supabase';


const SideMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setIsLoggedIn(!!data.user);  // ログインしている場合は true にセット
    };

    checkUser();
  }, []);

  return (
    <div className='w-full bg-white text-black border-t border-gray-900 p-4 flex justify-around flex-row'>
      {/* ログイン状態に応じてサイドメニューを切り替える */}
      {isLoggedIn ? <NavList /> : <LoginSideBar />}
    </div>
  );
}

export default SideMenu;
