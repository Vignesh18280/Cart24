import React from 'react'
import { Link } from 'react-router-dom';
import './Navbarr.css'

const Navbarr = () => {
  const da = localStorage.getItem('log');
  const data = JSON.parse(da);
  // const handleclick = () => {
  //   if(!data){
  //     window.location = '/Login'
  //   }
  // }
   const handlecss = () => {
      // if(document.querySelector('.def').style.visibility === 'hidden'){
      //   document.querySelector('.def').style.visibility = 'visible';
      // }else{
      //   document.querySelector('.def').style.visibility = 'hidden';
      // }

      let def = document.querySelector('.drops');
      def.classList.toggle('active');
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
            {data? <div>
              <div className='def' onClick={handlecss}><span>{data}</span></div>
              <div>
                <Link onClick={()=>{
                  localStorage.clear();
                  window.location.reload(false);
                }} className='drops'>Logout</Link>
              </div>
            </div>:
                <Link className='dec' to='/Login'style={{ textDecoration: 'none' , color : 'white'}} >Login</Link>
            }
        </div>
      </div>
    </div>
  )
}

export default Navbarr
