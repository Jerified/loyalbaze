import React from 'react'
import {useSearchParams} from 'next/navigation'
import Link from 'next/link'

const NavbarItem = () => {
    const searchParams = useSearchParams() 
    const genre = searchParams.get("genre")
  return (
    <div>
        <Link href={`/`}>
        </Link>
    </div>
  )
}

export default NavbarItem