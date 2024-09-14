import React from 'react'
// import logo from './images/source/animal planet logo.jpg'
import "../styles/navbar.css"


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-wrapper'>
            <img src="./images/animal-planet-logo.jpg" alt="animal-planet-logo" width="80" />

            <ul className='nav-links'>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/">About us</a>
                </li>

                <li>
                    <a href="/">Get Involved</a>
                </li>

                <li>
                    <a href="/">Visit</a>
                </li>

                <li>
                    <a href="/">Wildlife</a>
                </li>
            </ul>
        </div>
        
        
        
    </div>
  )
}
