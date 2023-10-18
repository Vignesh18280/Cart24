import React from 'react'
import { Link } from 'react-router-dom';
import './Navbarr.css'

const Navbarr = () => {
  const da = localStorage.getItem('log');
  const data = JSON.parse(da);
  const handleclick = () => {
    if(!data){
      window.location = '/Login'
    }
  }
  return (
    <div>
      <div className='nav'>
            <h1 className='logo'>Cart24</h1>
       <div className='Home' >
          <Link className = 'dec' to = '/' style={{ textDecoration: 'none' , color:'white'}} >Home</Link>
        </div>
        <div className='mycart' >
          <Link className = 'dec' to = '/' style={{ textDecoration: 'none' , color:'white'}} >MyCart</Link>
        </div>
        <div className='login' >
            <Link className='dec' to = '/Addproj' style={{ textDecoration: 'none' , color : 'white'}} >Addproj</Link>
        </div>
        <div className='login' >
            
            <Link className='dec' onClick={handleclick} style={{ textDecoration: 'none' , color : 'white'}} >{data?data:'Login'}</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbarr
