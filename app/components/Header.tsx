import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "../css/components/header.css"
import Logo from "../assets/shared/logo.svg"

export const Header = ({page}: {page: 'home' | 'destination' | 'crew' | 'technology'}) => {
  return (
    <header>
        <Image className="logo" src={Logo} alt="Logo"/>

        <div className='header-line'></div>

        <nav className='barlow-c'>
            <Link href={"/"} className={page === "home" ? "selected-page" : ""}><span className='nav-index'>01</span> HOME</Link>
            <Link href={"/destination"} className={page === "destination" ? "selected-page" : ""}><span className='nav-index'>02</span> DESTINATION</Link>
            <Link href={"/crew"} className={page === "crew" ? "selected-page" : ""}><span className='nav-index'>03</span> CREW</Link>
            <Link href={"/technology"} className={page === "technology" ? "selected-page" : ""}><span className='nav-index'>04</span> TECHNOLOGY</Link>
        </nav>
    </header>
  )
}
