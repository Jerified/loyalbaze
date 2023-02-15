import React from 'react'
import {useSearchParams} from 'next/navigation'

const NavbarItem = () => {
    const searchParams = useSearchParams() 
    const genre = searchParams.get("")
  return (
    <div>

    </div>
  )
}

export default NavbarItem