import React from 'react'
import './Addproj.css'
import { useState } from 'react';

function Addproj() {
    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');
    const [price,setprice] = useState('');
    const [rating,setrating] = useState('');
    const [thumbnail,setthumbnail] = useState('');

    let handlesubmit = async(e) =>{
        e.preventDefault();
        console.log(title);
    }
    return(
        <div>
            <div class="login-box">
            <h2>Add project</h2>
            <form>
                <div class="user-box">
                <input type="text" name="title" value={title} onChange={(e)=>{settitle(e.target.value)}} required=""/>
                <label>title</label>
                </div>
                <div class="user-box">
                <input type="text" name="" value={description} onChange={(e)=>{setdescription(e.target.value)}} required=""/>
                <label>description</label>
                </div>
                <div class="user-box">
                <input type="text" name="" value={price} onChange={(e)=>{setprice(e.target.value)}} required=""/>
                <label>price</label>
                </div>
                <div class="user-box">
                <input type="text" name="" value={rating} onChange={(e)=>{setrating(e.target.value)}} required=""/>
                <label>rating</label>
                </div>
                <div class="user-box">
                <input type="text" name="" value={thumbnail} onChange={(e)=>{setthumbnail(e.target.value)}} required=""/>
                <label>thumbnail</label>
                </div>

                <button onSubmit={handlesubmit} className='a' type='submit' >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ADD
                </button>
            </form>
            </div>
        </div>
    );
}

export default Addproj;