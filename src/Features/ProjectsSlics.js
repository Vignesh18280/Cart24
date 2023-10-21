import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Products from "../components/Products";


const initialState = {
    res : await axios.get('http://localhost:8000/products')
}

const adddata = async(product)=>{
        
    const res = await axios.post('http://localhost:8000/products',product);
    console.log(res.data);
}

export const ProjectsSlics = createSlice({
      name : Products,
      initialState,
      reducers : {
         AddProducts : ( state , action ) => {
            const product = {
                data : action.payload
            }
            
            console.log(initialState.res.data)
            console.log(product.data)
            const prod = initialState.res.data;
            if(prod.find(v=>v.title == product.data.title)){
                alert("The product Already Exists")
                
            }else{adddata(product.data);window.location='/';} 
        
        },

      }

})

export const {AddProducts} = ProjectsSlics.actions;

export default ProjectsSlics.reducer;