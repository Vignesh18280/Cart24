import React from 'react'
import { Link } from 'react-router-dom';
import './Navbarr.css'

const Navbarr = () => {
  return (
    <div>
      <div className='nav'>
            <h1 className='logo'>Cart24</h1>
       <div className='Home' >
          <Link className = 'dec' to = '#' style={{ textDecoration: 'none'}} >Home</Link>
        </div>
        <div className='login' >
            <Link className='dec' to = '#' style={{ textDecoration: 'none'}} >login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbarr
