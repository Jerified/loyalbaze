import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:'>
        <NavbarItem title='trending' param="fetchTrending" />
        <NavbarItem title='Top rated' param="fetchTopRated" />
    </div>
  )
}

export default Navbar