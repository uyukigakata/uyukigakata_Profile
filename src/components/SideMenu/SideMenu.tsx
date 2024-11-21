'use client';


import NavList from './NavList/NavList';  // ログインしている場合のメニュー



const SideMenu = () => {

  return (
    <div className='w-full bg-white text-black border-t border-gray-900 p-4 flex justify-around flex-row'>
     
      <NavList /> 
    </div>
  );
}

export default SideMenu;
