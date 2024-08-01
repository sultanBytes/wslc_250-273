import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{
        name:'product 01',
        price: 1000,
    }
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        changeName:(state, action)=>{
            state.value = action.payload
            console.log(action.payload);
        }
    }
});

export const {changeName} = productSlice.actions;

export default productSlice.reducer