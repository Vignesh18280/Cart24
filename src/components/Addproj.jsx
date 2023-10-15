import React from 'react'
import './Addproj.css'
import { useState } from 'react';
import {details} from './details';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const detail = JSON.stringify(details);

function Addproj() {
    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');
    const [price,setprice] = useState('');
    const [rating,setrating] = useState('');
    const [thumbnail,setthumbnail] = useState('');
    const [details,setdetails] = useState(detail);
    
    let handlesubmit = async(e) =>{
          e.preventDefault();
        const data = {
            title : title,
            description : description,
            price : price,
            rating : rating,
            thumbnail : thumbnail
        }

        console.log(data);
        const res = await axios.get('http://localhost:8000/products');
        const product = res.data;
        if(product.find(v=>v.title == data.title)){
            alert("The product Already Exists")
            
        }else{adddata(data);window.location='/'}


        // setdetails([...details,data]);
        // const modi = JSON.stringify(details);
        // console.log(modi);
    } 
    
    const adddata = async(data)=>{
        
         const res = await axios.post('http://localhost:8000/products',data);
         console.log(res.data);
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

                <button onClick={handlesubmit} className='a'  >
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