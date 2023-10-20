import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import axios from "axios";

function Signup(params) {
    const [Email,setEmail] = useState('');
    const [pass,setpass] = useState('');
    const [Npass,setNpass] = useState('');

    const handlesubmit = async(e) => {
        e.preventDefault();
        if( pass !== Npass ){
            alert("Password must match");
        }
        else if(pass.length<8){
            alert("Password must conatain atleast 8 characters");
        }
        else{
            const data = {
                Email : Email,
                Password : pass
            }
            console.log(data);
            await axios.post('http://localhost:8000/login',data)
            .then(res=>{
              if(res.status===203){
                alert("user already exist");
              }else{
                const val = Email;
                localStorage.setItem('log',JSON.stringify(val.slice(0,val.lastIndexOf('@'))));
                window.location = '/';
              }
            })
        }
    }
    return(
        <div className='whole'>
            <div class="container">
      <form action="#">
        <div class="title">Signup</div>
        <div class="input-box underline">
          <input type="text" name='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" required='true'/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" name='Password' value={pass} onChange={(e)=>setpass(e.target.value)}  placeholder="Create your Password" required='true'/>
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input type="password" name='Password' value={Npass} onChange={(e)=>setNpass(e.target.value)}  placeholder="Confirm Your Password" required='true'/>
          <div class="underline"></div>
        </div>
        <div class="input-box button"> 
          <input type="Submit" onClick={handlesubmit} name="Create" onClickvalue="Continue" />
        </div>
      </form>
        <div class="option">Already have an account?<Link to='/Login' >Login</Link></div>
     </div>
    </div>
    );
}

export default Signup;