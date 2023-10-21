import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import './Cart.css';
import { useSelector } from "react-redux";

const details = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
      }
]

function Cart(params) {
    const arr = useSelector(data => data.CartSlice.products);
    const len = arr.length;
    let det = [];
    for( let i = 0 ; i < len ; i++ ){
      let check = true;
      for(let j= i+1 ; j < len ; j++){
           if(arr[i].title === arr[j].title){
            check = false;
           }
      }
      if(check === true) det.push(arr[i]);
    }
    return(
      <>
       <div className='whole'>
    {det.map((node)=>{
        return(
          <>
            {/* <Link to={`/${node._id}`}> */}
            <div className='card'>
            <img className = 'image' src={node.thumbnail} alt="" />
            <p className='title'>{node.title}</p>
            <p className='price'><span className='bld'>Price : </span>{node.price}</p>
            <p  className = 'rating' > <span className='bld'>Rating : </span>{node.rating}</p>
            {/* <p className='stock' ><span className='bld'>Stock : </span>{node.stock}</p>           */}
          </div>
          {/* </Link> */}
          </>
        )
    })}
    </div>
      </>
    );
}

export default Cart;