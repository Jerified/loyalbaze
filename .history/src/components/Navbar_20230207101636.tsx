import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className:>
        <NavbarItem title='trending' param="fetchTrending" />
        <NavbarItem title='Top rated' param="fetchTopRated" />
    </div>
  )
}

export default Navbar