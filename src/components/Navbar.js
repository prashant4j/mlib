import React from 'react'
import "./Navbar.css"
// import { MdAccessibility } from "react-icons/md";

const Navbar = () => {
    return (
        <>

            <div className='navbarr'>

                <span>Trending</span>
                <span>Movie</span>

                <span>
                    TV Series
                    {/* {<MdAccessibility />}  */} </span>
                <span>Search</span>
            </div>


        </>
    )
}

export default Navbar
