import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container bg-primary'> 
        <div className="container">
            <div className="nav-item">
                <div className="nav-brand">
                    <h1>Heng</h1>
                </div>
                <div className="nav-list-item">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar