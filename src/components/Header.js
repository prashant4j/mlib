import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
const Header = () => {
    return (
        <>

            <div>
                <span className='header'>🎬🎥Movie Library 🎞</span>
            </div>
            <div >

                {/* <Navigation /> */}
                <ul className='flex items-center bottomnav'>
                    <li className='ml-6'><Link to="/">Trending</Link></li>
                    <li className='ml-6'> <Link to="/movie">Movies</Link></li>
                    <li className='ml-6'> <Link to="/search">Search</Link></li>
                    <li className='ml-6'> <Link to="/series">Series</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header
