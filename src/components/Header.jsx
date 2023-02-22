import React, { useState, useEffect } from 'react'



function Header() {
  return (
    <div className='header absolute z-20 w-screen 
    fixed w-full bg-gray-800 text-white transition-transform duration-500 transform -translate-y-full' >
      <div className='relative'>
        <div className='sticky top-0 text-center w-full bg-slate-200 p-4  opacity-75 border-solid border-b-2 '>
          <h1 className='prata text-2xl text-slate-800 lg:text-6xl'>Juhee Manon Kang</h1>
        </div>
      </div>
    </div>)
}

export default Header
