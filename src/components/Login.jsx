import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios';
import Navbarr from './Navbarr';

const Login = () => {
  const [ Email , setEmail ] = useState("");
  const [ Password , setPassword ] = useState("");



  const handlesubmit = async(e) => {
        e.preventDefault();
        const data = {
           Email : Email,
           Password : Password
        }
        console.log(data);
        await axios.post(`http://localhost:8000/login/${1}`,data)
           .then((res)=> {
            if(res.status === 200 ){
              let val = Email;
              localStorage.setItem('log',JSON.stringify(val.slice(0,val.lastIndexOf('@'))));
              window.location = '/';
              console.log("correct password");
            } 
            else if ( res.status === 203 ){
              alert("Wrong Password");
            }
           });
  }

    return(
        <div className='whole'>
            <div class="container">
      <form action="#">
        <div class="title">Login</div>
        <div class="input-box underline">
          <input type="text" name='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" required='true'/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" name='Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Enter Your Password" required='true'/>
          <div class="underline"></div>
        </div>
        <div class="input-box button">
          <input type="submit" onClick={handlesubmit} name="" onClickvalue="Continue"/>
        </div>
      </form>
        <div class="option">or Connect With Social Media</div>
        <div class="twitter">
          <a href="#"><i class="fab fa-twitter"></i>Sign in With Google</a>
        </div>
        <div class="facebook">
          <a href="#"><i class="fab fa-facebook-f"></i>Sign in With Facebook</a>
        </div>
        <div class="option">Do not have an account?<Link to='/Signup' >Sign up</Link></div>
     </div>
    </div>
    )
}

export default Login;