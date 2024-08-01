import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.value.push(action.payload)
        },
        removeProduct:(state, action)=>{}
    }
});

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer