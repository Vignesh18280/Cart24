import React from 'react'
import './Products.css'
import Slidesshow from './Slidesshow';
import axios from 'axios'
import { useEffect ,useState} from 'react';
// import {details} from './details';

const Products = () => {
  const [details,setdetails] = useState([]);
  const getproducts=async()=>{
      const res = await axios.get('http://localhost:8000/products');
      console.log(res.data);
      setdetails(res.data);
      
  }
  useEffect(()=>{
    getproducts();
  },[])
  return (
    <div className='whole'>
      <Slidesshow/>
    {details.map((node)=>{
        return(
      <div className='card'>
        <img className = 'image' src={node.thumbnail} alt="" />
        <p className='title'>{node.title}</p>
        <p className='price'><span className='bld'>Price : </span>{node.price}</p>
        <p  className = 'rating' > <span className='bld'>Rating : </span>{node.rating}</p>
        {/* <p className='stock' ><span className='bld'>Stock : </span>{node.stock}</p>           */}
      </div>
        )
    })}
    </div>
  )
}

export default Products
