import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='logo'><span>A.Salah</span>Frontend Developer</Link>
        <div className="top-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar