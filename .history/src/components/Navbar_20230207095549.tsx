import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div>
        <NavbarItem title='trending' param="fetchTrending" />
        <NavbarItem title='trending' param="fetchTrending" />
    </div>
  )
}

export default Navbar