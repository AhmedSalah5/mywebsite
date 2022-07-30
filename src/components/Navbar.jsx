import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [opened,setOpened] = useState(false)
  return (
    <div className='navbar'>
        <Link to='/' className='logo'><span>A.Salah</span>Frontend Developer</Link>
        <div className={opened?"top-links opened":"top-links"}>
            <Link onClick={()=>setOpened(false)} to="/">Home</Link>
            <Link onClick={()=>setOpened(false)} to="/about">About</Link>
            <Link onClick={()=>setOpened(false)} to="/portfolio">Portfolio</Link>
            <Link onClick={()=>setOpened(false)} to="/contact">Contact</Link>
        </div>
        <div className="toggler" onClick={()=>setOpened(!opened)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default Navbar