import React from 'react'
import {useSearchParams} from 'next/navigation'
import Link from 'next/link'

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams() 
    const genre = searchParams.get("genre")
  return (
    <div>
        <Link
        
         href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem