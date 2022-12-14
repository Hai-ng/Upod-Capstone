import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'

export default function Header(props) {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-opacity-40 bg-black relative w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to='/home' aria-label="Back to homepage" className="flex items-center p-2">
          <img src="https://cdn.dribbble.com/users/1183222/screenshots/4554095/media/ce21e7d4fd4ccb4cf37d16b3f7360bed.png?compress=1&resize=100x100" alt="logo" />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink to='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white">Home</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/contact' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white">Contact</NavLink>
          </li>
          <li className="flex">
            <NavLink to='/news' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white">News</NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button onClick={ () => {
            history.push('/login');
          }} className="self-center px-8 py-3 rounded text-white">Sign in</button>
          <button onClick={ () => {
            history.push('/register');
          }} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 text-white">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
