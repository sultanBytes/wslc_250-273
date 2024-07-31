import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:'john wick'
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateName:(state, action)=>{

            state.value = action.payload
            console.log(state.value, action.payload);
        }
    }
});

export const {updateName} = userSlice.actions;
export default userSlice.reducer