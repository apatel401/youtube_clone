import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null
  return isMenuOpen && (
    <div className='p-5 shadow-lg w-48'>
      <ul className='mb-4'>
      <Link to="/">
        <li>Home</li>
        </Link>
        <li>Live</li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <h2 className="text-lg font-semibold">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h2 className="text-lg font-semibold">Watch Later</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar