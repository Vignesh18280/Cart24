import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products : [
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
}

export const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        Addcart : ( state , action ) => {
            const det = {
                ids : nanoid,
                data : action.payload
            }
            console.log(det.data);
            state.products.push(...det.data)

        }
    }

})

export const {Addcart} = CartSlice.actions;

export default CartSlice.reducer;