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
        }
    }
});

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer