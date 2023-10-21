import React, { useState , useEffect} from 'react'
import './TotalView.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addcart } from '../Features/CartSlice';
import { Link } from 'react-router-dom';

function Totalview() {
    const id  = useParams();
    const dispatch = useDispatch();
    // console.log(id);
    // const details = [{
    //     "id": 1,
    //     "title": "iPhone 9",
    //     "description": "An apple mobile which is nothing like apple",
    //     "price": 549,
    //     "discountPercentage": 12.96,
    //     "rating": 4.69,
    //     "stock": 94,
    //     "brand": "Apple",
    //     "category": "smartphones",
    //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //   }]


      const [detail , setdetail] = useState([]);
      const getproducts = async() => {

        const res = await axios.get(`http://localhost:8000/products/${id.projid}`);
        //console.log(res.data);
        //console.log(typeof(res.data))
         //console.log(res.data);
          //const data = res.data;
          // setdetails(data.find(p=>p._id==id));
          //console.log(data.find(p=>p._id==id.projid));
          //const value = data.filter(p=>p._id===id.projid);
          //console.log(value);
          console.log(res.data);
          setdetail((det)=>[
            ...detail,...res.data
          ]);
          // console.log(detail);

          //console.log(detail)
      }

      const handleclick = async(e) => {
        e.preventDefault();
        dispatch(Addcart(detail));
        
      }
      useEffect(()=>{
        getproducts();
      },[])

    return(
        <div style={{padding : '0px 10px'}}>
          {detail.map((node)=>( 
             <>
             <div className='ph'>
             <img src={node.thumbnail} alt="product image" />
            </div>
            <div className='ph'>
            <h1 className='headin'>{node.title}</h1>
            </div>
            <div className='ph'>
               <p className='headin'>{node.description}</p>
            </div>
            <div className='dabba'>
                  <h1 className='headin'>Buy it & Have it</h1>
                  <h2 className='headin' style={{color : 'green'}}>Price : ${node.price}</h2>
                  <h2 className='headin' style={{color : 'yellow'}} >Rating : {node.rating}</h2>
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
            <div className='dab'>
                  <div className='buy'>
                         <h3>Buy</h3>
                  </div>
                  <Link onClick={handleclick}>
                  <div className='add' >
                       <h3>Add </h3>
                  </div>
                  </Link>
            </div>
             </>
           ))} 
        </div>
    );
}

export default Totalview;