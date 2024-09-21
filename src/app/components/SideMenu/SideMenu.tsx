import React from 'react'
import NavList from './NavList/NavList'

const SideMenu = () => {

  return (
    <div className='w-full bg-white text-black border-t border-gray-900 p-4 flex justify-around flex-row'>
      {/* <h1 className="px-10 text-2xl font-bold">SideMenu</h1> */}
      <NavList />
    </div>
  )
}

export default SideMenu