import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  let Links = [
    { name: 'Trang Chủ', link: '/' },
    { name: 'Khóa học', link: '/courses' },
    { name: 'Về Chúng Tôi', link: '/about-us' },
    { name: 'Liên Hệ', link: '/contact' }
  ]
  let [open, setOpen] = useState(false)
  return (
    <header className='shadow-md w-full fixed top-0 left-0 z-50'>
      <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
      text-gray-800'
        >
          <span className='w-28 mr-2'>
            <Link to={'/'}>
              <img src={logo} alt='logo' />
            </Link>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 font-medium hover:text-gray-400 duration-500'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <FaBars onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' />
      </nav>
    </header>
  )
}

export default Nav
