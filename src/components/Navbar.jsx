import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, SetActive] = useState("");
  return (
    <nav
      className={`${styles.paddindx} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center 
    max-w-7xl mx-auto'>

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />

          <p className='text-white text-[18px] font-bold cursor-pointer '>Avinash 
            <span className='sm:block hidden'>| Javascript Mastery</span></p>
        </Link>
        <p className='text-red-500'>asdsa</p>
      </div>


    </nav>

  )
}

export default Navbar