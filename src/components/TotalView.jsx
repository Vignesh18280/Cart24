import React from 'react'
import './TotalView.css'

function Totalview() {
    const details = [{
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
      }]
    return(
        <div style={{padding : '0px 10px'}}>
           <div className='ph'>
            <img src={details[0].thumbnail} alt="product image" />
           </div>
           <div className='ph'>
           <h1 className='headin'>{details[0].title}</h1>
           </div>
           <div className='ph'>
              <p className='headin'>{details[0].description}</p>
           </div>
           <div className='dabba'>
                 <h1 className='headin'>Buy it & Have it</h1>
                 <h2 className='headin' style={{color : 'green'}}>Price : ${details[0].price}</h2>
                 <h2 className='headin' style={{color : 'yellow'}} >Rating : {details[0].rating}</h2>
           </div>
           <hr />
           <div>
               <ul style={{color:'white'}}>
                 <li>
                    <span className='bl'>Brand</span>: BoAt
                 </li>
                 <li>
                 <span className='bl'>Model Name</span>: Airdopes Atom 81
                 </li>
                 <li>
                 <span className='bl'>Colour</span> : Opal Black
                 </li>
                 <li>
                 <span className='bl'>Form Factor</span>: In Ear
                 </li>
                 <li>
                 <span className='bl'>Connectivity Technology</span>: Wireless
                 </li>
               </ul>
           </div>
           <div className='dabba'>
                 <div className='buy'>
                        <h3>Buy</h3>
                 </div>
                 <div className='add'>
                      <h3>Add </h3>
                 </div>
           </div>
        </div>
    );
}

export default Totalview;